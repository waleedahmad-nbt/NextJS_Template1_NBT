'use client';
import Image from 'next/image';
import React from 'react';
import TVAudio from "../../../public/images/TV Audio.png";
import tvbox from "../../../public/images/tv box.png";
import Pewer from "../../../public/images/power toolls.png";
import head from "../../../public/images/head.png";
import cell from "../../../public/images/cell phone.png";
import smart from "../../../public/images/smart.png";
import games from "../../../public/images/video.png";
import clean from "../../../public/images/clean.png";
import tablet from "../../../public/images/tablet.png";
import laptop from "../../../public/images/laptop.png";
import camera from "../../../public/images/camers.png";
import Link from 'next/link';

const Categories = () => {

    const slides = [
        { id: 1, imageUrl: TVAudio, text: 'TV & Audio' },
        { id: 2, imageUrl: tvbox, text: 'Headphones' },
        { id: 3, imageUrl: games, text: 'games' },
        { id: 4, imageUrl: Pewer, text: 'Power Tools' },
        { id: 5, imageUrl: head, text: 'Robot' },
        { id: 6, imageUrl: cell, text: 'Sport Watches' },
        { id: 5, imageUrl: smart, text: 'Watches' },
        { id: 7, imageUrl: games, text: 'Watches' },
        { id: 8, imageUrl: clean, text: 'Watches' },
        { id: 9, imageUrl: tablet, text: 'Sport Watches' },
        { id: 10, imageUrl: laptop, text: 'Power Tools' },
        { id: 11, imageUrl: camera, text: 'Headphones' },
    ];
    return (
        <>
            <div className='xl:container xl:mx-auto'>
                <div className="relative max-w-full h-[350px] md:h-[400px] my-16 overflow-hidden mx-3 md:mx-6 lg:mx-8">
                    <img
                        className="object-cover w-full h-full"
                        src="https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/page-collections-banner.jpg"
                        alt="Background Image"
                    />
                    <div className="absolute inset-0 flex flex-col md:p-0 p-20 justify-start md:justify-center  md:items-start text-black md:text-left px-4 md:px-10">
                        <h2 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4">Xiaomi Smart</h2>
                        <p className="text-lg mb-2">The new tech gift you are</p>
                        <p className="text-lg mb-4 md:mb-8"> wishing for right here.</p>
                        <Link href="/pages/Shop">
                            <p className="bg-white text-black text-center w-[160px] font-semibold py-2 md:py-3 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
                                Shop Now
                            </p>
                        </Link>
                    </div>
                </div>

                <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 mx-2 md:mx-8  gap-2 md:gap-7 flex-wrap cursor-pointer'>
                    {slides.map((slide) => (
                        <div key={slide.id} className='flex flex-col w-full items-center rounded-xl pb-5 bg-[#f2f2f2] group'>
                            <Image
                                src={slide.imageUrl}
                                alt="Small Image"
                                width={270}
                                height={250}
                                className='rounded-full object-cover scale-90 transition-transform transform-gpu group-hover:scale-100 duration-700 ease-in-out'
                            />
                            <h5 className='font-bold pt-2'>
                                <a href="#">{slide.text}</a>
                            </h5>
                        </div>
                    ))}
                </div>



            </div>

        </>
    )
}

export default Categories
