'use client';
import React, { useState } from 'react';
import { CiStar } from 'react-icons/ci';
import { FaEye, FaStar } from 'react-icons/fa';
import { FaArrowRightArrowLeft } from 'react-icons/fa6';

const RecentlyViewed = () => {

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
        },
        {
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
    ];
    return (

        <>
            <div className='mt-20'>
                <h1 className='text-4xl text-center  font-bold'>
                    Recently viewed products
                </h1>

                <div className='mt-8 mx-0 md:mx-6'>
                    <div className='flex flex-row flex-wrap'>
                        {products.map(product => (
                            <>
                                <div className='group'>
                                    <div key={product.id}
                                        onMouseEnter={() => setHoveredProduct(product.id)}
                                        onMouseLeave={() => setHoveredProduct(null)}
                                        className='relative cursor-pointer h-[450px] w-[190px] mt-6 p-3 rounded-lg gap-5 overflow-hidden '>

                                        {/* Image container */}
                                        <div>
                                            <div className='relative w-full h-[216px]  overflow-hidden transition-transform group-hover:transform duration-700 ease-in-out group-hover:scale-105'>
                                                <img
                                                    src={hoveredProduct === product.id ? product.hoverImage : product.imageSrc}
                                                    className='w-full h-full object-cover'
                                                    alt="img"
                                                />

                                                {/* Icons on the right side */}
                                                <div className='absolute top-0 right-0 flex flex-col items-center p-2 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity'>
                                                    <div className='p-3 bg-white rounded-full text-black text-xl group-hover:bg-black group-hover:text-white'>
                                                        <CiStar />
                                                    </div>
                                                    <div className='p-3 bg-white rounded-full text-black text-xl group-hover:bg-black group-hover:text-white'>
                                                        <FaArrowRightArrowLeft />
                                                    </div>
                                                    <div className='p-3 bg-white rounded-full text-black text-xl group-hover:bg-black group-hover:text-white'><FaEye /></div>

                                                </div>

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
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                </div>

            </div>
        </>
    )
}

export default RecentlyViewed
