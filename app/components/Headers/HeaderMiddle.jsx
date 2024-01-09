import Image from "next/image";
import Logo from "../../../public/images/Logo.png";
import { IoPerson, IoBagOutline, IoMenu } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import React, { useEffect, useRef, useState } from "react";
import NewHeader from "./NewHeader";
import { RiArrowDropDownLine } from "react-icons/ri";
import Link from "next/link";
import Cart from "./Cart";
import Sidebar from "./Sidebar";
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';
import AllModals from "./SingIn";
import { GoSearch } from "react-icons/go";


const HeaderMiddle = () => {
  const [inputValue, setInputValue] = useState('');
  const [showNewHeader, setShowNewHeader] = useState(false);
  const modalRef = useRef(null);
  const [showCart, setShowCart] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [isSectionVisible, setIsSectionVisible] = useState(true);
  const [isHeaderOpen, setIsHeaderOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(typeof window !== 'undefined' && window.innerWidth >= 400);


  const handleToggleHeader = () => {
    setIsHeaderOpen(!isHeaderOpen);
  };

  const handleCloseHeader = () => {
    setIsHeaderOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(typeof window !== 'undefined' && window.innerWidth >= 1024);
      if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
        handleCloseHeader();
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  const handleCartIconClick = () => {
    setShowCart(!showCart);
  };

  const closeCart = () => {
    setShowCart(false);
  };

  const openSignInModal = () => {
    setShowSignInModal(true);
  };

  const closeSignInModal = () => {
    setShowSignInModal(false);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleCategoryClick = () => {
    setShowNewHeader(true);
  };

  const handleInputFocus = () => {
    setShowNewHeader(true);
  };

  const handleCloseSection = () => {
    console.log('Closing NewHeader section');
    setIsSectionVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowNewHeader(false);
      }
    };

    const handleBodyOverflow = () => {
      document.body.style.overflow = showNewHeader ? "hidden" : "auto";
    };

    document.addEventListener("mousedown", handleClickOutside);
    handleBodyOverflow();

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto"; 
    };
  }, [modalRef, showNewHeader]);


  useEffect(() => {
    if (showNewHeader) {
      document.documentElement.style.overflow = "hidden";
      document.documentElement.style.cursor = "crosshair";
    } else {
      document.documentElement.style.overflow = "auto";
      document.documentElement.style.cursor = "default";
    }

    return () => {
      document.documentElement.style.overflow = "auto";
      document.documentElement.style.cursor = "default";
    };
  }, [showNewHeader]);



  return (
    <>
      <div className="container mx-auto">
        <div className={`h-8 mt-2 mx-0 mb-4 lg:mx-9 ${showNewHeader ? 'pointer-events-none' : ''}`}>

          <div className="flex flex-row justify-between gap-10 my-2 mx-6 sm:mx-0">

            <div className="flex items-center flex-shrink-0">
              <Sidebar />
              <Link href='/'>
                <Image
                  src={Logo}
                  alt="Logo Img"
                  className="mt-4 ml-2 md:ml-6 w-[150px] md:w-[200px]"
                />
              </Link>
            </div>
            <div className="mt-3 md:w-3/5 lg:w-1/2 w-1/2 rounded-3xl border-2 hidden md:block">
              <form>
                <div className="flex">
                  <button onClick={handleCategoryClick} id="dropdown-button" data-dropdown-toggle="dropdown"
                    className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium border-r text-center text-gray-900" type="button">All categories
                    <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                    </svg>
                  </button>
                  <div className="relative w-full">
                    <input
                      onClick={handleInputFocus}
                      value={inputValue}
                      onChange={handleInputChange}
                      type="search"
                      id="search-dropdown"
                      className="block p-3 border-gray-200 rounded-full w-full z-20 text-sm text-gray-900"
                      placeholder="Search Products"
                    />

                    <button onClick={handleCategoryClick} type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium border-none h-full text-black">
                      <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="flex items-center gap-4 text-2xl relative">

              <Tooltip
                title="Login"
                position="bottom"
                trigger="mouseenter"
                animation="scale"
                arrow={true}
              >
                <IoPerson
                  className="hidden md:block cursor-pointer hover:text-gray-500 flex-1 w-6 h-6"
                  onClick={openSignInModal}
                />
              </Tooltip>
              <div className="hidden md:block">
                <div className="block mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-black hover:text-gray-700">
                  <Link href="/pages/Wishlist">
                    <Tooltip
                      title="Wishlist" // Tooltip text
                      position="bottom"
                      trigger="mouseenter"
                      animation="scale"
                      arrow={true}
                    >
                      <p className="relative flex">
                        <CiStar className="cursor-pointer hover:text-gray-500 flex-1 w-8 h-8 fill-current" />
                        <span className="absolute right-0 top-0 rounded-full bg-red-700 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm leading-tight text-center">
                          5
                        </span>
                      </p>
                    </Tooltip>
                  </Link>
                </div>
              </div>

              <div className="block md:hidden">
                <div onClick={handleToggleHeader} className="block mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-black hover:text-gray-700">
                  <Tooltip
                    title="Search" // Tooltip text
                    position="bottom"
                    trigger="mouseenter"
                    animation="scale"
                    arrow={true}
                  >
                    <p className="relative flex">
                      <GoSearch className="cursor-pointer hover:text-gray-500 flex-1 w-6 h-6 fill-current" />
                    </p>
                  </Tooltip>
                </div>
              </div>

              <div className="block mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-black hover:text-gray-700">
                <Tooltip
                  title="Cart" // Tooltip text
                  position="bottom"
                  trigger="mouseenter"
                  animation="scale"
                  arrow={true}
                >
                  <p
                    href="#"
                    role="button"
                    className="relative flex"
                    onClick={handleCartIconClick}
                  >
                    <IoBagOutline className="cursor-pointer hover:text-gray-500 flex-1 w-7 h-7 fill-current" />
                    <span className="absolute -right-1 -top-1 rounded-full bg-red-700 w-4 h-4
                    p-0 m-0 text-white font-mono text-sm leading-tight text-center">
                      5
                    </span>
                  </p>
                </Tooltip>
              </div>


            </div>

          </div>

        </div>
      </div>

      {/* Mobile Navbar */}
      {showNewHeader && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 z-50 flex items-start justify-center transition-opacity duration-300">
          <div ref={modalRef} className="bg-white p-6 rounded-lg w-full">
            <NewHeader handleCloseSection={handleCloseSection} />
          </div>
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
      {/* Sign In Modal */}
      {showSignInModal && (
        <div ref={modalRef} >
          <AllModals onClose={closeSignInModal} />
        </div>
      )}
      {isHeaderOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 z-50 flex items-start justify-center transition-opacity duration-300">
          <div className="bg-white p-6 rounded-lg w-full">
            <NewHeader
              handleCloseSection={handleCloseHeader}
              isOpen={isHeaderOpen}
              toggleDropdown={handleToggleHeader}
              isLargeScreen={isLargeScreen}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderMiddle;
