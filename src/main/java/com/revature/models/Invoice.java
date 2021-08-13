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
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "user_id")
	@JsonBackReference
	private User user;
	
	@Column(name="status")
	private String invoiceStatus;
	
	@Column(name = "invoice_total_usd")
	private double usdAmount;
	
	@Column(name="native_currency")
	private String nativeCurrency;
	
	@Column(name="native_amount")
	private double nativeAmount;


	public Invoice() {
		super();
	}


	public Invoice(int invoiceID, User user, String invoiceStatus, double usdAmount, String nativeCurrency,
			double nativeAmount) {
		super();
		this.invoiceID = invoiceID;
		this.user = user;
		this.invoiceStatus = invoiceStatus;
		this.usdAmount = usdAmount;
		this.nativeCurrency = nativeCurrency;
		this.nativeAmount = nativeAmount;
	}


	public int getInvoiceID() {
		return invoiceID;
	}


	public void setInvoiceID(int invoiceID) {
		this.invoiceID = invoiceID;
	}


	public User getUser() {
		return user;
	}


	public void setUser(User user) {
		this.user = user;
	}


	public String getInvoiceStatus() {
		return invoiceStatus;
	}


	public void setInvoiceStatus(String invoiceStatus) {
		this.invoiceStatus = invoiceStatus;
	}


	public double getUsdAmount() {
		return usdAmount;
	}


	public void setUsdAmount(double usdAmount) {
		this.usdAmount = usdAmount;
	}


	public String getNativeCurrency() {
		return nativeCurrency;
	}


	public void setNativeCurrency(String nativeCurrency) {
		this.nativeCurrency = nativeCurrency;
	}


	public double getNativeAmount() {
		return nativeAmount;
	}


	public void setNativeAmount(double nativeAmount) {
		this.nativeAmount = nativeAmount;
	}


	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + invoiceID;
		result = prime * result + ((invoiceStatus == null) ? 0 : invoiceStatus.hashCode());
		long temp;
		temp = Double.doubleToLongBits(nativeAmount);
		result = prime * result + (int) (temp ^ (temp >>> 32));
		result = prime * result + ((nativeCurrency == null) ? 0 : nativeCurrency.hashCode());
		temp = Double.doubleToLongBits(usdAmount);
		result = prime * result + (int) (temp ^ (temp >>> 32));
		result = prime * result + ((user == null) ? 0 : user.hashCode());
		return result;
	}


	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Invoice other = (Invoice) obj;
		if (invoiceID != other.invoiceID)
			return false;
		if (invoiceStatus == null) {
			if (other.invoiceStatus != null)
				return false;
		} else if (!invoiceStatus.equals(other.invoiceStatus))
			return false;
		if (Double.doubleToLongBits(nativeAmount) != Double.doubleToLongBits(other.nativeAmount))
			return false;
		if (nativeCurrency == null) {
			if (other.nativeCurrency != null)
				return false;
		} else if (!nativeCurrency.equals(other.nativeCurrency))
			return false;
		if (Double.doubleToLongBits(usdAmount) != Double.doubleToLongBits(other.usdAmount))
			return false;
		if (user == null) {
			if (other.user != null)
				return false;
		} else if (!user.equals(other.user))
			return false;
		return true;
	}


	@Override
	public String toString() {
		return "Invoice [invoiceID=" + invoiceID + ", user=" + user + ", invoiceStatus=" + invoiceStatus
				+ ", usdAmount=" + usdAmount + ", nativeCurrency=" + nativeCurrency + ", nativeAmount=" + nativeAmount
				+ "]";
	}

}
