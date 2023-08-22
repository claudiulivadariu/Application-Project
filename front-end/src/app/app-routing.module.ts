import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { DeleteStudentComponent } from './delete-student/delete-student.component';
import { AddGradeComponent } from './add-grade/add-grade.component';
import { GradesComponent } from './grades/grades.component';
import { UpdateGradeComponent } from './update-grade/update-grade.component';
import { BestStudentComponent } from './best-student/best-student.component';

const routes: Routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent},
  { path: 'add-student', component: AddStudentComponent},
  { path: 'delete-student', component: DeleteStudentComponent},
  { path: 'add-grade', component: AddGradeComponent},
  { path: 'grades', component: GradesComponent},
  { path: 'update-grade', component: UpdateGradeComponent},
  { path: 'best-student', component: BestStudentComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
