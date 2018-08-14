import { Component, OnInit } from '@angular/core';
import { SmartLendingService } from '../../services/smart-lending.service';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
    students:any;
    constructor( private _smartLendingService:SmartLendingService ) { }
    ngOnInit() {
        this._smartLendingService.getStudents().subscribe(response=>{
            this.students = response;
        })
    }
    delete(studentId){
        this._smartLendingService.deleteStudent(studentId).subscribe(response=>{
            this._smartLendingService.getStudents().subscribe(response=>{
                this.students = response;
            })
        })
    }
}
