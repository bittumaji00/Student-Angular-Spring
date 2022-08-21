import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';
import { Student } from '../student'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[StudentService]
})
export class LoginComponent implements OnInit {

  

  constructor(private service:StudentService ,private router:Router) { }

  ngOnInit(): void {
  }

    uname:string = "";
    pwd:string =  "";



  studentLogin(){

        

        this.service.getAllStudents().subscribe( studentList =>  {

          console.log(studentList);

            studentList.forEach( data => { 

                console.log(data);

             console.log("uname "+this.uname)

          if(data.uname == this.uname && data.password == this.pwd){

              alert("Login Succesful!")

               console.log("login success")

           

                this.router.navigate(['/dashboard/',this.uname]);

             }
             
            else{

                console.log("Invalid Credentials, Enter valid data")

            }

          });

  });  
        

  }

}
