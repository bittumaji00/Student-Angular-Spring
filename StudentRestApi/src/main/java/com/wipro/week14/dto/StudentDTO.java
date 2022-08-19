package com.wipro.week14.dto;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class StudentDTO {
	
	
	private long id;
	private String uname;
	private String password;
	private String email;
	private String gender;
	private LocalDate dob;
	private String course;
	private long phone;
	private String status;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getUname() {
		return uname;
	}
	public void setUname(String uname) {
		this.uname = uname;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public LocalDate getDob() {
		return dob;
	}
	public void setDob(LocalDate dob) {
		this.dob = dob;
	}
	public String getCourse() {
		return course;
	}
	public void setCourse(String course) {
		this.course = course;
	}
	public long getPhone() {
		return phone;
	}
	public void setPhone(long phone) {
		this.phone = phone;
	}
	
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public StudentDTO(long id, String uname, String password, String email, String gender, LocalDate dob, String course,
			long phone, String status) {
		super();
		this.id = id;
		this.uname = uname;
		this.password = password;
		this.email = email;
		this.gender = gender;
		this.dob = dob;
		this.course = course;
		this.phone = phone;
		this.status=status;
	}
	public StudentDTO() {
		super();
	}
	
	

}

