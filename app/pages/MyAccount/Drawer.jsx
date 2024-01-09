'use client';
import React, { useState } from 'react';
import { FaList } from 'react-icons/fa';
import { IoCameraOutline } from 'react-icons/io5';
import ProfileSideBar from './ProfileSideBar';

const Drawer = ({ isDrawerOpen,
    toggleDrawer,
    handleSidebarItemClick,
    handleImageChange,
    handleCameraIconClick }) => {
    const [selectedDrawerItem, setSelectedDrawerItem] = useState(null);
    const [image, setImage] = useState(null);

    return (
        <>
            {/* Drawer init and show */}
            <div
                onClick={toggleDrawer}
                className='block md:hidden'>
                <div className="fixed top-0 z-40 left-0 h-[40px] flex items-center duration-500 ease-in-out px-2 rounded-tr-lg rounded-br-lg  m-auto w-[40px] mt-[15rem] bg-[#F8F8F8]
                 hover:text-gray-400">
                    <FaList className="text-lg" />
                </div>
            </div>

            {isDrawerOpen && (
                <>
                    {/* Overlay to cover the entire screen */}
                    <div
                        className="fixed top-0 left-0 w-full h-full"
                    ></div>

                    <div id="drawer-navigation"
                        className={`fixed top-0 left-0 z-40 w-[370px] duration-500 ease-in-out mb-32 h-screen p-4 overflow-y-auto transition-transform ${isDrawerOpen ? '' : '-translate-x-full'
                            } bg-white dark:bg-gray-800`}
                        tabIndex="-1"
                        aria-labelledby="drawer-navigation-label">
                        <button
                            type="button"
                            onClick={toggleDrawer}
                            aria-controls="drawer-navigation"
                            className="text-black bg-transparent  rounded-lg text-sm p-1.5 absolute top-2.5 end-4 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
                            <div className="flex flex-col items-center space-y-4">
                                <input
                                    id="fileInput"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    className="hidden"
                                />
                                <div className="relative mt-8">
                                    <img
                                        alt=""
                                        src={image || "https://secure.gravatar.com/avatar/b8b8c2130eccd98e7be653b78e61cb66?s=108&amp;d=mm&amp;r=g"}
                                        srcSet="https://secure.gravatar.com/avatar/b8b8c2130eccd98e7be653b78e61cb66?s=216&amp;d=mm&amp;r=g 2x"
                                        className="w-28 h-28 object-cover rounded-full shadow-md"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                    <a
                                        onClick={handleCameraIconClick}
                                        className="absolute bottom-2 right-2 bg-gray-800 p-2 rounded-full text-white hover:bg-gray-700 cursor-pointer"
                                        aria-label="Upload"
                                    >
                                        <IoCameraOutline />
                                    </a>
                                </div>
                                <h1 className='text-xl font-medium'>Muhammad Asad</h1>
                            </div>
                            <ProfileSideBar onItemClick={handleSidebarItemClick} />
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default Drawer
