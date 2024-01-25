"use client";
import React, { useState } from "react";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { IoMdStar } from "react-icons/io";
import DealSlider from "./DealSlider";
import { setProductDetails } from "@/app/lib/redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import { getThumbnails } from "@/app/data";

const Deals = () => {
  const [selectedThumbnailIndex, setSelectedThumbnailIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();

  const thumbnails = [
    {
      id: 1,
      imageUrl:
        "https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_02_1-1-450x450.jpg",
    },
    {
      id: 2,
      imageUrl:
        "https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_24_3-450x450.jpg",
    },
    {
      id: 3,
      imageUrl:
        "https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_23_5-450x450.jpg",
    },
    {
      id: 4,
      imageUrl:
        "https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_02_3-655x655.jpg",
    },
  ];

  const [selectedImage, setSelectedImage] = useState(
    thumbnails.length > 0 ? thumbnails[0].imageUrl : ""
  );

  const handleThumbnailClick = (imageUrl, index) => {
    setSelectedImage(imageUrl);
    setSelectedThumbnailIndex(index);
  };

  const handleNextClick = () => {
    if (thumbnails.length > 0) {
      const nextIndex =
        selectedThumbnailIndex === thumbnails.length - 1
          ? 0
          : selectedThumbnailIndex + 1;

      if (thumbnails[nextIndex]) {
        setSelectedImage(thumbnails[nextIndex].imageUrl);
        setSelectedThumbnailIndex(nextIndex);
      }
    }
  };

  const handlePrevClick = () => {
    if (thumbnails.length > 0) {
      const prevIndex =
        selectedThumbnailIndex === 0
          ? thumbnails.length - 1
          : selectedThumbnailIndex - 1;

      if (thumbnails[prevIndex]) {
        setSelectedImage(thumbnails[prevIndex].imageUrl);
        setSelectedThumbnailIndex(prevIndex);
      }
    }
  };

  return (
    <>
      <div className="xl:container xl:mx-auto">
        <div className="mt-20 mx-5 md:mx-20">
          <div className="flex flex-col md:flex-row gap-2 justify-between border-b">
            <h1 className="text-2xl md:text-4xl font-bold">
              Today’s Best Deals
            </h1>
            <p className="text-md mr-7 underline cursor-pointer">View All</p>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col  mt-3 mx-2 md:mx-10">
          {/* Left Side */}
          <div className="col-span-2 flex flex-col md:flex-row mt-10 w-[100%] lg:w-[66%] rounded-lg border-2 border-gray-700">
            <div className="flex p-2 lg:p-8">
              <div className="flex flex-col space-y-2">
                {thumbnails.map((thumb, index) => (
                  <div
                    onClick={() => handleThumbnailClick(thumb.imageUrl, index)}
                    key={thumb.id}
                    className={`flex flex-col w-[60px] h-[60px] cursor-pointer ${
                      index === selectedThumbnailIndex ? "active-thumbnail" : ""
                    }`}
                  >
                    <img
                      src={thumb.imageUrl}
                      alt=""
                      className={`w-[58px] object-contain h-[58px] rounded-md scale-105 border hover:border-gray-700 hover:scale-95 duration-700 ${
                        index === selectedThumbnailIndex ? "border-black" : ""
                      }`}
                    />
                  </div>
                ))}
              </div>

              <div
                className="relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <img
                  src={selectedImage}
                  alt="Main Image"
                  className="w-[250px] md:w-[300px] lg:w-[275px]"
                />

                <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-between">
                  <button
                    onClick={handlePrevClick}
                    className={`text-black ml-4 p-2 text-2xl hover:bg-black hover:text-white bg-[#F2F2F2] rounded-full transition-opacity duration-500 ${
                      isHovered ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <GrFormPreviousLink />
                  </button>

                  <button
                    onClick={handleNextClick}
                    className={`text-black mr-4 p-2 text-2xl hover:bg-black hover:text-white bg-[#f8f8f8] rounded-full transition-opacity duration-500 ${
                      isHovered ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <GrFormNextLink />
                  </button>
                </div>
              </div>
            </div>
            {/* Content */}
            <div className="w-full md:w-1/2 flex flex-col mx-2 gap-3 mt-2 py-4">
              <h6 className="text-gray-500 text-xs font-medium hover:text-gray-800 duration-500 tracking-tight uppercase">
                <a href="https://minimog.thememove.com/supergear/product-category/tv-audio/bluetooth-speakers/">
                  Smart Watches
                </a>
              </h6>
              <h3
                className="font-bold text-2xl
                         hover:text-gray-500 duration-700 ease-in-out text-black lg:text-ellipsis"
              >
                <a href="#">
                  Xiaomi Mi Watch Lite GPS Bluetooth 5.1 Smart Watch Sports
                  Fitness Heart Rate Monitor 1.4
                </a>
              </h3>

              <div className="flex flex-row my-2 font-thin">
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <span className="text-gray-600 font-semibold ml-3 text-md">
                  1 review
                </span>
              </div>
              <div className="flex flex-row gap-2">
                <del aria-hidden="true">
                  <bdi className="text-gray-500 font-bold text-xl">
                    <span>$</span>139.00
                  </bdi>
                </del>
                <bdi className="text-red-500 text-2xl font-bold">
                  <span>$129.00</span>
                </bdi>
              </div>

              <p className="mt-5 text-[#1d8221] leading-5 text-md font-semibold">
                Out of stock
              </p>
            </div>
          </div>

          {/* Rigth Side */}
          <div className="w-full lg:w-[33%] mt-8">
            <DealSlider />
          </div>
        </div>
      </div>
    </>
  );
};

export default Deals;
