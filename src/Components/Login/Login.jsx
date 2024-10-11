import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const Login = () => {
    const {loginUser}=useContext(AuthContext)
   // const location = useLocation();

    //const from = location.state?.from || { pathname: "/" };
    const handleLogin=e=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(email,password); 
        
        loginUser(email,password)
        .then(result=>{
            console.log(result.user);
            //navigate(from, { replace: true });
        })
        .catch(error=>{
            console.log(error);
            
        })
    }

    const navigate = useNavigate();
    const handlesignupbtn=()=>{
        navigate('/signup');
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-neutral-200 dark:bg-neutral-700">
            <div className="container max-w-2xl">
                <div className="rounded-lg bg-white shadow-lg dark:bg-neutral-800 overflow-hidden lg:flex">
                    {/* Left Section */}
                    <div className="px-6 py-10 lg:w-6/12">
                        <div className="text-center mb-10">
                            <img
                                className="mx-auto w-20"
                                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                                alt="logo"
                            />
                            <h4 className="text-xl font-semibold mt-4">
                                Welcome to FiestaFlavors
                            </h4>
                        </div>
                        <form onSubmit={handleLogin}>
                            <p className="mb-4 text-gray-500 dark:text-gray-300">Please login to your account</p>

                            {/* Email input */}
                            <div className="mb-4">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                     type="email"
                                     required name="email"
                                     placeholder="Enter your email"
                                     className="input input-bordered w-full"
                                />
                            </div>

                            {/* Password input */}
                            <div className="mb-4">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    required name="password"
                                    placeholder="Enter password"
                                    className="input input-bordered w-full"
                                />
                            </div>

                            {/* Submit button */}
                            <div className="mb-6 text-center">
                                <button
                                    className="btn btn-primary w-full bg-gradient-to-r from-yellow-300 to-orange-500 text-white"
                                    type="submit"
                                >
                                    Log in
                                </button>
                                <a href="#!" className="block mt-3 text-sm text-gray-500 hover:underline">
                                    Forgot password?
                                </a>
                            </div>

                            {/* Register button */}
                            <div className="flex justify-between items-center pb-6">
                                <p className="mb-0 text-sm">Don't have an account?</p>
                                <button
                                    type="button"
                                    className="btn btn-outline btn-warning" 
                                    onClick={handlesignupbtn}
                                >
                                    SignUp
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Right Section */}
                    <div
                        className="flex items-center justify-center bg-gradient-to-r from-yellow-300 to-orange-500 lg:w-6/12 text-white"
                    >
                        <div className="px-6 py-10 text-center">
                            <h4 className="text-xl font-semibold mb-6">We are more than just a company</h4>
                            <p className="text-sm">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;