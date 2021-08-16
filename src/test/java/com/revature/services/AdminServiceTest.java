package com.revature.services;

import static org.junit.jupiter.api.Assertions.assertEquals;


import java.util.List;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import com.revature.models.Invoice;
import com.revature.repos.AdminDAO;

public class AdminServiceTest {
	
	public static AdminService adminService;
	public static AdminDAO adminDAO;
	public static List <Invoice> result;
	
	
	@BeforeAll
	public static void setAdminService() {
		System.out.println("In Before All");
		adminService = new AdminService(adminDAO, null, null);
		
	}
	
	@AfterEach 
	public void clearResult() {
		System.out.println("In After Each");
		result = null;
		
	}
	
	@AfterAll 
	public void clearAdminService(){
		System.out.println("In After All");
		adminService = null;
		
	}

	@Test 
	public void testFindAllInvoices(){
		System.out.println("Finding all invoices");
		result = adminService.getAllInvoice();
		assertEquals(result,  adminService.getAllInvoice());
		
		
	}
}
