'use client';
import React, { useEffect, useState } from 'react';
import { FaRegEye, FaRegStar } from 'react-icons/fa'
import { FaArrowRightArrowLeft } from 'react-icons/fa6'
import { IoMdStarOutline } from 'react-icons/io'

const List = () => {

    const [hoveredProduct, setHoveredProduct] = useState(null);


    const products = [
        {
            id: 1,
            imageSrc: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/03/product_gear_speaker_1_1-655x655.jpg',
            hoverImage: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/03/product_gear_speaker_1_2-450x450.jpg',
            title: 'Klipsch R-120SW Powerful Detailed Home Speaker – Unit',
            rating: 5,
            originalPrice: 139.00,
            discountedPrice: 129.00,
        },
        {
            id: 2,
            imageSrc: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_32_1-655x655.jpg',
            hoverImage: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_32_3-450x450.jpg',

            category: 'Bluetooth Speakers',
            title: 'Klipsch R-120SW Powerful Detailed Home Speaker – Unit',
            rating: 5,
            originalPrice: 139.00,
            discountedPrice: 129.00,
        },
        {
            id: 3,
            imageSrc: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_31_1-655x655.jpg',
            hoverImage: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_31_2-655x655.jpg',

            title: 'UMIDIGI Power 3 6150mAh 6.53 Inch FHD+ 4GB Global Version Helio P60 64GB ROM Quad Camera Android 10 Face ID Smartphone',
            rating: 5,
            discountedPrice: 219.90,
        }, {
            id: 4,
            imageSrc: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_30_1-655x655.jpg',
            hoverImage: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_30_2-655x655.jpg',

            category: 'Bluetooth Speakers',
            title: 'Klipsch R-120SW Powerful Detailed Home Speaker – Unit',
            rating: 5,
            originalPrice: 139.00,
            discountedPrice: 129.00,
        },
        {
            id: 5,
            imageSrc: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_29_1-655x655.jpg',
            hoverImage: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_29_2-655x655.jpg',
            category: 'Bluetooth Speakers',
            title: 'Klipsch R-120SW Powerful Detailed Home Speaker – Unit',
            rating: 5,
            originalPrice: 139.00,
            discountedPrice: 129.00,
        },
        {
            id: 6,
            imageSrc: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_29_1-655x655.jpg',
            hoverImage: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_29_2-655x655.jpg',
            category: 'Bluetooth Speakers',
            title: 'Klipsch R-120SW Powerful Detailed Home Speaker – Unit',
            rating: 5,
            originalPrice: 139.00,
            discountedPrice: 129.00,
        },
        {
            id: 7,
            imageSrc: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_27_1-655x655.jpg',
            hoverImage: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_27_2-655x655.jpg',
            category: 'Bluetooth Speakers',
            title: 'DIDSeth Pan Tilt Security Light Camera Full HD 1080P Wireless Wi-Fi IP Camera Home Dome Surveillance Cameras',
            rating: 5,
            originalPrice: 49.00,
            discountedPrice: 48.00,
        }, {
            id: 8,
            imageSrc: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_26_3-655x655.jpg',
            hoverImage: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_26_1-655x655.jpg',
            category: 'Bluetooth Speakers',
            title: 'VIOMI V2 Pro LDS Sensor 2 In 1 Sweeping Mopping Robot Wet And Dry Vacuum Cleaner 2100Pa Strong Suction Self-Charging',
            rating: 5,
            originalPrice: 139.00,
            discountedPrice: 129.00,
        }, {
            id: 9,
            imageSrc: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_25_1-655x655.jpg',
            hoverImage: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_25_2-655x655.jpg',
            category: 'Bluetooth Speakers',
            title: 'Teclast F7 Plus 14.1 Inch Notebook Intel N4100 8GB RAM 256GB SSD – Platinum 8GB+256GB',
            rating: 5,
            originalPrice: 139.00,
            discountedPrice: 129.00,
        },
        {
            id: 10,
            imageSrc: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_24_3-655x655.jpg',
            hoverImage: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_24_1-655x655.jpg',
            category: 'Bluetooth Speakers',
            title: 'Xiaomi Mi Watch Lite GPS Bluetooth 5.1 Smart Watch Sports Fitness Heart Rate Monitor 1.4 Inch TFTLCD Screen 5 ATM Waterproof Mi Band',
            rating: 5,
            originalPrice: 139.00,
            discountedPrice: 129.00,
        },
    ];
    return (
        <>
            <div>



                {products.map((product) => (
                    <div
                        onMouseEnter={() => setHoveredProduct(product.id)}
                        onMouseLeave={() => setHoveredProduct(null)}
                        key={product.id}
                        className={`flex sm:flex-row flex-col items-center mb-8 -z-10`}>

                        <img
                            src={hoveredProduct === product.id ? product.hoverImage : product.imageSrc}
                            className="w-[270px] h-[270px]  transition-all duration-1000 ease-in-out hover:scale-105"
                            alt=""
                        />


                        < div className='flex flex-col gap-3 mt-2 justify-center m-3 md:ml-16 w-full'>

                            <div className='flex flex-row'>

                                {Array.from({ length: product.rating }).map((_, index) => (
                                    <IoMdStarOutline key={index} />
                                ))}
                            </div>

                            <h6 className='text-gray-500 text-xs font-medium hover:text-gray-800 duration-500 tracking-tight uppercase'>
                                <a href="https://minimog.thememove.com/supergear/product-category/tv-audio/bluetooth-speakers/">
                                    {product.category}
                                </a>
                            </h6>

                            <h3 className="font-bold text-xl font-sans leading-8 hover:text-gray-500 text-start duration-700 ease-in-out text-black">
                                <a href="#">
                                    {product.title}
                                </a>
                            </h3>


                            <div>
                                <p className='text-[#32BDE8] text-lg font-semibold'>{product.originalPrice}</p>
                            </div>


                            <p className='text-gray-500 text-base mt-3 font-medium'>
                                For Alexa It can be used not only in the United States, but also all countries which people speak English with American accent.…
                            </p>



                            <div className='flex flex-row mb-3 items-center gap-10'>
                                <a href='#'
                                    className="bg-black mt-2 w-[180px] text-[#F1F1F1] px-2 text-center justify-center flex font-semibold py-3 rounded-full  duration-300 ease-in-out transform hover:scale-105"
                                >
                                    SELECT OPTIONS
                                </a>
                                <FaRegStar className='text-xl' />
                                <FaArrowRightArrowLeft className='text-xl' />
                                <FaRegEye className='text-xl' />
                            </div>


                        </div>
                    </div>

                ))}

            </div>

        </>
    )
}

export default List
