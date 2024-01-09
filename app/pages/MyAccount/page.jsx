'use client';
import React, { useState } from 'react';
import { IoCameraOutline } from 'react-icons/io5';
import ProductTable from './Orders';
import Dashboard from './Dashboard';
import { ImInfo } from "react-icons/im";
import Addresses from './Addresses';
import AccountDetails from './AccountDetails';
import Wishlist from './Wishlist';
import Compare from './Compare';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import toast from 'react-hot-toast';
import Drawer from './Drawer';
import ProfileSideBar from './ProfileSideBar';

const logout = async (router) => {
    try {
        await axios.get('/api/users/logout');
        router.push('/pages/Account');
    } catch (error) {
        toast.error(error.message);
    }
};

const MyAccountPage = () => {
    const [selectedItem, setSelectedItem] = useState('Dashboard');
    const [image, setImage] = useState(null);
    const router = useRouter();
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!isDrawerOpen);
    };

    const handleSidebarItemClick = (item) => {
        setSelectedItem(item);
        if (item === 'LogOut') {
            logout(router);
        }
        // Close the drawer after clicking an item
        setDrawerOpen(false);
    };


    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImage(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleCameraIconClick = () => {
        document.getElementById('fileInput').click();
    };

    return (
        <div>
            <div className='bg-white shadow-2xl flex flex-col lg:flex-row border m-auto mt-28 w-full lg:w-[1200px] h-full'>
                {/* Left Side (Sidebar) */}
                <div className='w-full lg:w-[300px] border-r hidden lg:block'>
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
                {/* Right Side */}
                <div className='w-full lg:w-[900px] h-full'>
                    {selectedItem && (
                        <div className="">
                            {/* Content for the selected item */}
                            {selectedItem === 'Dashboard' &&
                                <div className='mx-4 lg:mx-16 mt-8'>
                                    <Dashboard />
                                </div>
                            }
                            {selectedItem === 'Orders' && <div>
                                <ProductTable className="text-bold scale-110" />
                            </div>}
                            {selectedItem === 'Downloads' && (
                                <div className='m-auto mt-6 flex flex-row items-center justify-between w-full lg:w-[730px] h-[60px] p-3 bg-[#F8F8F8]'>
                                    <div className='lg:flex items-center gap-2'>
                                        <ImInfo />
                                        <p className='text-gray-950'>No downloads available yet.</p>
                                    </div>
                                    <p className='lg:ml-auto mt-2 lg:mt-0 hover:underline underline tracking-wider'>Browse Deals</p>
                                </div>
                            )}
                            {selectedItem === 'Addresses' && <div><Addresses /></div>}
                            {selectedItem === 'Account Details' && <div><AccountDetails /></div>}
                            {selectedItem === 'Compare' && <div><Compare /></div>}
                            {selectedItem === 'LogOut' && <div className='cursor-pointer' onClick={() => handleSidebarItemClick('LogOut')}>{/* Some content */}</div>}
                            {selectedItem === 'Wishlist' && <div><Wishlist /></div>}
                        </div>
                    )}
                </div>
            </div>
            <Drawer
                isDrawerOpen={isDrawerOpen}
                toggleDrawer={toggleDrawer}
                handleSidebarItemClick={handleSidebarItemClick}
                handleImageChange={handleImageChange}
                handleCameraIconClick={handleCameraIconClick} />
        </div>
    );
};

export default MyAccountPage;
