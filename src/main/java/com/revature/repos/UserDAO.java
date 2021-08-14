package com.revature.repos;

import java.util.List;

import com.revature.models.User;

public interface UserDAO {
	
	public void addUser(User user);
	
	public List<User> findAllUsers();
	
	public User findById(int id);

	public User findByEmail(String email);
	
	public void updateUser(User user);

}
