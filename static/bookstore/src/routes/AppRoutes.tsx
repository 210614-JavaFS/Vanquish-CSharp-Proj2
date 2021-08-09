import React, { useState } from "react";
import { Switch } from "react-router";
import { Route } from "react-router-dom";
import { CurrencyConverter } from "../components/CurrencyConverter";
import { SideNav } from "../views/SideNav";
import GetBooks from "../components/GetBooks";
import GetCurrencies from "../remote/GetCurrencies";


const AppRoutes: React.FC<any> = (): JSX.Element => {
    const [getRate, SetGetRate] = useState(0);


    const getCurrencyRate = (uppass: number) => {

        console.log(uppass);
        SetGetRate(uppass);
    }

    return (
        <div>

            <div className="absolute flex sideNav margintop">
                <SideNav />
            </div>


            <div className="width80">
                <div className="margintop1">
                    <h1>Welcome customer it is nice to meet you</h1>
                </div>

                <Route exact path="/">
                    <GetCurrencies getCurrencyRate={getCurrencyRate} />
                    <GetBooks getRate={getRate} />
                </Route>

                <Route exact path="/currency" component={CurrencyConverter} />


            </div>

        </div>
    )
}

export default AppRoutes;