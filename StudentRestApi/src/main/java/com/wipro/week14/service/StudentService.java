package com.wipro.week14.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wipro.week14.dto.StudentDTO;
import com.wipro.week14.entity.Student;
import com.wipro.week14.repository.StudentRepository;

@Service
public class StudentService {
	
	@Autowired
	private StudentRepository repo;
	
	public Student addStudent(StudentDTO studentDto) {
		 Student student=new Student();
		 student.setUname(studentDto.getUname());
		 student.setPassword(studentDto.getPassword());
		 student.setGender(studentDto.getGender());
		 student.setEmail(studentDto.getEmail());
		 student.setDob(studentDto.getDob());
		 student.setCourse(studentDto.getCourse());
		 student.setPhone(studentDto.getPhone());
		 student.setStatus("pending");
		 return repo.save(student);
	}
	
	public List<Student> getAllStudents() {
		return repo.findAll();
	}
	
	public static boolean validStudent(StudentDTO dto) {
		
		boolean flag=false;
		if(dto.getUname()!=null && dto.getPassword()!=null) {
			 
			flag= true;
			
		}
		return flag;
	}
	
	public void deleteStudent(long id) {
		repo.deleteById(id);
	}
	
	public Student updateStudent(Student student) {
		long id=student.getId();
		Student std = repo.findById(id).orElse(student);
		std.setUname(student.getUname());
		 std.setPassword(student.getPassword());
		 std.setGender(student.getGender());
		 std.setEmail(student.getEmail());
		 std.setDob(student.getDob());
		 std.setCourse(student.getCourse());
		 std.setPhone(student.getPhone());
		return repo.save(std);
		
	}
	
	public Student getStudentById(long id) {
		return repo.findById(id).get();
	}
	
	public Student updateStatus(Student student) {
		long id = student.getId();
		Student std=repo.findById(id).orElse(student);
		std.setStatus("approved");
		return repo.save(std);
	}

}
