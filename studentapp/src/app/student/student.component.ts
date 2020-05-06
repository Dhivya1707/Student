import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentService } from '../student.service';
import { Data } from '../data';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  public response: Observable<any[]>;
  listStudents: Data[];
  constructor(public service: StudentService, private http: HttpClient) {

  }

  ngOnInit(): void {

  }
  getStu() {
    this.service.getStudent().subscribe(
      data => {
        this.listStudents = data;
        console.log(data);
      }
    );
  }
  post(): void {
    this.http.post('http://localhost:3000/student', {
      studentId: "104",
      studentName: "akila",
      studentGrade: "First",
      address: "adcd",
      phn: "62356",
      course: "eee"
    })
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured in yur program");
        }
      );
  }

  put(): void {
    this.http.put('http://localhost:3000/student/104',
      {
        studentId: "104",
        studentName: "akilandeswari",
        studentGrade: "First",
        address: "adcd",
        phn: "62356",
        course: "mech"

      }
    )
      .subscribe(
        res => {
          console.log(res);
        }
      );
  }

  delete(): void {
    this.http.delete('http://localhost:3000/student/104').subscribe(data => {
      console.log(data);
    });
  }

}




