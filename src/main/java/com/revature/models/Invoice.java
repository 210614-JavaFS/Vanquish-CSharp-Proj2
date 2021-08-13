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
public class Invoice {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="invoice_id")
	private int invoiceID;
	
	@Column(name="status")
	private String invoiceStatus;
	
	@Column(name="native_currency_name")
	private String nativeCurrencyName;
	
	@Column(name="native_amount")
	private double nativeAmount;
<<<<<<< HEAD
	
	@Column(name="usd_amount")
	private double usdAmount;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn
	@JsonBackReference
	private User user;
=======

>>>>>>> bd9b07a14cf0f42547550241b7fb48e79d1b8aff

	public Invoice() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Invoice(String invoiceStatus, String nativeCurrencyName, double nativeAmount, double usdAmount, User user) {
		super();
		this.invoiceStatus = invoiceStatus;
		this.nativeCurrencyName = nativeCurrencyName;
		this.nativeAmount = nativeAmount;
		this.usdAmount = usdAmount;
		this.user = user;
	}

	public Invoice(int invoiceID, String invoiceStatus, String nativeCurrencyName, double nativeAmount,
			double usdAmount, User user) {
		super();
		this.invoiceID = invoiceID;
		this.invoiceStatus = invoiceStatus;
		this.nativeCurrencyName = nativeCurrencyName;
		this.nativeAmount = nativeAmount;
		this.usdAmount = usdAmount;
		this.user = user;
	}

	public int getInvoiceID() {
		return invoiceID;
	}

	public void setInvoiceID(int invoiceID) {
		this.invoiceID = invoiceID;
	}

	public String getInvoiceStatus() {
		return invoiceStatus;
	}

	public void setInvoiceStatus(String invoiceStatus) {
		this.invoiceStatus = invoiceStatus;
	}

	public String getNativeCurrencyName() {
		return nativeCurrencyName;
	}

	public void setNativeCurrencyName(String nativeCurrencyName) {
		this.nativeCurrencyName = nativeCurrencyName;
	}

	public double getNativeAmount() {
		return nativeAmount;
	}

	public void setNativeAmount(double nativeAmount) {
		this.nativeAmount = nativeAmount;
	}

	public double getUsdAmount() {
		return usdAmount;
	}

	public void setUsdAmount(double usdAmount) {
		this.usdAmount = usdAmount;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "Invoice [invoiceID=" + invoiceID + ", invoiceStatus=" + invoiceStatus + ", nativeCurrencyName="
				+ nativeCurrencyName + ", nativeAmount=" + nativeAmount + ", usdAmount=" + usdAmount + ", user=" + user
				+ "]";
	}
	
	
	
}
