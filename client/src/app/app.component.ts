import { Component} from '@angular/core';
import { RouterModule }   from '@angular/router';



@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
   		<a routerLink="/studentdashboard">Student dashboard</a>
   		<a routerLink="/students">Students</a>
   </nav>
   <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = "Student management system"
}