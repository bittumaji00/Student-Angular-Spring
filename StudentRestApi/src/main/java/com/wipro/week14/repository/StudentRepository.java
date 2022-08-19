package com.wipro.week14.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wipro.week14.entity.Student;


@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {

}
