import { Component, OnInit } from '@angular/core';
import { SmartLendingService } from '../../services/smart-lending.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.css']
})
export class NewStudentComponent implements OnInit {
    new:boolean = false;
    id:string;

    newStudent:any = {
        first_name: "",
        last_name: "",
        last_name_second: "",
        email: "",
        phone: "",
        birth_date: "",
    }
    constructor( private _smartLendingService:SmartLendingService, private _router:Router,
    private activated:ActivatedRoute ) {
        this.activated.params.subscribe( parametros=>{
            this.id=parametros['id'];
            if(this.id !== "new"){
                this._smartLendingService.getStudent(this.id).subscribe( response=>{
                    this.newStudent = response;
                })
            }
        })
    }
    ngOnInit() {
    }
    guardar(){
        if(this.id == "new"){
            this._smartLendingService.newStudent(this.newStudent).subscribe( response =>{
                console.log(response);
                this._router.navigate(['/students']);
            },error=>{
                console.error(error);
            })
        }else{
            this._smartLendingService.updateStudent(this.newStudent,this.id).subscribe( response =>{
                console.log(response);
                this._router.navigate(['/students']);
            },error=>{
                console.error(error);
            })
        }
    }
}
