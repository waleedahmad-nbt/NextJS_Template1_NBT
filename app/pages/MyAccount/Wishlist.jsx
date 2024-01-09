'use client';
import React, { useEffect, useRef, useState } from 'react';

const Wishlist = () => {

    const [wishlistPath, setWishlistPath] = useState('');
    const inputRef = useRef(null);

    useEffect(() => {
        const currentPath = window.location.pathname;

        setWishlistPath(currentPath);
    }, []);

    const handleCopyClick = () => {
        navigator.clipboard.writeText(wishlistPath)
            .then(() => {
                alert(`Wishlist link copied:\n${wishlistPath}`);

                inputRef.current.select();
            })
            .catch((error) => {
                console.error('Unable to copy to clipboard', error);
            });
    };
    return (
        <>
            <div className=' overflow-auto h-[670px]'>
                <div className='flex flex-row mx-2 lg:mx-20 mt-8 items-center'>
                    <p className='text-md hover:text-red-500 cursor-pointer'>X</p>
                    <img src="https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_18_1-600x600.jpg" className='w-[80px] h-[80px]' alt="" />
                    <div className='flex flex-col'>
                        <p className='text-sm font-medium'>Cwxuan Sports Magnetic Bluetooth V4.1 Stereo Earphone with Microphone</p>
                        <p className='text-[#32BDE8] text-sm'>$15.90</p>
                        <p className='text-xs font-semibold'>December 18, 2023</p>

                    </div>
                    <button type="submit" className="md:w-[200px] w-full h-[46px] px-2 scale-90 hover:scale-105 duration-300 focus:ring-4 focus:outline-none bg-black text-white font-medium rounded-full text-md  text-center">SELECT OPTIONS</button>
                </div>
                <div className='flex flex-row mx-2 lg:mx-20 mt-20 items-center'>
                    <p className='text-md hover:text-red-500 cursor-pointer'>X</p>
                    <img src="https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_18_1-600x600.jpg" className='w-[80px] h-[80px]' alt="" />
                    <div className='flex flex-col'>
                        <p className='text-sm font-medium'>Cwxuan Sports Magnetic Bluetooth V4.1 Stereo Earphone with Microphone</p>
                        <p className='text-[#32BDE8] text-sm'>$15.90</p>
                        <p className='text-xs font-semibold'>December 18, 2023</p>

                    </div>
                    <button type="submit" className="md:w-[200px] w-full h-[46px] px-2 scale-90 hover:scale-105 duration-300 focus:ring-4 focus:outline-none bg-black text-white font-medium rounded-full text-md  text-center ml-auto">SELECT OPTIONS</button>
                </div>
                <div className='flex flex-row mx-2 lg:mx-20 mt-20 items-center'>
                    <p className='text-md hover:text-red-500 cursor-pointer'>X</p>
                    <img src="https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_18_1-600x600.jpg" className='w-[80px] h-[80px]' alt="" />
                    <div className='flex flex-col'>
                        <p className='text-sm font-medium'>Cwxuan Sports Magnetic Bluetooth V4.1 Stereo Earphone with Microphone</p>
                        <p className='text-[#32BDE8] text-sm'>$15.90</p>
                        <p className='text-xs font-semibold'>December 18, 2023</p>

                    </div>
                    <button type="submit" className="md:w-[200px] w-full h-[46px] px-2 scale-90 hover:scale-105 duration-300 focus:ring-4 focus:outline-none bg-black text-white font-medium rounded-full text-md  text-center ml-auto">SELECT OPTIONS</button>
                </div>
                <div className='flex flex-row mx-2 lg:mx-20 mt-20 items-center'>
                    <p className='text-md hover:text-red-500 cursor-pointer'>X</p>
                    <img src="https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_18_1-600x600.jpg" className='w-[80px] h-[80px]' alt="" />
                    <div className='flex flex-col'>
                        <p className='text-sm font-medium'>Cwxuan Sports Magnetic Bluetooth V4.1 Stereo Earphone with Microphone</p>
                        <p className='text-[#32BDE8] text-sm'>$15.90</p>
                        <p className='text-xs font-semibold'>December 18, 2023</p>

                    </div>
                    <button type="submit" className="md:w-[200px] w-full h-[46px] px-2 scale-90 hover:scale-105 duration-300 focus:ring-4 focus:outline-none bg-black text-white font-medium rounded-full text-md  text-center ml-auto">SELECT OPTIONS</button>
                </div>
                <div className='flex flex-row mx-2 lg:mx-20 mt-20 items-center'>
                    <p className='text-md hover:text-red-500 cursor-pointer'>X</p>
                    <img src="https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_18_1-600x600.jpg" className='w-[80px] h-[80px]' alt="" />
                    <div className='flex flex-col'>
                        <p className='text-sm font-medium'>Cwxuan Sports Magnetic Bluetooth V4.1 Stereo Earphone with Microphone</p>
                        <p className='text-[#32BDE8] text-sm'>$15.90</p>
                        <p className='text-xs font-semibold'>December 18, 2023</p>

                    </div>
                    <button type="submit" className="md:w-[200px] w-full h-[46px] px-2 scale-90 hover:scale-105 duration-300 focus:ring-4 focus:outline-none bg-black text-white font-medium rounded-full text-md  text-center ml-auto">SELECT OPTIONS</button>
                </div>
            </div>

            <div className='flex  mx-5 md:mx-20 mt-10 mb-5 gap-5 items-center sticky' onClick={handleCopyClick}>
                <p>Wishlist link:</p>
                <input
                    ref={inputRef}
                    type="text"
                    value={wishlistPath}
                    readOnly
                    className="bg-white border p-2.5 w-full md:w-[270px] py-3
                    border-gray-300 text-gray-900 sm:text-sm rounded-full  block mb-2 md:mb-0"
                    placeholder=""
                    required=""
                />
                <button
                    type="button"

                    className="w-full md:w-[120px] h-[50px] px-4 hover:scale-105 duration-300 focus:ring-4 focus:outline-none bg-black text-white font-medium
                    rounded-full text-md  "
                >
                    COPY
                </button>
            </div>
        </>
    )
}

export default Wishlist
