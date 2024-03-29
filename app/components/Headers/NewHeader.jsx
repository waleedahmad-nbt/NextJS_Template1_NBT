"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Logo from "../../../public/images/Logo.png";
import { IoPerson, IoBagOutline, IoPersonOutline } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";
import AllModals from "./SingIn";
import Link from "next/link";
import Cart from "./Cart";
import { useSelector } from "react-redux";
import { FaRegStar } from "react-icons/fa6";
import { GoSearch } from "react-icons/go";

const NewHeader = ({ handleCloseSection, isLargeScreen }) => {
  const [inputValue, setInputValue] = useState("");
  const [showCategoriesDropdown, setShowCategoriesDropdown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [showSignInModal, setShowSignInModal] = useState(false);
  const modalRef = useRef(null);
  const [showCart, setShowCart] = useState(false);
  const favorites = useSelector((state) => state.cart.favorites);
  const cartItems = useSelector((state) => state.cart.items);

  const favQuantity = favorites ? favorites.length : 0;
  const cartQuantity = cartItems ? cartItems.length : 0;

  useEffect(() => {
    // Close the header on large screens
    if (isLargeScreen) {
      handleCloseSection();
    }
  }, [isLargeScreen]);

  const handleClose = () => {
    setIsOpen(false);
    handleCloseSection();
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setIsOpen(false);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };
  const handleCartIconClick = () => {
    setShowCart(!showCart);
  };

  const closeCart = () => {
    setShowCart(false);
  };

  const categories = [
    "All Categories",
    "MP3 Players",
    "Microphone",
    "Bluetooth Speakers",
    "Cell Phones",
    "Tv & Audio",
    "Smart Phones",
    "Waterproof Phones",
    "Dual Sms Phones",
    "Featured Phones",
    "Refurbished Phones",
    "Power Tools",
    "Tv Box",
    "Headphones",
    "Fitness Headphones",
    "On ears Over ears",
    "Headphones Accessories",
    "Smart Electronics",
    "Smart Watches",
    "Smart WristBand",
    "Cameras & Photos",
    "Computer & Laptops",
  ];

  const filteredCategories = categories.filter((category) =>
    category.toLowerCase().includes(searchTerm)
  );

  const openSignInModal = () => {
    setShowSignInModal(true);
  };
  const closeSignInModal = () => {
    setShowSignInModal(false);
  };

  const handleToggleHeader = () => {
    setIsHeaderOpen(!isHeaderOpen);
  };

  const handleCloseHeader = () => {
    setIsHeaderOpen(false);
  };

  return (
    <>
      <div className="py-3 cursor-pointer">
        <div className="md:h-[126px] h-screen duration-700 ease-in-out">
          <div className="block md:hidden">
            <div className="flex justify-between items-center mx-6 mb-3">
              <p className="text-lg font-semibold">Search our store</p>
              <RxCross2
                onClick={handleClose}
                className="text-xl font-semibold"
              />
            </div>
          </div>
          <div className="container mx-auto  flex justify-between items-center">
            <div className="hidden md:block">
              <div className="flex items-center ">
                <div className="flex-shrink-0">
                  <Image
                    src={Logo}
                    alt="Logo Img"
                    width={180}
                    height={180}
                    className="mt-2 ml-6 scale-90"
                  />
                </div>
              </div>
            </div>

            <div className="md:w-1/2 w-full">
              <form className="p-1 rounded-3xl border-2 border-gray-300">
                <div className="flex items-center relative">
                  <div className="flex items-center justify-center">
                    <div className="relative group">
                      <div
                        className="flex flex-row justify-center items-center py-1 text-sm  text-gray-700 bg-white rounded-md"
                        onClick={toggleDropdown}
                      >
                        <span className="text-sm sm:text-lg overflow-ellipsis">
                          {selectedCategory}
                        </span>
                        <RiArrowDropDownLine className="text-3xl border-r" />
                      </div>
                      <div
                        className={` ${
                          isOpen ? "" : "hidden"
                        } absolute left-3 md:left-0 top-6 md:top-1 right-0 mt-2 rounded-2xl border border-black shadow-lg bg-white ring-1 ring-black p-2 w-[245px] h-[452px] overflow-auto`}
                      >
                        <div className="flex items-center gap-2 rounded-3xl border-2 border-gray-400">
                          <input
                            onChange={handleSearchInput}
                            value={searchTerm}
                            type="search"
                            className="py-2 rounded-3xl px-3 md:px-8 focus:outline-none w-full"
                          />
                          <div type="button" className="px-2 py-1">
                            <IoIosSearch className="text-xl font-medium text-gray-600 hover:text-black" />
                          </div>
                        </div>
                        {filteredCategories.map((category, index) => (
                          <p
                            key={index}
                            onClick={() => handleCategoryClick(category)}
                            className="block font-semibold px-5 py-3 text-base text-gray-600  hover:bg-black
                            hover:text-white active:bg-gray-100 duration-500 cursor-pointer overflow-ellipsis rounded-md"
                          >
                            {category}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>

                  {!showCategoriesDropdown && (
                    <input
                      type="search"
                      className="search-field p-2 px-2  placeholder-gray-500 focus:outline-none w-1/3 md:w-1/2"
                      placeholder="Search products"
                      value={inputValue}
                      onChange={handleInputChange}
                    />
                  )}
                </div>
              </form>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center text-center space-x-6 text-2xl relative">
                <Tooltip
                  title="Login"
                  position="bottom"
                  trigger="mouseenter"
                  animation="scale"
                  arrow={true}
                >
                  <IoPersonOutline
                    className="hidden md:block cursor-pointer hover:text-gray-500 w-5 h-5"
                    onClick={openSignInModal}
                  />
                </Tooltip>
                <div className="hidden md:block">
                  <div className="flex items-center text-black hover:text-gray-700">
                    <Link href="/pages/Wishlist">
                      <Tooltip
                        title="Wishlist" // Tooltip text
                        position="bottom"
                        trigger="mouseenter"
                        animation="scale"
                        arrow={true}
                      >
                        <p className="relative flex">
                          <FaRegStar className="cursor-pointer hover:text-gray-500 w-5 h-5" />
                          <span className="absolute right-2 left-4 -top-2 rounded-full bg-[#e02b2b] w-5 h-5  p-0 m-0 text-white text-sm text-center">
                            {favQuantity >= 1 ? favQuantity : 0}
                          </span>
                        </p>
                      </Tooltip>
                    </Link>
                  </div>
                </div>

                {/* Search */}
                <div className="block md:hidden">
                  <div
                    onClick={handleToggleHeader}
                    className="block mt-3 lg:inline-block  align-middle text-black hover:text-gray-700"
                  >
                    <Tooltip
                      title="Search" // Tooltip text
                      position="bottom"
                      trigger="mouseenter"
                      animation="scale"
                      arrow={true}
                    >
                      <p className="relative flex">
                        <GoSearch className="cursor-pointer hover:text-gray-500 w-6 h-6 fill-current" />
                      </p>
                    </Tooltip>
                  </div>
                </div>

                <div className="block lg:inline-block mt-3 sm:mt-0 align-middle text-black hover:text-gray-700">
                  <Tooltip
                    title="Cart" // Tooltip text
                    position="bottom"
                    trigger="mouseenter"
                    animation="scale"
                    arrow={true}
                  >
                    <p className="relative flex" onClick={handleCartIconClick}>
                      <IoBagOutline className="cursor-pointer hover:text-gray-500 w-6 h-6 fill-current" />
                      <span className="absolute right-2 left-4 -top-2 rounded-full bg-[#e02b2b] w-5 h-5  p-0 m-0 text-white text-sm text-center">
                        {cartQuantity >= 1 ? cartQuantity : 0}
                      </span>
                    </p>
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row flex-wrap text-center justify-center cursor-pointer mt-3">
            <h1 className="font-semibold text-gray-500 text-md ">
              Popular Searches:
            </h1>
            <span className="underline hover:text-gray-500 cursor-pointer ml-2">
              Headphone
            </span>
            <span className="underline text-gray-900 mx-3 hover:text-gray-500 cursor-pointer">
              Tablet
            </span>
            <span className="underline text-gray-900 hover:text-gray-500 cursor-pointer">
              Mobile
            </span>
          </div>
        </div>
      </div>

      {showSignInModal && (
        <div ref={modalRef}>
          <AllModals onClose={closeSignInModal} />
        </div>
      )}

      {/* Mobile Menu */}
      {showCart && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 z-50 flex items-start justify-center transition-opacity duration-300">
          <div ref={modalRef} className="bg-white p-6 rounded-lg w-full">
            <Cart onClose={closeCart} />
          </div>
        </div>
      )}
    </>
  );
};

export default NewHeader;
