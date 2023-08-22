import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Emitters } from '../emitters/emitters';
import { Router } from '@angular/router';


@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css', '../home/home.component.css']
})
export class GradesComponent {
  grades: any = []
  displayedColumns: string[] = ['id', 'subject', 'student', 'studentHighschool', 'gradeValue'];

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/users/getUser', { withCredentials: true }).subscribe(
      (res: any) => {
        Emitters.authEmitter.emit(true)
      },
      (err: any) => {
        Emitters.authEmitter.emit(false)
        this.router.navigateByUrl('/login')
      })
    this.getGrades()
  }

  getGrades() {
    this.http.get('http://localhost:3000/grades/getGrades').subscribe((res: any) => {
      this.grades = res
    }
    );
  }
}
