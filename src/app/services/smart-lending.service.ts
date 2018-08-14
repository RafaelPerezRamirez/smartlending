import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class SmartLendingService {
    token:string = "Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiNyIsInVzZXJuYW1lIjoicy5yYWZhZWwucGVyZXouckBnbWFpbC5jb20iLCJuYW1lIjoiIiwibGFzdF9uYW1lIjoiIiwiZW1haWwiOiIiLCJjcmVhdGVkIjoxNTM0MjAyNzYyLCJleHAiOjE1MzQyNDU5NjJ9.F4hyWXfQWOrhtyK2-S2Kwe8EJrV8AH00mlaUTM4jHjk";
    baseUrl:string = "http://35.190.145.161:9001/schoolsystem/api/v1";
    constructor( private http:HttpClient ) { }
    /**
        * Get student list from a service
        * @return  {array}
    */
    getStudents = ()=>{
        const headers = new HttpHeaders({
            'Authorization': this.token,
        });
        let url = `${this.baseUrl}/students/`;
        return this.http.get(url, { headers } ).map( response=>{
            return response;
        })
    }
    /**
        * Get student detail
        * @param  {number}
        * @return  {object}
    */
    getStudent = ( idStudent )=>{
        const headers = new HttpHeaders({
            'Authorization': this.token,
        });
        let url = `${this.baseUrl}/students/${idStudent}`;
        return this.http.get(url, { headers } ).map( response=>{
            return response;
        })
    }
    /**
        * Create a new student in a service
        * @param  {object}
        * @return  {object}
    */
    newStudent = ( student )=>{
        let body = JSON.stringify( student );
        const headers = new HttpHeaders({
            'Content-Type':'application/json',
            'Authorization': this.token,
        })
        let url = `${this.baseUrl}/students/`;
        return this.http.post(url, body, { headers }).map( response=>{
            return response;
        })
    }
    /**
        * Update a student from a service
        * @param  {object}
        * @param  {number}
        * @return {object}
    */
    updateStudent = (student, studentId)=>{
        let body = JSON.stringify( student );
        const headers = new HttpHeaders({
            'Content-Type':'application/json',
            'Authorization': this.token,
        })
        let url = `${this.baseUrl}/students/${studentId}`;
        return this.http.put(url, body, { headers }).map( response=>{
            return response;
        })
    }
    /**
        * Delete a student from a service
        * @param  {number}
        * @return  {empty}
    */
    deleteStudent = ( studentId )=>{
        const headers = new HttpHeaders({
            'Authorization': this.token,
        });
        let url = `${this.baseUrl}/students/${studentId}`;
        return this.http.delete(url, { headers } ).map( response=>{
            return response;
        });
    }
    /**
        * Get a courses list
        * @return  {array}
    */
    getCourses = ()=>{
        const headers = new HttpHeaders({
            'Authorization': this.token,
        });
        let url = `${this.baseUrl}/courses/`;
        return this.http.get(url, { headers } ).map( response=>{
            return response;
        })
    }

}
