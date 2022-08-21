import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[StudentService]
})
export class RegisterComponent implements OnInit {

  student:Student = {
    id:0,
    uname: '',
    password: '',
    dob: new Date(),
    gender: '',
    email: '',
    phone: 0,
    course: '',
    status:''
  };

    id:any;

  constructor(private service:StudentService ,private router:Router) { }

  ngOnInit(): void {
  }

  userRegistration(data:any){


    this.student = data;

        alert(this.student);

        console.log(this.student)
      

    this.service.addStudent(this.student).subscribe(data=>{
      
                                                  console.log("subscribe",data);
                                                 
                                                  if(data !=null){

                                                      alert("User Register Successfully!")

                                              this.router.navigate(['/'])

                                                  }

                                                  else{

                                                    alert("Registration failed! Try Again..")

                                                   

                                                  }

                                                
                                                });

                                           


  }


}
