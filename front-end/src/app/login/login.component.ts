import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
  ) { }
  ngOnInit() {
    this.form = this.fb.group({
      username: [''],
      password: [''],
    });
  }
  onSubmit() {
    this.http.post('http://localhost:3000/users/login', this.form.value, { withCredentials: true }).subscribe((res: any) => {
      if (res.message === 'Success') {
        this.router.navigateByUrl('/home');
      }
    }
    );
  }
}