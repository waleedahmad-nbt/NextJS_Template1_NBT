import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { GoPencil } from 'react-icons/go';
import { LiaShippingFastSolid } from 'react-icons/lia';
import { RiCouponLine } from 'react-icons/ri';

const Cart = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(true);
  const cartRef = useRef(null);


  const handleClose = () => {
    setIsOpen(false);
    onClose(); 
  };

  const handleBackdropClick = (e) => {
    if (cartRef.current && !cartRef.current.contains(e.target)) {
      setIsOpen(false);
      onClose(); // Notify the parent component that the cart is closed
    }
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';

    if (isOpen) {
      document.addEventListener('click', handleBackdropClick);
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('click', handleBackdropClick);
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }


  useEffect(() => {
    const handleBackdropClick = (e) => {
      if (cartRef.current && !cartRef.current.contains(e.target)) {
        setIsOpen(false);
        onClose(); // Notify the parent component that the cart is closed
      }
    };

    document.addEventListener('click', handleBackdropClick);

    return () => {
      document.removeEventListener('click', handleBackdropClick);
    };
  }, [onClose]);


  return (
    <>
      {/* Slide-over backdrop */}
      <div
        onClick={handleClose}
        className="fixed inset-0 bg-gray-500 bg-opacity-30 transition-opacity"
        aria-hidden="true"
      ></div>

      {/* Slide-over panel */}
      <div ref={cartRef} className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          {/* Slide-over container */}
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
            <div className="pointer-events-auto w-screen max-w-md">
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                {/* Slide-over header */}
                <div className="flex-1  px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <h2 className="text-2xl font-bold text-gray-900" id="slide-over-title">
                      Shopping cart
                    </h2>
                    <div className="flex h-7 items-center">
                      {/* Close button */}
                      <button onClick={handleClose} type="button" className="relative p-2 mr-2 text-gray-800 hover:text-gray-500">
                        <span className="absolute -inset-0.5"></span>
                        <span className="sr-only">Close panel</span>
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <p>🔥 These products are limited, checkout within </p>


                  {/* Cart items */}
                  <div className="mt-8">
                    <div className="flow-root">
                      <ul role="list" className="-my-6 divide-y divide-gray-200">
                        <li className="flex py-6 gap-3">
                          <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                            <img
                              src="https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_24_3-450x450.jpg"
                              alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className='flex flex-col'>
                            <p className='text-sm font-bold'>Cwxuan Sports Magnetic Bluetooth V4.1 Stereo Earphone with Microphone</p>
                            <p>Color:
                              Black</p>
                            <p>$15.90</p>
                            <div className='flex items-center gap-4'>
                            <div className="flex w-[100px] mt-4 h-max bg-[#F1F1F1] px-1 py-2 justify-between rounded-3xl items-center overflow-hidden">
                              <button
                                className=" h-full px-1"

                              >
                                <FaMinus />
                              </button>
                              <p class="h-full w-[50px] flex justify-center items-center">
                                2
                              </p>
                              <button
                                className=" h-full px-1"
                              >
                                <FaPlus />
                              </button>
                            </div>
                            <a href='#' className='text-sm hover:text-gray-500 duration-300 underline mt-2'>remove</a>
                            </div>
                          </div>
                        </li>
                        <li className="flex py-6 gap-3">
                          <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                            <img
                              src="https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_23_5-450x450.jpg"
                              alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className='flex flex-col'>
                            <p className='text-sm font-bold'>Cwxuan Sports Magnetic Bluetooth V4.1 Stereo Earphone with Microphone</p>
                            <p>Color:
                              Black</p>
                            <p>$15.90</p>
                            <div className='flex items-center gap-4'>
                            <div className="flex w-[100px] mt-4 h-max bg-[#F1F1F1] px-1 py-2 justify-between rounded-3xl items-center overflow-hidden">
                              <button
                                className=" h-full px-1"

                              >
                                <FaMinus />
                              </button>
                              <p class="h-full w-[50px] flex justify-center items-center">
                                2
                              </p>
                              <button
                                className=" h-full px-1"
                              >
                                <FaPlus />
                              </button>
                            </div>
                            <a href='#' className='text-sm hover:text-gray-500 duration-300 underline mt-2'>remove</a>
                            </div>
                          </div>
                        </li>
                        <li className="flex py-6 gap-3">
                          <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                            <img
                              src="https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_02_1-1-450x450.jpg"
                              alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className='flex flex-col'>
                            <p className='text-sm font-bold'>Cwxuan Sports Magnetic Bluetooth V4.1 Stereo Earphone with Microphone</p>
                            <p>Color:
                              Black</p>
                            <p>$15.90</p>
                            <div className='flex items-center gap-4'>
                            <div className="flex w-[100px] mt-4 h-max bg-[#F1F1F1] px-1 py-2 justify-between rounded-3xl items-center overflow-hidden">
                              <button
                                className=" h-full px-1"

                              >
                                <FaMinus />
                              </button>
                              <p class="h-full w-[50px] flex justify-center items-center">
                                2
                              </p>
                              <button
                                className=" h-full px-1"
                              >
                                <FaPlus />
                              </button>
                            </div>
                            <a href='#' className='text-sm hover:text-gray-500 duration-300 underline mt-2'>remove</a>
                            </div>
                          </div>
                        </li>
                        <li className="flex py-6 gap-3">
                          <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                            <img
                              src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg"
                              alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className='flex flex-col'>
                            <p className='text-sm font-bold'>Cwxuan Sports Magnetic Bluetooth V4.1 Stereo Earphone with Microphone</p>
                            <p>Color:
                              Black</p>
                            <p>$15.90</p>
                            <div className='flex items-center gap-4'>
                            <div className="flex w-[100px] mt-4 h-max bg-[#F1F1F1] px-1 py-2 justify-between rounded-3xl items-center overflow-hidden">
                              <button
                                className=" h-full px-1"

                              >
                                <FaMinus />
                              </button>
                              <p class="h-full w-[50px] flex justify-center items-center">
                                2
                              </p>
                              <button
                                className=" h-full px-1"
                              >
                                <FaPlus />
                              </button>
                            </div>
                            <a href='#' className='text-sm hover:text-gray-500 duration-300 underline mt-2'>remove</a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Cart footer */}
                <div className="border-t border-gray-200 bg-[#F7F7F7] px-4 py-6 sm:px-6">
                  <div className='flex flex-col mt-6 rounded-md'>
                    <div className='flex flex-row gap-2 h-[60px] mx-auto'>
                      <div className='flex flex-col w-[100px]  items-center hover:text-gray-500 text-black text-md cursor-pointer border-r mb-2'>
                        <GoPencil className='text-2xl' />
                        <p>Note</p>
                      </div>
                      <div className='flex flex-col w-[100px] items-center border-r mb-2  hover:text-gray-500 text-black text-md cursor-pointer'>
                        <LiaShippingFastSolid className='text-2xl' />
                        <p>Shipping</p>
                      </div>
                      <div className='flex flex-col w-[100px] items-center mb-2  hover:text-gray-500 text-black text-md cursor-pointer'>
                        <RiCouponLine className='text-2xl' />
                        <p className='text-lg'>Coupon</p>
                      </div>
                    </div>
                    <hr />
                    <div className='flex flex-row justify-between h-[60px] items-center'>
                      <p className='text-gray-500 text-md font-semibold'>Subtotal</p>
                      <p className='text-[#32BDe8]'>$1,527.39</p>
                    </div>
                    <hr />
                    <div className='flex flex-row justify-between items-center h-[77px] border-b'>
                      <p className='text-gray-500 text-md font-semibold'>Shipping</p>
                      <div className='flex flex-col gap-2'>
                        <p className='flex flex-row gap-2 items-center'>
                          <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-black bg-gray-100 border-gray-300 rounded-full focus:ring-black" />
                          <p >  Free shipping </p>
                        </p>
                        <p className='flex flex-row gap-2 items-center'>
                          <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-black bg-gray-100 border-gray-300 rounded-full focus:ring-black" />
                          <p> Flat rate: <span className='text-[#32BDe8]'> $10.00</span></p>
                        </p>

                      </div>
                    </div>
                    <div className='flex flex-row justify-between h-[50px] items-center'>
                      <p className='text-gray-800 text-md font-semibold'>Total</p>
                      <p className='text-[#32BDe8]'>$1,527.39</p>
                    </div>
                    <div className='flex flex-col items-center text-center gap-2'>
                      <button type="submit" className="w-[360px] hover:scale-105 duration-300 focus:ring-4 focus:outline-none bg-black text-white font-medium rounded-full text-lg px-5 py-2 text-center items-center ml-7">PLACE ORDER</button>
                      <Link href="/pages/Cart">
                      <p className='underline'>View Cart</p>
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Cart