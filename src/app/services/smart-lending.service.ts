import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class SmartLendingService {
    token:string = "Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiNyIsInVzZXJuYW1lIjoicy5yYWZhZWwucGVyZXouckBnbWFpbC5jb20iLCJuYW1lIjoiIiwibGFzdF9uYW1lIjoiIiwiZW1haWwiOiIiLCJjcmVhdGVkIjoxNTM0MjAyNzYyLCJleHAiOjE1MzQyNDU5NjJ9.F4hyWXfQWOrhtyK2-S2Kwe8EJrV8AH00mlaUTM4jHjk";
    constructor( private http:HttpClient ) { }

    getStudents = ()=>{
        const headers = new HttpHeaders({
            'Authorization': this.token,
        });
        let url = "http://35.190.145.161:9001/schoolsystem/api/v1/students/";
        return this.http.get(url, { headers } ).map( response=>{
            return response;
        })
    }

    getStudent = ( idStudent )=>{
        const headers = new HttpHeaders({
            'Authorization': this.token,
        });
        let url = `http://35.190.145.161:9001/schoolsystem/api/v1/students/${idStudent}`;
        return this.http.get(url, { headers } ).map( response=>{
            return response;
        })
    }

    newStudent = (student)=>{
        let body = JSON.stringify( student );
        const headers = new HttpHeaders({
            'Content-Type':'application/json',
            'Authorization': this.token,
        })
        let url = "http://35.190.145.161:9001/schoolsystem/api/v1/students/";
        return this.http.post(url, body, { headers }).map( response=>{
            return response;
        })
    }

    updateStudent = (student, studentId)=>{
        let body = JSON.stringify( student );
        const headers = new HttpHeaders({
            'Content-Type':'application/json',
            'Authorization': this.token,
        })
        let url = `http://35.190.145.161:9001/schoolsystem/api/v1/students/${studentId}`;
        return this.http.put(url, body, { headers }).map( response=>{
            return response;
        })
    }

    deleteStudent = ( studentId ):Observable<any>=>{
        const headers = new HttpHeaders({
            'Authorization': this.token,
        });
        let url = `http://35.190.145.161:9001/schoolsystem/api/v1/students/${studentId}`;
        return this.http.delete(url, { headers } ).map( response=>{
            return response;
        });
    }

    getCourses = ()=>{
        const headers = new HttpHeaders({
            'Authorization': this.token,
        });
        let url = "http://35.190.145.161:9001/schoolsystem/api/v1/courses/";
        return this.http.get(url, { headers } ).map( response=>{
            return response;
        })
    }

}
