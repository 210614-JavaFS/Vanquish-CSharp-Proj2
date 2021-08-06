package com.revature.services;

import org.springframework.beans.factory.annotation.Autowired;

import com.revature.models.User;
import com.revature.repos.UserDAO;

public class UserService {

	private UserDAO userDAO;
	
	@Autowired
	public UserService(UserDAO userDAO) {
		super();
		this.userDAO = userDAO;
	}
	
	public void addUser(User user) {
		userDAO.addUser(user);
	}
	
	public User findById(int id) {
		return userDAO.findById(id);
	}
	
}
