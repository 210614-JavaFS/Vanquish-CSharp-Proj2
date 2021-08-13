import { Container, Nav, Navbar, Form, FormControl, Button, NavLink } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import CurrencySelect from '../components/nav-bar/CurrencySelect';
import logo from "../css/icons/so-many-books.svg";
import { selectUser } from '../features/userSlice';
import { apiLogout } from '../remote/userApi';

export default function NavbarJ(): JSX.Element {
    const user = useSelector(selectUser);
    
    return (
        <nav className="navbar navbar-dark navbar-expand-lg fixed-top transparent-nav font-size-md arima-font">
                
                <a className="navbar-brand" href="/">
                    <img src={logo} width={45} height={45} />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item ">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" href="/">Home</NavLink>
                            </li>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                My Profile
                            </a>
                            <ul className="dropdown-menu zindex" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item zindex" href="/userProfile">My Profile</a></li>

                                <li><a className="dropdown-item zindex" href="/customerOrderHistory">My Order</a></li>

                            </ul>
                        </li>
                        <li className="nav-item ">
                            <li className="nav-item">
                                { user.userRole == "customer" ? 
                                <NavLink className="nav-link" aria-current="page" href="/adminOrderView">Customer Orders </NavLink>
                                : null
                                }
                            </li>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" href="/aboutUs">About Us</NavLink>
                        </li>

                    </ul>            
                </div>

                <CurrencySelect/>

                <div className="navbar-nav">
                    <button 
                        className="black-txt bttn-fill bttn-sm bttn-danger bttn-no-outline bttn-block round-border"
                        onClick={apiLogout}
                    >Log out</button>
                </div>
        </nav>
    )
}