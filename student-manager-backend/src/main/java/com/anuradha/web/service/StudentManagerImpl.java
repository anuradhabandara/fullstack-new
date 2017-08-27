package com.anuradha.web.service;

import java.util.List;
 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.anuradha.web.dao.StudentDAO;
import com.anuradha.web.models.Student;

 
 
@Service
public class StudentManagerImpl implements StudentManager {
 
    @Autowired
    StudentDAO dao;
     
    public List<Student> getStudentList() 
    {
        return dao.getStudentList();
    }


}
