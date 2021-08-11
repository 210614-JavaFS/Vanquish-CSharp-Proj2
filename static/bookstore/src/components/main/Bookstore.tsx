/* eslint-disable no-cond-assign */
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { apiGetCurrentUser } from "../../remote/userApi";
import { Footer } from "../../views/Footer";
import { NavBar } from "../../views/NavBar";
import Login from "../register-login/Login";

export default function Bookstore(): JSX.Element {
    //execute contact user URI and get user information
    let user = useSelector(selectUser);
    const dispatch = useDispatch();

    console.log("I'm always loaded")

    
    async function getCurrentUser() {
        let userObject = await apiGetCurrentUser();

        if (userObject) {
            console.log("I got current user");
            user = userObject;
        } else {
            console.log("I haven't got current user");
        }
        
    }

    getCurrentUser()

    return (
        
        <div className="flex justify alignitems " style={{ height: "70vh" }}>
            <div className="width30">
                {/* 
          
                <NavBar />

                
                <Switch>
                    <header className="App-header relative">
                    <AppRoutes />
                    </header>
                </Switch>
                
                */}

                <Login />
                {/* <Footer /> */}
                
            </div>
          </div>
    )
}