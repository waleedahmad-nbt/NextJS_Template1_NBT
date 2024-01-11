'use client';
import React, { useState } from 'react';
import CustomModal from './CustomModal';
import { RxCross2 } from 'react-icons/rx';


const HomeSection = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [DropdownOpen, setOpen] = useState(false);


    const handleDropdown = () => {
        setOpen(!DropdownOpen);
    };

    const handleCloseDropdown = () => {
        setDropdownOpen(false);
    };

    const openModal = () => {
        setModalIsOpen(true);
        // Disable scrolling on the main content when the modal is open
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setModalIsOpen(false);
        // Enable scrolling on the main content when the modal is closed
        document.body.style.overflow = 'visible';
    };


    const Menu = [
        "All Industries",
        "Fashion",
        "Under Wear",
        "Shoes",
        "Accessories",
        "Active Wear",
        "Baby Store",
        "Kitchen",
        "Book",
        "Bedding",
        "Furniture",
        "Cosmetics",
        "Plant",
        "Pet",
        "Art & Photography",
        "Food & Drink",
        "Barber",
        "Sports",
        "Print",
        "Beauty",
        "Mega Store",
        "Other"
    ];

    return (
        <div>
            <button
                onMouseEnter={openModal}
                // onMouseLeave={closeModal}
                className="cursor-pointer text-sm">HOME</button>

            <CustomModal isOpen={modalIsOpen} onClose={closeModal}>
                <div className='relative w-screen'>
                    <RxCross2
                        onClick={closeModal}
                        className="absolute top-2 right-0 z-50 mr-6 -mt-8 cursor-pointer w-12 h-12 font-extralight rounded-full p-2 text-lg text-black bg-white"
                    />
                    <div className='m-6 bg-[#f1f1f1] rounded-lg p-5 md:p-10  custom-scrollbar'>

                        <div className='flex flex-col items-center text-center'>
                            <h1 className='text-2xl md:text-4xl leading-normal text-black font-bold text-center'>Minimog - The High Converting eCommerce WordPress Theme</h1>
                            <p className='text-base leading-6 text-center text-gray-700 tracking-tight'>A Complete eCommerce Solution which is built by experts. Unlock the power of your online store today with Minimog!</p>

                            <a
                                className="px-7 py-3 mt-5 bg-black font-semibold text-white text-center rounded-3xl"
                                href="#" target="_blank"
                            >
                                <span className="button-text">PURCHASE MINIMOG</span>
                            </a>


                            <div className='flex flex-row  mt-8 gap-3'>
                                <p className='text-black'>You are in:</p>

                                <div className="relative inline-block text-center">
                                    {/* Dropdown button */}
                                    <div
                                        onClick={handleDropdown}
                                        className='flex flex-row gap-8 items-center cursor-default relative z-30'>
                                        <p
                                            id="dropdownDefaultButton"
                                            data-dropdown-toggle="dropdown"
                                            className="text-black font-semibold rounded-lg text-sm inline-flex text-start items-center"
                                            type="button"
                                        >
                                            All Industries
                                        </p>
                                        <svg
                                            className="w-2.5 h-2.5 ms-3 text-black"
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
                                    </div>
                                    <hr className='w-36 bg-black h-[2px] ' />

                                    {/* Dropdown menu */}
                                    <div
                                        id="dropdown"
                                        className={`z-50 ${DropdownOpen ? 'block' : 'hidden'} absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44`}
                                        style={{ top: '100%', left: '0' }}
                                    >
                                        <ul className="py-2 text-sm z-50 text-gray-700 h-52 overflow-y-auto" aria-labelledby="dropdownDefaultButton">
                                            {Menu.map((item) => (
                                                <li key={item}>
                                                    <a href="#" className="block px-4 py-2 hover:bg-gray-600 hover:text-white">
                                                        {item}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                            </div>

                            <div className='grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-10 mt-7'>

                                <div className="bg-white p-2 md:p-5 rounded-lg relative">
                                    <div className="">
                                        <img src="https://minimog-4437.kxcdn.com/supergear/wp-content/themes/minimog-child-demo/assets/images/demo/megamog.jpg"
                                            alt="Megamog"
                                            loading="lazy" />
                                    </div>

                                    <div className='hidden md:block'>
                                        <div className="text-end mt-3">
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-4 py-1 h-8 bg-red-600 text-white rounded-2xl">Hot</span>
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-3 py-1 h-8 bg-[#b466ea] text-white rounded-2xl">Mega</span>
                                        </div>
                                    </div>

                                    <div className='block md:hidden absolute top-1 left-0 right-0 bottom-0 '>
                                        <div className="text-end">
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-4 py-1 h-8 bg-red-600 text-white rounded-2xl">Hot</span>
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-3 py-1 h-8 bg-[#b466ea] text-white rounded-2xl">Mega</span>
                                        </div>
                                    </div>

                                    <div className='text-start'>
                                        <p className='text-lg font-semibold'>MegaMog</p>
                                        <p className='text-gray-500 '>Megastore</p>
                                    </div>

                                </div>

                                <div className="bg-white p-2 md:p-5 rounded-lg relative">
                                    <div className="">
                                        <img src="https://minimog-4437.kxcdn.com/supergear/wp-content/themes/minimog-child-demo/assets/images/demo/megamog.jpg"
                                            alt="Megamog"
                                            loading="lazy" />
                                    </div>

                                    <div className='hidden md:block'>
                                        <div className="text-end mt-3">
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-4 py-1 h-8 bg-red-600 text-white rounded-2xl">Hot</span>
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-3 py-1 h-8 bg-[#b466ea] text-white rounded-2xl">Mega</span>
                                        </div>
                                    </div>

                                    <div className='block md:hidden absolute top-1 left-0 right-0 bottom-0 '>
                                        <div className="text-end">
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-4 py-1 h-8 bg-red-600 text-white rounded-2xl">Hot</span>
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-3 py-1 h-8 bg-[#b466ea] text-white rounded-2xl">Mega</span>
                                        </div>
                                    </div>

                                    <div className='text-start'>
                                        <p className='text-lg font-semibold'>MegaMog</p>
                                        <p className='text-gray-500 '>Megastore</p>
                                    </div>

                                </div>
                                <div className="bg-white p-2 md:p-5 rounded-lg relative">
                                    <div className="">
                                        <img src="https://minimog-4437.kxcdn.com/supergear/wp-content/themes/minimog-child-demo/assets/images/demo/megamog.jpg"
                                            alt="Megamog"
                                            loading="lazy" />
                                    </div>

                                    <div className='hidden md:block'>
                                        <div className="text-end mt-3">
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-4 py-1 h-8 bg-red-600 text-white rounded-2xl">Hot</span>
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-3 py-1 h-8 bg-[#b466ea] text-white rounded-2xl">Mega</span>
                                        </div>
                                    </div>

                                    <div className='block md:hidden absolute top-1 left-0 right-0 bottom-0 '>
                                        <div className="text-end">
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-4 py-1 h-8 bg-red-600 text-white rounded-2xl">Hot</span>
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-3 py-1 h-8 bg-[#b466ea] text-white rounded-2xl">Mega</span>
                                        </div>
                                    </div>

                                    <div className='text-start'>
                                        <p className='text-lg font-semibold'>MegaMog</p>
                                        <p className='text-gray-500 '>Megastore</p>
                                    </div>

                                </div>
                                <div className="bg-white p-2 md:p-5 rounded-lg relative">
                                    <div className="">
                                        <img src="https://minimog-4437.kxcdn.com/supergear/wp-content/themes/minimog-child-demo/assets/images/demo/megamog.jpg"
                                            alt="Megamog"
                                            loading="lazy" />
                                    </div>

                                    <div className='hidden md:block'>
                                        <div className="text-end mt-3">
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-4 py-1 h-8 bg-red-600 text-white rounded-2xl">Hot</span>
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-3 py-1 h-8 bg-[#b466ea] text-white rounded-2xl">Mega</span>
                                        </div>
                                    </div>

                                    <div className='block md:hidden absolute top-1 left-0 right-0 bottom-0 '>
                                        <div className="text-end">
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-4 py-1 h-8 bg-red-600 text-white rounded-2xl">Hot</span>
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-3 py-1 h-8 bg-[#b466ea] text-white rounded-2xl">Mega</span>
                                        </div>
                                    </div>

                                    <div className='text-start'>
                                        <p className='text-lg font-semibold'>MegaMog</p>
                                        <p className='text-gray-500 '>Megastore</p>
                                    </div>

                                </div>
                                <div className="bg-white p-2 md:p-5 rounded-lg relative">
                                    <div className="">
                                        <img src="https://minimog-4437.kxcdn.com/supergear/wp-content/themes/minimog-child-demo/assets/images/demo/megamog.jpg"
                                            alt="Megamog"
                                            loading="lazy" />
                                    </div>

                                    <div className='hidden md:block'>
                                        <div className="text-end mt-3">
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-4 py-1 h-8 bg-red-600 text-white rounded-2xl">Hot</span>
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-3 py-1 h-8 bg-[#b466ea] text-white rounded-2xl">Mega</span>
                                        </div>
                                    </div>

                                    <div className='block md:hidden absolute top-1 left-0 right-0 bottom-0 '>
                                        <div className="text-end">
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-4 py-1 h-8 bg-red-600 text-white rounded-2xl">Hot</span>
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-3 py-1 h-8 bg-[#b466ea] text-white rounded-2xl">Mega</span>
                                        </div>
                                    </div>

                                    <div className='text-start'>
                                        <p className='text-lg font-semibold'>MegaMog</p>
                                        <p className='text-gray-500 '>Megastore</p>
                                    </div>

                                </div>
                                <div className="bg-white p-2 md:p-5 rounded-lg relative">
                                    <div className="">
                                        <img src="https://minimog-4437.kxcdn.com/supergear/wp-content/themes/minimog-child-demo/assets/images/demo/megamog.jpg"
                                            alt="Megamog"
                                            loading="lazy" />
                                    </div>

                                    <div className='hidden md:block'>
                                        <div className="text-end mt-3">
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-4 py-1 h-8 bg-red-600 text-white rounded-2xl">Hot</span>
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-3 py-1 h-8 bg-[#b466ea] text-white rounded-2xl">Mega</span>
                                        </div>
                                    </div>

                                    <div className='block md:hidden absolute top-1 left-0 right-0 bottom-0 '>
                                        <div className="text-end">
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-4 py-1 h-8 bg-red-600 text-white rounded-2xl">Hot</span>
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-3 py-1 h-8 bg-[#b466ea] text-white rounded-2xl">Mega</span>
                                        </div>
                                    </div>

                                    <div className='text-start'>
                                        <p className='text-lg font-semibold'>MegaMog</p>
                                        <p className='text-gray-500 '>Megastore</p>
                                    </div>

                                </div>
                                <div className="bg-white p-2 md:p-5 rounded-lg relative">
                                    <div className="">
                                        <img src="https://minimog-4437.kxcdn.com/supergear/wp-content/themes/minimog-child-demo/assets/images/demo/megamog.jpg"
                                            alt="Megamog"
                                            loading="lazy" />
                                    </div>

                                    <div className='hidden md:block'>
                                        <div className="text-end mt-3">
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-4 py-1 h-8 bg-red-600 text-white rounded-2xl">Hot</span>
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-3 py-1 h-8 bg-[#b466ea] text-white rounded-2xl">Mega</span>
                                        </div>
                                    </div>

                                    <div className='block md:hidden absolute top-1 left-0 right-0 bottom-0 '>
                                        <div className="text-end">
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-4 py-1 h-8 bg-red-600 text-white rounded-2xl">Hot</span>
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-3 py-1 h-8 bg-[#b466ea] text-white rounded-2xl">Mega</span>
                                        </div>
                                    </div>

                                    <div className='text-start'>
                                        <p className='text-lg font-semibold'>MegaMog</p>
                                        <p className='text-gray-500 '>Megastore</p>
                                    </div>

                                </div>
                                <div className="bg-white p-2 md:p-5 rounded-lg relative">
                                    <div className="">
                                        <img src="https://minimog-4437.kxcdn.com/supergear/wp-content/themes/minimog-child-demo/assets/images/demo/megamog.jpg"
                                            alt="Megamog"
                                            loading="lazy" />
                                    </div>

                                    <div className='hidden md:block'>
                                        <div className="text-end mt-3">
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-4 py-1 h-8 bg-red-600 text-white rounded-2xl">Hot</span>
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-3 py-1 h-8 bg-[#b466ea] text-white rounded-2xl">Mega</span>
                                        </div>
                                    </div>

                                    <div className='block md:hidden absolute top-1 left-0 right-0 bottom-0 '>
                                        <div className="text-end">
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-4 py-1 h-8 bg-red-600 text-white rounded-2xl">Hot</span>
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-3 py-1 h-8 bg-[#b466ea] text-white rounded-2xl">Mega</span>
                                        </div>
                                    </div>

                                    <div className='text-start'>
                                        <p className='text-lg font-semibold'>MegaMog</p>
                                        <p className='text-gray-500 '>Megastore</p>
                                    </div>

                                </div>
                                <div className="bg-white p-2 md:p-5 rounded-lg relative">
                                    <div className="">
                                        <img src="https://minimog-4437.kxcdn.com/supergear/wp-content/themes/minimog-child-demo/assets/images/demo/megamog.jpg"
                                            alt="Megamog"
                                            loading="lazy" />
                                    </div>

                                    <div className='hidden md:block'>
                                        <div className="text-end mt-3">
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-4 py-1 h-8 bg-red-600 text-white rounded-2xl">Hot</span>
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-3 py-1 h-8 bg-[#b466ea] text-white rounded-2xl">Mega</span>
                                        </div>
                                    </div>

                                    <div className='block md:hidden absolute top-1 left-0 right-0 bottom-0 '>
                                        <div className="text-end">
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-4 py-1 h-8 bg-red-600 text-white rounded-2xl">Hot</span>
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-3 py-1 h-8 bg-[#b466ea] text-white rounded-2xl">Mega</span>
                                        </div>
                                    </div>

                                    <div className='text-start'>
                                        <p className='text-lg font-semibold'>MegaMog</p>
                                        <p className='text-gray-500 '>Megastore</p>
                                    </div>

                                </div>
                                <div className="bg-white p-2 md:p-5 rounded-lg relative">
                                    <div className="">
                                        <img src="https://minimog-4437.kxcdn.com/supergear/wp-content/themes/minimog-child-demo/assets/images/demo/megamog.jpg"
                                            alt="Megamog"
                                            loading="lazy" />
                                    </div>

                                    <div className='hidden md:block'>
                                        <div className="text-end mt-3">
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-4 py-1 h-8 bg-red-600 text-white rounded-2xl">Hot</span>
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-3 py-1 h-8 bg-[#b466ea] text-white rounded-2xl">Mega</span>
                                        </div>
                                    </div>

                                    <div className='block md:hidden absolute top-1 left-0 right-0 bottom-0 '>
                                        <div className="text-end">
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-4 py-1 h-8 bg-red-600 text-white rounded-2xl">Hot</span>
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-3 py-1 h-8 bg-[#b466ea] text-white rounded-2xl">Mega</span>
                                        </div>
                                    </div>

                                    <div className='text-start'>
                                        <p className='text-lg font-semibold'>MegaMog</p>
                                        <p className='text-gray-500 '>Megastore</p>
                                    </div>

                                </div>
                                <div className="bg-white p-2 md:p-5 rounded-lg relative">
                                    <div className="">
                                        <img src="https://minimog-4437.kxcdn.com/supergear/wp-content/themes/minimog-child-demo/assets/images/demo/megamog.jpg"
                                            alt="Megamog"
                                            loading="lazy" />
                                    </div>

                                    <div className='hidden md:block'>
                                        <div className="text-end mt-3">
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-4 py-1 h-8 bg-red-600 text-white rounded-2xl">Hot</span>
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-3 py-1 h-8 bg-[#b466ea] text-white rounded-2xl">Mega</span>
                                        </div>
                                    </div>

                                    <div className='block md:hidden absolute top-1 left-0 right-0 bottom-0 '>
                                        <div className="text-end">
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-4 py-1 h-8 bg-red-600 text-white rounded-2xl">Hot</span>
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-3 py-1 h-8 bg-[#b466ea] text-white rounded-2xl">Mega</span>
                                        </div>
                                    </div>

                                    <div className='text-start'>
                                        <p className='text-lg font-semibold'>MegaMog</p>
                                        <p className='text-gray-500 '>Megastore</p>
                                    </div>

                                </div>
                                <div className="bg-white p-2 md:p-5 rounded-lg relative">
                                    <div className="">
                                        <img src="https://minimog-4437.kxcdn.com/supergear/wp-content/themes/minimog-child-demo/assets/images/demo/megamog.jpg"
                                            alt="Megamog"
                                            loading="lazy" />
                                    </div>

                                    <div className='hidden md:block'>
                                        <div className="text-end mt-3">
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-4 py-1 h-8 bg-red-600 text-white rounded-2xl">Hot</span>
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-3 py-1 h-8 bg-[#b466ea] text-white rounded-2xl">Mega</span>
                                        </div>
                                    </div>

                                    <div className='block md:hidden absolute top-1 left-0 right-0 bottom-0 '>
                                        <div className="text-end">
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-4 py-1 h-8 bg-red-600 text-white rounded-2xl">Hot</span>
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-3 py-1 h-8 bg-[#b466ea] text-white rounded-2xl">Mega</span>
                                        </div>
                                    </div>

                                    <div className='text-start'>
                                        <p className='text-lg font-semibold'>MegaMog</p>
                                        <p className='text-gray-500 '>Megastore</p>
                                    </div>

                                </div>
                                <div className="bg-white p-2 md:p-5 rounded-lg relative">
                                    <div className="">
                                        <img src="https://minimog-4437.kxcdn.com/supergear/wp-content/themes/minimog-child-demo/assets/images/demo/megamog.jpg"
                                            alt="Megamog"
                                            loading="lazy" />
                                    </div>

                                    <div className='hidden md:block'>
                                        <div className="text-end mt-3">
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-4 py-1 h-8 bg-red-600 text-white rounded-2xl">Hot</span>
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-3 py-1 h-8 bg-[#b466ea] text-white rounded-2xl">Mega</span>
                                        </div>
                                    </div>

                                    <div className='block md:hidden absolute top-1 left-0 right-0 bottom-0 '>
                                        <div className="text-end">
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-4 py-1 h-8 bg-red-600 text-white rounded-2xl">Hot</span>
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-3 py-1 h-8 bg-[#b466ea] text-white rounded-2xl">Mega</span>
                                        </div>
                                    </div>

                                    <div className='text-start'>
                                        <p className='text-lg font-semibold'>MegaMog</p>
                                        <p className='text-gray-500 '>Megastore</p>
                                    </div>

                                </div>
                                <div className="bg-white p-2 md:p-5 rounded-lg relative">
                                    <div className="">
                                        <img src="https://minimog-4437.kxcdn.com/supergear/wp-content/themes/minimog-child-demo/assets/images/demo/megamog.jpg"
                                            alt="Megamog"
                                            loading="lazy" />
                                    </div>

                                    <div className='hidden md:block'>
                                        <div className="text-end mt-3">
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-4 py-1 h-8 bg-red-600 text-white rounded-2xl">Hot</span>
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-3 py-1 h-8 bg-[#b466ea] text-white rounded-2xl">Mega</span>
                                        </div>
                                    </div>

                                    <div className='block md:hidden absolute top-1 left-0 right-0 bottom-0 '>
                                        <div className="text-end">
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-4 py-1 h-8 bg-red-600 text-white rounded-2xl">Hot</span>
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-3 py-1 h-8 bg-[#b466ea] text-white rounded-2xl">Mega</span>
                                        </div>
                                    </div>

                                    <div className='text-start'>
                                        <p className='text-lg font-semibold'>MegaMog</p>
                                        <p className='text-gray-500 '>Megastore</p>
                                    </div>

                                </div>
                                <div className="bg-white p-2 md:p-5 rounded-lg relative">
                                    <div className="">
                                        <img src="https://minimog-4437.kxcdn.com/supergear/wp-content/themes/minimog-child-demo/assets/images/demo/megamog.jpg"
                                            alt="Megamog"
                                            loading="lazy" />
                                    </div>

                                    <div className='hidden md:block'>
                                        <div className="text-end mt-3">
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-4 py-1 h-8 bg-red-600 text-white rounded-2xl">Hot</span>
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-3 py-1 h-8 bg-[#b466ea] text-white rounded-2xl">Mega</span>
                                        </div>
                                    </div>

                                    <div className='block md:hidden absolute top-1 left-0 right-0 bottom-0 '>
                                        <div className="text-end">
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-4 py-1 h-8 bg-red-600 text-white rounded-2xl">Hot</span>
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-3 py-1 h-8 bg-[#b466ea] text-white rounded-2xl">Mega</span>
                                        </div>
                                    </div>

                                    <div className='text-start'>
                                        <p className='text-lg font-semibold'>MegaMog</p>
                                        <p className='text-gray-500 '>Megastore</p>
                                    </div>

                                </div>
                                <div className="bg-white p-2 md:p-5 rounded-lg relative">
                                    <div className="">
                                        <img src="https://minimog-4437.kxcdn.com/supergear/wp-content/themes/minimog-child-demo/assets/images/demo/megamog.jpg"
                                            alt="Megamog"
                                            loading="lazy" />
                                    </div>

                                    <div className='hidden md:block'>
                                        <div className="text-end mt-3">
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-4 py-1 h-8 bg-red-600 text-white rounded-2xl">Hot</span>
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-3 py-1 h-8 bg-[#b466ea] text-white rounded-2xl">Mega</span>
                                        </div>
                                    </div>

                                    <div className='block md:hidden absolute top-1 left-0 right-0 bottom-0 '>
                                        <div className="text-end">
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-4 py-1 h-8 bg-red-600 text-white rounded-2xl">Hot</span>
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-3 py-1 h-8 bg-[#b466ea] text-white rounded-2xl">Mega</span>
                                        </div>
                                    </div>

                                    <div className='text-start'>
                                        <p className='text-lg font-semibold'>MegaMog</p>
                                        <p className='text-gray-500 '>Megastore</p>
                                    </div>

                                </div>
                                <div className="bg-white p-2 md:p-5 rounded-lg relative">
                                    <div className="">
                                        <img src="https://minimog-4437.kxcdn.com/supergear/wp-content/themes/minimog-child-demo/assets/images/demo/megamog.jpg"
                                            alt="Megamog"
                                            loading="lazy" />
                                    </div>

                                    <div className='hidden md:block'>
                                        <div className="text-end mt-3">
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-4 py-1 h-8 bg-red-600 text-white rounded-2xl">Hot</span>
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-3 py-1 h-8 bg-[#b466ea] text-white rounded-2xl">Mega</span>
                                        </div>
                                    </div>

                                    <div className='block md:hidden absolute top-1 left-0 right-0 bottom-0 '>
                                        <div className="text-end">
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-4 py-1 h-8 bg-red-600 text-white rounded-2xl">Hot</span>
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-3 py-1 h-8 bg-[#b466ea] text-white rounded-2xl">Mega</span>
                                        </div>
                                    </div>

                                    <div className='text-start'>
                                        <p className='text-lg font-semibold'>MegaMog</p>
                                        <p className='text-gray-500 '>Megastore</p>
                                    </div>

                                </div>
                                <div className="bg-white p-2 md:p-5 rounded-lg relative">
                                    <div className="">
                                        <img src="https://minimog-4437.kxcdn.com/supergear/wp-content/themes/minimog-child-demo/assets/images/demo/megamog.jpg"
                                            alt="Megamog"
                                            loading="lazy" />
                                    </div>

                                    <div className='hidden md:block'>
                                        <div className="text-end mt-3">
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-4 py-1 h-8 bg-red-600 text-white rounded-2xl">Hot</span>
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-3 py-1 h-8 bg-[#b466ea] text-white rounded-2xl">Mega</span>
                                        </div>
                                    </div>

                                    <div className='block md:hidden absolute top-1 left-0 right-0 bottom-0 '>
                                        <div className="text-end">
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-4 py-1 h-8 bg-red-600 text-white rounded-2xl">Hot</span>
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-3 py-1 h-8 bg-[#b466ea] text-white rounded-2xl">Mega</span>
                                        </div>
                                    </div>

                                    <div className='text-start'>
                                        <p className='text-lg font-semibold'>MegaMog</p>
                                        <p className='text-gray-500 '>Megastore</p>
                                    </div>

                                </div>
                                <div className="bg-white p-2 md:p-5 rounded-lg relative">
                                    <div className="">
                                        <img src="https://minimog-4437.kxcdn.com/supergear/wp-content/themes/minimog-child-demo/assets/images/demo/megamog.jpg"
                                            alt="Megamog"
                                            loading="lazy" />
                                    </div>

                                    <div className='hidden md:block'>
                                        <div className="text-end mt-3">
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-4 py-1 h-8 bg-red-600 text-white rounded-2xl">Hot</span>
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-3 py-1 h-8 bg-[#b466ea] text-white rounded-2xl">Mega</span>
                                        </div>
                                    </div>

                                    <div className='block md:hidden absolute top-1 left-0 right-0 bottom-0 '>
                                        <div className="text-end">
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-4 py-1 h-8 bg-red-600 text-white rounded-2xl">Hot</span>
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-3 py-1 h-8 bg-[#b466ea] text-white rounded-2xl">Mega</span>
                                        </div>
                                    </div>

                                    <div className='text-start'>
                                        <p className='text-lg font-semibold'>MegaMog</p>
                                        <p className='text-gray-500 '>Megastore</p>
                                    </div>

                                </div>
                                <div className="bg-white p-2 md:p-5 rounded-lg relative">
                                    <div className="">
                                        <img src="https://minimog-4437.kxcdn.com/supergear/wp-content/themes/minimog-child-demo/assets/images/demo/megamog.jpg"
                                            alt="Megamog"
                                            loading="lazy" />
                                    </div>

                                    <div className='hidden md:block'>
                                        <div className="text-end mt-3">
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-4 py-1 h-8 bg-red-600 text-white rounded-2xl">Hot</span>
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-3 py-1 h-8 bg-[#b466ea] text-white rounded-2xl">Mega</span>
                                        </div>
                                    </div>

                                    <div className='block md:hidden absolute top-1 left-0 right-0 bottom-0 '>
                                        <div className="text-end">
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-4 py-1 h-8 bg-red-600 text-white rounded-2xl">Hot</span>
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-3 py-1 h-8 bg-[#b466ea] text-white rounded-2xl">Mega</span>
                                        </div>
                                    </div>

                                    <div className='text-start'>
                                        <p className='text-lg font-semibold'>MegaMog</p>
                                        <p className='text-gray-500 '>Megastore</p>
                                    </div>

                                </div>
                                <div className="bg-white p-2 md:p-5 rounded-lg relative">
                                    <div className="">
                                        <img src="https://minimog-4437.kxcdn.com/supergear/wp-content/themes/minimog-child-demo/assets/images/demo/megamog.jpg"
                                            alt="Megamog"
                                            loading="lazy" />
                                    </div>

                                    <div className='hidden md:block'>
                                        <div className="text-end mt-3">
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-4 py-1 h-8 bg-red-600 text-white rounded-2xl">Hot</span>
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-3 py-1 h-8 bg-[#b466ea] text-white rounded-2xl">Mega</span>
                                        </div>
                                    </div>

                                    <div className='block md:hidden absolute top-1 left-0 right-0 bottom-0 '>
                                        <div className="text-end">
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-4 py-1 h-8 bg-red-600 text-white rounded-2xl">Hot</span>
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-3 py-1 h-8 bg-[#b466ea] text-white rounded-2xl">Mega</span>
                                        </div>
                                    </div>

                                    <div className='text-start'>
                                        <p className='text-lg font-semibold'>MegaMog</p>
                                        <p className='text-gray-500 '>Megastore</p>
                                    </div>

                                </div>
                                <div className="bg-white p-2 md:p-5 rounded-lg relative">
                                    <div className="">
                                        <img src="https://minimog-4437.kxcdn.com/supergear/wp-content/themes/minimog-child-demo/assets/images/demo/megamog.jpg"
                                            alt="Megamog"
                                            loading="lazy" />
                                    </div>

                                    <div className='hidden md:block'>
                                        <div className="text-end mt-3">
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-4 py-1 h-8 bg-red-600 text-white rounded-2xl">Hot</span>
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-3 py-1 h-8 bg-[#b466ea] text-white rounded-2xl">Mega</span>
                                        </div>
                                    </div>

                                    <div className='block md:hidden absolute top-1 left-0 right-0 bottom-0 '>
                                        <div className="text-end">
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-4 py-1 h-8 bg-red-600 text-white rounded-2xl">Hot</span>
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-3 py-1 h-8 bg-[#b466ea] text-white rounded-2xl">Mega</span>
                                        </div>
                                    </div>

                                    <div className='text-start'>
                                        <p className='text-lg font-semibold'>MegaMog</p>
                                        <p className='text-gray-500 '>Megastore</p>
                                    </div>

                                </div>
                                <div className="bg-white p-2 md:p-5 rounded-lg relative">
                                    <div className="">
                                        <img src="https://minimog-4437.kxcdn.com/supergear/wp-content/themes/minimog-child-demo/assets/images/demo/megamog.jpg"
                                            alt="Megamog"
                                            loading="lazy" />
                                    </div>

                                    <div className='hidden md:block'>
                                        <div className="text-end mt-3">
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-4 py-1 h-8 bg-red-600 text-white rounded-2xl">Hot</span>
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-3 py-1 h-8 bg-[#b466ea] text-white rounded-2xl">Mega</span>
                                        </div>
                                    </div>

                                    <div className='block md:hidden absolute top-1 left-0 right-0 bottom-0 '>
                                        <div className="text-end">
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-4 py-1 h-8 bg-red-600 text-white rounded-2xl">Hot</span>
                                            <span className="mx-1 md:mx-2 w-14 md:w-20 px-3 py-1 h-8 bg-[#b466ea] text-white rounded-2xl">Mega</span>
                                        </div>
                                    </div>

                                    <div className='text-start'>
                                        <p className='text-lg font-semibold'>MegaMog</p>
                                        <p className='text-gray-500 '>Megastore</p>
                                    </div>

                                </div>
                               
                               
                            </div>

                        </div>

                    </div>
                </div>
            </CustomModal>

        </div>
    );
};

export default HomeSection;

