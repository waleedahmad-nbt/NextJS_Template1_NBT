'use client';
import React, { useEffect, useState } from 'react'
import { IoEye, IoEyeOff } from 'react-icons/io5';
import SignInModal from './SingIn';
import { RxCross2 } from 'react-icons/rx';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import toast from 'react-hot-toast';

const SignupModal = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [redirectToSignIn, setRedirectToSignIn] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();

    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        password: "",
    });

    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleTogglePassword = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword);
    };

    const onBackToLogin = () => {
        setRedirectToSignIn(true);
    };


    const onSignUp = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/register", user);
            console.log("Signup success", response.data);
            router.push("/page/MyAccount");
        } catch (error) {
            console.log("Signup Failed", error.message);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (
            user.firstname.length > 0 &&
            user.lastname.length > 0 &&
            user.username.length > 0 &&
            user.email.length > 0 &&
            user.password.length > 0
        ) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

    if (redirectToSignIn) {
        return <SignInModal />;
    }


    return (
        <>
            <div className='relative'>
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center"
                >
                    <RxCross2
                        className="absolute mb-[496px] ml-[470px] shadow-xl duration-500 ease-in-out hover:bg-black hover:text-white z-50 cursor-pointer w-10 h-10 font-light rounded-full p-2 text-lg text-black bg-white"
                    />
                    <div className="bg-white p-6 mt-10 rounded-md ">

                        <h3 className="text-4xl font-semibold mb-4 mt-6 text-gray-900 dark:text-white text-center">Sign Up</h3>


                        <form className="space-y-6 mt-7" action="#">
                            <div>
                                <p className='text-gray-700 text-sm items-center text-center'>Already have an account?

                                    <span className='font-semibold text-base cursor-pointer' onClick={onBackToLogin}> Log in </span>

                                    for free</p>
                            </div>
                            <div className='flex flex-row gap-2 mb-4 items-center text-center'>
                                <div>
                                    <input value={user.firstname}
                                        onChange={(e) => setUser({ ...user, firstname: e.target.value })} type="first" name="Name" id="firstname" className="bg-transparent border p-2.5 w-[210px] py-3 border-gray-300 text-gray-900 sm:text-sm rounded-full  block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="First Name" required="" />
                                </div>
                                <div>
                                    <input value={user.lastname}
                                        onChange={(e) => setUser({ ...user, lastname: e.target.value })} type="Name" name="Name" id="lastname" placeholder="Last Name" className="bg-transparent border p-2.5 w-[210px] py-3 border-gray-300 text-gray-900 sm:text-sm rounded-full  block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>
                            </div>
                            <input value={user.username}
                                onChange={(e) => setUser({ ...user, username: e.target.value })} type="Username" name="Username" id="Username" className="bg-transparent border border-gray-300 text-gray-900 sm:text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-[436px] h-[45px] p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="Your UserName or Email" required="This field is required" />
                            <div>
                                <input value={user.email}
                                    onChange={(e) => setUser({ ...user, email: e.target.value })} type="email" name="email" id="email" className="bg-transparent border border-gray-300 text-gray-900 sm:text-sm rounded-full block w-[436px] h-[45px] p-2.5 py-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="" required="" />
                            </div>

                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                    value={user.password}
                                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                                    className="bg-transparent border border-gray-300 text-gray-900 sm:text-sm rounded-full focus:ring-blue-500
                                     focus:border-blue-500 block w-[436px] h-[45px] p-2.5 dark:bg-gray-600 dark:border-gray-500
                                      dark:placeholder-gray-400 dark:text-white"
                                    required="This field is required"
                                />
                                {/* Eye Icon for Show/Hide Password */}
                                <button
                                    className="absolute top-1/2 transform -translate-y-1/2 right-6 cursor-pointer"
                                    onClick={handleTogglePassword}
                                >
                                    {showPassword ? (
                                        <IoEyeOff size={24} />
                                    ) : (
                                        <IoEye size={24} />
                                    )}
                                </button>
                            </div>

                            <p className="text-red-600 text-[16px] mb-4">{error && error}</p>

                            <div className="flex items-center">
                                <input id="link-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label for="link-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes, I agree with Privacy Policy and Terms of Use</label>
                            </div>


                            <button onClick={onSignUp} type="submit" className="w-full text-white bg-black hover:scale-105 font-medium 
                                rounded-full text-base px-5 py-2.5 text-center">
                                SIGNUP</button>

                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignupModal;
