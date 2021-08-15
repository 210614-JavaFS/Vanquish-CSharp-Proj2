package com.revature.repos;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.NativeQuery;
import org.hibernate.query.Query;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.revature.models.Book;
import com.revature.models.Invoice;
import com.revature.models.Order;
import com.revature.models.User;



@Repository
@Transactional(propagation=Propagation.NESTED)
public class InvoiceDAOImpl implements InvoiceDAO{

	private static Logger log = LoggerFactory.getLogger(InvoiceDAOImpl.class);
	
	@Autowired
	private SessionFactory sessionFactory;
		
	public InvoiceDAOImpl(SessionFactory sessionFactory) {
		super();
		this.sessionFactory = sessionFactory;
	}

	
	
	@Override
	public void addInvoice(User user, Book book, double nativeAmount, String name) {
		Session session = sessionFactory.getCurrentSession();
		Invoice invoice = new Invoice();
		invoice.setInvoiceStatus("new");
		invoice.setNativeCurrency(name);
		invoice.setNativeAmount(nativeAmount);
		invoice.setUser(user);
		double usdTotal = book.getCostUSD() * 1;
		invoice.setUsdAmount(usdTotal);
		session.save(invoice);
		log.info("User create a new invoice ticket.");
	}



	@Override
	public Invoice findInvoiceByuserId(int userID) {
		Session session = sessionFactory.getCurrentSession();
		String sql = "SELECT invoice.* "
				+ " FROM users "
				+ " LEFT JOIN invoice ON users.USER_ID = invoice.USER_ID "
				+ " WHERE users.USER_ID = :user_id AND  invoice.STATUS = 'new'; ";
		NativeQuery<Invoice> query = session.createNativeQuery(sql, Invoice.class);
		query.setParameter("user_id", userID);
		List<Invoice> result = query.getResultList();
		Invoice invoice = (Invoice) result.get(0);
		invoice.setInvoiceStatus("pending");
		session.merge(invoice);
		log.info(invoice.toString());
		log.info(sql, (User.class) ,invoice.getUser().getUsername());
		log.info("Got the invoice ticket from customer");
		return invoice;
	}



	@Override
	public void addOrder(User user, Book book, Invoice invoice) {
		Session session = sessionFactory.getCurrentSession();
		Order order = new Order();
		order.setOrderQuantity(1);
		order.setBook(book);
		order.setUser(user);
		order.setInvoice(invoice);
		session.save(order);
		log.info("User created a new Order");
		
	}


	// all orders by id but untested but should work
	@Override
	public List<Order>  findOrderByuserId(int userId) {
		Session session = sessionFactory.getCurrentSession();
		String sql = " SELECT orders.* "
				+ "FROM orders "
				+ "LEFT JOIN invoice ON orders.USER_ID = invoice.USER_ID WHERE orders.USER_ID = :userid ; ";
		Query<Order> query = session.createNativeQuery(sql, Order.class);
		query.setParameter("userid", userId);
		List<Order> list =  query.getResultList();
		log.info("User getting all orders by id.");
	
		return list;
	}
	// returns all orders base on userId. Includes pending,deny,approve,cancel/reject

	// this will update the status but untested
	@Override
	public void updateStatusbyId(int invoiceid, String status) {
		log.info("Find old status");
		Session session = sessionFactory.getCurrentSession();
		String sql = "SELECT * FROM invoice WHERE INVOICE.INVOICE_ID = :invoiceid ;" ;
		NativeQuery<Invoice> query = session.createNativeQuery(sql, Invoice.class);
		query.setParameter("invoiceid", invoiceid);
		List<Invoice> result = query.getResultList();
		Invoice invoice = (Invoice) result.get(0);
		invoice.setInvoiceStatus(status);
		log.info("User update one of his invoice tickets status.");
		session.merge(invoice);
		
		
	}

	// this method is not tested for admin
	@SuppressWarnings("unchecked")
	@Override
	public List<Order> allOrder() {
		Session session = sessionFactory.getCurrentSession();
		log.info("Admin found all orders in the database. ");
		return session.createQuery("FROM Order").list();
	}

	
	
	
	


}
