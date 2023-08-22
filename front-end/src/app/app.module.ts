import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { AddStudentComponent } from './add-student/add-student.component';
import { MatSelectModule } from '@angular/material/select';
import { DeleteStudentComponent } from './delete-student/delete-student.component';
import { AddGradeComponent } from './add-grade/add-grade.component';
import { GradesComponent } from './grades/grades.component';
import { UpdateGradeComponent } from './update-grade/update-grade.component';
import { BestStudentComponent } from './best-student/best-student.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
    AddStudentComponent,
    DeleteStudentComponent,
    AddGradeComponent,
    GradesComponent,
    UpdateGradeComponent,
    BestStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FormsModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule,
    MatMenuModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
