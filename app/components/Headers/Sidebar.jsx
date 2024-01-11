'use client';
import React, { useRef, useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import { BsPerson } from "react-icons/bs";
import Link from 'next/link';
import HomeSection from "./HomeSection";
import { FiChevronDown } from "react-icons/fi";
import SignInModal from "./SingIn";

const Sidebar = () => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const [showSignInModal, setShowSignInModal] = useState(false);
    const modalRef = useRef(null);

    const toggleDrawer = () => {
        setDrawerOpen(!isDrawerOpen);
    };

    const CloseDrawer = () => {
        setDrawerOpen(false);
    }


    const openSignInModal = () => {
        setShowSignInModal(true);
    };

    const closeSignInModal = () => {
        setShowSignInModal(false);
    };


    return (
        <>
            {/* Drawer init and show */}
            <IoMenu className="text-3xl block xl:hidden" onClick={toggleDrawer} />
            <div
                id="drawer-navigation"
                className={`fixed top-0 left-0 z-40  mb-32 h-screen p-4 overflow-y-auto transition-transform ${isDrawerOpen ? '' : '-translate-x-full'
                    } bg-white`}
                tabIndex="-1"
                aria-labelledby="drawer-navigation-label">
                <button
                    type="button"
                    onClick={toggleDrawer}
                    aria-controls="drawer-navigation"
                    className="text-black bg-transparent  rounded-lg text-sm p-1.5 absolute top-2.5 end-4 inline-flex items-center"
                >
                    <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                    <span className="sr-only">Close menu</span>
                </button>
                <div className="py-4 overflow-y-auto">
                    <ul className="space-y-7">

                        <li>
                            <Link href="/pages/Categories">
                                <div className='flex space-x-20 items-center'>
                                    <p className="flex items-center duration-300 ease-in-out text-gray-900 hover:text-[#999999]">
                                        <span className="flex-1 text-xl">Categories</span>
                                    </p>
                                    <FiChevronDown className='text-2xl' />
                                </div>
                            </Link>
                        </li>
                        <HomeSection />
                        <li>
                            <Link href="/pages/Shop">
                                <p onClick={CloseDrawer} className="flex items-center duration-300 ease-in-out text-gray-900 hover:text-[#999999]">
                                    <span className="flex-1 text-xl">Shop</span>
                                </p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/pages/Cart">
                                <p onClick={CloseDrawer} className="flex items-center duration-300 ease-in-out text-gray-900 hover:text-[#999999] ">
                                    <span className="flex-1 text-xl">Cart</span>
                                </p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/pages/CheckOut">
                                <p onClick={CloseDrawer} className="flex items-center duration-300 ease-in-out text-gray-900 hover:text-[#999999] ">
                                    <span className="flex-1 text-xl">Checkout</span>
                                </p>
                            </Link>
                        </li>
                        <li>
                            <Link href='/pages/Account'>
                                <p onClick={CloseDrawer} className="flex items-center  duration-300 ease-in-out text-gray-900 hover:text-[#999999] ">
                                    <span className="flex-1 text-xl">My Account</span>
                                </p>
                            </Link>
                        </li>
                        <li >
                            <Link href="/pages/Blog">
                                <p onClick={CloseDrawer} className="flex items-center  duration-300 ease-in-out text-gray-900 hover:text-[#999999] ">
                                    <span className="flex-1 text-xl">Blog</span>
                                </p>
                            </Link>
                        </li>
                    </ul>
                    <div className='flex flex-col space-y-5'>
                        <div className='flex items-center mt-8 space-x-2'>
                            <BsPerson className='text-2xl' />
                            <p className='text-xl text-black font-semibold'>My Account</p>
                        </div>
                        <button onClick={openSignInModal} type="submit" className="w-[310px] h-[45px] focus:outline-none bg-black text-white font-medium rounded-full text-lg px-5 py-2 text-center ">
                            LOGIN
                        </button>
                        <button type="submit" className="w-[310px] h-[45px] focus:outline-none bg-transparent text-black hover:text-white hover:bg-black border-2 duration-500 ease-in-out border-black 
                        font-medium rounded-full text-lg px-5 py-2 text-center ">
                            REGISTER
                        </button>
                    </div>
                </div>
            </div>
            {/* Overlay for opacity */}
            {isDrawerOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-30"
                    onClick={toggleDrawer}
                ></div>
            )}
            {showSignInModal && (
                <div ref={modalRef} >
                    <SignInModal onClose={closeSignInModal} />
                </div>
            )}
        </>
    )
}

export default Sidebar
