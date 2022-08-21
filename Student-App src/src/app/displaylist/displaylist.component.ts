import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-displaylist',
  templateUrl: './displaylist.component.html',
  styleUrls: ['./displaylist.component.css']
})
export class DisplaylistComponent implements OnInit {


  students:Student[] = [];

    
  constructor(private service:StudentService ,private router:Router) { }


  ngOnInit(): void {

    this.service.getAllStudents().subscribe( studentList =>  {

      console.log(studentList);

        studentList.forEach( data => { 

            console.log(data);

            this.students.push(data);

        });
        
    });


  }

  updateStudent(id:number){
    this.router.navigate(['update-student',id]);
  }

  updateStatus(student:Student){
    this.service.updateStatus(student).subscribe(res =>{
      alert("Student approved")
    },
    (err)=> alert("could not approve"+err))
  }

  deleteStudent(id:number){
    alert("The id will be deleted"+id)
    this.service.deleteStudent(id).subscribe(res=>{
      alert("Student Deleted")
      
    },
    err=>{
      alert("Somthing wrong inside delete")
      console.log(err)

    }

    )
  }

}
