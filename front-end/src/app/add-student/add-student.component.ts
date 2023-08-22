import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Emitters } from '../emitters/emitters';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css', '../login/login.component.css']
})
export class AddStudentComponent {
  form!: FormGroup
  highSchools: any[] = []
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
      studentName: [''],
      studentClass: [''],
      studentHighSchool: [''],
    });
    this.loadHighSchools()
  }

  loadHighSchools() {
    this.http.get('http://localhost:3000/highschools').subscribe((res: any) => {
      this.highSchools = res
    })
  }

  onSubmit(highSchoolName: string) {
    const formData = this.form.value;
    const studentData = {
      name: formData.studentName,
      class: formData.studentClass,
    };

    this.http.post(`http://localhost:3000/highschools/${highSchoolName}/add-student`, studentData)
      .subscribe(
        (response: any) => {
          console.log('Student added successfully', response);
          this.router.navigate(['/home']);
        },
        (error: any) => {
          console.error('Error adding student', error);
        }
      );
  }
}
