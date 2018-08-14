import { Component, OnInit } from '@angular/core';
import { SmartLendingService } from '../../services/smart-lending.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
    courses:any;
    constructor( private _smartLendingService:SmartLendingService ) { }
    ngOnInit() {
        this._smartLendingService.getCourses().subscribe(response=>{
            this.courses = response;
        })
    }

}
