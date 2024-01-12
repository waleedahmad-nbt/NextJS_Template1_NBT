'use client';
import {  removeFromFavorites } from '@/app/lib/redux/slices/cartSlice';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const page = () => {
    const [wishlistPath, setWishlistPath] = useState('');
    const inputRef = useRef(null);
    const dispatch = useDispatch();

    const favourites = useSelector((state) => state.cart.favorites);
    const favQuantity = favourites ? favourites.length : 0;


    const handleRemoveFromFavorites = (item) => {
        dispatch(removeFromFavorites(item));
    };

    useEffect(() => {
        const currentPath = window.location.pathname;

        setWishlistPath(currentPath);
    }, []);

    const handleCopyClick = () => {
        navigator.clipboard.writeText(wishlistPath)
            .then(() => {
                alert(`Wishlist link copied:\n${wishlistPath}`);

                inputRef.current.select();
            })
            .catch((error) => {
                console.error('Unable to copy to clipboard', error);
            });
    };

    return (
        <>
            <div className=''>
                <div className='mt-20'>
                    <h1 className="text-4xl font-bold text-center text-gray-900">
                        Wishlist
                    </h1>

                    {favQuantity === 0 ? (
                        <h1 className="flex items-end justify-center text-center mt-20 text-lg text-gray-500 font-medium">
                            There are no products on the Wishlist!
                        </h1>
                    ) : (
                        <div className='flex flex-col space-y-6 mt-9 mx-8 md:mx-20'>
                            {favourites.map((item) => {
                                const { id, imageSrc, title, originalPrice, discountedPrice } = item;
                                return (
                                    <div key={id} className='flex flex-row  items-center border-b'>
                                        <p
                                            onClick={() => handleRemoveFromFavorites(item)}
                                            className='text-lg hover:text-red-500 cursor-pointer'>X</p>
                                        <img src={imageSrc} className='w-[80px] h-[80px]' alt="" />
                                        <div className='flex flex-col'>
                                            <p className='text-lg font-medium'>{title}</p>
                                            <p className='text-[#32BDE8] text-base'>{originalPrice}
                                                <span className='text-[#32BDE8] text-base'>{discountedPrice}</span>
                                            </p>
                                            <p className='text-base font-medium'>December 18, 2023</p>

                                        </div>
                                        <button
                                            type="submit"
                                            className="w-[200px] h-[50px] px-4 hover:scale-105 duration-300 focus:ring-4 focus:outline-none
                                 bg-black text-white font-medium rounded-full text-lg text-center ml-auto"
                                        >
                                            <span className="hidden md:inline">Select Options</span>
                                            <span className="md:hidden">Select</span>
                                        </button>
                                    </div>
                                )
                            })}

                        </div>
                    )}


                    <div className='flex flex-row mx-4 md:mx-20 mt-20 gap-5 items-center' onClick={handleCopyClick}>
                        <p>Wishlist link:</p>
                        <input
                            ref={inputRef}
                            type="text"
                            value={wishlistPath}
                            readOnly
                            className="bg-white border p-2.5 py-3
                               border-gray-300 text-gray-900 sm:text-sm rounded-full block"
                        />
                        <button
                            type="button"

                            className="w-[120px] h-[50px] px-4 hover:scale-105 duration-300 focus:ring-4 focus:outline-none bg-black text-white font-medium
                    rounded-full text-md "
                        >
                            COPY
                        </button>
                    </div>


                </div>
            </div>
        </>
    )
}
export default page;