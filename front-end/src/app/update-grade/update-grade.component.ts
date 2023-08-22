import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Emitters } from '../emitters/emitters';

@Component({
  selector: 'app-update-grade',
  templateUrl: './update-grade.component.html',
  styleUrls: ['./update-grade.component.css', '../login/login.component.css']
})
export class UpdateGradeComponent {
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
      gradeId: [''],
      gradeValue: [''],
    });
  }

  onSubmit() {
    const { gradeId, gradeValue } = this.form.value;
    this.http.patch(`http://localhost:3000/grades/${gradeId}/update`, { gradeValue })
      .subscribe(
        (res: any) => {
          console.log('Grade updated successfully:', res);
          this.router.navigate(['/grades']);
        },
        (error: any) => {
          console.error('Error updating grade:', error);
        }
      );
  }
}
