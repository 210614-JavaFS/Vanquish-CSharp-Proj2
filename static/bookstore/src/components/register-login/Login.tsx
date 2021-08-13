import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, selectUser } from '../../features/userSlice';
import User from '../../models/User';
import { apiLoginUser } from '../../remote/userApi';
import Register from './Register';
import { useForm } from './useForm';

export default function Login(): JSX.Element {

    const user = useSelector(selectUser);
    
    const initialState:any = {
        userEmail: "",
        userPassword: "",
    }

    const {onChange, onSubmit, values} = useForm(
        loginCallback,
        initialState
    )

    async function loginCallback() {
        let newUserForm = new User(
            undefined,
            undefined,
            values.userEmail,
            values.userPassword,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
        );

        let userObject = await apiLoginUser(newUserForm);

        if (userObject) {
            alert("Login is successful")
            console.log("login successful")

        } else {
            alert("Login is not successful");
            console.log("login failed")
        }
    }

    return (
        <div className="container" >
        {/* <!-- Login --> */}
        <div className="row d-flex justify-content-center">
            <div className="col-sm-2"></div>
            <div className="col">
                <div className="justify-content-center">
                    <div className="row">
                        <p className="font-size-lg orange-txt font-caps">Welcome to Vanquish Bookstore</p>
                    </div>
                    <div className="row">
                        <Register />
                        <form onSubmit={onSubmit}>
                            <div className="form-control transparent-div white-txt" id="loginForm">
                                
                                <h3 className="font-caps">Login</h3>
                                <p>
                                    <label htmlFor="email">Email</label>
                                    <input id="emailLogin" type="text" name="userEmail" onChange={onChange} className="form-control" maxLength={100} minLength={2} required/>
                                </p>
                                <p>
                                    <label htmlFor="password">Password</label>
                                    <input id="passwordLogin" type="password" name="userPassword" onChange={onChange} className="form-control" maxLength={100} minLength={4} required/>
                                </p>
                                <button className="bttn-fill bttn-sm bttn-primary bttn-no-outline bttn-block" id="loginButton">Login</button>
                            </div>


                            
                            
                        </form>
                        
                    </div>

                </div>
            </div>
            <div className="col-sm-2"></div>
        </div>
    </div>
    )
}