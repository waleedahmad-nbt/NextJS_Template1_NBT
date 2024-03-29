"use client";
import {
  addToCart,
  addToFavorites,
  decrement,
  increment,
  setProductDetails,
} from "@/app/lib/redux/slices/cartSlice";
import React, { useEffect, useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  FaArrowRightArrowLeft,
  FaMinus,
  FaPlus,
  FaRegEye,
  FaRegStar,
} from "react-icons/fa6";
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import Link from "next/link";
import { GoInbox } from "react-icons/go";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import initAOS from "@/utils/aos";

const DetailsModal = ({ modalOpen, closeModal }) => {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();
  const modalRef = useRef();
  const swiperRef = useRef(null);

  const selectedProduct = useSelector((state) => state.cart.selectedProduct);

  const counter = useSelector((state) => {
    const selectedProductId = selectedProduct?.id;
  
    if (selectedProductId) {
      return (
        state.cart.items.find((item) => item.id === selectedProductId)?.quantity || 0
      );
    }
  
    return 0;
  });
  
  const handleIncrement = () => {
    dispatch(increment({ itemId: selectedProduct.id }));
  };

  const handleDecrement = () => {
    dispatch(decrement({ itemId: selectedProduct.id }));
  };

  
  const handleAddToCart = (product) => {
    const isInCart = counter > 0;
    if (!isInCart) {
      dispatch(addToCart(product));
    }
  };

  const handleAddToFavorites = (product) => {
    dispatch(addToFavorites(product));
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClickOutsideModal = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  const handleNextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  useEffect(() => {
    initAOS();
  }, []);

  return (
    <>
      {modalOpen && (
        <div
          onClick={handleClickOutsideModal}
          tabIndex="-1"
          aria-hidden="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        >
          <RxCross2
            onClick={() => {
              dispatch(setProductDetails(null));
              closeModal();
            }}
            className="absolute z-50 top-10 right-28 shadow-xl duration-500 ease-in-out hover:bg-black hover:text-white cursor-pointer w-10 h-10 font-light rounded-full p-2 text-lg text-black bg-white"
          />
          <div
            ref={modalRef}
            className="relative z-30 p-4 w-[80%] h-[500px] bg-white custom-scrollbar"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="grid grid-cols-2 justify-between ">
              {selectedProduct && (
                <>
                  <div
                    className="relative items-center w-full "
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="relative">
                      <div
                        className="relative group"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        {isHovered && (
                          <>
                            <button
                              data-aos="fade-right"
                              data-aos-duration="500"
                              data-aos-easing="ease-in-sine"
                              onClick={handlePrevSlide}
                              className="text-black z-50 transition-opacity duration-500  ease-in-out absolute p-2 flex text-center justify-center h-[45px] w-[45px] top-1/3 left-20 transform -translate-y-1/2 text-2xl hover:bg-black hover:text-white bg-[#F2F2F2] rounded-full"
                            >
                              <GrFormPreviousLink />
                            </button>
                            <button
                             data-aos="fade-left"
                             data-aos-duration="500"
                             data-aos-easing="ease-in-sine"
                              onClick={handleNextSlide}
                              className="transition-opacity z-50 ml-7 duration-500 absolute p-2 flex text-center justify-center h-[45px] w-[45px] top-1/3 right-20  ease-in-out transform -translate-y-1/2 text-black text-2xl hover:bg-black hover:text-white bg-[#F2F2F2] rounded-full"
                            >
                              <GrFormNextLink />
                            </button>
                          </>
                        )}
                        <Swiper
                          ref={swiperRef}
                          slidesPerView={1}
                          spaceBetween={10}
                        >
                          <SwiperSlide>
                            <img
                              src={selectedProduct.imageSrc}
                              alt="main img"
                              className="w-full object-fill"
                            />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img
                              src={selectedProduct.hoverImage}
                              alt="main img"
                              className="w-full object-fill"
                            />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img
                              src={selectedProduct.thumbnail1}
                              alt="main img"
                              className="w-full object-fill"
                            />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img
                              src={selectedProduct.thumbnail2}
                              alt="main img"
                              className="w-full object-fill"
                            />
                          </SwiperSlide>
                        </Swiper>
                      </div>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="flex flex-col mt-6 ">
                    <div className="flex flex-row ">
                      <h3 className="font-bold text-2xl md:text-3xl tracking-wid leading-10 text-start duration-700 ease-in-out text-black hover:text-gray-400 tracking-wider">
                        <a href="#">{selectedProduct.title}</a>
                      </h3>
                      <div
                        onClick={() => handleAddToFavorites(selectedProduct)}
                        className="px-3 text-xl mt-24 bg-white border-2 w-12 h-12 flex items-center rounded-full text-black hover:text-white hover:bg-black duration-700 transform-gpu"
                      >
                        <FaRegStar />
                      </div>
                    </div>

                    <div className="flex flex-row my-2 px-3 justify-between mt-6 font-thin">
                      <div>
                        <p className="text-[#32BDE8] text-2xl font-semibold">
                          ${selectedProduct.originalPrice}
                        </p>
                      </div>
                      <div className="flex flex-row items-center">
                        {Array.from({ length: selectedProduct.rating }).map(
                          (_, index) => (
                            <FaRegStar key={index} />
                          )
                        )}
                        <span className="text-gray-600 ml-3 text-md">
                          (0 review)
                        </span>
                      </div>
                    </div>

                    <div className="flex fle-row items-center gap-2 mt-3">
                      <FaRegEye />
                      <p className="leading-7 font-medium text-md tracking-tight">
                        {" "}
                        <span className="text-lg font-semibold"> 20 </span>{" "}
                        people are viewing this right now
                      </p>
                    </div>
                    <div className="flex flex-col mt-6">
                      <p>Color:</p>
                      <div className="flex flex-row gap-2">
                        <div class="w-12 h-12 rounded-full border-2 overflow-hidden bg-[#ade9b7] hover:scale-110 transform-gpu transition-transform duration-300"></div>
                        <div class="w-12 h-12 rounded-full border-2 overflow-hidden bg-[#dd3333] hover:scale-110 transform-gpu transition-transform duration-300"></div>
                        <div class="w-12 h-12 rounded-full border-2 overflow-hidden bg-[#757575] hover:scale-110 transform-gpu transition-transform duration-300"></div>
                      </div>
                    </div>

                    <p className="mt-4 font-semibld text-lg">Quantity</p>
                    <div className="flex flex-row gap-3 md:gap-8 items-center">
                      <div className="flex  mt-4 max-w-[170px] h-max bg-[#F1F1F1] px-5 py-3 justify-between rounded-3xl items-center overflow-hidden">
                        <button
                          onClick={handleDecrement}
                          className="h-full px-1"
                        >
                          <FaMinus />
                        </button>
                        <p className="h-full w-[50px] flex justify-center items-center">
                          {counter}
                        </p>
                        <button
                          onClick={handleIncrement}
                          className="h-full px-1"
                        >
                          <FaPlus />
                        </button>
                      </div>
                      <button
                        onClick={() => handleAddToCart(selectedProduct)}
                        className="w-full text-md text-black font-semibold h-12 mt-3 bg-[#F1F1F1] rounded-full hover:bg-black
                         hover:text-white duration-500 transform hover:scale-110 lg:mr-3"
                      >
                        Add To Cart
                      </button>
                    </div>
                    <Link href="/pages/CheckOut">
                      <button
                        className="w-full text-lg mt-3 text-white font-semibold h-12  bg-black rounded-full
                                duration-500 transform hover:scale-105"
                      >
                        Buy Now
                      </button>
                    </Link>

                    <div className="flex flex-row flex-wrap mt-2 mx-2 gap-8 mb-3">
                      <div className="flex flex-row gap-3 items-center font-medium cursor-pointer hover:text-gray-500 duration-300">
                        <FaArrowRightArrowLeft />
                        <p>Compare</p>
                      </div>
                      <div className="flex flex-row gap-3 items-center font-medium cursor-pointer hover:text-gray-500 duration-300">
                        <FaRegQuestionCircle />
                        <p>Ask a Question</p>
                      </div>
                      <div className="flex flex-row gap-3 items-center font-medium cursor-pointer hover:text-gray-500 duration-300">
                        <IoShareSocialOutline className="text-lg font-bold" />
                        <p>Share</p>
                      </div>
                    </div>
                    <hr />
                    <div className="flex flex-row mx-4 gap-2 mt-4">
                      <p className="flex items-center gap-2 font-semibold text-gray-700">
                        {" "}
                        <TbTruckDelivery className="text-2xl" /> Estimated
                        Delivery:
                      </p>
                      <p className="text-gray-500 font-semibold">
                        15 - 22 Dec, 2023
                      </p>
                    </div>
                    <div className="flex flex-row mx-4 gap-2 mt-3">
                      <p className="flex items-center gap-2 font-semibold text-gray-700">
                        {" "}
                        <GoInbox className="text-2xl" />
                        Free Shipping & Returns:
                      </p>
                      <p className="text-gray-500 font-medium ">
                        On all orders over{" "}
                        <span className="text-[#32BDE8]"> $200.00 </span>{" "}
                      </p>
                    </div>

                    <div className="w-full pt-4 h-[80px] bg-[#F1F1F1] gap-2 rounded-lg mt-3 flex flex-col items-center">
                      <img
                        src="https://minimog-4437.kxcdn.com/supergear/wp-content/themes/minimog/assets/woocommerce/product-trust-badge.png"
                        alt=""
                      />
                      <p className="text-sm font-semibold text-gray-700">
                        Guaranteed safe & secure checkout
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailsModal;
