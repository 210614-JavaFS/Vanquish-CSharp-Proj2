package com.revature.repos;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.revature.models.User;

@Repository
@Transactional(propagation=Propagation.NESTED)
public class UserDAOImpl implements UserDAO {

	private SessionFactory sessionFactory;
	
	public UserDAOImpl(SessionFactory sessionFactory) {
		super();
		this.sessionFactory = sessionFactory;
	}
	
	@Override
	public void addUser(User user) {
		Session session = sessionFactory.getCurrentSession();
		session.save(user);
	}
	
	@Override
	public User findById(int id) {
		Session session = sessionFactory.getCurrentSession();
		User user = session.get(User.class, id);
		
		return user;
	}

}
