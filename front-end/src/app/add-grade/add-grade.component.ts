import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Emitters } from '../emitters/emitters';

@Component({
  selector: 'app-add-grade',
  templateUrl: './add-grade.component.html',
  styleUrls: ['./add-grade.component.css', '../login/login.component.css']
})
export class AddGradeComponent {
  subjects = [
    { "name": "Math" },
    { "name": "English" },
    { "name": "Biology" },
    { "name": "Chemistry" },
    { "name": "Romanian" },
  ]
  form!: FormGroup

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
  ) { }
  ngOnInit() {
    this.http.get('http://localhost:3000/users/getUser', { withCredentials: true }).subscribe(
      (res: any) => {
        Emitters.authEmitter.emit(true)
      },
      (err: any) => {
        Emitters.authEmitter.emit(false)
        this.router.navigateByUrl('/login')
      })
    this.form = this.fb.group({
      studentId: [''],
      gradeValue: [''],
      gradeSubject: [''],
    });
  }

  onSubmit() {
    const { studentId, gradeValue, gradeSubject } = this.form.value;
    const gradeData = {
      grade: gradeValue,
      subject: gradeSubject,
    }
    this.http.post(`http://localhost:3000/students/${studentId}/add-grade`, gradeData)
      .subscribe(
        (res: any) => {
          this.router.navigate(['/grades']);
        },
        (err: any) => {
          console.error('Error adding grade:', err);
        }
      );
  }
}
