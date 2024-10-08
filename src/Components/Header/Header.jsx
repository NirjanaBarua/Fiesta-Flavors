import { useContext } from "react";
import { Navigate, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handlelogOut = () => {
        logOut()

    }
    return (
        <div>
            <div className="navbar bg-base-100">
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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about-us"
                                    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                                    About Us
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <a >FiestaFlavors</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className="mr-5">
                            <NavLink
                                to="/"
                                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                                Home
                            </NavLink>
                        </li>
                        <li className="mr-5">
                            <NavLink
                                to="/about-us"
                                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                                About Us
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">

                    <div >
                        {
                            user ?
                                <>
                                    <span className="mr-3">{user.email}</span>
                                    <div onClick={handlelogOut} className="btn"><span>Logout</span></div>
                                    <Navigate to="/"></Navigate>
                                </> :
                                <div className="space-x-2">
                                    <Navigate to="/login"></Navigate>
                                    <NavLink to="/login" className="btn">
                                        Login
                                    </NavLink>
                                    <NavLink to="/signup" className="btn">
                                        SignUp
                                    </NavLink>
                                </div>


                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;