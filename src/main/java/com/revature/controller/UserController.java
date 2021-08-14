package com.revature.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.mindrot.jbcrypt.BCrypt;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.revature.models.User;
import com.revature.services.UserService;

@RestController
@RequestMapping(value="user")
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class UserController {
	Logger log = LoggerFactory.getLogger(UserController.class);
	private UserService userService;
	
	public HttpSession session;
	
	public UserController(UserService userService) {
		super();
		this.userService = userService;
	}
	
	
	@GetMapping("/getcurrentuser")
	public ResponseEntity<User> returnSession(HttpSession mySession) {
		System.out.println("got GET request coming in....");
		User currentUser = new User();
		
		if (mySession.getAttribute("username") == null) {
			System.out.println("session is null");
			log.warn("session is null");
			return ResponseEntity.status(HttpStatus.OK).body(null);
		} else {
			
			System.out.println(mySession);
			System.out.println(mySession.getAttribute("username"));
			
			//get the session information and set it to the userObject
			int useridSession = (Integer) mySession.getAttribute("userId");
			currentUser.setUserId(useridSession);
			currentUser.setUsername(mySession.getAttribute("username").toString());
			currentUser.setUserEmail(mySession.getAttribute("userEmail").toString());
			currentUser.setFirstName(mySession.getAttribute("firstName").toString());
			currentUser.setLastName(mySession.getAttribute("lastName").toString());
			currentUser.setCurrencyID(mySession.getAttribute("currencyID").toString());
			currentUser.setAddress(mySession.getAttribute("address").toString());
			currentUser.setUserRole(mySession.getAttribute("userRole").toString());
			
			//NOTE. Needs testing to return invoices List correctly.
//			List userList = new ArrayList();
//			userList = (List) mySession.getAttribute("invoices");
//			currentUser.setInvoices(userList);
			
			System.out.println("end of the line...");
			return ResponseEntity.status(HttpStatus.OK).body(currentUser);
		}

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
		System.out.println("userInput password is: " + userInput.getUserPassword());
		
		User foundUser = userService.findByEmail(userInput.getUserEmail());
		
		//return error user not found
		if (foundUser==null) {
			System.out.println("Can't find user.");
			log.warn("User is not found in database.");
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		}
		
		//compare password
		boolean passwordVerified = false;
		passwordVerified = BCrypt.checkpw(passwordInput, foundUser.getUserPassword());
		
		if (passwordVerified == false) {
			System.out.println("Wrong password");
			log.warn("user put in wrong password");
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		}
		
		HttpSession session = request.getSession();
		
		//create session
		session.setAttribute("userId", foundUser.getUserId());
		session.setAttribute("username", foundUser.getUsername());
		session.setAttribute("userEmail", foundUser.getUserEmail());
		session.setAttribute("firstName", foundUser.getFirstName());
		session.setAttribute("lastName", foundUser.getLastName());
		session.setAttribute("currencyID", foundUser.getCurrencyID());
		session.setAttribute("address", foundUser.getAddress());
		session.setAttribute("userRole", foundUser.getUserRole());
		//untested. This is invoice list
//		session.setAttribute("invoices", foundUser.getInvoices());

		System.out.println("User is logged in. Username is: " + session.getAttribute("username"));
		log.info("User is Logged in, user name is " +  session.getAttribute("username"));
		return ResponseEntity.status(HttpStatus.OK).body(foundUser);
	}
	
	@PutMapping("/profileUpdate")
	public ResponseEntity<User> updateUser(@RequestBody User user) {
		System.out.println("User Update PUT route is hit.");
		userService.updateUser(user);
		log.info("User controller route receives user update.");
		return ResponseEntity.status(HttpStatus.ACCEPTED).build();
	}
	
	@GetMapping("/logout")
	public void logoutUser(HttpSession session) {
		session.invalidate();
		System.out.println("session is invalidated.");
	}
}
