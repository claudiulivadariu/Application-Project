import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css', '../login/login.component.css'],
})
export class RegistrationComponent implements OnInit{
  form!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
    ) {}
  ngOnInit() {
    this.form = this.fb.group({
      username: [''],
      password: [''],
    });
  }
  onSubmit() {
    this.http.post('http://localhost:3000/users/register', this.form.value).subscribe(() => {
      this.router.navigateByUrl('/login');      
    });
  }
}