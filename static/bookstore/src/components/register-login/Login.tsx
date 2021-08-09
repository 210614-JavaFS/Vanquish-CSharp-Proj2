import React from 'react';
import User from '../../models/User';
import { apiLoginUser } from '../../remote/userApi';
import Register from './Register';
import { useForm } from './useForm';

export default function Login(): JSX.Element {

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
        
        console.log(newUserForm);
        apiLoginUser(newUserForm);
    }

    return (
        <div className="container" >
        {/* <!-- Login --> */}
        <div className="row d-flex justify-content-center">
            <div className="col-sm-2"></div>
            <div className="col">
                <div className="justify-content-center">
                    <div className="row">
                        <p className="font-size-md">Welcome to Bookstore</p>
                    </div>
                    <div className="row">

                        <form onSubmit={onSubmit}>
                            <div className="form-control transparent-div white-txt" id="loginForm">
                                <h3>Login</h3>
                                <p>
                                    <label htmlFor="email">Email</label>
                                    <input id="emailLogin" type="text" name="userEmail" onChange={onChange} className="form-control" maxLength={100} minLength={2} required/>
                                </p>
                                <p>
                                    <label htmlFor="password">Password</label>
                                    <input id="passwordLogin" type="password" name="password" onChange={onChange} className="form-control" maxLength={100} minLength={4} required/>
                                </p>
                            </div>


                            <div className="modal-footer">
                                <Register />
                                <button className="bttn-fill bttn-sm bttn-primary bttn-no-outline" id="loginButton">Login</button>
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