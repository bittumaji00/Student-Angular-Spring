import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  studentToUpdate:Student = {
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

  id:any=0;

  constructor(private service:StudentService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id')

    this.service.getStudentById(this.id).subscribe(res=>{
      this.studentToUpdate=res;
      alert(this.studentToUpdate.uname)
    })
    



  }
editStudent(data:Student){
  this.studentToUpdate=data
  this.studentToUpdate.id=this.id
  alert(this.studentToUpdate.id)
  this.service.updateStudent(this.studentToUpdate).subscribe(res=>{
    alert("Data updated")

  },
  (err) =>{

    alert("could not update")


  }
  )
  
}

}
