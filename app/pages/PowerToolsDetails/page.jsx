"use client";
import React, { useState, useRef } from "react";
import {
  FaMinus,
  FaPlus,
  FaRegEye,
  FaRegQuestionCircle,
  FaRegStar,
} from "react-icons/fa";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { GoInbox } from "react-icons/go";
import ProductSection from "./ProductSection";
import Comparison from "./Comparison";
import RelatedProducts from "./Related products";
import RecentlyViewed from "./RecentlyViewed";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  addToFavorites,
  decrement,
  increment,
} from "@/app/lib/redux/slices/cartSlice";
import Link from "next/link";
import BreadCrumbs from "@/app/components/BreadCrumb/BreadCrumbs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { getPowerToolsThumbnails } from "@/app/PowerToolsData";

const Details = () => {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();
  const [selectedThumbnailIndex, setSelectedThumbnailIndex] = useState(0);

  const selectedPowerTools = useSelector((state) => state.cart.selectedPowerTools);
  const counter = useSelector(
    (state) =>
      state.cart.items.find((item) => item.id === selectedPowerTools.id)?.quantity ||
      0
  );

  const handleIncrement = () => {
    dispatch(increment({ itemId: selectedPowerTools.id }));
  };

  const handleDecrement = () => {
    dispatch(decrement({ itemId: selectedPowerTools.id }));
  };

  const handleAddToCart = () => {
    dispatch(addToCart(selectedPowerTools));
  };

  const handleAddToFavorites = () => {
    dispatch(addToFavorites(selectedPowerTools));
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const selectedPowerToolsId = selectedPowerTools ? selectedPowerTools.id : null;
  const thumbnails = getPowerToolsThumbnails(selectedPowerToolsId);

  const handleThumbnailClick = (index) => {
    setSelectedThumbnailIndex(index);
    swiperRef.current.swiper.setTranslate(
      -index * swiperRef.current.swiper.width
    );
  };

  const handlePrevClick = () => {
    const prevIndex =
      (selectedThumbnailIndex - 1 + thumbnails.length) % thumbnails.length;
    setSelectedThumbnailIndex(prevIndex);
    swiperRef.current.swiper.slidePrev();
  };

  const handleNextClick = () => {
    const nextIndex = (selectedThumbnailIndex + 1) % thumbnails.length;
    setSelectedThumbnailIndex(nextIndex);
    swiperRef.current.swiper.slideNext();
  };

  const swiperRef = useRef(null);
  const isDetailsPage = selectedPowerTools != null;

  const breadCrumbs = [
    { name: "Home", url: "/" },
    { name: "Power Tools", url: "/pages/PowerTools" },
    ...(isDetailsPage
      ? [
          {
            name: `${selectedPowerTools?.category}`,
            url: `/products/${selectedPowerTools?.category}`,
          },
          {
            name: `${selectedPowerTools?.title?.substring()} ...`,
            url: `/products/${selectedPowerTools?._id}`,
          },
        ]
      : []),
  ];

  return (
    <>
      <BreadCrumbs breadCrumbs={breadCrumbs} />
      <div className="xl:container xl:mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between  mt-10">
          {selectedPowerTools && (
            <>
              <div className="flex flex-col items-center w-[10%]">
                <div className="hidden md:block">
                  <div
                    className={`flex flex-col space-y-4 cursor-pointer active-thumbnail`}
                  >
                    {thumbnails.map((thumbnail, index) => (
                      <img
                        key={index}
                        src={thumbnail.thumbnail}
                        alt=""
                        className={`w-[70px] object-contain h-[70px] rounded-md border
                      ${
                        selectedThumbnailIndex === index
                          ? "border-black border-2"
                          : "border-gray-300"
                      }
                      hover:border-gray-700 hover:scale-95 duration-700`}
                        onClick={() => handleThumbnailClick(index)}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div
                className="relative items-center w-full md:w-[43%]"
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
                          className="text-black z-50 transition-opacity duration-500 absolute p-2 flex text-center justify-center h-[45px] w-[45px] top-1/2 left-3 transform -translate-y-1/2 text-2xl hover:bg-black hover:text-white bg-[#F2F2F2] rounded-full"
                          onClick={handlePrevClick}
                        >
                          <GrFormPreviousLink />
                        </button>
                        <button
                          className="transition-opacity z-50 ml-7 duration-500 absolute p-2 flex text-center justify-center h-[45px] w-[45px] top-1/2 right-4 transform -translate-y-1/2 text-black text-2xl hover:bg-black hover:text-white bg-[#F2F2F2] rounded-full"
                          onClick={handleNextClick}
                        >
                          <GrFormNextLink />
                        </button>
                      </>
                    )}
                    <Swiper
                      slidesPerView={1}
                      onSlideChange={(swiper) =>
                        setSelectedThumbnailIndex(swiper.activeIndex)
                      }
                      initialSlide={selectedThumbnailIndex} // Add this line
                      ref={swiperRef}
                    >
                      {thumbnails.map((thumbnail, index) => (
                        <SwiperSlide key={index}>
                          <img
                            src={thumbnail.thumbnail}
                            alt="Main Image"
                            className="w-full object-fill"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col mt-6 md:w-[33%] lg:w-[40%]">
                <div className="flex flex-row ">
                  <h3 className="font-bold text-2xl md:text-3xl tracking-wid leading-10 text-start duration-700 ease-in-out text-black">
                    <a href="#">{selectedPowerTools.title}</a>
                  </h3>
                  <div
                    onClick={() => handleAddToFavorites(selectedPowerTools)}
                    className="px-3 text-xl mt-24 bg-white border-2 w-12 h-12 flex items-center rounded-full text-black hover:text-white hover:bg-black duration-700 transform-gpu"
                  >
                    <FaRegStar />
                  </div>
                </div>

                <div className="flex flex-row my-2 px-3 justify-between mt-6 font-thin">
                  <div>
                    <p className="text-[#32BDE8] text-2xl font-semibold">
                      ${selectedPowerTools.originalPrice}
                    </p>
                  </div>
                  <div className="flex flex-row items-center">
                    {Array.from({ length: selectedPowerTools.rating }).map(
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
                    <span className="text-lg font-semibold"> 20 </span> people
                    are viewing this right now
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
                    <button onClick={handleDecrement} className="h-full px-1">
                      <FaMinus />
                    </button>
                    <p className="h-full w-[50px] flex justify-center items-center">
                      {counter}
                    </p>
                    <button onClick={handleIncrement} className="h-full px-1">
                      <FaPlus />
                    </button>
                  </div>
                  <button
                    onClick={() => handleAddToCart(selectedPowerTools)}
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
                    <TbTruckDelivery className="text-2xl" /> Estimated Delivery:
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

        <div className=" mt-20 mx-4 md:mx-14">
          <ProductSection />
          <Comparison />
          <RelatedProducts />
          <RecentlyViewed />
        </div>
      </div>
    </>
  );
};

export default Details;
