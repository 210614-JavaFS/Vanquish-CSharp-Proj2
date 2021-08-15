import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

export default function CurrencySelect(): JSX.Element {
    const user = useSelector(selectUser);

    return (
        <div className="navbar-nav ml-auto ">
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="currencyDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Currency Change
                </a>
                <ul className="dropdown-menu poiret-font" aria-labelledby="currencyDropdown">
                    <li><a className="dropdown-item" >USD</a></li> 
                    <li><a className="dropdown-item" >CND</a></li>
                    <li><a className="dropdown-item" >EUR</a></li>
                    <li><a className="dropdown-item" >JPY</a></li>
                </ul>
            </li>
        </div>
    )
}
