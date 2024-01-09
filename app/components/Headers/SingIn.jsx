'use client';
import React, { useEffect, useState } from 'react'
import { IoEye, IoEyeOff } from 'react-icons/io5';
import SignupModal from './SignupModal';
import ForgotPassword from '../ForgotPassword/page';
import { RxCross2 } from 'react-icons/rx';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import axios from 'axios';

const AllModals = ({ onClose }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [isSignUpModalOpen, setSignUpModalOpen] = useState(false);
    const [isForgotPasswordModalOpen, setForgotPasswordModalOpen] = useState(false);
    const router = useRouter();

    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const openModal = (modalType) => {
        setForgotPasswordModalOpen(false);
        setSignUpModalOpen(false);
        setIsOpen(true);

        // Open the desired modal
        if (modalType === 'forgotPassword') {
            setForgotPasswordModalOpen(true);
        } else if (modalType === 'signUp') {
            setSignUpModalOpen(true);
        }
    };

    const handleClose = () => {
        setIsOpen(false);
        onClose();
    };


    const handleTogglePassword = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword);
    };
    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login", user);
            console.log("Login Success", response.data);
            toast.success("Login Success");
            router.push("/pages/MyAccount");
        }
        catch (error) {
            console.log("Login Failed", error.message);
            toast.error(error.message);
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (
            user.email.length > 0 &&
            user.password.length > 0
        ) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

    return (
        <>
            <div
                className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
            >
                {isForgotPasswordModalOpen ? (
                    <ForgotPassword onBackToLogin={() => openModal('signIn')} />
                ) : isSignUpModalOpen ? (
                    <SignupModal />
                ) : (
                    <div className='relative'>
                        <RxCross2
                            onClick={handleClose}
                            className="absolute mb-[380px] ml-[470px] shadow-xl duration-500 ease-in-out hover:bg-black hover:text-white z-50 cursor-pointer w-10 h-10 font-light rounded-full p-2 text-lg text-black bg-white"
                        />
                        <div className="bg-white p-6 mt-8 rounded-md w-[500px]">

                            <form className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8" action="#">
                                <h3 className="text-4xl font-semibold text-gray-900 dark:text-white text-center">Sign In</h3>
                                <div>
                                    <p className='text-gray-700 text-sm items-center text-center'>
                                        Don't have an account yet?
                                        <span
                                            onClick={() => openModal('signUp')}
                                            className='font-semibold text-base cursor-pointer'> Sign up
                                        </span>for free
                                    </p>
                                </div>
                                <div>
                                    <input value={user.email}
                                        onChange={(e) => setUser({ ...user, email: e.target.value })} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-[400px] p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        placeholder="Your UserName or Email" required="This field is required"
                                    />
                                </div>
                                <div className="relative">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        name="password"
                                        id="password"
                                        placeholder="Password"
                                        value={user.password}
                                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-[400px]  p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        required="This field is required"
                                    />
                                    {/* Eye Icon for Show/Hide Password */}
                                    <button
                                        className="absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer"
                                        onClick={handleTogglePassword}
                                    >
                                        {showPassword ? (
                                            <IoEyeOff size={24} />
                                        ) : (
                                            <IoEye size={24} />
                                        )}
                                    </button>
                                </div>
                                <div className="flex justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required="" />
                                        </div>
                                        <div className="text-sm ml-3">
                                            <label for="remember" className="font-medium text-gray-900 dark:text-gray-300 cursor-pointer"> Stay signed in</label>
                                        </div>
                                    </div>
                                    <p
                                        onClick={() => openModal('forgotPassword')}
                                        className="text-sm text-black hover:underline hover:text-gray-500">Forgot your password?</p>
                                </div>
                                <button onClick={onLogin} type="submit" className="w-full text-white bg-black hover:scale-105 font-semibold 
                                rounded-full text-base px-5 py-2.5 text-center">
                                    LOGIN</button>
                            </form>
                        </div>

                    </div>
                )}

            </div>


        </>
    )
}
export default AllModals;
