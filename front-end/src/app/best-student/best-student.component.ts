import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Emitters } from '../emitters/emitters';


@Component({
  selector: 'app-best-student',
  templateUrl: './best-student.component.html',
  styleUrls: ['./best-student.component.css', '../home/home.component.css', '../login/login.component.css']
})
export class BestStudentComponent {
  form!: FormGroup
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
  ) { }
  displayedColumns: string[] = ['studentName', 'highSchoolName', 'grade'];
  subjects = ["Math", "English", "Romanian"]
  students: any[] = []
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
      subject: ['Math'],
    });

    this.fetchStudentInfo('Math');

    if (this.form && this.form.get('subject')) {
      this.form.get('subject')!.valueChanges.subscribe((selectedSubject) => {
        this.fetchStudentInfo(selectedSubject);
      });
    }
  }

  fetchStudentInfo(selectedSubject: string) {
    const subject = selectedSubject
    this.http.post(`http://localhost:3000/highschools/best-student`, {subject}).subscribe((res: any) => {
      this.students = res
      console.log(res)
    })
  }
}
