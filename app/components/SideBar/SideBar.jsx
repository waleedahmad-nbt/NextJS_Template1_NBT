'use client';
import React, { useEffect, useState } from 'react';
import { MdOutlineColorLens, MdOutlineShoppingBag } from "react-icons/md";
import { TiDocumentText } from "react-icons/ti";
import { SlSupport } from "react-icons/sl";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoHomeOutline } from 'react-icons/io5';
import { CiStar } from 'react-icons/ci';
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';
import Link from 'next/link';
import NewHeader from '../Headers/NewHeader';

const SideBar = () => {
    const [isHeaderOpen, setIsHeaderOpen] = useState(false);
    const [isLargeScreen, setIsLargeScreen] = useState(typeof window !== 'undefined' && window.innerWidth >= 400);

    const handleToggleHeader = () => {
        setIsHeaderOpen(!isHeaderOpen);
    };

    const handleCloseHeader = () => {
        setIsHeaderOpen(false);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(typeof window !== 'undefined' && window.innerWidth >= 1024);
            // Close the header on large screens
            if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
                handleCloseHeader();
            }
        };

        // Check if window is defined before adding the event listener
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', handleResize);
        }

        // Cleanup event listener on component unmount
        return () => {
            // Check if window is defined before removing the event listener
            if (typeof window !== 'undefined') {
                window.removeEventListener('resize', handleResize);
            }
        };
    }, []);


    return (
        <>
            <div className=''>
                {/* Show on large screen */}
                <div className="fixed z-50 top-0 right-0 h-52 w-10 mt-[15rem] bg-white text-[#666666] flex flex-col items-center rounded-md shadow justify-around">

                    <Tooltip
                        title="Preview Demos"
                        position="right"
                        trigger="mouseenter"
                        arrow={true}
                        duration={200}
                        animation="scale"
                        style={{ color: 'inherit' }}
                    >
                        <MdOutlineColorLens className="w-5 h-5" />
                    </Tooltip>
                    <Tooltip
                        title="Support channel"
                        position="right"
                        trigger="mouseenter"
                        arrow={true}
                        duration={200}
                        animation="scale"
                        style={{ color: 'inherit' }}
                    >
                        <SlSupport className="w-5 h-5" />
                    </Tooltip>
                    <Tooltip
                        title="Documentation"
                        position="right"
                        trigger="mouseenter"
                        arrow={true}
                        duration={200}
                        animation="scale"
                        style={{ color: 'inherit' }}
                    >
                        <TiDocumentText className="w-5 h-5" />
                    </Tooltip>
                    <Tooltip
                        title="Purchase Minimog"
                        position="right"
                        trigger="mouseenter"
                        arrow={true}
                        duration={200}
                        animation="scale"
                        style={{ color: 'inherit' }}
                    >
                        <HiOutlineShoppingBag className="w-5 h-5" />
                    </Tooltip>

                </div>

            </div>


            {/* show on Small Screen */}
            <div className="fixed backdrop block md:hidden bottom-0 left-0 z-30 w-full h-12 bg-white border-gray-200">
                <div className="grid h-full w-full grid-cols-5 mx-auto font-medium">
                    <button type="button" className="inline-flex flex-col text-black hover:text-gray-500 items-center justify-center px-5 border-gray-200 border-x ">
                        <Link href="/">
                            <IoHomeOutline className="w-5 h-5" />
                        </Link>
                    </button>
                    <button type="button" className="inline-flex flex-col text-black hover:text-gray-500 items-center justify-center px-5 border-e border-gray-200">
                        <Link href="/pages/Shop">
                            <svg className="w-5 h-5 text-black hover:text-gray-500" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 4.125V17.875C1 18.3958 1.18229 18.8385 1.54688 19.2031C1.91146 19.5677 2.35417 19.75 2.875 19.75H19.125C19.6458 19.75 20.0885 19.5677 20.4531 19.2031C20.8177 18.8385 21 18.3958 21 17.875V4.125C21 3.60417 20.8177 3.16146 20.4531 2.79688C20.0885 2.43229 19.6458 2.25 19.125 2.25H2.875C2.35417 2.25 1.91146 2.43229 1.54688 2.79688C1.18229 3.16146 1 3.60417 1 4.125ZM10.0625 4.125V10.0625H2.875V4.35938C2.875 4.30729 2.90104 4.25521 2.95312 4.20312C3.00521 4.15104 3.05729 4.125 3.10938 4.125H10.0625ZM2.875 11.9375H10.0625V17.875H3.10938C3.05729 17.875 3.00521 17.849 2.95312 17.7969C2.90104 17.7448 2.875 17.6927 2.875 17.6406V11.9375ZM11.9375 17.875V11.9375H19.125V17.6406C19.125 17.6927 19.099 17.7448 19.0469 17.7969C18.9948 17.849 18.9427 17.875 18.8906 17.875H11.9375ZM19.125 10.0625H11.9375V4.125H18.8906C18.9427 4.125 18.9948 4.15104 19.0469 4.20312C19.099 4.25521 19.125 4.30729 19.125 4.35938V10.0625Z" fill="black">
                                </path>
                            </svg>
                        </Link>
                    </button>
                    <button type="button" className="inline-flex flex-col text-black hover:text-gray-500 items-center justify-center px-5 ">
                        <Link href="/pages/Wishlist">
                            <p class="relative flex">
                                <CiStar className="cursor-pointer text-2xl w-6 h-6 fill-current" />
                                <span class="absolute -right-1 -top-1 rounded-full bg-red-700 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
                                    0
                                </span>
                            </p>
                        </Link>
                    </button>
                    <button type="button" className="inline-flex flex-col text-black hover:text-gray-500 items-center
                         justify-center px-5 border-gray-200 border-x ">
                        <Link href="/pages/Cart">
                            <p class="relative flex">
                                <MdOutlineShoppingBag className="cursor-pointer text-2xl  w-6 h-6 fill-current" />
                                <span class="absolute -right-1 -top-1 rounded-full bg-red-700 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
                                    0
                                </span>
                            </p>
                        </Link>
                    </button>
                    <button onClick={handleToggleHeader} type="button" className="inline-flex flex-col text-black hover:text-gray-500 items-center justify-center px-5 border-gray-200 border-x ">
                        <svg className='h-5 w-5 text-black hover:text-gray-500' viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.8438 19.3203C21.0781 19.5286 21.0781 19.75 20.8438 19.9844L19.9844 20.8438C19.75 21.0781 19.5286 21.0781 19.3203 20.8438L14.5938 16.1172C14.4896 16.013 14.4375 15.9089 14.4375 15.8047V15.2578C12.901 16.5859 11.1302 17.25 9.125 17.25C6.88542 17.25 4.97135 16.4557 3.38281 14.8672C1.79427 13.2786 1 11.3646 1 9.125C1 6.88542 1.79427 4.97135 3.38281 3.38281C4.97135 1.79427 6.88542 1 9.125 1C11.3646 1 13.2786 1.79427 14.8672 3.38281C16.4557 4.97135 17.25 6.88542 17.25 9.125C17.25 11.1302 16.5859 12.901 15.2578 14.4375H15.8047C15.9349 14.4375 16.0391 14.4896 16.1172 14.5938L20.8438 19.3203ZM4.71094 13.5391C5.9349 14.763 7.40625 15.375 9.125 15.375C10.8438 15.375 12.3151 14.763 13.5391 13.5391C14.763 12.3151 15.375 10.8438 15.375 9.125C15.375 7.40625 14.763 5.9349 13.5391 4.71094C12.3151 3.48698 10.8438 2.875 9.125 2.875C7.40625 2.875 5.9349 3.48698 4.71094 4.71094C3.48698 5.9349 2.875 7.40625 2.875 9.125C2.875 10.8438 3.48698 12.3151 4.71094 13.5391Z" fill="#000000">
                        </path>
                        </svg>
                    </button>
                </div>
            </div>

            {isHeaderOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 z-50 flex items-start justify-center transition-opacity duration-300">
                    <div className="bg-white p-6 rounded-lg w-full">
                        <NewHeader
                            handleCloseSection={handleCloseHeader}
                            isOpen={isHeaderOpen}
                            toggleDropdown={handleToggleHeader}
                            isLargeScreen={isLargeScreen}
                        />
                    </div>
                </div>
            )}
        </>
    )
}

export default SideBar;
