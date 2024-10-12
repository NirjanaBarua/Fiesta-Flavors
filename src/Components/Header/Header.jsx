import { useContext } from "react";
import { Navigate, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import './Header.css';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    
    const handlelogOut = () => {
        logOut();
    };

    return (
        <div>
            <div className="navbar bg-custom-rgba px-20">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-bold">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) => isActive ? "nav-link custom-green" : "nav-link"}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about-us"
                                    className={({ isActive }) => isActive ? "nav-link custom-green" : "nav-link"}>
                                    About Us
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <h1 className="fontt">FiestaFlavors</h1>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul id="nav-font" className="menu menu-horizontal px-1 font-bold">
                        <li className="mr-5">
                            <NavLink
                                to="/"
                                className={({ isActive }) => isActive ? "nav-link custom-green" : "nav-link"}>
                                Home
                            </NavLink>
                        </li>
                        <li className="mr-5">
                            <NavLink
                                to="/about-us"
                                className={({ isActive }) => isActive ? "nav-link custom-green" : "nav-link"}>
                                About Us
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div>
                        {
                            user ? (
                                <>
                                    <span className="font-bold mr-3">{user.email}</span>
                                    <div onClick={handlelogOut} className="font-bold btn bg-custom-green text-white hover:bg-green-800"><span>Logout</span></div>
                                    <Navigate to="/"></Navigate>
                                </>
                            ) : (
                                <div className="space-x-2">
                                    <Navigate to="/login"></Navigate>
                                    <NavLink to="/login" className="font-bold btn bg-custom-green text-white  hover:bg-green-800 ">
                                        Login
                                    </NavLink>
                                    <NavLink to="/signup" className="font-bold btn bg-custom-green text-white hover:bg-green-800">
                                        SignUp
                                    </NavLink>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
