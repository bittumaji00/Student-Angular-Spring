package com.wipro.week14.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.wipro.week14.dto.StudentDTO;
import com.wipro.week14.entity.Student;
import com.wipro.week14.service.StudentService;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/api/v1/students")
public class StudentRestController {
	
	@Autowired
	private StudentService service;
	
	@PostMapping("/add")
	
	public Student addStudent(@RequestBody StudentDTO dto) {
		
		Student student = null;
		boolean isValid= service.validStudent(dto);
		if(isValid) {
			student=service.addStudent(dto);
		}
		return student;
		
		
	}
	@GetMapping("/getAll")
	public List<Student> getAllStudents(){
		return service.getAllStudents();
	}
	
	@DeleteMapping("/deleteStudent/{id}")
	public void deleteStudent(@PathVariable long id) {
		service.deleteStudent(id);
	}
	
	@PutMapping("/updateStudent")
	@CrossOrigin("http://localhost:4200")
	public Student updateStudent(@RequestBody Student student) {
		return service.updateStudent(student);
	}
	
	@GetMapping("get-student/{id}")
	public Student getStudentById(@PathVariable long id) {
		return service.getStudentById(id);
	}
	
	@PutMapping("/updateStatus")
	public Student updateStatus(@RequestBody Student student) {
		return service.updateStatus(student);
	}

}
