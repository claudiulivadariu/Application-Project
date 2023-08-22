import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Emitters } from '../emitters/emitters';

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css', '../login/login.component.css']
})
export class DeleteStudentComponent {
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
      studentId: 0 
    });
  }

  onSubmit(studentId: number) {
    this.http.delete(`http://localhost:3000/students/delete/${studentId}`)
    .subscribe(
      () => {
        console.log('Student deleted successfully');
        this.router.navigate(['/home']);
      },
      (error: any) => {
        console.error('Error deleting student', error);
      }
    );
  }
}
