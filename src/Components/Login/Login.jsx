import { useContext, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../../firebase/firebase.config";


const Login = () => {
    const { loginUser, signInWithGoogle } = useContext(AuthContext)
    const emailRef = useRef(null);
    // const location = useLocation();

    //const from = location.state?.from || { pathname: "/" };
    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        loginUser(email, password)
            .then(result => {
                console.log(result.user);
                //navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error);
                alert('Incorrect email or password');
            })
    }

    //sign in with google
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                navigate("/");
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleForgetPass = () => {
        const email = emailRef.current.value;
        if (!email) {
            alert("Please enter your email address first.");
            return;
        }
        console.log('send reset email', emailRef.current.value)
        sendPasswordResetEmail(auth, email)
            .then( alert("Please check your email."))
            .catch(error => {
                console.log(error);
            })
    }
    const navigate = useNavigate();
    const handlesignupbtn = () => {
        navigate('/signup');
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-neutral-200 dark:bg-neutral-700">
            <div className="container max-w-3xl md:mt-8 mb-8 sm:mt-8 mb-8">
                <div className="rounded-lg bg-white shadow-lg dark:bg-neutral-800 overflow-hidden lg:flex">
                    {/* Left Section */}
                    <div className="px-6 py-10 lg:w-6/12">
                        <div className="text-center mb-10">

                            <h4 className="text-xl font-semibold mt-4">
                                Welcome to <span className="log-font">FiestaFlavors</span>
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
                                    ref={emailRef}
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
                                    className="btn btn-primary w-full bg-custom-green  text-white hover:bg-green-800"
                                    type="submit"
                                >
                                    Log in
                                </button>
                                <a onClick={handleForgetPass} href="#!" className="block mt-3 text-sm text-gray-500 hover:underline">
                                    Forgot password?
                                </a>
                            </div>

                            {/* Register button */}
                            <div className="flex justify-between items-center pb-6">
                                <p className="mb-0 text-sm">Don't have an account?</p>
                                <button
                                    type="button"
                                    className="border-2 border-custom-green text-custom-green hover:bg-custom-green hover:text-white focus:outline-none px-4 py-2 rounded"
                                    onClick={handlesignupbtn}
                                >
                                    SignUp
                                </button>
                            </div>

                            <div className="flex items-center justify-center my-4">
                                <div className="border-t border-gray-300 flex-grow mr-3"></div>
                                <span className="text-gray-500">or</span>
                                <div className="border-t border-gray-300 flex-grow ml-3"></div>
                            </div>

                            {/* Sign Up with Google button */}
                            <div className="mb-6 text-center">
                                <button onClick={handleGoogleSignIn}
                                    className="btn btn-outline w-full flex items-center justify-center border-gray-300 hover:bg-custom-green"

                                    type="button"
                                >

                                    <FaGoogle color="#555"></FaGoogle>
                                    Sign in with Google
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Right Section */}
                    <div
                        className="flex items-center justify-center bg-custom-green lg:w-6/12 text-white"
                    >
                        <div className="px-6 py-10 text-center">
                            <h4 className="text-xl font-semibold mb-6">More Than Just Recipes, We Share a Culture</h4>
                            <p className="text-sm">
                                FiestaFlavors is your ultimate destination for authentic Mexican recipes, celebrating the rich culinary heritage and vibrant flavors of Mexico
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;