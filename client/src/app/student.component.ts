import { Component , OnInit} from '@angular/core';
import {StudentDetailComponent} from './student-detail.component';
import {Student} from './types/student';
import {StudentService} from './student-service';
import { Router } from '@angular/router';

@Component({
  selector: 'students-list',
  templateUrl : './student.component.html',
  providers:[StudentService]
})
export class StudentComponent implements OnInit {
	
	selectedStudent : Student;
	students : Student[];

	constructor(  private router: Router, private studentService: StudentService){}

	getStudents():void{
		this.studentService.getStudents().then(students => this.students = students);
	}

	ngOnInit():void {
		this.getStudents();
	}
	onSelect(student:Student):void{
		
		this.selectedStudent = student;
	}

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedStudent.id]);
  }

   add(name: string): void {
	  name = name.trim();
	  if (!name) { return; }
	  this.studentService.create(name)
	    .then(student => {
	      this.students.push(student);
	      this.selectedStudent = null;
	    });
	}

	delete(student: Student): void {
	  this.studentService
	      .delete(student.id)
	      .then(() => {
	        this.students = this.students.filter(h => h !== student);
	        if (this.selectedStudent === student) { this.selectedStudent = null; }
	      });
	}

}
