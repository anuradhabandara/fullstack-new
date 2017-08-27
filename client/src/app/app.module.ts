import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { StudentDetailComponent } from './student-detail.component';
import {StudentComponent} from './student.component';
import {StudentService} from './student-service';
import {StudentDashboardComponent} from './student-dashboard.component';
import { AppRoutingModule }     from './app-routing.module';

//use for mocking back end at the moment
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './providers/in-memory-data.service';

@NgModule({
  imports:      [ BrowserModule , FormsModule ,AppRoutingModule ,HttpModule ,InMemoryWebApiModule.forRoot(InMemoryDataService),],
  declarations: [ AppComponent , StudentDetailComponent,StudentComponent , StudentDashboardComponent],
  providers:[StudentService],
  bootstrap:    [ AppComponent ]
  
})
export class AppModule { }
