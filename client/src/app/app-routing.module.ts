import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentDetailComponent } from './student-detail.component';
import {StudentComponent} from './student.component';
import {StudentDashboardComponent} from './student-dashboard.component';




const routes: Routes = [
  { path: '', redirectTo: '/studentdashboard', pathMatch: 'full' },
  { path: 'studentdashboard',  component: StudentDashboardComponent },
  { path: 'detail/:id', component: StudentDetailComponent },
  { path: 'students',     component: StudentComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}