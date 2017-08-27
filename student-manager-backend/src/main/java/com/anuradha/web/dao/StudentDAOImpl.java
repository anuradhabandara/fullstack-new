package com.anuradha.web.dao;
import java.util.ArrayList;
import java.util.List;
 
import org.springframework.stereotype.Repository;

import com.anuradha.web.models.Student;
 
@Repository
public class StudentDAOImpl implements StudentDAO {
 
    public List<Student> getStudentList() 
    {
        List<Student> students = new ArrayList<Student>();
         
		Student studentAnuradha = new Student();
		studentAnuradha.setName("Anuradha");   
		studentAnuradha.setId(10);
		
		students.add(studentAnuradha);
		
		Student studentBandara = new Student();
		studentBandara.setName("Bandara");   
		studentBandara.setId(10);
		
		students.add(studentBandara);
        return students;
    }
}