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


const PopularCategories = () => {

    const slides = [
        { id: 1, imageUrl: TVAudio, text: 'TV & Audio' },
        { id: 2, imageUrl: tvbox, text: 'Headphones' },
        { id: 3, imageUrl: games, text: 'games' },
        { id: 4, imageUrl: Pewer, text: 'Power Tools' },
        { id: 5, imageUrl: head, text: 'Robot' },
        { id: 6, imageUrl: cell, text: 'Sport Watches' },
        { id: 7, imageUrl: smart, text: 'Watches' },
        { id: 8, imageUrl: games, text: 'Watches' },
        { id: 9, imageUrl: clean, text: 'Watches' },
        { id: 10, imageUrl: tablet, text: 'Sport Watches' },
        { id: 11, imageUrl: laptop, text: 'Power Tools' },
        { id: 12, imageUrl: camera, text: 'Headphones' },
    ];

    return (
        <>
            <div className='mt-20 mx-9 md:mx-12'>
                <div className='flex flex-col md:flex-row border-b justify-between'>
                    <h1 className='text-4xl leading-10 font-bold'>Popular categories</h1>
                    <p className='text-lg underline cursor-pointer'>View all Categories</p>
                </div>
            </div>
            <div className='grid grid-cols-6 gap-2 md:gap-3 mt-10 mx-10 cursor-pointer m-auto text-center justify-center'>
                {slides.map((slide) => (

                    <div key={slide.id} className='flex flex-col items-center rounded-lg pb-5 h-[190px] bg-[#f2f2f2] group'>
                        <Image
                            src={slide.imageUrl}
                            alt="Small Image"
                            width={150}
                            height={150}
                            style={{ objectFit: 'cover' }}
                            className='rounded-full h-[150px] scale-90 transition-transform transform-gpu group-hover:scale-100 duration-700 ease-in-out'
                        />
                        <h5 className='font-bold pb-16'>
                            <Link href="/pages/Shop">
                            <p>{slide.text}</p>
                            </Link>
                        </h5>
                    </div >
                ))}
            </div >


        </>
    )
}

export default PopularCategories
