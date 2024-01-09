'use client';
import React, { useState } from 'react';
import { CiStar } from 'react-icons/ci';
import { FaEye } from 'react-icons/fa';
import { FaArrowRightArrowLeft } from 'react-icons/fa6';

const ThreeColumn =() => {

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
            <div className={`grid grid-cols-3`}>
                {products.map(product => (
                    <>
                        <div key={product.id}
                         onMouseEnter={() => setHoveredProduct(product.id)}
                         onMouseLeave={() => setHoveredProduct(null)}
                        className='relative cursor-pointer h-[470px] w-[320px] mt-6 p-3 rounded-lg group'>

                            {/* Image container */}
                            <div className='relative w-full h-[216px] p-3 overflow-hidden transition-transform group-hover:transform duration-700 ease-in-out group-hover:scale-105'>
                                <img
                                    src={hoveredProduct === product.id ? product.hoverImage : product.imageSrc}
                                    className='w-full h-full object-cover'
                                    alt="img"
                                />

                                {/* Icons on the right side */}
                                <div className='absolute top-0 right-0 flex flex-col items-center p-2 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity'>
                                    <div className='p-3 bg-white rounded-full text-black text-xl star-icon'>
                                        <CiStar />
                                    </div>
                                    <div className='p-3 bg-white rounded-full text-black text-xl'>
                                        <FaArrowRightArrowLeft />
                                    </div>
                                    <div className='p-3 bg-white rounded-full text-black text-xl'><FaEye /></div>

                                </div>


                            </div>

                            {/* Content */}
                            < div className='flex flex-col gap-2 mt-2' >
                                <h6 className='text-gray-500 text-xs font-medium hover:text-gray-800 duration-500 tracking-tight uppercase'>
                                    <a href="https://minimog.thememove.com/supergear/product-category/tv-audio/bluetooth-speakers/">
                                        {product.category}
                                    </a>
                                </h6>
                                <h3 className="text-ellipsis font-semibold leading-6 text-black">
                                    <a href="#">{product.title}</a>
                                </h3>

                                <div className='flex flex-row my-2 font-thin'>
                                    {Array.from({ length: product.rating }).map((_, index) => (
                                        <CiStar key={index} />
                                    ))}
                                </div>

                                <div className="flex flex-row gap-2">
                                    <del aria-hidden="true">
                                        <bdi className="text-gray-500 font-semibold text-md"><span>$</span>{product.originalPrice}</bdi>
                                    </del>
                                    <bdi className='text-red-500 font-semibold'>
                                        <span>$</span>{product.discountedPrice}
                                    </bdi>
                                </div>

                                {/* Read more button */}
                                <a
                                    className="bg-[#F1F1F1] mt-2 text-black px-5 group-hover:bg-black group-hover:text-white flex text-center justify-center font-semibold py-3 rounded-full  duration-300 ease-in-out transform hover:scale-105 opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                    Select Options
                                </a>

                            </div>

                            {/* Border on hover */}
                            <div div className='absolute inset-0 border border-transparent group-hover:border-black rounded-lg' ></div>
                        </div >
                    </>
                ))}
            </div>
        </>
    )
}

export default ThreeColumn
