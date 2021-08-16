import { Container, Nav, Navbar, Form, FormControl, Button, NavLink } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import CurrencySelect from '../components/nav-bar/CurrencySelect';
import logo from "../css/icons/so-many-books.svg";
import { selectUser } from '../features/userSlice';
import { apiLogout } from '../remote/userApi';

export default function NavbarJ(): JSX.Element {
    const user = useSelector(selectUser);

    return (
        <nav className="navbar navbar-light navbar-expand-lg fixed-top transparent-nav font-size-md font-caps ">

            <a className="navbar-brand padding-left-sm" href="/">
                <img src={logo} width={65} height={65} />
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

                            <li><a className="dropdown-item zindex" href="/customerOrderHistory">My Orders</a></li>

                        </ul>
                    </li>

                    {/* TODO ADMIN STUFF ONLY */}
                    <li className="nav-item ">
                        <li className="nav-item">
                            {user.userRole === "admin" ?
                                <NavLink className="nav-link" aria-current="page" href="/adminOrderView">Customer Orders </NavLink>
                                : null
                            }
                        </li>
                    </li>
                    <li className="nav-item ">
                        <li className="nav-item">
                            {user.userRole === "admin" ?
                                <NavLink className="nav-link" aria-current="page" href="/addBook">Add Book </NavLink>
                                : null
                            }
                        </li>
                    </li>

                    <li className="nav-item ">
                        <li className="nav-item">
                            {user.userRole === "admin" ?
                                <NavLink className="nav-link" aria-current="page" href="/updateBook">Update Book </NavLink>
                                : null
                            }
                        </li>
                    </li>

                    <li className="nav-item ">
                        <li className="nav-item">
                            {user.userRole === "admin" ?
                                <NavLink className="nav-link" aria-current="page" href="/viewAllBook">View All Books </NavLink>
                                : null
                            }
                        </li>
                    </li>


                    <li className="nav-item">
                        <NavLink className="nav-link" href="/aboutUs">About Us</NavLink>
                    </li>

                </ul>
            </div>

            {/* <CurrencySelect /> */}
            <div className="navbar-nav padding-right-md">
                Welcome back, {user.username}
            </div>

            <div className="navbar-nav padding-right-md">
                <button
                    className="black-txt bttn-fill bttn-sm bttn-danger bttn-no-outline bttn-block round-border"
                    onClick={apiLogout}
                >Log out</button>
            </div>
        </nav>
    )
}