'use client';
import React from 'react';
import { BiMessageRoundedDots } from "react-icons/bi";

const page = () => {

    const slides = [
        {
            id: 1,
            imageUrl: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/blog_geart_01-427x250.jpg',
            category: 'TECHNOLOGY',
            title: 'Setup your Surround sound speaker',
        },
        {
            id: 2,
            imageUrl: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/blog_geart_02-427x250.jpg',
            category: 'LIFE STYLE',
            title: 'Hook up a receiver for you Home Theater',
        }, {
            id: 3,
            imageUrl: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/blog_geart_03-427x250.jpg',
            category: 'TECHNOLOGY',
            title: 'TOp most Comfortable Headphones',
        },
        {
            id: 4,
            imageUrl: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/blog_gear_04-427x250.jpg',
            category: 'TECHNOLOGY',
            title: 'CUBOT X20 PRO: iPhone 11 rear camera design will be available for sale',
        }, {
            id: 5,
            imageUrl: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/blog_gear_05-427x250.jpg',
            category: 'TECHNOLOGY',
            title: 'CUBOT X20 PRO: iPhone 11 rear camera design will be available for sale on SuperGear'
        }, {
            id: 6,
            imageUrl: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/blog_gear_06-427x250.jpg',
            category: 'TECHNOLOGY',
            title: 'Get Teclast T30 tablet at an unexpected price at SuperGear',
        },
        {
            id: 7,
            imageUrl: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/blog_gear_07-427x250.jpg',
            category: 'TECHNOLOGY',
            title: 'Amazfit GTR Titanium Edition and Austrian Zircon Version will Officially go on Exclusive Global Sale',
        }, {
            id: 8,
            imageUrl: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/blog_gear_08-427x250.jpg',
            category: 'TECHNOLOGY',
            title: 'Don’t miss out! Xiaomi Mi Note 10 exclusive global launch hit',
        }, {
            id: 9,
            imageUrl: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/blog_gear_10-427x250.jpg',
            category: 'TECHNOLOGY',
            title: 'Do you want a stylish smartphone with a pop-up camera for budget price? Take the Elephone PX (2019)',
        },
        {
            id: 10,
            imageUrl: ' https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/home-hero-banner-427x250.jpg',
            category: 'TECHNOLOGY',
            title: 'DJI Mavic Mini: the ultra-light consumer drone for beginner sale',
        },
    ];


    return (
        <>
            <div className='mx-12 mt-20'>
                <h1 className="text-4xl font-bold text-center text-gray-900">
                    Blog
                </h1>
                <div className='flex lg:flex-row flex-col gap-6 mt-16 md:-mx-4 -mx-0'>
                    <div className='flex flex-row flex-wrap w-full md:w-full lg:w-[80%] px-4 md:px-0'>
                        {slides.map((slide) => (
                            <div key={slide.id} className='flex flex-col mb-2 gap-2 w-full md:w-1/2 px-2 md:px-0 cursor-pointer scale-110 md:scale-95'>
                                <img
                                    src={slide.imageUrl}
                                    alt='Blog Post Image'
                                    className='transition-transform transform object-cover w-full  hover:scale-100 duration-700'
                                />
                                <h4 className='text-base font-bold mt-2 text-gray-800 hover:text-gray-500'>{slide.category}</h4>
                                <p className='text-2xl mb-8 font-bold mt-2 leading-7 text-ellipsis'>{slide.title}</p>
                            </div>
                        ))}
                    </div>


                    <div className='md:w-[300px] mx-4 w-full flex flex-col gap-6'>
                        <div className='mb-3'>
                            <h1 className='text-2xl font-semibold mb-3'>Categories</h1>
                            <ul className='flex flex-col gap-2'>
                                <li className='text-gray-600 font-medium hover:underline cursor-pointer'>Life Style</li>
                                <li className='text-gray-600 font-medium hover:underline cursor-pointer'>Technology</li>
                            </ul>
                        </div>

                        <div>
                            <h1 className='text-2xl font-semibold mb-3'>Recent Comments</h1>
                            <ol className="flex flex-col gap-2">
                                <li className="flex flex-row items-start gap-1 mb-2">
                                    <BiMessageRoundedDots className='text-4xl' />
                                    <p className='text-black hover:text-gray-600 font-semibold cursor-pointer'> <span className='text-gray-800 text-sm cursor-pointer hover:text-gray-400'>jenniferc </span> on Klipsch R-120SW Powerful Detailed Home Speaker – Unit</p>
                                </li>
                                <li className="flex flex-row items-start gap-1 mb-2">
                                    <BiMessageRoundedDots className='text-4xl' />
                                    <p className='text-black hover:text-gray-600 font-semibold cursor-pointer'> <span className='text-gray-800 text-sm cursor-pointer hover:text-gray-400'>jenniferc </span> on Klipsch R-120SW Powerful Detailed Home Speaker – Unit</p>
                                </li>

                            </ol>
                        </div>

                        <div>
                            <h1 className='text-2xl font-semibold mb-3'>Recent Posts</h1>
                            <div className='flex flex-col gap-4'>
                                {slides.map((slide) => (
                                    <div key={slide.id} className='flex flex-row'>

                                        <img src={slide.imageUrl}
                                            className='w-[70px] h-[46px] transition-transformtransform object-cover hover:scale-105 duration-700'
                                            alt="" />
                                        <div className='flex flex-col'>
                                            <a className='text-xs scale-95 hover:text-gray-500 cursor-pointer'>{slide.category}</a>
                                            <a className='text-base font-semibold scale-95 text-ellipsis'>{slide.title}</a>
                                        </div>

                                    </div>
                                ))}
                            </div>

                        </div>


                        <div>
                            <h1 className='text-2xl font-semibold mb-3'>Tags</h1>
                            <div className='flex flex-row flex-wrap gap-6'>
                                <p className='hover:underline hover:text-gray-500 text-gray-600 font-semibold text-xl'>audio</p>
                                <p className='hover:underline hover:text-gray-500 text-gray-600 font-semibold text-xl'>life style</p>
                                <p className='hover:underline hover:text-gray-500 text-gray-600 font-semibold text-xl'>smart watch</p>
                                <p className='hover:underline hover:text-gray-500 text-gray-600 font-semibold text-xl'>sport watch</p>
                                <p className='hover:underline hover:text-gray-500 text-gray-600 font-semibold text-xl'>supergear</p>
                                <p className='hover:underline hover:text-gray-500 text-gray-600 font-semibold text-xl'>technology</p>
                            </div>
                        </div>


                    </div>

                </div>

            </div>
        </>
    )
}

export default page
