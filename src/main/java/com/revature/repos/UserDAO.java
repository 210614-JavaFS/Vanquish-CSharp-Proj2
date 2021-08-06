package com.revature.repos;

import com.revature.models.User;

public interface UserDAO {
	
	public void addUser(User user);
	public User findById(int id);

}
