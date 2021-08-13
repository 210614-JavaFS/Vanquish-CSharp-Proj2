import { Switch } from "react-router-dom";
import AppRoutes from "../../routes/AppRoutes";
import { Footer } from "../../views/Footer";
import NavBar from "../../views/NavbarJ";


export default function MainSite(): JSX.Element {

    return(
        <div className="justify alignitems " >
            <div>    
            <NavBar />
            
            <div className="container padding-top-md">
                <Switch>
                    {/* <header className="App-header relative"> */}
                    <AppRoutes />
                    {/* </header> */}
                </Switch>
            </div>

            {/* <Footer /> */}
            </div>
          </div>
    )
}