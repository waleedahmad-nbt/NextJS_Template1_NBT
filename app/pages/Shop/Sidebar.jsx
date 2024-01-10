'use client';
import React, { useEffect, useState } from 'react';
import { MinusSmIcon, PlusSmIcon } from '@heroicons/react/solid';
import initAOS from '../../../utils/aos';
import Drawer from './Drawer';

const Sidebar = () => {

    const [toggleStates, setToggleStates] = useState({
        categories: true,
        colors: false,
        sizes: false,
        types: false,
        price: false,
    });

    const toggleDiv = (section) => {
        setToggleStates((prevStates) => ({
            ...prevStates,
            [section]: !prevStates[section],
        }));
    };

    useEffect(() => {
        initAOS();
    }, []);

    return (
        <>
            <section className="">
                <div className="px-3 mx-auto ">

                    <div className="mx-auto mt-8 space-y-4 md:mt-16">
                        <div className="transition-all  duration-500">

                            <div>
                                <div onClick={() => toggleDiv('categories')} className='flex flex-row gap-9 justify-between mb-6'>
                                    <span className="text-lg font-bold text-black"> Categories </span>
                                    <button
                                        type="button"
                                        className="flex items-end justify-end w-full">

                                        {toggleStates.categories ? (
                                            <MinusSmIcon className="w-6 h-6 text-black text-lg" />
                                        ) : (
                                            <PlusSmIcon className="w-6 h-6 text-black text-lg" />
                                        )}
                                    </button>
                                </div>
                                {toggleStates.categories && (
                                    <ul data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-sine" className='text-md font-medium'>
                                        <li className='text-[#666666] hover:text-gray-900 cursor-pointer hover:underline mb-4 duration-300 ease-in-out font-inter'>Cell Phone</li>
                                        <li className='text-[#666666] hover:text-gray-900 cursor-pointer hover:underline mb-4 duration-300 ease-in-out font-inter'>Computers, Tablets</li>
                                        <li className='text-[#666666] hover:text-gray-900 cursor-pointer hover:underline mb-4 duration-300 ease-in-out font-inter'>Consumer Electronics</li>
                                        <li className='text-[#666666] hover:text-gray-900 cursor-pointer hover:underline mb-4 duration-300 ease-in-out font-inter'>Headphones</li>
                                        <li className='text-[#666666] hover:text-gray-900 cursor-pointer hover:underline mb-4 duration-300 ease-in-out font-inter'>Power Tools</li>
                                        <li className='text-[#666666] hover:text-gray-900 cursor-pointer hover:underline mb-4 duration-300 ease-in-out font-inter'>Smart Electronics</li>
                                        <li className='text-[#666666] hover:text-gray-900 cursor-pointer hover:underline mb-4 duration-300 ease-in-out font-inter'>TV & Audio</li>
                                        <li className='text-[#666666] hover:text-gray-900 cursor-pointer hover:underline mb-4 duration-300 ease-in-out font-inter'>TV Box</li>
                                    </ul>
                                )}
                            </div>

                            <div>
                                <div onClick={() => toggleDiv('colors')} className='flex flex-row gap-9 justify-between mb-6 mt-10'>
                                    <span className="text-lg font-bold text-black"> Colors </span>
                                    <button
                                        type="button"
                                        className="flex items-end justify-end w-full">

                                        {toggleStates.colors ? (
                                            <MinusSmIcon className="w-6 h-6 text-black text-lg" />
                                        ) : (
                                            <PlusSmIcon className="w-6 h-6 text-black text-lg" />
                                        )}
                                    </button>
                                </div>

                                {toggleStates.colors && (
                                    <div data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-sine" className='flex flex-row flex-wrap gap-2'>
                                        <div class="w-[32px] h-[32px] rounded-full border-2 overflow-hidden bg-[#ade9b7] hover:scale-110 transform-gpu transition-transform duration-300">
                                        </div>
                                        <div class="w-[32px] h-[32px] rounded-full border-2 overflow-hidden bg-[#db32bf] hover:scale-110 transform-gpu transition-transform duration-300">
                                        </div>
                                        <div class="w-[32px] h-[32px] rounded-full border-2 overflow-hidden bg-[#C1C1C1] hover:scale-110 transform-gpu transition-transform duration-300">
                                        </div>
                                        <div class="w-[32px] h-[32px] rounded-full border-2 overflow-hidden bg-[#DD3333] hover:scale-110 transform-gpu transition-transform duration-300">
                                        </div>
                                        <div class="w-[32px] h-[32px] rounded-full border-2 overflow-hidden bg-[#b1e2ef] hover:scale-110 transform-gpu transition-transform duration-300">
                                        </div>
                                        <div class="w-[32px] h-[32px] rounded-full border-2 overflow-hidden bg-[#EEEE22] hover:scale-110 transform-gpu transition-transform duration-300">
                                        </div>
                                        <div class="w-[32px] h-[32px] rounded-full border-2 overflow-hidden bg-[#1e73be] hover:scale-110 transform-gpu transition-transform duration-300">
                                        </div>
                                        <div class="w-[32px] h-[32px] rounded-full border-2 overflow-hidden bg-[#c09e9d] hover:scale-110 transform-gpu transition-transform duration-300">
                                        </div>
                                        <div class="w-[32px] h-[32px] rounded-full border-2 overflow-hidden bg-[#ffed8a] hover:scale-110 transform-gpu transition-transform duration-300">
                                        </div>
                                        <div class="w-[32px] h-[32px] rounded-full border-2 overflow-hidden bg-[#77ba39] hover:scale-110 transform-gpu transition-transform duration-300">
                                        </div>
                                        <div class="w-[32px] h-[32px] rounded-full border-2 overflow-hidden bg-[#D1D1D1] hover:scale-110 transform-gpu transition-transform duration-300">
                                        </div>
                                        <div class="w-[32px] h-[32px] rounded-full border-2 overflow-hidden bg-[#db8632] hover:scale-110 transform-gpu transition-transform duration-300">
                                        </div>
                                        <div class="w-[32px] h-[32px] rounded-full border-2 overflow-hidden bg-[#ffffff] hover:scale-110 transform-gpu transition-transform duration-300">
                                        </div>
                                        <div class="w-[32px] h-[32px] rounded-full border-2 overflow-hidden bg-[#7d9391] hover:scale-110 transform-gpu transition-transform duration-300">
                                        </div>
                                        <div class="w-[32px] h-[32px] rounded-full border-2 overflow-hidden bg-[#000000] hover:scale-110 transform-gpu transition-transform duration-300">
                                        </div>

                                    </div>
                                )}

                            </div>

                            <div>
                                <div onClick={() => toggleDiv('sizes')} className='flex flex-row gap-9 justify-between mb-6 mt-10'>
                                    <span className="text-lg font-bold text-black"> Sizes </span>
                                    <button
                                        type="button"
                                        className="flex items-end justify-end w-full">

                                        {toggleStates.sizes ? (
                                            <MinusSmIcon className="w-6 h-6 text-black text-lg" />
                                        ) : (
                                            <PlusSmIcon className="w-6 h-6 text-black text-lg" />
                                        )}

                                    </button>
                                </div>
                                {toggleStates.sizes && (
                                    <div data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-sine" className='flex flex-wrap gap-3'>
                                        <p className='px-4 py-2 bg-transparent text-black text-lg border rounded-lg hover:bg-black hover:text-white duration-300 ease-in-out'>10 inch</p>
                                        <p className='px-4 py-2 bg-transparent text-black text-lg border rounded-lg hover:bg-black hover:text-white duration-300 ease-in-out'>13.5 inch</p>
                                        <p className='px-4 py-2 bg-transparent text-black text-lg border rounded-lg hover:bg-black hover:text-white duration-300 ease-in-out'>13.5 inch</p>
                                    </div>
                                )}
                            </div>


                            <div>
                                <div onClick={() => toggleDiv('types')} className='flex flex-row gap-9 justify-between mb-6 mt-10'>
                                    <span className="text-lg font-bold text-black"> Types </span>
                                    <button
                                        type="button"
                                        className="flex items-end justify-end w-full">

                                        {toggleStates.types ? (
                                            <MinusSmIcon className="w-6 h-6 text-black text-lg" />
                                        ) : (
                                            <PlusSmIcon className="w-6 h-6 text-black text-lg" />
                                        )}
                                    </button>
                                </div>
                                {toggleStates.types && (
                                    <div data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-sine" className='flex flex-wrap gap-3'>
                                        <p className='px-4 py-2 bg-transparent text-black text-lg border rounded-lg hover:bg-black hover:text-white duration-300 ease-in-out'>EU Plug</p>
                                        <p className='px-4 py-2 bg-transparent text-black text-lg border rounded-lg hover:bg-black hover:text-white duration-300 ease-in-out'>UK Plug</p>
                                        <p className='px-4 py-2 bg-transparent text-black text-lg border rounded-lg hover:bg-black hover:text-white duration-300 ease-in-out'>US Plug</p>
                                    </div>
                                )}
                            </div>

                            <div>
                                <div onClick={() => toggleDiv('price')} className='flex flex-row gap-9 justify-between mb-6 mt-10'>
                                    <span className="text-lg font-bold text-black"> Price </span>
                                    <button
                                        type="button"
                                        className="flex items-end justify-end w-full">

                                        {toggleStates.price ? (
                                            <MinusSmIcon className="w-6 h-6 text-black text-lg" />
                                        ) : (
                                            <PlusSmIcon className="w-6 h-6 text-black text-lg" />
                                        )}
                                    </button>
                                </div>
                                {toggleStates.price && (
                                    <ul data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-sine" className='text-md font-medium'>
                                        <li className='text-[#666666] cursor-pointer hover:underline mb-4 duration-300 ease-in-out font-inter'>All</li>
                                        <li className='text-[#32BDE8]  cursor-pointer mb-4 duration-300 ease-in-out font-inter'>
                                            <a href="" className=""><span className=""><bdi><span className="">$</span>0.00</bdi></span> <span className="text-black">–</span> <span className=""><bdi><span className="">$</span>140.00</bdi></span></a>
                                        </li>
                                        <li className='text-[#32BDE8]  cursor-pointer hover:underline mb-4 duration-300 ease-in-out font-inter'>
                                            <a href="" className=""><span className=""><bdi><span className="">$</span>140.00</bdi></span> <span className="text-black">–</span> <span className=""><bdi><span className="">$</span>280.00</bdi></span></a>
                                        </li>
                                        <li className='text-[#32BDE8]  cursor-pointer  mb-4 duration-300 ease-in-out font-inter'>
                                            <a href="" className=""><span className=""><bdi><span className="">$</span>280.00</bdi></span> <span className="text-black">–</span> <span className=""><bdi><span className="">$</span>420.00</bdi></span></a>
                                        </li>
                                        <li className='text-[#32BDE8]  cursor-pointer hover:underline mb-4 duration-300 ease-in-out font-inter'>
                                            <a href="" className=""><span className=""><bdi><span className="">$</span>420.00</bdi></span> <span className="text-black">–</span> <span className=""><bdi><span className="">$</span>560.00</bdi></span></a>
                                        </li>
                                        <li className='text-[#32BDE8]  cursor-pointer hover:underline mb-4 duration-300 ease-in-out font-inter'>
                                            <a href="" className=""><span className=""><bdi><span className="">$</span>560.00</bdi></span> <span className="text-black">–</span> <span className=""><bdi><span className="">$</span>700.00</bdi></span></a>
                                        </li>
                                    </ul>
                                )}
                            </div>


                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Sidebar;
