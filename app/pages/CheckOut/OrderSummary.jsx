'use client';
import React, { useState } from 'react';
import { GoPencil } from 'react-icons/go';
import { LiaShippingFastSolid } from 'react-icons/lia';
import { RiCouponLine } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import SellerNote from './SellerNote';
import Shipping from './Shipping';
import Coupen from './Coupen';

const OrderSummary = () => {
    const [selectedShippingOption, setSelectedShippingOption] = useState('free');
    const [isNoteModalOpen, setIsNoteModalOpen] = useState(false);
    const [isShippingModalOpen, setIsopenShippingModal] = useState(false);
    const [isCoupenModalOpen, setIsopenCoupenModal] = useState(false);


    const CartItems = useSelector((state) => state.cart.items);

    const calculateSubtotal = () => {
        return CartItems.reduce((acc, item) => {
            return acc + item.originalPrice * item.quantity;
        }, 0);
    };
    const calculateTotal = () => {
        const subtotal = calculateSubtotal();
        const shippingRate = selectedShippingOption === 'flat' ? 10 : 0;
        return subtotal + shippingRate;
    };

    const openNoteModal = () => {
        setIsNoteModalOpen(true);
    };
    const openShippingModal = () => {
        setIsopenShippingModal(true);
    };
    const openCoupenModal = () => {
        setIsopenCoupenModal(true);
    };

    const closeNoteModal = () => {
        setIsNoteModalOpen(false);
    };
    const closeShippingModal = () => {
        setIsopenShippingModal(false);
    };
    const closeCoupenModal = () => {
        setIsopenCoupenModal(false);
    };

    return (
        <>

            <h1 className="text-xl mx-2 font-bold border-b text-gray-900 md:text-2xl">
                Order summary
            </h1>
            {
                CartItems.map((item) => {
                    const { id, imageSrc, title, originalPrice, quantity } = item;
                    const itemSubtotal = originalPrice * quantity;
                    return (
                        <>
                            <div key={id} className='flex flex-row items-center mt-4 mx-2'>
                                <img src={imageSrc} alt=""
                                    className='w-[60px] h-[60px]'
                                />
                                <div className='flex flex-col'>
                                    <p className='text-base font-semibold text-black'>{title}<span className='text-gray-600 ml-3 text-lg'> <span className='text-lg'>x</span>{quantity}</span></p>
                                    <p className='text-sm font-normal text-gray-800'>Color:
                                        Sage Green</p>
                                    <p className='text-sm font-normal text-gray-800'>Size:
                                        GTS 2 Mini</p>
                                </div>
                                <p className='text-[#32BDE8] text-base'>${itemSubtotal.toFixed(2)}</p>
                            </div>
                            <hr className='mt-2' />
                        </>

                    )
                })
            }

            <div className='flex flex-col ml-auto mt-6 rounded-md'>
                <div className='flex flex-row gap-2 h-[60px] mx-auto'>
                    <div onClick={openNoteModal} className='flex flex-col w-[100px] md:w-[150px]  items-center hover:text-gray-500 text-black text-md cursor-pointer border-r mb-2'>
                        <GoPencil className='text-2xl' />
                        <p>Note</p>
                    </div>
                    <div onClick={openShippingModal} className='flex flex-col w-[100px] md:w-[150px] items-center border-r mb-2  hover:text-gray-500 text-black text-md cursor-pointer'>
                        <LiaShippingFastSolid className='text-2xl' />
                        <p>Shipping</p>
                    </div>
                    <div onClick={openCoupenModal} className='flex flex-col w-[100px] md:w-[150px] items-center mb-2  hover:text-gray-500 text-black text-md cursor-pointer'>
                        <RiCouponLine className='text-2xl' />
                        <p className='text-lg'>Coupon</p>
                    </div>
                </div>
                <hr />
                <div className='flex flex-row  mx-4 justify-between h-[60px] items-center'>
                    <p className='text-gray-500 text-md font-semibold'>Subtotal</p>
                    <p className='text-[#32BDe8] text-lg'>${calculateSubtotal().toFixed(2)}</p>
                </div>
                <hr />
                <div className='flex flex-row justify-between mx-4 items-center h-[77px] border-b'>
                    <p className='text-gray-500 text-md font-semibold'>Shipping</p>
                    <div className='flex flex-col gap-1'>
                        <p className='flex flex-row gap-2 items-center'>
                            <input
                                type="radio"
                                id="freeShipping"
                                name="shippingOption"
                                value="free"
                                checked={selectedShippingOption === 'free'}
                                onChange={() => {
                                    setSelectedShippingOption('free');
                                }}
                                className="w-4 h-4 text-black bg-gray-100 border-gray-300 rounded-full focus:ring-black"
                            />
                            <p> Free shipping </p>
                        </p>
                        <p className='flex flex-row gap-2  mx-4 items-center'>
                            <input
                                type="radio"
                                id="flatRateShipping"
                                name="shippingOption"
                                value="flat"
                                checked={selectedShippingOption === 'flat'}
                                onChange={() => {
                                    setSelectedShippingOption('flat');
                                }}
                                className="w-4 h-4 text-black bg-gray-100 border-gray-300 rounded-full focus:ring-black"
                            />
                            <p> Flat rate: <span className='text-[#32BDe8] text-base'> $10.00</span></p>
                        </p>

                    </div>
                </div>
                <div className='flex flex-row justify-between mx-4 h-[50px] items-center'>
                    <p className='text-gray-800 text-md font-semibold'>Total</p>
                    <p className='text-[#32BDe8] text-2xl font-semibold'>${calculateTotal().toFixed(2)}</p>
                </div>
            </div>

            <h1 className="text-2xl mx-4 font-semibold mt-6 text-start text-gray-900">
                Payment information
            </h1>


            {isNoteModalOpen && <SellerNote onClose={closeNoteModal} />}
            {isShippingModalOpen && <Shipping onClose={closeShippingModal} />}
            {isCoupenModalOpen && <Coupen onClose={closeCoupenModal} />}
        </>
    )
}

export default OrderSummary;
