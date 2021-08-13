/* eslint-disable no-cond-assign */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "../../features/userSlice";
import { apiGetCurrentUser } from "../../remote/userApi";
import Login from "../register-login/Login";
import MainSite from "./MainSite";

export default function Bookstore(): JSX.Element {
    //execute contact user URI and get user information
    let user = useSelector(selectUser);
    const blankPage = null;
    const dispatch = useDispatch();
    
    async function getCurrentUser() {

        let userObject = await apiGetCurrentUser();

        if (userObject) {
            console.log("I got current user");
            user = userObject;
            console.log(`current user is ${user.username}`);
            dispatch(login(user));
        } else {
            console.log("I haven't got current user");
            dispatch(logout());
        }
        
    }

    useEffect(() => {
        getCurrentUser();
      }, []);

    
    // getCurrentUser();

    return (
        <div className="container-fluid">
                {/* if user is available <MainSite/> appears otherwise show Login page */}
                
                {user === 'loading' ? (
                    null
                    ) : user ? (
                    <MainSite />
                    ) : (
                    <Login />
                )}
        </div>
    )
}