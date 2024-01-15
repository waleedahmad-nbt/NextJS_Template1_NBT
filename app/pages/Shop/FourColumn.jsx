'use client';
import React, { useState } from 'react';
import { CiStar } from 'react-icons/ci';
import { products } from '@/app/data';
import { useDispatch, useSelector } from 'react-redux';
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';
import { FaArrowRightArrowLeft } from 'react-icons/fa6';
import { IoBagOutline } from 'react-icons/io5';
import { addToCart, addToFavorites, setProductDetails } from '@/app/lib/redux/slices/cartSlice';
import Link from 'next/link';
import WishlistModal from './WishlistModal';
import { useRouter } from 'next/navigation';

const FourColumn = () => {

    const [hoveredProduct, setHoveredProduct] = useState(null);
    const [wishlistModalOpen, setWishlistModalOpen] = useState(false);
    const dispatch = useDispatch();
    const router=useRouter();

    const favorites = useSelector((state) => state.cart.favorites);

    const handleAddToFavorites = (product) => {
        dispatch(addToFavorites(product));
    };

    const handleAddToCart = (event,product) => {
        event.stopPropagation();
        dispatch(addToCart(product));
    };


    const toggleWishlistModal = () => {
        setWishlistModalOpen(!wishlistModalOpen);
    };


    const handleToggleWishlist = (event,product) => {
        event.stopPropagation();
        const isFavorite = favorites.some((item) => item.id === product.id);
        if (isFavorite) {
            toggleWishlistModal();
        } else {
            handleAddToFavorites(product);
        }
    };

    const handleProductClick = (product) => {
        dispatch(setProductDetails(product));
        router.push(`/pages/Details?id=${product.id}`);
    }

    return (
        <>

            <div className={`grid grid-cols-2 lg:grid-cols-4`}>
                {products.map(product => (
                    <>
                        <div
                            key={product.id}
                            className='relative cursor-pointer h-[450px] w-full mt-6 p-1 md:p-3 gap-5 overflow-hidden 
                border border-transparent hover:border-black rounded-lg'
                            onMouseEnter={() => setHoveredProduct(product.id)}
                            onMouseLeave={() => setHoveredProduct(null)}
                            onClick={()=>handleProductClick(product)}
                        >
                            <div className='relative w-full h-[216px] p-2 overflow-hidden transition-transform duration-700 ease-in-out'>
                                <img
                                    src={hoveredProduct === product.id ? product.hoverImage : product.imageSrc}
                                    className='w-full h-full object-cover transition-all duration-1000 ease-in-out hover:scale-105'
                                    alt="img"
                                />

                                {hoveredProduct === product.id && (
                                    <div className='absolute top-0 right-0 flex flex-col items-center p-2 space-y-2'>
                                        <Tooltip
                                            title={favorites.some((item) => item.id === product.id) ? "Browse Wishlist" : "Add to Wishlist"}
                                            position="left"
                                            trigger="mouseenter"
                                            animation="scale"
                                            arrow={true}
                                        >
                                            <div onClick={(event) => handleToggleWishlist(event,product)}
                                              className={`p-3 bg-${favorites.some((item) => item.id === product.id) ? 'black' : 'white'} rounded-full text-${favorites.some((item) => item.id === product.id) ? 'white' : 'black'} hover:text-white hover:bg-black duration-300 ease-in-out text-xl`}>
                                                <CiStar />
                                            </div>
                                        </Tooltip>

                                        <Tooltip
                                            title="Compare"
                                            position="left"
                                            trigger="mouseenter"
                                            animation="scale"
                                            arrow={true}
                                        >
                                            <div className='p-3 bg-white rounded-full text-black hover:text-white hover:bg-black duration-300 ease-in-out text-xl'>
                                                <FaArrowRightArrowLeft />
                                            </div>
                                        </Tooltip>
                                        <Tooltip
                                            title="Cart"
                                            position="left"
                                            trigger="mouseenter"
                                            animation="scale"
                                            arrow={true}
                                        >
                                            <div onClick={(event) => handleAddToCart(event,product)} className='p-3 bg-white rounded-full text-black hover:text-white hover:bg-black duration-300 ease-in-out text-xl'>
                                                <IoBagOutline />
                                            </div>
                                        </Tooltip>
                                    </div>
                                )}

                            </div>

                            <div className='flex flex-col gap-2 mt-2'>
                                <h2 className='text-gray-500 text-xs font-medium hover:text-gray-800 duration-500 tracking-tight uppercase'>
                                    <p>{product.category}</p>
                                </h2>
                                <Link key={product.id} href={`/pages/Details?id=${product.id}`} passHref>
                                    <h3 className='text-ellipsis font-semibold leading-6 text-black'>
                                        <p>{product.title}</p>
                                    </h3>
                                </Link>

                                <div className='flex flex-row my-2 font-thin'>
                                    {Array.from({ length: product.rating }).map((_, index) => (
                                        <CiStar key={index} />
                                    ))}
                                </div>
                                <div className='flex flex-row gap-2'>
                                    <del aria-hidden='true'>
                                        <bdi className='text-gray-500 font-semibold text-md'>
                                            <span>$</span>
                                            {product.originalPrice}
                                        </bdi>
                                    </del>
                                    <bdi className='text-red-500 font-semibold'>
                                        <span>$</span>
                                        {product.discountedPrice}
                                    </bdi>
                                </div>
                                {hoveredProduct === product.id && (
                                    <Link
                                        href='/pages/Details'>
                                        <p
                                            className='bg-[#F1F1F1] mt-2 text-black w-full overflow-ellipsis hover:bg-black hover:text-white flex text-center justify-center font-semibold py-3 rounded-full duration-300 ease-in-out transform hover:scale-105 transition-opacity'
                                        >
                                            Select Options
                                        </p>
                                    </Link>

                                )}
                            </div>
                        </div>
                    </>
                ))}
            </div>
            <WishlistModal
                modalOpen={wishlistModalOpen}
                closeModal={toggleWishlistModal}
                products={favorites}
            />
        </>
    )
}

export default FourColumn
