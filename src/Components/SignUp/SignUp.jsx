import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const SignUp = () => {
    //create user
    const { createUser } = useContext(AuthContext);

    const [signuperror, setSignUpError] = useState('');
    const [success, setSuccess] = useState('');
    const handleSignUp = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);



        if (password.length < 6) {
            setSignUpError('Password should be atleast 6 characters or longer')
        }
        //create user and error showing
        setSignUpError('');
        setSuccess('');

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                setSuccess('User Created Successfully');
            })
            .catch(error => {
                console.log(error);
                setSignUpError(error.message);
            })
    }
    const navigate = useNavigate();

    const handleloginbtn = () => {
        navigate('/login');
    }
    return (

        <div>
            <div className="min-h-screen flex items-center justify-center bg-neutral-200 dark:bg-neutral-700">
                <div className="container max-w-3xl mt-8 mb-8">
                    <div className="rounded-lg bg-white shadow-lg dark:bg-neutral-800 overflow-hidden lg:flex">
                        {/* Left Section */}
                        <div className="px-6 py-10 lg:w-6/12">
                            <div className="text-center mb-10">

                                <h4 className="text-xl font-semibold mt-4">
                                    Welcome to <span className="log-font">FiestaFlavors</span>
                                </h4>
                            </div>
                            <form onSubmit={handleSignUp}>
                                <p className="mb-4 text-gray-500 dark:text-gray-300">Create your account</p>

                                {/* Name input */}
                                <div className="mb-4">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Enter your name"
                                        className="input input-bordered w-full"
                                        required
                                    />
                                </div>

                                {/* Email input */}
                                <div className="mb-4">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        className="input input-bordered w-full"
                                        required
                                    />
                                </div>

                                {/* Password input */}
                                <div className="mb-4">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="Enter password"
                                        className="input input-bordered w-full"
                                        required
                                    />
                                </div>

                                {/* Confirm Password input */}
                                <div className="mb-4">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Confirm your password"
                                        className="input input-bordered w-full"
                                        required
                                    />
                                </div>

                                {/* Submit button */}
                                <div className="mb-6 text-center">
                                    <button
                                        className="btn btn-primary w-full bg-custom-green  text-white hover:bg-green-800"
                                        type="submit"
                                    >
                                        Sign Up
                                    </button>
                                </div>

                                {/* Horizontal line with OR */}
                                <div className="flex items-center justify-center my-4">
                                    <div className="border-t border-gray-300 flex-grow mr-3"></div>
                                    <span className="text-gray-500">or</span>
                                    <div className="border-t border-gray-300 flex-grow ml-3"></div>
                                </div>

                                {/* Sign Up with Google button */}
                                <div className="mb-6 text-center">
                                    <button
                                        className="btn btn-outline w-full flex items-center justify-center border-gray-300 hover:bg-custom-green"

                                        type="button"
                                    >
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                                            alt="Google logo"
                                            className="w-5 h-5 mr-2"
                                        />
                                        Sign up with Google
                                    </button>
                                </div>

                                {/* Login Link */}
                                <div className="flex justify-between items-center pb-6">
                                    <p className="mb-0 text-sm">Already have an account?<Link to="/signup"></Link></p>
                                    <button onClick={handleloginbtn}
                                        type="button"
                                        className="border-2 border-custom-green text-custom-green hover:bg-custom-green hover:text-white focus:outline-none px-4 py-2 rounded"
                                    >
                                        Log in
                                    </button>
                                </div>
                            </form>
                            {
                                signuperror && <p>{signuperror}</p>
                            }
                            {
                                success && <p>{success}</p>
                            }
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
        </div>
    );
};

export default SignUp;