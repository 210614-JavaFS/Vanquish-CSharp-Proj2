package com.revature.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "orders")
public class Order {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="order_items_id")
	private int orderItemsId;
	
	@Column(name="quantity")
	private int quantity;
	
	@Column(name=" shipping_address")
	private String shippingAddress;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "invoice_id")
	@JsonBackReference
	private Invoice invoiceId;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "book_id")
	@JsonBackReference
	private Book bookId;
	
	public Order(int orderItemsId, int quantity, String  shippingAddress, Invoice invoice, Book book) {
		super();
		this.orderItemsId = orderItemsId;
		this.quantity = quantity;
		this. shippingAddress =  shippingAddress;
		this.invoiceId = invoice;
		this.bookId = book;
	}

	public Order() {
		super();
	}

	public int getOrders_items_id() {
		return orderItemsId;
	}

	public void setOrders_items_id(int orderItemsId) {
		this.orderItemsId = orderItemsId;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public String getShipping_address() {
		return  shippingAddress;
	}

	public void setShipping_address(String  shippingAddress) {
		this. shippingAddress =  shippingAddress;
	}

	public Invoice getInvoice() {
		return invoiceId;
	}

	public void setInvoice(Invoice invoice) {
		this.invoiceId = invoice;
	}

	public Book getBook() {
		return bookId;
	}

	public void setBook(Book book) {
		this.bookId = book;
	}
	
	//hashcode and equals

	@Override
	public String toString() {
		return "Orders [orderItemsId=" + orderItemsId + ", quantity=" + quantity + ",  shippingAddress="
				+  shippingAddress + ", invoice=" + invoiceId + ", book=" + bookId + ", toString()=" + super.toString()
				+ "]";
	}
	
	
	
	

}
