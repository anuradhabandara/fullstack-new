import { Component , OnInit } from '@angular/core';
import {Student} from './types/student';
import {StudentService} from './student-service';

@Component({
	selector:'student-dashboard',
	templateUrl:'./student-dashboard.component.html'
})

export class StudentDashboardComponent implements OnInit {
	
	students : Student[] = [];
	constructor(private studentService: StudentService){}

	getNewStudents():void{
		this.studentService.getStudents().then(students => this.students = students.slice(1,4));
	}

	ngOnInit():void {
		this.getNewStudents();
	}
}