package com.revature.controller;

import java.util.List;

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
	
	@PostMapping
	public ResponseEntity<User> addUser(@RequestBody User user) {
		userService.addUser(user);
		return ResponseEntity.status(HttpStatus.CREATED).build();
	}
}
