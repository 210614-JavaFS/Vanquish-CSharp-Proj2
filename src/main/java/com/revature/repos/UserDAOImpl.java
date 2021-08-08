package com.revature.repos;

import java.util.List;

import javax.persistence.criteria.CriteriaQuery;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.revature.models.User;

@Repository
@Transactional(propagation=Propagation.NESTED)
public class UserDAOImpl implements UserDAO {

	@Autowired
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
	public List<User> findAllUsers() {
		Session session = sessionFactory.getCurrentSession();
		
		System.out.println("Running query of FindAllUser()");
		CriteriaQuery<User> cq = session.getCriteriaBuilder().createQuery(User.class);
		cq.from(User.class);
		
		return session.createQuery(cq).getResultList();
	}
	
	@Override
	public User findById(int id) {
		Session session = sessionFactory.getCurrentSession();
		User user = session.get(User.class, id);
		
		return user;
	}
	
	@Override
	public User findByEmail(String email) {
		System.out.println("running query");
		Session session = sessionFactory.getCurrentSession();
//		User user = session.get(User.class, email);
		
		String hql = "FROM User WHERE user_email = :input_email";
		System.out.println("creating query");
		Query query = session.createQuery(hql);
		query.setParameter("input_email",email);
		System.out.println("query created...");
		List results = query.list();
		System.out.println("found results");
		System.out.println(results);
		
		return (User) results.get(0);
	}

}
