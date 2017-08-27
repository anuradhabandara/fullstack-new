package com.anuradha.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import com.anuradha.web.service.StudentManagerImpl;

@Controller
public class StudentController {
	@Autowired
	StudentManagerImpl studentManager;
		
	@RequestMapping(value="/getStudents", method = RequestMethod.GET)
	public @ResponseBody String getStudentInJSON() {
		
		return studentManager.getStudentList().toString();

	}

}