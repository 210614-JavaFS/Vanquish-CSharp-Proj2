package com.revature.controller;

import java.util.Arrays;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.hibernate.internal.build.AllowSysOut;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.revature.models.User;
import com.revature.services.UserService;

@RestController
@RequestMapping(value="user")
@CrossOrigin("http://localhost:3000")
public class UserController {
//	Logger log = LoggerFactory.getLogger(UserController.class);
	private UserService userService;
	
	public HttpSession session;
	
	public UserController(UserService userService) {
		super();
		this.userService = userService;
	}
	
//	@Bean
//    CorsConfigurationSource corsConfigurationSource() {
//        CorsConfiguration cors = new CorsConfiguration();
//        cors.setAllowedMethods(Arrays.asList("POST", "GET", "PUT", "HEAD", "DELETE"));
//        UrlBasedCorsConfigurationSource source = new
//                UrlBasedCorsConfigurationSource();
//        source.registerCorsConfiguration("/**", cors.applyPermitDefaultValues());
//        return source;
//    }
	

	
	
	@GetMapping("/")
	public ResponseEntity<User> returnSession(HttpSession mySession) {
		User currentUser = new User();
		
		
		System.out.println(mySession.getAttribute("username"));
		
		currentUser.setUsername(mySession.getAttribute("username").toString());
		System.out.println("got normal request");
		
			
		return ResponseEntity.status(HttpStatus.OK).body(currentUser);
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
	@PostMapping("/register")
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
	public ResponseEntity<User> validateUser(@RequestBody User userInput, Model model, HttpServletRequest request) {
		String passwordInput = userInput.getUserPassword();
		System.out.println("userInput email is: " + userInput.getUserEmail());
		System.out.println("userInput email is: " + userInput.getUserPassword());
		
		User foundUser = userService.findByEmail(userInput.getUserEmail());
		
		//return error user not found
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
		//create session
		
//		model.addFlashAttribute("user", foundUser);
		session.setAttribute("username", foundUser.getUsername());
		System.out.println("Checking model");
//		session.getAttribute("username").toString();
		
//		System.out.println("I got session ID: " + session.getAttribute("userID"));
		System.out.println("User is logged in. Username is: " + session.getAttribute("username"));
//		System.out.println("User is logged in. Email is: " + session.getAttribute("userEmail"));
		
		return ResponseEntity.status(HttpStatus.OK).body(foundUser);
	}
	
	
}
