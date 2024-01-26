import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import { Grid, Pagination } from 'swiper/modules';
import { CiStar } from 'react-icons/ci';

const DealSlider = () => {

    const sliderData = [
        {
            id: 1,
            imageUrl: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_29_1-170x170.jpg',
            category: 'Bluetooth Speakers',
            title: 'Klipsch R-120SW Powerful Detailed Home Speaker – Unit',
            rating: 5,
            originalPrice: '$45.00',
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
            originalPrice: '$13.00',
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
      

    ];
    return (
        <>
            <Swiper
                slidesPerView={1}
                grid={{
                    rows: 2,
                }}
                spaceBetween={0}
                pagination={{
                    clickable: true,
                }}
                modules={[Grid, Pagination]}
                className="w-full h-[340px] mx-auto"
            >
                {sliderData.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="flex flex-row">

                            <img src={item.imageUrl} alt={item.title} className='w-[152px]' />
                            <div className="flex flex-col">
                                <div className='flex flex-row my-2 font-thin'>
                                    {Array.from({ length: item.rating }).map((_, index) => (
                                        <CiStar key={index} />
                                    ))}
                                </div>
                                <span className='text-gray-400 hover:text-black text-sm duration-300 ease-in-out'>{item.category}</span>
                                <h3 className='text-black hover:text-gray-400 font-semibold'>{item.title}</h3>
                                <div className="text-base space-x-2">
                                    <span className="text-red-500"><del>{item.discountedPrice}</del></span>
                                    <span className="text-[#32BDE8]">{item.originalPrice}</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}

export default DealSlider;