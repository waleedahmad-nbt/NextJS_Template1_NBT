'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import banner6 from "../../../public/images/banner6.jpeg"
import Link from 'next/link';
import initAOS from '../../../utils/aos';

const DropdownCategories = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  useEffect(() => {
    initAOS();
  }, []);

  return (
    <div
      className=""
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Dropdown hover button */}
      <Link href="/pages/Categories">
        <button
          id="dropdownHoverButton"
          data-dropdown-toggle="dropdownHover"
          data-dropdown-trigger="hover"
          className="text-white text-sm font-bold rounded-lg inline-flex items-center underline-hover-left-to-right cursor-pointer "
          type="button"
        >
          CATEGORIES
          <svg
            className="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
      </Link>
      {/* Dropdown menu */}
      <div className='xl:container xl:mx-auto'>
        <div
          id="dropdownHover"
          className={`${isDropdownOpen ? 'block' : 'hidden'
            } z-40 absolute bg-white rounded-lg shadow w-full right-0 left-0`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className='bg-white h-[660px] w-full p-20'>
            <div className='flex flex-row'>
              <div className='w-[720px] flex flex-row flex-wrap gap-20'>
                <div className='flex flex-col gap-4'>
                  <h1 className='text-black font-bold'>Consumer Electronics</h1>
                  <p className='text-base leading-6 text-[#666] cursor-pointer hover:text-black duration-300 font-medium'>Cleaning Appliances</p>
                  <p className='text-base leading-6 text-[#666] cursor-pointer hover:text-black duration-300 font-medium'>Camera & Photo</p>
                  <p className='text-base leading-6 text-[#666] cursor-pointer hover:text-black duration-300 font-medium'>Security & Protection</p>
                  <p className='text-base leading-6 text-[#666] cursor-pointer hover:text-black duration-300 font-medium'>Smart Watches</p>
                  <p className='text-base leading-6 text-[#666] cursor-pointer hover:text-black duration-300 font-medium'>Game & Video</p>
                </div>
                <div className='flex flex-col gap-4'>
                  <h1 className='text-black font-bold'>Music Audio</h1>
                  <p className='text-base leading-6 text-[#666] cursor-pointer hover:text-black duration-300 font-medium'>Fitness Headphones</p>
                  <p className='text-base leading-6 text-[#666] cursor-pointer hover:text-black duration-300 font-medium'>Bluetooth Speakers</p>
                  <p className='text-base leading-6 text-[#666] cursor-pointer hover:text-black duration-300 font-medium'>On-Ear Over-Ear</p>
                  <p className='text-base leading-6 text-[#666] cursor-pointer hover:text-black duration-300 font-medium'>Microphones</p>
                  <p className='text-base leading-6 text-[#666] cursor-pointer hover:text-black duration-300 font-medium'>Accessories</p>
                </div>
                <div className='flex flex-col gap-4'>
                  <h1 className='text-black font-bold'>Cell Phones</h1>
                  <p className='text-base leading-6 text-[#666] cursor-pointer hover:text-black duration-300 font-medium'>Smartphones</p>
                  <p className='text-base leading-6 text-[#666] cursor-pointer hover:text-black duration-300 font-medium'>Waterproof Phones</p>
                  <p className='text-base leading-6 text-[#666] cursor-pointer hover:text-black duration-300 font-medium'>Dual Sim Phones</p>
                  <p className='text-base leading-6 text-[#666] cursor-pointer hover:text-black duration-300 font-medium'>Featured Phones</p>
                  <p className='text-base leading-6 text-[#666] cursor-pointer hover:text-black duration-300 font-medium'>Refurbished Phones</p>
                </div>
                <div className='flex flex-col gap-4'>
                  <h1 className='text-black font-bold'>Computers, Tablets</h1>
                  <p className='text-base leading-6 text-[#666] cursor-pointer hover:text-black duration-300 font-medium'>Office Electronics</p>
                  <p className='text-base leading-6 text-[#666] cursor-pointer hover:text-black duration-300 font-medium'>Laptops</p>
                  <p className='text-base leading-6 text-[#666] cursor-pointer hover:text-black duration-300 font-medium'>Tablet PCs</p>
                  <p className='text-base leading-6 text-[#666] cursor-pointer hover:text-black duration-300 font-medium'>Computer Components</p>
                </div>
                <div className='flex flex-col gap-4'>
                  <h1 className='text-black font-bold'>Smart Electronics</h1>
                  <p className='text-base leading-6 text-[#666] cursor-pointer hover:text-black duration-300 font-medium'>Smart Health Watche</p>
                  <p className='text-base leading-6 text-[#666] cursor-pointer hover:text-black duration-300 font-medium'>Smart Watch Phone</p>
                  <p className='text-base leading-6 text-[#666] cursor-pointer hover:text-black duration-300 font-medium'>Smart Wristband</p>
                  <p className='text-base leading-6 text-[#666] cursor-pointer hover:text-black duration-300 font-medium'>Sport Watches</p>
                  <p className='text-base leading-6 text-[#666] cursor-pointer hover:text-black duration-300 font-medium'>Smart Watches</p>
                </div>
              </div>

              <div className='w-[390px]'>
                <div className="relative flex rounded-xl w-[400px] group overflow-hidden">
                  <Image
                    className="w-[445px] h-[550px] object-cover rounded-lg  transition-transform transform group-hover:scale-110 duration-700"
                    src={banner6}
                    alt="Background Image"
                  />
                  <div className="absolute flex items-center justify-center">
                    <div className="w-full flex flex-row">
                      <div className="flex flex-col  m-6 mt-12 w-[336px] items-start">
                        <h3 className="text-5xl leading-snug font-semibold text-black">Xiaomi Pad 5</h3>
                        <h4 className="text-lg leading-6 font-medium mr-4 text-start text-[#000]">The new tech gift you are
                          wishing for right here.</h4>
                        <Link href="/pages/Shop">
                          <p className="bg-white mt-7 text-black px-10 font-semibold py-3 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
                          >
                            Shop Now
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>

          <div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownCategories;
