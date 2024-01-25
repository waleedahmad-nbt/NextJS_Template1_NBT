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
    { id: 1, imageUrl: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/cat-computers-laptop-100x100.jpg', text: 'Laptop' },
    { id: 2, imageUrl: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/cat-cell-phone-100x100.jpg', text: 'Cell Phone' },
    { id: 3, imageUrl: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/cat-game-video-100x100.jpg', text: 'Games & Video' },
    { id: 4, imageUrl: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/cat-tv-box-100x100.jpg', text:'Tv Box' },
    { id: 5, imageUrl: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/cat-robot-clean-100x100.jpg', text: 'Robot Clean' },
    { id: 6, imageUrl: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/cat-spot-watches-100x100.jpg', text: 'Sport Watches' },
    { id: 7, imageUrl: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/cat-tablets-100x100.jpg', text: 'Tablets' },
    { id: 8, imageUrl: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/cat-power-tools-100x100.jpg', text: 'Power Tools' },
    { id: 9, imageUrl: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/cat-smart-watches-100x100.jpg', text: 'Smart Watches' },
    { id: 10, imageUrl: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/cat-headphones-100x100.jpg', text: 'Headphones' },
    { id: 11, imageUrl: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/cat-tv-audio-100x100.jpg', text: 'Tv & Audio' },
    { id: 12, imageUrl: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/cat-cameras-audio-100x100.jpg', text: 'Cameras' },
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
      <div className='xl:container xl:mx-auto'>
        <div className='ml-3 md:ml-12 mx-10 md:mx-20 md:mt-5 lg:mt-0'>
          <div className='flex justify-between items-center'>

            <div className="text-md cursor-pointer">
              <FaArrowLeft onClick={goPrev} />
            </div>

            <div className='w-full'>
              <Swiper
                onSwiper={(swiper) => setSwiper(swiper)}
                spaceBetween={0}
                slidesPerView={7}
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{ delay: 1000, disableOnInteraction: false }}
                breakpoints={{
                  300:{
                    slidesPerView:2
                  },
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
                    <div className="flex flex-row space-x-4 items-center m-2 justify-center group overflow-hidden">
                      <img
                        src={slide.imageUrl}
                        alt={`Slide ${slide.id}`}
                        className="w-[44px] h-[44px] object-cover border p-1 bg-[#f2f4f3] rounded-full transition-transform transform group-hover:scale-105 duration-700"
                      />
                      <p className="text-base leading-6 font-semibold">{slide.text}</p>
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
