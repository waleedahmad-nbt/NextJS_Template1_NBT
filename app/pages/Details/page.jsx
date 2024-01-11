'use client';
import React, { useState } from 'react';
import { FaMinus, FaPlus, FaRegEye, FaRegQuestionCircle, FaRegStar } from 'react-icons/fa';
import { FaArrowRightArrowLeft } from 'react-icons/fa6';
import { IoShareSocialOutline } from 'react-icons/io5';
import { TbTruckDelivery } from "react-icons/tb";
import { GoInbox } from "react-icons/go";
import ProductSection from './ProductSection';
import Comparison from './Comparison';
import RelatedProducts from './Related products';
import RecentlyViewed from './RecentlyViewed';
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, addToFavorites, decrement, increment } from '@/app/lib/redux/slices/cartSlice';

const Details = () => {

    const [selectedThumbnailIndex, setSelectedThumbnailIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.cart.value);


    const handleIncrement = () => {
        dispatch(increment());
    }
    const handleDecrement = () => {
        dispatch(decrement());
    }

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
    }

    const handleAddToFavorites = (product) => {
        dispatch(addToFavorites(product));
    };


    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const thumbnails = [
        {
            id: 1,
            imageUrl: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_02_1-1-450x450.jpg',
        },
        {
            id: 2,
            imageUrl: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_24_3-450x450.jpg'
        },
        {
            id: 3,
            imageUrl: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_23_5-450x450.jpg'
        },
        {
            id: 4,
            imageUrl: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_02_3-655x655.jpg'
        },
    ];

    const [selectedImage, setSelectedImage] = useState(thumbnails.length > 0 ? thumbnails[0].imageUrl : '');


    const handleThumbnailClick = (imageUrl, index) => {
        setSelectedImage(imageUrl);
        setSelectedThumbnailIndex(index);
    };

    const handleNextClick = () => {
        const nextIndex = (selectedThumbnailIndex + 1) % thumbnails.length;
        setSelectedImage(thumbnails[nextIndex].imageUrl);
        setSelectedThumbnailIndex(nextIndex);
    };

    const handlePrevClick = () => {
        const prevIndex = (selectedThumbnailIndex - 1 + thumbnails.length) % thumbnails.length;
        setSelectedImage(thumbnails[prevIndex].imageUrl);
        setSelectedThumbnailIndex(prevIndex);
    };
    return (
        <>
            <div className='xl:container xl:mx-auto px-4 md:px-4 lg:px-10 xl:px-12'>
                <div className='flex flex-col md:flex-row mt-10'>
                    <div className='flex flex-col items-center w-2/12'>
                        <div className='hidden md:block'>
                            {thumbnails.map((thumb, index) => (
                                <div
                                    key={thumb.id}
                                    onClick={() => handleThumbnailClick(thumb.imageUrl, index)}
                                    className={`flex flex-col w-[100px] h-[100px] cursor-pointer ${index === selectedThumbnailIndex ? 'active-thumbnail' : ''}`}
                                >
                                    <img src={thumb.imageUrl} alt="" className={`w-[90px] object-contain h-[90px] rounded-md border hover:border-gray-700 hover:scale-95 duration-700 ${index === selectedThumbnailIndex ? 'active-thumbnail-image' : ''}`} />

                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Main Image */}

                    <div className='relative items-center w-full md:w-2/6'
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="relative">
                            <div className="relative group" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                {isHovered && (
                                    <>
                                        <button
                                            className="text-black  transition-opacity duration-500 absolute p-2 flex text-center justify-center h-[45px] w-[45px] top-1/2 left-4 transform -translate-y-1/2 text-2xl hover:bg-black hover:text-white bg-[#F2F2F2] rounded-full"
                                            onClick={handlePrevClick}
                                        >
                                            <GrFormPreviousLink />
                                        </button>
                                        <button
                                            className="transition-opacity ml-7 duration-500 absolute p-2 flex text-center justify-center h-[45px] w-[45px] top-1/2 right-4 transform -translate-y-1/2 text-black text-2xl hover:bg-black hover:text-white bg-[#F2F2F2] rounded-full"
                                            onClick={handleNextClick}
                                        >
                                            <GrFormNextLink />
                                        </button>
                                    </>
                                )}
                                <img src={selectedImage} alt="Main Image" className='w-[450px] h-[470px] object-cover' />
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    < div className='flex flex-col mt-6 md:w-1/3 lg:w-1/2 mx-auto md:mx-0' >
                        <div className='flex flex-row '>
                            <h3 className="font-bold text-xl md:text-2xl  leading-8 text-start duration-700 ease-in-out text-black">
                                <a href="#">Xiaomi Mi Watch Lite GPS Bluetooth 5.1 Smart Watch Sports Fitness Heart Rate Monitor 1.4 Inch TFTLCD Screen 5 ATM Waterproof Mi Band</a>
                            </h3>
                            {/* <WishlistModal /> */}
                            <div onClick={() => handleAddToFavorites(product)} className=' px-3 text-xl mt-24 bg-white border-2 w-12 h-12 flex items-center rounded-full text-black hover:text-white hover:bg-black duration-700 transform-gpu'>
                                <FaRegStar />
                            </div>
                        </div>

                        <div className='flex flex-row my-2 px-3 justify-between mt-6 font-thin'>
                            <div>
                                <p className='text-[#32BDE8] text-2xl font-semibold'>$129.00</p>
                            </div>
                            <div className='flex flex-row items-center'>
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <span className='text-gray-600 ml-3 text-md'>(0 review)</span>
                            </div>
                        </div>

                        <div className='flex fle-row items-center gap-2 mt-3'>
                            <FaRegEye />
                            <p className='leading-7 font-medium text-md tracking-tight'> <span className='text-lg font-semibold'> 20 </span> people are viewing this right now
                            </p>
                        </div>
                        <div className='flex flex-col mt-6'>
                            <p>Color:</p>
                            <div className='flex flex-row gap-2'>
                                <div class="w-12 h-12 rounded-full border-2 overflow-hidden bg-[#ade9b7] hover:scale-110 transform-gpu transition-transform duration-300">
                                </div>
                                <div class="w-12 h-12 rounded-full border-2 overflow-hidden bg-[#dd3333] hover:scale-110 transform-gpu transition-transform duration-300">
                                </div>
                                <div class="w-12 h-12 rounded-full border-2 overflow-hidden bg-[#757575] hover:scale-110 transform-gpu transition-transform duration-300">
                                </div>
                            </div>
                        </div>

                        <p className='mt-4 font-semibld text-lg'>Quantity</p>
                        <div className='flex flex-row gap-3 md:gap-8 items-center'>
                            <div className="flex w-[150px] mt-4 max-w-[150px] h-max bg-[#F1F1F1] px-5 py-3 justify-between rounded-3xl items-center overflow-hidden">
                                <button onClick={handleDecrement} className="h-full px-1"><FaMinus /></button>
                                <p className="h-full w-[50px] flex justify-center items-center">
                                    {counter}
                                </p>
                                <button onClick={handleIncrement} className="h-full px-1">
                                    <FaPlus />
                                </button>
                            </div>
                            <button onClick={() => handleAddToCart(item)} className='w-full text-md text-black font-semibold h-12 mt-3 bg-[#F1F1F1] rounded-full hover:bg-black
                         hover:text-white duration-500 transform hover:scale-110 lg:mr-3'>
                                Add To Cart
                            </button>

                        </div>

                        <button className='w-full text-lg mt-3 text-white font-semibold h-12  bg-black rounded-full
                     duration-500 transform hover:scale-105'>
                            Buy Now
                        </button>



                        <div className='flex flex-row flex-wrap mt-2 mx-2 gap-8 mb-3'>
                            <div className='flex flex-row gap-3 items-center font-medium cursor-pointer hover:text-gray-500 duration-300'>
                                <FaArrowRightArrowLeft />
                                <p>Compare</p>
                            </div>
                            <div className='flex flex-row gap-3 items-center font-medium cursor-pointer hover:text-gray-500 duration-300'>
                                <FaRegQuestionCircle />
                                <p>Ask a Question</p>
                            </div>
                            <div className='flex flex-row gap-3 items-center font-medium cursor-pointer hover:text-gray-500 duration-300'>
                                <IoShareSocialOutline className='text-lg font-bold' />
                                <p>Share</p>
                            </div>

                        </div>
                        <hr />
                        <div className='flex flex-row mx-4 gap-2 mt-4'>
                            <p className='flex items-center gap-2 font-semibold text-gray-700'> <TbTruckDelivery className='text-2xl' /> Estimated Delivery:</p>
                            <p className='text-gray-500 font-semibold'>15 - 22 Dec, 2023</p>
                        </div>
                        <div className='flex flex-row mx-4 gap-2 mt-3'>
                            <p className='flex items-center gap-2 font-semibold text-gray-700'> <GoInbox className='text-2xl' />Free Shipping & Returns:
                            </p>
                            <p className='text-gray-500 font-medium '>On all orders over <span className='text-[#32BDE8]'> $200.00 </span> </p>
                        </div>

                        <div className='w-full pt-4 h-[80px] bg-[#F1F1F1] gap-2 mx-4 rounded-lg mt-3 flex flex-col items-center'>
                            <img src="https://minimog-4437.kxcdn.com/supergear/wp-content/themes/minimog/assets/woocommerce/product-trust-badge.png" alt="" />
                            <p className='text-sm font-semibold text-gray-700'>Guaranteed safe & secure checkout</p>
                        </div>

                    </div>



                </div>

                <div className=' mt-20 mx-4 md:mx-14'>
                    <ProductSection />
                    <Comparison />
                    <RelatedProducts />
                    <RecentlyViewed />
                </div>
            </div>


        </>
    );
};

export default Details;
