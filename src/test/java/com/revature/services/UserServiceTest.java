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
		
	}
	
	@BeforeEach
	public void setLoginDetails() {
		userID = 6;
	}
	
//	@Test
//	public void testFindUser() {
//		System.out.println("Testing FindUserByID");
//		System.out.println("userID is " + userID);
//		//expected result
//		System.out.println(userService.findById(userID));
//		//Asking if userService.findById(userID) != null) will return a null. If not null then it's true, and the test case is passed.
//		assertTrue(userService.findById(userID) != null);
//	}
}
