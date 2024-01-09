'use client';
import React, { useEffect, useRef, useState } from 'react';

const page = () => {
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
            <div className=''>
                <div className='mt-20'>
                    <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white">
                        Wishlist
                    </h1>
                    <div className='flex flex-col space-y-6 mt-9 mx-8 md:mx-20'>
                        <div className='flex flex-row  items-center border-b'>
                            <p className='text-lg hover:text-red-500 cursor-pointer'>X</p>
                            <img src="https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_18_1-600x600.jpg" className='w-[80px] h-[80px]' alt="" />
                            <div className='flex flex-col'>
                                <p className='text-lg font-medium'>Cwxuan Sports Magnetic Bluetooth V4.1 Stereo Earphone with Microphone</p>
                                <p className='text-[#32BDE8] text-base'>$15.90</p>
                                <p className='text-base font-medium'>December 18, 2023</p>

                            </div>
                            <button
                                type="submit"
                                className="w-[200px] h-[50px] px-4 hover:scale-105 duration-300 focus:ring-4 focus:outline-none
                                 bg-black text-white font-medium rounded-full text-lg text-center ml-auto"
                            >
                                <span className="hidden md:inline">Select Options</span>
                                <span className="md:hidden">Select</span>
                            </button>
                        </div>
                        <div className='flex flex-row  items-center border-b'>
                            <p className='text-lg hover:text-red-500 cursor-pointer'>X</p>
                            <img src="https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_18_1-600x600.jpg" className='w-[80px] h-[80px]' alt="" />
                            <div className='flex flex-col'>
                                <p className='text-lg font-medium'>Cwxuan Sports Magnetic Bluetooth V4.1 Stereo Earphone with Microphone</p>
                                <p className='text-[#32BDE8] text-base'>$15.90</p>
                                <p className='text-base font-medium'>December 18, 2023</p>

                            </div>
                            <button
                                type="submit"
                                className="w-[200px] h-[50px] px-4 hover:scale-105 duration-300 focus:ring-4 focus:outline-none
                                 bg-black text-white font-medium rounded-full text-lg text-center ml-auto"
                            >
                                <span className="hidden md:inline">Select Options</span>
                                <span className="md:hidden">Select</span>
                            </button>

                        </div>
                        <div className='flex flex-row  items-center border-b'>
                            <p className='text-lg hover:text-red-500 cursor-pointer'>X</p>
                            <img src="https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_18_1-600x600.jpg" className='w-[80px] h-[80px]' alt="" />
                            <div className='flex flex-col'>
                                <p className='text-lg font-medium'>Cwxuan Sports Magnetic Bluetooth V4.1 Stereo Earphone with Microphone</p>
                                <p className='text-[#32BDE8] text-base'>$15.90</p>
                                <p className='text-base font-medium'>December 18, 2023</p>

                            </div>
                            <button
                                type="submit"
                                className="w-[200px] h-[50px] px-4 hover:scale-105 duration-300 focus:ring-4 focus:outline-none
                                 bg-black text-white font-medium rounded-full text-lg text-center ml-auto"
                            >
                                <span className="hidden md:inline">Select Options</span>
                                <span className="md:hidden">Select</span>
                            </button>
                        </div>
                    </div>


                    <div className='flex flex-row mx-4 md:mx-20 mt-20 gap-5 items-center' onClick={handleCopyClick}>
                        <p>Wishlist link:</p>
                        <input
                            ref={inputRef}
                            type="text"
                            value={wishlistPath}
                            readOnly
                            className="bg-white border p-2.5 w-[270px] py-3
                               border-gray-300 text-gray-900 sm:text-sm rounded-full  block "
                            placeholder=""
                            required=""
                        />
                        <button
                            type="button"

                            className="w-[120px] h-[50px] px-4 hover:scale-105 duration-300 focus:ring-4 focus:outline-none bg-black text-white font-medium
                    rounded-full text-md "
                        >
                            COPY
                        </button>
                    </div>


                </div>
            </div>
        </>
    )
}
export default page;