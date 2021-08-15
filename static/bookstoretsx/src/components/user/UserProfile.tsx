import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import UserEditProfileModal from "./UserEditProfileModal";

export default function UserProfile(): JSX.Element {
    const user = useSelector(selectUser);

    console.log(`I'm on user profile page and current user is ${user.username}`)
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-3 sm-3"></div>
                <div className="col-md-6 md-6">
                    <div className="modal-content extra-box-space transparent-nav">

                        <div className="d-flex justify-content-center modal-header">
                            <h1 className="font-caps">User Profile Page</h1>
                        </div>
                        
                        <div className="justify-content-center padding-top-sm">
                            <span>Username: </span>
                            <span>{user.username}</span> <br/>
                            <span>User ID: </span>
                            <span>{user.userId}</span> <br/>
                            <span>User First Name: </span>
                            <span>{user.firstName}</span> <br/>
                            <span>User Last Name: </span>
                            <span>{user.lastName}</span> <br/>
                            <span>User Email: </span>
                            <span>{user.userEmail}</span> <br/>
                            <span>User Address: </span>
                            <span>{user.address}</span> <br/>
                            <span>User Role: </span>
                            <span>{user.userRole}</span> <br/>

                            <div className="padding-top-sm">
                                <UserEditProfileModal/>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="col-sm-3 sm-3"></div>
            </div>
        </div>
    )
}