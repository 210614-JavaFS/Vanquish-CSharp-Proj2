import React, { useState } from 'react';
import User from '../../models/User';
import { apiRegisterUser } from '../../remote/userApi';
import { useForm } from './useForm';



export default function Register()  {

    const initialState:any = {
        username: "",
        userEmail: "",
        userPassword: "",
        firstName: "",
        lastName: "",
        address: "",
        userRole: "",
    }

    const {onChange, onSubmit, values} = useForm(
        registerUserCallback,
        initialState
    )

    async function registerUserCallback() {
        let newUserForm = new User(
            undefined,
            values.username,
            values.userEmail,
            values.userPassword,
            values.firstName,
            values.lastName,
            values.address,
            'USD',
            values.userRole,
            undefined,
        );
        
        apiRegisterUser(newUserForm);
    }

    return (
        <div>

            <button className="bttn-fill bttn-sm bttn-warning bttn-no-outline" data-bs-toggle="modal" data-bs-target="#signupModal">Register</button>
            
            <div className="modal" id="signupModal" tabIndex={-1} role="dialog" aria-labelledby="SignupModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content transparent-div">
                        <div className="modal-header">
                            <h5 className="modal-title">Sign up</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <form onSubmit={onSubmit}>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col">
                                        <p>
                                            <label htmlFor="first_name">First Name: </label>
                                            <input type="text" onChange={onChange} className="form-control" name="firstName" maxLength={25} minLength={2} placeholder="Enter Your First Name" required/>
                                        </p>
                                    </div>
                                    <div className="col">
                                        <p>
                                            <label htmlFor="last_name">Last Name: </label>
                                            <input type="text" onChange={onChange} className="form-control" name="lastName" maxLength={25} minLength={2} placeholder="Enter Your Last Name" required/>
                                        </p>
                                    </div>
                                </div>
                                <p>
                                    <label htmlFor="email">Email:</label>
                                    <input type="email" onChange={onChange} className="form-control" name="userEmail" maxLength={25} minLength={2} placeholder="name@email.com" required/>
                                </p>
                                <p>
                                    <label htmlFor="username">Username:</label>
                                    <input type="text" onChange={onChange} className="form-control" name="username" maxLength={25} minLength={2} placeholder="Enter Your User Name" required/>
                                </p>
                                <p>
                                    <label htmlFor="address">Address:</label>
                                    <input type="text" onChange={onChange} className="form-control" name="address" maxLength={25} minLength={2} placeholder="Enter Your Address" required/>
                                </p>
                                <p>
                                    <label htmlFor="password">Password:</label>
                                    <input type="password" onChange={onChange} className="form-control" name="password" maxLength={25} minLength={4} placeholder="Enter Your Password. Max 25 characters. Minimum of 4 characters is required." required/>
                                </p>
                                <p>
                                    <label htmlFor="usertype">Select User Type:</label>
                                    <select className="form-select" id="userTypeSignup" name="userRole" onChange={onChange} >
                                        <option >Please Select Your User Type</option>
                                        <option value="customer">Customer</option>
                                        <option value="admin">Admin</option>
                                    </select>
                                </p>


                                <div className="modal-footer">
                                    <button type="button" className="bttn-fill bttn-sm bttn-danger bttn-no-outline" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                            <button 
                                className="bttn-fill bttn-sm bttn-primary bttn-no-outline" 
                                type="submit"
                                value="Submit"
                                >Sign up</button>
                        </form>

                    </div>
                </div>
            </div>
    
        </div>
    )
}