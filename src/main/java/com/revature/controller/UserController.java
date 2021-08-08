package com.revature.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.revature.models.User;
import com.revature.services.UserService;

@RestController
@RequestMapping(value="user")
@CrossOrigin
public class UserController {
	private UserService userService;
	
	public UserController(UserService userService) {
		super();
		this.userService = userService;
	}
	
	@GetMapping()
	public List<User> findAllUsers() {
		System.out.println("I run findAllUsers");
		return userService.findAllUsers();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<User> findUser(@PathVariable("id") int id) {
		User foundUser = userService.findById(id);
		
		if (foundUser==null) {
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		}
		
		return ResponseEntity.status(HttpStatus.OK).body(foundUser);
	}
	
	//Register
	@PostMapping
	public ResponseEntity<User> addUser(@RequestBody User user) {
		System.out.println("got post request adduser");
		
		int workload = 12;
		String salt = BCrypt.gensalt(workload);
		String hashedPassword = BCrypt.hashpw(user.getUserPassword(), salt);
		
		user.setUserPassword(hashedPassword);
		
		userService.addUser(user);
		return ResponseEntity.status(HttpStatus.CREATED).build();
	}
	
	//Login
	@PostMapping("/login")
	public ResponseEntity<User> validateUser(@RequestBody User userInput, HttpServletRequest request) {
		System.out.println("Check1");
		String passwordInput = userInput.getUserPassword();
		System.out.println("userInput email is: " + userInput.getUserEmail());
		System.out.println("userInput email is: " + userInput.getUserPassword());
		
		System.out.println("Check2");
		User foundUser = userService.findByEmail(userInput.getUserEmail());
		
		System.out.println("Check3");
		if (foundUser==null) {
			System.out.println("Can't find user.");
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		}
		
		//compare password
		boolean passwordVerified = false;
		passwordVerified = BCrypt.checkpw(passwordInput, foundUser.getUserPassword());
		
		if (passwordVerified == false) {
			System.out.println("Wrong password");
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		}
		
		HttpSession session = request.getSession();
		session.setAttribute("userID", foundUser.getUserId());
		session.setAttribute("userEmail", foundUser.getUserEmail());
		session.setAttribute("username", foundUser.getUsername());
		System.out.println("I got session ID: " + session.getAttribute("userID"));
		System.out.println("User is logged in. Username is: " + session.getAttribute("username"));
		System.out.println("User is logged in. Email is: " + session.getAttribute("userEmail"));
		
		return ResponseEntity.status(HttpStatus.CREATED).build();
	}
}
