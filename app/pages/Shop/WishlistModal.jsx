'use client';
import { removeFromFavorites,setProductDetails } from '@/app/lib/redux/slices/cartSlice';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { CiStar } from 'react-icons/ci';
import { FaRegStar } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from "next/navigation";

const WishlistModal = ({ modalOpen, closeModal, products }) => {
    const dispatch = useDispatch();
    const modalref = useRef();
    const router=useRouter();

    const favourites = useSelector((state) => state.cart.favorites);
    const favQuantity = favourites ? favourites.length : 0;


    const handleRemoveFromFavorites = (item) => {
        dispatch(removeFromFavorites(item));
    };

    const handleClickOutsideModal = (event) => {
        if (modalref.current && !modalref.current.contains(event.target)) {
            closeModal();
        }
    };

  const handleProductClick = (product) => {
    dispatch(setProductDetails(product));
    router.push(`/pages/Details?id=${product.id}`);
  };


    return (
        <>
            {modalOpen && (
                <div
                    onClick={handleClickOutsideModal}
                    tabIndex="-1"
                    aria-hidden="true"
                    className="fixed inset-0 z-50 flex items-center justify-center  bg-black bg-opacity-50"
                >
                    <div ref={modalref}
                        className="relative z-40 p-4 w-full md:w-[530px]"
                        onClick={(event) => event.stopPropagation()} >
                        {/* Modal content */}
                        <div className="relative bg-white shadow">
                            {/* Modal header */}
                            <div className="flex items-center justify-between p-2 bg-black border-b">
                                <h3 className="text-md ml-3 font-semibold text-white">
                                    Wishlist ({products ? products.length : 0})
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
                            {
                                favQuantity === 0 ? (
                                    <h1 className="flex items-end justify-center text-center text-lg text-gray-500 font-medium">
                                        There are no products on the Wishlist!
                                    </h1>
                                ) : (
                                    <div className='overflow-auto h-[280px] lg:h-[350px] overflow-x-auto overflow-y-auto'>
                                        {
                                            favourites.map((item) => {
                                                const { id, imageSrc, title, originalPrice, discountedPrice } = item;
                                                return (
                                                    <div key={id} className='flex flex-row mx-2 lg:m-6 items-center border-b-2 pb-3 border-dotted'>
                                                        <p onClick={() => handleRemoveFromFavorites(item)} className='text-md hover:text-red-500 cursor-pointer'>X</p>
                                                        <img src={imageSrc} className='w-[80px] h-[80px]' alt="" />
                                                        <div className='flex flex-col'>
                                                            <p onClick={()=>handleProductClick(product)} className='text-sm font-medium cursor-pointer'>{title}</p>
                                                            <p className='text-[#32BDE8] text-sm'>{originalPrice}</p>
                                                            <p className='text-xs font-semibold'>December 18, 2023</p>

                                                        </div>
                                                        <div onClick={()=>handleProductClick(product)}
                                                        className="w-full py-2 hover:scale-105 duration-300 focus:ring-4 focus:outline-none
                                                        bg-black text-white cursor-pointer font-medium rounded-full text-lg text-center ml-auto">
                                                            <span className="hidden md:inline">Select Options</span>
                                                            <span className="md:hidden">Select</span>
                                                        </div>
                                                           
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>

                                )
                            }
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
