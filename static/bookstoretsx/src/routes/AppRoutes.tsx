import React, { useState } from "react";
import { Switch } from "react-router";
import { Route } from "react-router-dom";
import { CurrencyConverter } from "../components/CurrencyConverter";
import { SideNav } from "../views/SideNav";
import GetBooks from "../components/GetBooks";
import GetCurrencies from "../remote/GetCurrencies";
import "../css/jack-stylings.css";
import "../css/bttn.css"
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import UserProfile from "../components/user/UserProfile";
import OrderHistory from "../components/user/customer/OrderHistory";
import CustomerOrders from "../components/user/admin/CustomerOrders";
import AboutUs from "../components/about-us/AboutUs";
import AddBook from "../components/user/admin/AddBook";
import EditBook from "../components/user/admin/EditBook"

const AppRoutes: React.FC<any> = (): JSX.Element => {
    const user = useSelector(selectUser);
    const [getRate, SetGetRate] = useState(0);


    const getCurrencyRate = (uppass: number) => {

        console.log(uppass);
        SetGetRate(uppass);
    }

    return (
        <div >

            {/* <div className="absolute flex sideNav margintop">
                <SideNav />
            </div> */}

            {/* TODO. main Index. Book listings */}
            <Route exact path="/">
                <GetCurrencies getCurrencyRate={getCurrencyRate} />
                <GetBooks getRate={getRate} />
            </Route>

            {/* TODO. User Pages */}
            {/* User Profile */}
            <Route path="/userProfile">
                <UserProfile />
            </Route>

            {/* TODO. Customer Order History */}
            <Route path="/customerOrderHistory">
                <OrderHistory />
            </Route>

            {/* TODO. Admin Order View */}
            <Route path="/adminOrderView">
                {user.userRole === "admin" ? <CustomerOrders /> : null}
            </Route>

            {/* TODO. Admin Add Book View */}
            {user.userRole === "admin" ?
                <Route path="/addBook">
                    <AddBook />
                </Route>
                : null}

            {/* //Admin can update exists book fields */}
            <Route path="/updateBook">
                {user.userRole === "admin" ? <EditBook /> : null}

            </Route>

            {/* TODO. Admin Edit Book View  */}
            {/* <Route path="/editBook">
                <CustomerOrders/>
            </Route>  */}

            <Route path="/aboutUs">
                <AboutUs />
            </Route>

            <Route exact path="/currency" component={CurrencyConverter} />

        </div>
    )
}

export default AppRoutes;