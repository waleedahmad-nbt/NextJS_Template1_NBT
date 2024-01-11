'use client';
import React, { useState } from 'react';
import { CiStar } from 'react-icons/ci';
import { FaEye } from 'react-icons/fa';
import { HiMiniArrowsRightLeft } from 'react-icons/hi2';
import { products } from '@/app/data';

const TwoColumn = () => {

    const [hoveredProduct, setHoveredProduct] = useState(null);

    return (
        <>


            <div className={`grid grid-cols-2`}>
                {products.map(product => (
                    <>
                        <div key={product.id}
                            onMouseEnter={() => setHoveredProduct(product.id)}
                            onMouseLeave={() => setHoveredProduct(null)}
                            className='relative cursor-pointer h-full w-full mt-6 p-1 rounded-lg group'>

                            {/* Image container */}
                            <div className='relative w-full  p-3 overflow-hidden transition-transform group-hover:transform duration-700 ease-in-out group-hover:scale-105'>
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
                                        <HiMiniArrowsRightLeft />
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
                                    className="bg-[#F1F1F1] mt-2 text-black w-full overflow-ellipsis group-hover:bg-black group-hover:text-white 
                                    flex text-center justify-center font-semibold py-3 rounded-full  duration-300 ease-in-out transform 
                                    hover:scale-105 opacity-0 group-hover:opacity-100 transition-opacity"
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

export default TwoColumn
