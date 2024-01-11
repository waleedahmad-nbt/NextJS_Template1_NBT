import Link from 'next/link';
import React, { useState } from 'react';
import { FaRegStar } from 'react-icons/fa';

const WishlistModal = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <div className='text-xl'>
                <FaRegStar onClick={toggleModal} />
            </div>

            {/* Main modal */}
            {modalOpen && (
                <div
                    tabIndex="-1"
                    aria-hidden="true"
                    className="fixed inset-0 z-50 flex items-center justify-center  bg-black bg-opacity-50"
                >
                    <div className="relative z-40 p-4 w-full md:w-[530px]">
                        {/* Modal content */}
                        <div className="relative bg-white shadow">
                            {/* Modal header */}
                            <div className="flex items-center justify-between p-2 bg-black border-b">
                                <h3 className="text-md ml-3 font-semibold text-white">
                                    Wishlist (5)
                                </h3>
                                <button
                                    onClick={closeModal}
                                    type="button"
                                    className="text-white bg-transparent hover:text-gray-200 rounded-lg text-xs w-8 h-8 inline-flex justify-center items-center"
                                >
                                    <svg
                                        className="w-3 h-3"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 14"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                        />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            {/* Modal body */}
                            <div className='overflow-auto h-[350px] overflow-x-auto overflow-y-auto'>
                                <div className='flex flex-row mx-2 lg:m-6 items-center border-b-2 pb-3 border-dotted'>
                                    <p className='text-md hover:text-red-500 cursor-pointer'>X</p>
                                    <img src="https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_18_1-600x600.jpg" className='w-[80px] h-[80px]' alt="" />
                                    <div className='flex flex-col'>
                                        <p className='text-sm font-medium'>Cwxuan Sports Magnetic Bluetooth V4.1 Stereo Earphone with Microphone</p>
                                        <p className='text-[#32BDE8] text-sm'>$15.90</p>
                                        <p className='text-xs font-semibold'>December 18, 2023</p>

                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full py-2 hover:scale-105 duration-300 focus:ring-4 focus:outline-none
                                 bg-black text-white font-medium rounded-full text-lg text-center ml-auto"
                                    >
                                        <span className="hidden md:inline">Select Options</span>
                                        <span className="md:hidden">Select</span>
                                    </button>
                                </div>
                                <div className='flex flex-row mx-2 lg:m-6 items-center border-b-2 pb-3 border-dotted'>
                                    <p className='text-md hover:text-red-500 cursor-pointer'>X</p>
                                    <img src="https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_18_1-600x600.jpg" className='w-[80px] h-[80px]' alt="" />
                                    <div className='flex flex-col'>
                                        <p className='text-sm font-medium'>Cwxuan Sports Magnetic Bluetooth V4.1 Stereo Earphone with Microphone</p>
                                        <p className='text-[#32BDE8] text-sm'>$15.90</p>
                                        <p className='text-xs font-semibold'>December 18, 2023</p>

                                    </div>
                                    <button
                                type="submit"
                                className="w-full py-2 hover:scale-105 duration-300 focus:ring-4 focus:outline-none
                                 bg-black text-white font-medium rounded-full text-lg text-center ml-auto"
                            >
                                <span className="hidden md:inline">Select Options</span>
                                <span className="md:hidden">Select</span>
                            </button>
                                </div>
                                <div className='flex flex-row mx-2 lg:m-6 items-center border-b-2 pb-3 border-dotted'>
                                    <p className='text-md hover:text-red-500 cursor-pointer'>X</p>
                                    <img src="https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_18_1-600x600.jpg" className='w-[80px] h-[80px]' alt="" />
                                    <div className='flex flex-col'>
                                        <p className='text-sm font-medium'>Cwxuan Sports Magnetic Bluetooth V4.1 Stereo Earphone with Microphone</p>
                                        <p className='text-[#32BDE8] text-sm'>$15.90</p>
                                        <p className='text-xs font-semibold'>December 18, 2023</p>

                                    </div>
                                    <button
                                type="submit"
                                className="w-full py-2 hover:scale-105 duration-300 focus:ring-4 focus:outline-none
                                 bg-black text-white font-medium rounded-full text-lg text-center ml-auto"
                            >
                                <span className="hidden md:inline">Select Options</span>
                                <span className="md:hidden">Select</span>
                            </button>
                                </div>
                                <div className='flex flex-row mx-2 lg:m-6 items-center border-b-2 pb-3 border-dotted'>
                                    <p className='text-md hover:text-red-500 cursor-pointer'>X</p>
                                    <img src="https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_18_1-600x600.jpg" className='w-[80px] h-[80px]' alt="" />
                                    <div className='flex flex-col'>
                                        <p className='text-sm font-medium'>Cwxuan Sports Magnetic Bluetooth V4.1 Stereo Earphone with Microphone</p>
                                        <p className='text-[#32BDE8] text-sm'>$15.90</p>
                                        <p className='text-xs font-semibold'>December 18, 2023</p>

                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full py-2 hover:scale-105 duration-300 focus:ring-4 focus:outline-none
                                 bg-black text-white font-medium rounded-full text-lg text-center ml-auto"
                                    >
                                        <span className="hidden md:inline">Select Options</span>
                                        <span className="md:hidden">Select</span>
                                    </button>
                                </div>
                                <div className='flex flex-row mx-2 lg:m-6 items-center border-b-2 pb-3 border-dotted'>
                                    <p className='text-md hover:text-red-500 cursor-pointer'>X</p>
                                    <img src="https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_18_1-600x600.jpg" className='w-[80px] h-[80px]' alt="" />
                                    <div className='flex flex-col'>
                                        <p className='text-sm font-medium'>Cwxuan Sports Magnetic Bluetooth V4.1 Stereo Earphone with Microphone</p>
                                        <p className='text-[#32BDE8] text-sm'>$15.90</p>
                                        <p className='text-xs font-semibold'>December 18, 2023</p>

                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full py-2 hover:scale-105 duration-300 focus:ring-4 focus:outline-none
                                 bg-black text-white font-medium rounded-full text-lg text-center ml-auto"
                                    >
                                        <span className="hidden md:inline">Select Options</span>
                                        <span className="md:hidden">Select</span>
                                    </button>
                                </div>
                            </div>
                            {/* Modal footer */}
                            <div className="flex items-center justify-between p-2 border-t border-gray-200 rounded-b bg-[#000000]">
                                <Link href="/pages/Wishlist">
                                    <button
                                        type="button"
                                        className="text-white hover:text-gray-500 duration-300 ease-in-out font-medium rounded-lg text-md px-5 py-2.5 text-center "
                                    >
                                        Open wishlist page
                                    </button>
                                </Link>
                                <Link href="/pages/Shop">
                                    <button
                                        type="button"
                                        className="ms-3 text-white hidden md:block hover:text-gray-500 duration-300 ease-in-out rounded-lg text-md font-medium px-5 py-2.5 "
                                    >
                                        Continue shopping
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default WishlistModal;
