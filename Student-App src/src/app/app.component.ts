import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from './student';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  title = 'student-app';

  uname:any;

  constructor(private activateRoute:ActivatedRoute){

    
  }


  ngOnInit(): void {
  this.activateRoute.paramMap.subscribe(

      params => {
     this.uname =  params.get('uname');

      }

  )
  }

  

  }

  





