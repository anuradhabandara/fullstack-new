import { Injectable } from '@angular/core';
import { Student } from './types/student';
import { STUDENTS } from './providers/mock-students';

import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class StudentService {

 private studentUrl = 'api/students'; 
 private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

 	create(name: string): Promise<Student> {
	  return this.http
	    .post(this.studentUrl, JSON.stringify({name: name}), {headers: this.headers})
	    .toPromise()
	    .then(res => res.json().data as Student)
	    .catch(this.handleError);
	}

  update(student: Student): Promise<Student> {
	  const url = `${this.studentUrl}/${student.id}`;
	  return this.http
	    .put(url, JSON.stringify(student), {headers: this.headers})
	    .toPromise()
	    .then(() => student)
	    .catch(this.handleError);
	}

	delete(id: number): Promise<void> {
	  const url = `${this.studentUrl}/${id}`;
	  return this.http.delete(url, {headers: this.headers})
	    .toPromise()
	    .then(() => null)
	    .catch(this.handleError);
	}

  getStudentsByUrl(): Promise<Student[]> {
    return this.http.get(this.studentUrl)
               .toPromise()
               .then(response => response.json().data as Student[])
               .catch(this.handleError);
  }

  getStudents(): Promise<Student[]> {
    return Promise.resolve(STUDENTS);
  }

  getStudent(id: number): Promise<Student> {
	    const url = `${this.studentUrl}/${id}`;
	  return this.http.get(url)
	    .toPromise()
	    .then(response => response.json().data as Student)
	    .catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    return Promise.reject(error.message || error);
  }
}