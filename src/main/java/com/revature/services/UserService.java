package com.revature.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.models.User;
import com.revature.repos.UserDAO;

@Service
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
	
	public List<User> findAllUsers() {
		return userDAO.findAllUsers();
	}
	
	public User findById(int id) {
		return userDAO.findById(id);
	}
	
	public User findByEmail(String email) {
		return userDAO.findByEmail(email);
	}
	
}
