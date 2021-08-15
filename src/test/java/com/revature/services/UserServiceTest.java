package com.revature.services;

import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import com.revature.repos.UserDAO;

public class UserServiceTest {
	public static UserService userService;
	public static UserDAO userDAO;
	
	public static int userID;
	
	@BeforeAll
	public static void setUserService() {
		//userService = new UserService(userDAO);
	}
	
	@BeforeEach
	public void setLoginDetails() {
		userID = 0;
	}
	
//	@Test
//	public void testFindUser() {
//		System.out.println("Testing FindUserByID");
//		
//		//expected result
//		
//		assertTrue(userService.findById(userID) != null);
//	}
}
