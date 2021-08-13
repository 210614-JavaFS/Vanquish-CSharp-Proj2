/* eslint-disable no-cond-assign */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "../../features/userSlice";
import { apiGetCurrentUser } from "../../remote/userApi";
import { Footer } from "../../views/Footer";
import { NavBar } from "../../views/NavBar";
import Login from "../register-login/Login";

export default function Bookstore(): JSX.Element {
    //execute contact user URI and get user information
    let user = useSelector(selectUser);
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
        }
        
    }

    useEffect(() => {
        getCurrentUser();
      }, []);

    // getCurrentUser();

    return (
        <div className="flex justify alignitems " style={{ height: "70vh" }} >
            <div className="width30">
                {/* 
          
                <NavBar />

                
                <Switch>
                    <header className="App-header relative">
                    <AppRoutes />
                    </header>
                </Switch>
                
                */}
                {/* <button onClick={getCurrentUser}>Call me</button> */}
                <Login />
                {/* <Footer /> */}
                
            </div>
          </div>
    )
}