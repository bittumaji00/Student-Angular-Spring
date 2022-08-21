import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {




 // baseUrl:string = "http://localhost:3000/student"
 baseUrl:string = "http://localhost:8080/api/v1/students"

  constructor(private http:HttpClient) { }



    addStudent(studentData:Student){

      console.log("service" +studentData)

       return    this.http.post(this.baseUrl+"/add",studentData);


    }



    getAllStudents():Observable<Student[]>{

      return  this.http.get<Student[]>(this.baseUrl+"/getAll");


    }

    deleteStudent(id:number){
      
      return this.http.delete(this.baseUrl+"/deleteStudent/"+id)
    }

    updateStudent(student:Student){
      return this.http.put(this.baseUrl+"/updateStudent",student);
    }

    getStudentById(id:number){
      return this.http.get<Student>(this.baseUrl+"/get-student/"+id)
    }

    updateStatus(student:Student){
      return this.http.put(this.baseUrl+"/updateStatus",student)
    }


}
