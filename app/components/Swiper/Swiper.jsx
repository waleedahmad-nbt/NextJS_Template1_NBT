'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import Laptop from "../../../public/images/laptop.jpg";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';
import Headphones from "../../../public/images/headphone.jpg";
import games from "../../../public/images/games.jpg";
import power from "../../../public/images/power tools.jpg";
import Robot from "../../../public/images/robt.jpg";
import Sport from "../../../public/images/sport watch.webp";
import Watch from "../../../public/images/watch.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import 'swiper/css';
import { useState } from 'react';


const SwiperComponent = () => {

  const [swiper, setSwiper] = useState(null);

  const slides = [
    { id: 1, imageUrl: Laptop, text: 'Laptop' },
    { id: 2, imageUrl: Headphones, text: 'Headphones' },
    { id: 3, imageUrl: games, text: 'games' },
    { id: 4, imageUrl: power, text: 'Power Tools' },
    { id: 5, imageUrl: Robot, text: 'Robot' },
    { id: 6, imageUrl: Sport, text: 'Sport Watches' },
    { id: 7, imageUrl: Watch, text: 'Watches' },
    { id: 8, imageUrl: Watch, text: 'Watches' },
    { id: 9, imageUrl: Watch, text: 'Watches' },
    { id: 10, imageUrl: Sport, text: 'Sport Watches' },
    { id: 11, imageUrl: power, text: 'Power Tools' },
    { id: 12, imageUrl: Headphones, text: 'Headphones' },
    { id: 13, imageUrl: Headphones, text: 'Headphones' },
    { id: 14, imageUrl: Headphones, text: 'Headphones' },
  ];


  const goNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  }
  const goPrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  }

  return (
    <>
      <div className='container mx-auto'>
        <div className='ml-3 md:ml-12 mx-10 md:mx-20 md:mt-5 lg:mt-0'>
          <div className='flex justify-between items-center'>

            <div className="text-md cursor-pointer">
              <FaArrowLeft onClick={goPrev} />
            </div>

            <div className='w-full'>
              <Swiper
                onSwiper={(swiper) => setSwiper(swiper)}
                spaceBetween={10}
                slidesPerView={6}
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{ delay: 1000, disableOnInteraction: false }}
                breakpoints={{
                  400: {
                    slidesPerView: 2
                  },
                  640: {
                    slidesPerView: 3,
                  },
                  768: {
                    slidesPerView: 4,
                  },
                  1024: {
                    slidesPerView: 6,
                  },
                }}
              >
                {slides.map((slide) => (
                  <SwiperSlide key={slide.id}>
                    <div className="flex flex-row items-center justify-center m-auto group overflow-hidden">
                      <Image
                        src={slide.imageUrl}
                        alt={`Slide ${slide.id}`}
                        width={120}
                        height={120}
                        className="w-12 h-12 object-cover m-2 rounded-full transition-transform transform group-hover:scale-105 duration-700"
                      />
                      <p className="text-sm font-semibold">{slide.text}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="text-md  cursor-pointer">
              <FaArrowRight onClick={goNext} />
            </div>

          </div>
        </div>
      </div>

    </>
  );
};

export default SwiperComponent;
