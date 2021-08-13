import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "../../features/userSlice";
import User from "../../models/User";
import { apiUpdateUser } from "../../remote/userApi";
import { useForm } from "../register-login/useForm";

export default function UserEditProfileModal(): JSX.Element { 
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    
    const initialState:any = {
        username: "",
        userEmail: "",
        userPassword: "",
        firstName: user.firstName,
        lastName: "",
        address: "",
        userRole: "",
    }

    const {onChange, onSubmit, values} = useForm(
        updateUserCallback,
        initialState
    )

    async function updateUserCallback() {
        let newUserForm = new User(
            user.userId,
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
        
        console.log("check1")
        apiUpdateUser(newUserForm);
        console.log("check2")

        let newUserChange = new User(
            user.userId,
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

        dispatch(login(newUserChange));
    }
    return (
        <div>

<button className="bttn-fill bttn-sm bttn-info bttn-no-outline user-box" data-bs-toggle="modal" data-bs-target="#updateUser">Update Profile</button>
            
            <div className="modal" id="updateUser" tabIndex={-1} role="dialog" aria-labelledby="updateUserLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content transparent-div">
                        <div className="modal-header">
                            <h3 className="modal-title white-txt">Update User</h3>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                            <h6 className="white-txt">Please review your changes</h6>

                        <form onSubmit={onSubmit}>
                            <div className="modal-body white-txt">
                                <div className="row">
                                    <div className="col">
                                        <p>
                                            <label htmlFor="first_name white-txt">First Name: </label>
                                            <input type="text" onChange={onChange} defaultValue={user.firstName} className="form-control" name="firstName" maxLength={25} minLength={2} placeholder="Enter Your First Name" required/>
                                        </p>
                                    </div>
                                    <div className="col">
                                        <p>
                                            <label htmlFor="last_name white-txt">Last Name: </label>
                                            <input type="text" onChange={onChange} defaultValue={user.lastName} className="form-control" name="lastName" maxLength={25} minLength={2} placeholder="Enter Your Last Name" required/>
                                        </p>
                                    </div>
                                </div>
                                <p>
                                    <label htmlFor="email white-txt">Email:</label>
                                    <input type="email" onChange={onChange} defaultValue={user.userEmail} className="form-control" name="userEmail" maxLength={25} minLength={2} placeholder="name@email.com" required/>
                                </p>
                                <p>
                                    <label htmlFor="username white-txt">Username:</label>
                                    <input type="text" onChange={onChange} defaultValue={user.username} className="form-control" name="username" maxLength={25} minLength={2} placeholder="Enter Your User Name" required/>
                                </p>
                                <p>
                                    <label htmlFor="address white-txt">Address:</label>
                                    <input type="text" onChange={onChange} defaultValue={user.address} className="form-control" name="address" maxLength={25} minLength={2} placeholder="Enter Your Address" required/>
                                </p>
                                {/* <p>
                                    <label htmlFor="password">Password:</label>
                                    <input type="password" onChange={onChange} value={user.address} className="form-control" name="userPassword" maxLength={25} minLength={4} placeholder="Enter Your Password. Max 25 characters. Minimum of 4 characters is required." required/>
                                </p> */}


                                <div className="modal-footer">
                                    <button 
                                        className="bttn-fill bttn-sm bttn-primary bttn-no-outline float-left" 
                                        type="submit"
                                        value="Submit"
                                        data-bs-dismiss="modal"
                                        >Confirm Changes
                                    </button>
                                    <button type="button" className="bttn-fill bttn-sm bttn-danger bttn-no-outline" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                            
                        </form>

                    </div>
                </div>
            </div>
    

        </div>
    )
}