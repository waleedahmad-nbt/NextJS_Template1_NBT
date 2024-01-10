'use client';
import React, { useEffect, useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { GoPencil } from 'react-icons/go';
import { RiCouponLine } from "react-icons/ri";
import { LiaShippingFastSolid } from "react-icons/lia";
import EmptyCart from './EmptyCart';

const Page = () => {
    const [clientTime, setClientTime] = useState(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const currentTime = new Date();
            const hours = currentTime.getHours() % 12 || 12;
            const amPm = currentTime.getHours() >= 12 ? 'PM' : 'AM';
            const formattedTime =
                hours +
                ':' +
                (currentTime.getMinutes() < 10 ? '0' : '') +
                currentTime.getMinutes() +
                ':' +
                (currentTime.getSeconds() < 10 ? '0' : '') +
                currentTime.getSeconds() +
                ' ' +
                amPm;

            // Update clientTime state
            setClientTime(formattedTime);
        }, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <div className='xl:container xl:mx-auto'>
                <div className='mt-20'>
                    <div className='flex flex-col items-center'>
                        <h1 className='text-center text-4xl font-bold'>Cart</h1>
                        <p className='text-lg font-semibold invisible md:visible'>
                            🔥 These products are limited, checkout within{' '}
                            {clientTime !== null && (
                                <span className='text-red-600'>{clientTime}</span>
                            )}
                        </p>
                    </div>
                </div>

                <div className="p-4 border-b mx-20 mt-16 lg:block hidden">
                    <div className="container mx-auto flex justify-between items-center">
                        <p className="text-black text-lg">
                            Product
                        </p>
                        <div className="space-x-20">
                            <a href="#" className="text-black">Price</a>
                            <a href="#" className="text-black">Quantity</a>
                            <a href="#" className="text-black ml-10">SubTotal</a>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row justify-between mx-4 md:mx-0'>
                    {/* Left */}
                    <div className='flex mx-2 md:mx-10'>
                        <img
                            src="https://minimog.thememove.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_02_3-110x110.jpg"
                            alt=""
                            className='md:w-[110px] md:h-[110px] h-[75px] w-[75px] mx-1 md:mx-0 items-center mt-4'
                        />
                        {/*  */}
                        <div className='flex flex-col mt-5 gap-1'>
                            <a href='#' className='text-md font-semibold hover:text-gray-500'>
                                ZY418 Ultra-thin Sport MP3 MP4 Music Player Ultra-thin Sport MP3 MP4 Music Player
                            </a>
                            <p className='text-base font-medium'>Color: Sage Green</p>
                            <p>Size: GTS 2 Mini</p>
                            <p className='md:mt-3 mt-1 text-gray-800 hover:text-gray-500 cursor-pointer'>Remove</p>
                        </div>
                        {/*  */}
                    </div>
                    {/* Right */}
                    <div className='md:flex items-center mr-24 gap-9 ml-24 md:ml-0'>
                        <p className='text-[#32BDe8] my-2 md:my-10 hidden md:block'>$129.99</p>
                        <div className="flex justify-center w-[100px] md:w-[120px] h-8 md:h-12 text-center items-center border rounded-3xl
                     mt-2 md:mt-2 space-x-2">
                            <FaMinus className='font-light' />
                            <input
                                className="mx-2 border text-center w-8 h-6 md:h-8 outline-none border-none"
                                type="text"
                                value="1"
                            />
                            <FaPlus className='font-light' />
                        </div>
                        <div className='flex items-center gap-4'>
                            <p className='block md:hidden text-base text-gray-500 font-semibold'>Subtotal:</p>
                            <p className='text-[#32BDe8] my-2 md:my-9'>
                                $129.99
                            </p>
                        </div>
                    </div>
                </div>
                <hr className='border-b mx-4 md:mx-20 mt-2 md:mt-6' />

                <div className='flex flex-col md:flex-row justify-between mx-4 md:mx-0'>
                    {/* Left */}
                    <div className='flex mx-2 md:mx-10'>
                        <img
                            src="https://minimog.thememove.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_02_3-110x110.jpg"
                            alt=""
                            className='md:w-[110px] md:h-[110px] h-[75px] w-[75px] mx-1 md:mx-0 items-center mt-4'
                        />
                        {/*  */}
                        <div className='flex flex-col mt-5 gap-1'>
                            <a href='#' className='text-md font-semibold hover:text-gray-500'>
                                ZY418 Ultra-thin Sport MP3 MP4 Music Player Ultra-thin Sport MP3 MP4 Music Player
                            </a>
                            <p className='text-base font-medium'>Color: Sage Green</p>
                            <p>Size: GTS 2 Mini</p>
                            <p className='md:mt-3 mt-1 text-gray-800 hover:text-gray-500 cursor-pointer'>Remove</p>
                        </div>
                        {/*  */}
                    </div>
                    {/* Right */}
                    <div className='md:flex items-center mr-24 gap-9 ml-24 md:ml-0'>
                        <p className='text-[#32BDe8] my-2 md:my-10 hidden md:block'>$129.99</p>
                        <div className="flex justify-center w-[100px] md:w-[120px] h-8 md:h-12 text-center items-center border rounded-3xl
                     mt-2 md:mt-2 space-x-2">
                            <FaMinus className='font-light' />
                            <input
                                className="mx-2 border text-center w-8 h-6 md:h-8 outline-none border-none"
                                type="text"
                                value="1"
                            />
                            <FaPlus className='font-light' />
                        </div>
                        <div className='flex items-center gap-4'>
                            <p className='block md:hidden text-base text-gray-500 font-semibold'>Subtotal:</p>
                            <p className='text-[#32BDe8] my-2 md:my-9'>
                                $129.99
                            </p>
                        </div>
                    </div>

                </div>
                <hr className='border-b mx-4 md:mx-20 mt-2 md:mt-6' />

                <div className='flex flex-col md:flex-row justify-between mx-4 md:mx-0'>
                    {/* Left */}
                    <div className='flex mx-2 md:mx-10'>
                        <img
                            src="https://minimog.thememove.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_02_3-110x110.jpg"
                            alt=""
                            className='md:w-[110px] md:h-[110px] h-[75px] w-[75px] mx-1 md:mx-0 items-center mt-4'
                        />
                        {/*  */}
                        <div className='flex flex-col mt-5 gap-1'>
                            <a href='#' className='text-md font-semibold hover:text-gray-500'>
                                ZY418 Ultra-thin Sport MP3 MP4 Music Player Ultra-thin Sport MP3 MP4 Music Player
                            </a>
                            <p className='text-base font-medium'>Color: Sage Green</p>
                            <p>Size: GTS 2 Mini</p>
                            <p className='md:mt-3 mt-1 text-gray-800 hover:text-gray-500 cursor-pointer'>Remove</p>
                        </div>
                        {/*  */}
                    </div>
                    {/* Right */}
                    <div className='md:flex items-center mr-24 gap-9 ml-24 md:ml-0'>
                        <p className='text-[#32BDe8] my-2 md:my-10 hidden md:block'>$129.99</p>
                        <div className="flex justify-center w-[100px] md:w-[120px] h-8 md:h-12 text-center items-center border rounded-3xl
                     mt-2 md:mt-2 space-x-2">
                            <FaMinus className='font-light' />
                            <input
                                className="mx-2 border text-center w-8 h-6 md:h-8 outline-none border-none"
                                type="text"
                                value="1"
                            />
                            <FaPlus className='font-light' />
                        </div>
                        <div className='flex items-center gap-4'>
                            <p className='block md:hidden text-base text-gray-500 font-semibold'>Subtotal:</p>
                            <p className='text-[#32BDe8] my-2 md:my-9'>
                                $129.99
                            </p>
                        </div>
                    </div>

                </div>

                <hr className='border-b mx-4 md:mx-20 mt-2 md:mt-6' />
                <div className='w-full md:w-[400px] h-[350px] bg-[#FFFFFF] shadow-2xl flex flex-col ml-auto p-9 z-50 m-14 rounded-md'>
                    <div className='flex flex-row gap-2 h-[60px] border-b mx-auto'>
                        <div className='flex flex-col w-[70px] sm:w-[100px] items-center border-r mb-2'>
                            <GoPencil className='text-2xl' />
                            <p>Note</p>
                        </div>
                        <div className='flex flex-col w-[70px] sm:w-[100px] items-center border-r mb-2'>
                            <LiaShippingFastSolid className='text-2xl' />
                            <p>Shipping</p>
                        </div>
                        <div className='flex flex-col w-[70px] sm:w-[100px] items-center mb-2'>
                            <RiCouponLine className='text-2xl' />
                            <p className='text-lg'>Coupon</p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-between h-[50px] items-center border-b'>
                        <p>Subtotal</p>
                        <p className='text-[#32BDe8]'>$1,527.39</p>
                    </div>
                    <div className='flex flex-row justify-between items-center h-[77px] border-b'>
                        <p>Shipping</p>
                        <div className='flex flex-col gap-2'>
                            <p className='flex flex-row gap-2 items-center'>
                                <input
                                    id="default-checkbox"
                                    type="checkbox"
                                    value=""
                                    className="w-4 h-4 text-black bg-gray-100 border-gray-300 rounded-full focus:ring-black dark:focus:ring-black"
                                />
                                <p>Free shipping</p>
                            </p>
                            <p className='flex flex-row gap-2 items-center'>
                                <input
                                    id="default-checkbox"
                                    type="checkbox"
                                    value=""
                                    className="w-4 h-4 text-black bg-gray-100 border-gray-300 rounded-full focus:ring-black dark:focus:ring-black"
                                />
                                <p>Flat rate: <span className='text-[#32BDe8]'>$10.00</span></p>
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-between h-[50px] items-center'>
                        <p>Total</p>
                        <p className='text-[#32BDe8]'>$1,527.39</p>
                    </div>
                    <button className='w-full flex items-center text-center justify-center text-lg text-white font-semibold h-10 mt-1 bg-black rounded-full duration-500 transform hover:scale-110 scale-105'>
                        CHECKOUT
                    </button>
                </div>


                <EmptyCart />
            </div>
        </>
    );
}

export default Page;
