import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Emitters } from '../emitters/emitters';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  students: any = []
  displayedColumns: string[] = ['id', 'name', 'highschool', 'class'];
  message = ''

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/users/getUser', { withCredentials: true }).subscribe(
      (res: any) => {
        this.message = 'Welcome ' + res.username
        Emitters.authEmitter.emit(true)
      },
      (err: any) => {
        this.message = 'You are not logged in'
        Emitters.authEmitter.emit(false)
        this.router.navigateByUrl('/login')
      })
    this.getStudents()
  }
  getStudents() {
    this.http.get('http://localhost:3000/students/getStudents').subscribe((res: any) => {
      this.students = res
    }
    );
  }
}
