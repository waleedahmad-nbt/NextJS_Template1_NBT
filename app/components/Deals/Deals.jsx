'use client';
import React, { useState } from 'react';
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { IoMdStar } from 'react-icons/io';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/swiper-bundle.css';
import DealSlider from './DealSlider';


const Deals = () => {

    const [selectedThumbnailIndex, setSelectedThumbnailIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false)


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


    const sliderData = [
        {
            id: 1,
            imageUrl: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_29_1-170x170.jpg',
            category: 'Bluetooth Speakers',
            title: 'Klipsch R-120SW Powerful Detailed Home Speaker – Unit',
            rating: 5,
            originalPrice: '$139.00',
            discountedPrice: '$139.00',
        },
        {
            id: 2,
            imageUrl: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_13_2-170x170.jpg',
            category: 'Bluetooth Speakers',
            title: 'Klipsch R-120SW Powerful Detailed Home Speaker – Unit',
            rating: 5,
            originalPrice: '$139.00',
            discountedPrice: '$139.00',
        },
        {
            id: 3,
            imageUrl: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_01_1-655x655.jpeg',
            category: 'Bluetooth Speakers',
            title: 'Klipsch R-120SW Powerful Detailed Home Speaker – Unit',
            rating: 5,
            originalPrice: '$139.00',
            discountedPrice: '$139.00',
        },
        {
            id: 4,
            imageUrl: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_24_3-655x655.jpg',
            category: 'Bluetooth Speakers',
            title: 'Klipsch R-120SW Powerful Detailed Home Speaker – Unit',
            rating: 5,
            originalPrice: '$139.00',
            discountedPrice: '$139.00',
        },
        {
            id: 5,
            imageUrl: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_11_1-655x655.jpg',
            category: 'Bluetooth Speakers',
            title: 'Klipsch R-120SW Powerful Detailed Home Speaker – Unit',
            rating: 5,
            originalPrice: '$139.00',
            discountedPrice: '$139.00',
        },
        {
            id: 6,
            imageUrl: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_26_3-655x655.jpg',
            category: 'Bluetooth Speakers',
            title: 'Klipsch R-120SW Powerful Detailed Home Speaker – Unit',
            rating: 5,
            originalPrice: '$139.00',
            discountedPrice: '$129.00',
        },
        {
            id: 7,
            imageUrl: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_26_3-655x655.jpg',
            category: 'Bluetooth Speakers',
            title: 'Klipsch R-120SW Powerful Detailed Home Speaker – Unit',
            rating: 5,
            originalPrice: '$139.00',
            discountedPrice: '$129.00',
        },
        {
            id: 8,
            imageUrl: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_26_3-655x655.jpg',
            category: 'Bluetooth Speakers',
            title: 'Klipsch R-120SW Powerful Detailed Home Speaker – Unit',
            rating: 5,
            originalPrice: '$139.00',
            discountedPrice: '$129.00',
        },

    ];

    const handleThumbnailClick = (imageUrl, index) => {
        setSelectedImage(imageUrl);
        setSelectedThumbnailIndex(index);
    };

    const handleNextClick = () => {
        if (thumbnails.length > 0) {
            const nextIndex =
                selectedThumbnailIndex === thumbnails.length - 1
                    ? 0
                    : selectedThumbnailIndex + 1;

            if (thumbnails[nextIndex]) {
                setSelectedImage(thumbnails[nextIndex].imageUrl);
                setSelectedThumbnailIndex(nextIndex);
            }
        }
    };

    const handlePrevClick = () => {
        if (thumbnails.length > 0) {
            const prevIndex =
                selectedThumbnailIndex === 0
                    ? thumbnails.length - 1
                    : selectedThumbnailIndex - 1;

            if (thumbnails[prevIndex]) {
                setSelectedImage(thumbnails[prevIndex].imageUrl);
                setSelectedThumbnailIndex(prevIndex);
            }
        }
    };


    return (
        <>
            <div className='xl:container xl:mx-auto'>
                <div className='mt-20 mx-9 md:mx-20'>
                    <div className='flex flex-col md:flex-row gap-4 justify-between border-b'>
                        <h1 className='text-4xl font-bold'>Today’s Best Deals</h1>
                        <p className='text-md mr-7 underline cursor-pointer'>View All</p>
                    </div>
                </div>

                <div className='flex lg:flex-row flex-col  mt-3 mx-2 md:mx-10'>

                    {/* Left Side */}
                    <div className='col-span-2 flex flex-col md:flex-row mt-10 w-[100%] lg:w-[66%] rounded-lg border-2 border-gray-700'>
                        <div className='flex p-2 lg:p-8'>
                            <div className='flex flex-col space-y-2'>
                                {thumbnails.map((thumb, index) => (
                                    <div
                                        onClick={() => handleThumbnailClick(thumb.imageUrl, index)}
                                        key={thumb.id}
                                        className={`flex flex-col w-[60px] h-[60px] cursor-pointer ${index === selectedThumbnailIndex ? 'active-thumbnail' : ''}`}
                                    >
                                        <img src={thumb.imageUrl} alt="" className={`w-[58px] object-contain h-[58px] rounded-md scale-105 border hover:border-gray-700 hover:scale-95 duration-700 ${index === selectedThumbnailIndex ? 'active-thumbnail-image' : ''}`} />
                                    </div>
                                ))}
                            </div>

                            <div className='flex flex-row justify-between relative items-center'
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                <img src={selectedImage} alt="Main Image" className='relative w-[250px] md:w-[300px] lg:w-[275px]' />
                                <button
                                    onClick={handlePrevClick}
                                    className={`text-black absolute left-7 p-2 flex text-center  justify-center h-10  w-10 
                                text-2xl hover:bg-black hover:text-white bg-[#F2F2F2] rounded-full transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                                >
                                    <GrFormPreviousLink />
                                </button>
                                <div className=''>
                                    <button
                                        onClick={handleNextClick}
                                        className={`text-black absolute right-7 top-1 mt-28 p-2 flex text-center m-auto justify-center h-10 w-10 text-2xl hover:bg-black hover:text-white bg-[#f8f8f8] rounded-full transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'
                                            }`}
                                    >
                                        <GrFormNextLink />
                                    </button>
                                </div>
                            </div>

                        </div>
                        {/* Content */}
                        <div className='w-full md:w-1/2 flex flex-col mx-2 gap-3 mt-2 py-4' >
                            <h6 className='text-gray-500 text-xs font-medium hover:text-gray-800 duration-500 tracking-tight uppercase'>
                                <a href="https://minimog.thememove.com/supergear/product-category/tv-audio/bluetooth-speakers/">
                                    Smart Watches
                                </a>
                            </h6>
                            <h3 className="font-bold text-2xl
                         hover:text-gray-500 duration-700 ease-in-out text-black lg:text-ellipsis">
                                <a href="#">Xiaomi Mi Watch Lite GPS Bluetooth 5.1 Smart Watch Sports Fitness Heart Rate Monitor 1.4</a>
                            </h3>

                            <div className='flex flex-row my-2 font-thin'>
                                <IoMdStar />
                                <IoMdStar />
                                <IoMdStar />
                                <IoMdStar />
                                <IoMdStar />
                                <span className='text-gray-600 font-semibold ml-3 text-md'>1 review</span>
                            </div>
                            <div className="flex flex-row gap-2">
                                <del aria-hidden="true">
                                    <bdi className="text-gray-500 font-bold text-xl"><span>$</span>139.00</bdi>
                                </del>
                                <bdi className='text-red-500 text-2xl font-bold'>
                                    <span>$129.00</span>
                                </bdi>
                            </div>

                            <p className='mt-5 text-[#1d8221] leading-5 text-md font-semibold'>Out of stock</p>
                        </div>
                    </div>

                    {/* Rigth Side */}
                    <div className='w-full lg:w-[33%] mt-12'>

                        <Swiper
                            spaceBetween={50}
                            slidesPerView={1}
                        >

                            {sliderData.map((slide, index) => (
                                <SwiperSlide key={slide.id}>
                                    {index * 2 + 1 < sliderData.length && (
                                        <DealSlider products={[sliderData[index * 2], sliderData[index * 2 + 1]]} />
                                    )}
                                </SwiperSlide>
                            ))}
                        </Swiper>



                    </div>

                </div>
            </div>
        </>
    );
};

export default Deals;