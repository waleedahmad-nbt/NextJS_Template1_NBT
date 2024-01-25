'use client';
import React, { useEffect, useState } from 'react';
import { MinusSmIcon, PlusSmIcon } from '@heroicons/react/solid';
import initAOS from '../../../utils/aos';
const Drawer = () => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!isDrawerOpen);
    };

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
            <p onClick={toggleDrawer} className="p-3 transform rotate-90">
                Filters
            </p>
            {/* Drawer component */}
            <div
                id="drawer-navigation"
                className={`fixed top-0 left-0 z-50 w-[280px] h-screen p-4 overflow-y-auto transition-transform ${isDrawerOpen ? '' : '-translate-x-full'
                    } bg-white`}
                tabIndex="-1"
                aria-labelledby="drawer-navigation-label">
                <button
                    type="button"
                    onClick={toggleDrawer}
                    aria-controls="drawer-navigation"
                    className="text-black bg-transparent rounded-lg text-sm p-5 absolute top-2.5 end-2.5 
                    inline-flex items-center"
                >
                    <svg
                        aria-hidden="true"
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                    <span className="sr-only">Close menu</span>
                </button>
                <div className="py-4 overflow-y-auto">
                    <div className="px-3 mx-auto ">

                        <h1 className='text-3xl text-black font-bold'>
                            Filters
                        </h1>
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
                                            <li className='text-[#666666] hover:text-gray-900 cursor-pointer hover:underline mb-4 duration-300 ease-in-out'>Cell Phone</li>
                                            <li className='text-[#666666] hover:text-gray-900 cursor-pointer hover:underline mb-4 duration-300 ease-in-out'>Computers, Tablets</li>
                                            <li className='text-[#666666] hover:text-gray-900 cursor-pointer hover:underline mb-4 duration-300 ease-in-out'>Consumer Electronics</li>
                                            <li className='text-[#666666] hover:text-gray-900 cursor-pointer hover:underline mb-4 duration-300 ease-in-out'>Headphones</li>
                                            <li className='text-[#666666] hover:text-gray-900 cursor-pointer hover:underline mb-4 duration-300 ease-in-out'>Power Tools</li>
                                            <li className='text-[#666666] hover:text-gray-900 cursor-pointer hover:underline mb-4 duration-300 ease-in-out'>Smart Electronics</li>
                                            <li className='text-[#666666] hover:text-gray-900 cursor-pointer hover:underline mb-4 duration-300 ease-in-out'>TV & Audio</li>
                                            <li className='text-[#666666] hover:text-gray-900 cursor-pointer hover:underline mb-4 duration-300 ease-in-out'>TV Box</li>
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
                                            <li className='text-[#666666] cursor-pointer hover:underline mb-4 duration-300 ease-in-out '>All</li>
                                            <li className='text-[#32BDE8]  cursor-pointer mb-4 duration-300 ease-in-out '>
                                                <a href="" className=""><span className=""><bdi><span className="">$</span>0.00</bdi></span> <span className="text-black">–</span> <span className=""><bdi><span className="">$</span>140.00</bdi></span></a>
                                            </li>
                                            <li className='text-[#32BDE8]  cursor-pointer hover:underline mb-4 duration-300 ease-in-out '>
                                                <a href="" className=""><span className=""><bdi><span className="">$</span>140.00</bdi></span> <span className="text-black">–</span> <span className=""><bdi><span className="">$</span>280.00</bdi></span></a>
                                            </li>
                                            <li className='text-[#32BDE8]  cursor-pointer  mb-4 duration-300 ease-in-out '>
                                                <a href="" className=""><span className=""><bdi><span className="">$</span>280.00</bdi></span> <span className="text-black">–</span> <span className=""><bdi><span className="">$</span>420.00</bdi></span></a>
                                            </li>
                                            <li className='text-[#32BDE8]  cursor-pointer hover:underline mb-4 duration-300 ease-in-out '>
                                                <a href="" className=""><span className=""><bdi><span className="">$</span>420.00</bdi></span> <span className="text-black">–</span> <span className=""><bdi><span className="">$</span>560.00</bdi></span></a>
                                            </li>
                                            <li className='text-[#32BDE8]  cursor-pointer hover:underline mb-4 duration-300 ease-in-out '>
                                                <a href="" className=""><span className=""><bdi><span className="">$</span>560.00</bdi></span> <span className="text-black">–</span> <span className=""><bdi><span className="">$</span>700.00</bdi></span></a>
                                            </li>
                                        </ul>
                                    )}
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Overlay for opacity */}
            {isDrawerOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-30"
                    onClick={toggleDrawer}
                ></div>
            )}
        </>
    )
}

export default Drawer;
