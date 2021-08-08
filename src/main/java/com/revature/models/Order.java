package com.revature.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
public class Order {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="order_items_id")
	private int order_items_id;
	
	@Column(name="quantity")
	private int quantity;
	
	@Column(name="shipping_address")
	private String shipping_address;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn
	@JsonBackReference
	private Invoice invoice_id;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn
	@JsonBackReference
	private Book book_id;
	
	public Order(int order_items_id, int quantity, String shipping_address, Invoice invoice, Book book) {
		super();
		this.order_items_id = order_items_id;
		this.quantity = quantity;
		this.shipping_address = shipping_address;
		this.invoice_id = invoice;
		this.book_id = book;
	}

	public Order() {
		super();
	}

	public int getOrder_items_id() {
		return order_items_id;
	}

	public void setOrder_items_id(int order_items_id) {
		this.order_items_id = order_items_id;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public String getShipping_address() {
		return shipping_address;
	}

	public void setShipping_address(String shipping_address) {
		this.shipping_address = shipping_address;
	}

	public Invoice getInvoice() {
		return invoice_id;
	}

	public void setInvoice(Invoice invoice) {
		this.invoice_id = invoice;
	}

	public Book getBook() {
		return book_id;
	}

	public void setBook(Book book) {
		this.book_id = book;
	}
	
	//hashcode and equals

	@Override
	public String toString() {
		return "Order [order_items_id=" + order_items_id + ", quantity=" + quantity + ", shipping_address="
				+ shipping_address + ", invoice=" + invoice_id + ", book=" + book_id + ", toString()=" + super.toString()
				+ "]";
	}
	
	
	
	

}
