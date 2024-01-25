"use client";
import Image from "next/image";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import eng from "../../../public/images/eng.png";
import fr from "../../../public/images/fr.png";
import de from "../../../public/images/de.png";
import HeaderMiddle from "./HeaderMiddle";
import HeaderBottom from "./HeaderBottom";
import { useState } from "react";

const Headers = () => {
  const [isLanguageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [isCurrencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);

  const handleToggleLanguageDropdown = () => {
    setLanguageDropdownOpen((prev) => !prev);
  };

  const handleToggleCurrencyDropdown = () => {
    setCurrencyDropdownOpen((prev) => !prev);
  };

  const handleCurrencyDropdownLeave = () => {
    setCurrencyDropdownOpen(false);
  };

  return (
    <>
      <header className="lg:mb-0 mb-2">
        <div className="py-2 hidden md:block">
          <div className="xl:container xl:mx-auto">
            <div className="flex justify-between items-center mx-10">

              <div className="hidden lg:block">
                <div className="flex flex-row items-center gap-5">
                  <a href="https://www.instagram.com/">
                    <div className="flex flex-row gap-1 cursor-pointer hover:text-gray-500 duration-300 ease-in-out">
                      <FaInstagram className="m-auto" />
                      <p className="text-[15px] leading-5" style={{ fontWeight: 500 }}>100k Followers</p>
                    </div>
                  </a>

                  <a href="https://www.facebook.com/">
                    <div className="flex flex-row gap-1 cursor-pointer hover:text-gray-500  duration-300 ease-in-out">
                      <FaFacebook className="m-auto" />
                      <p className="text-[16px]" style={{ fontWeight: 500 }}>300k Followers</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="flex flex-row gap-1">
                <span class="relative text-white font-bold text-16 rounded-3xl bg-[#EC5D4D] w-[54px] h-[24px] mr-2 text-center">
                  Hot
                </span>

                <p className="text-[15px] leading-7">✌🏼 Free Express Shipping on orders $200!</p>
              </div>

              <div className="flex items-center relative">
                <div className="relative z-50"
                  onMouseOver={handleToggleLanguageDropdown}
                  onMouseOut={handleToggleLanguageDropdown}
                >
                  {/* Language Dropdown button */}
                  <button
                    id="dropdownAvatarNameButton"
                    data-dropdown-toggle="dropdownAvatarName"
                    className="flex items-center text-sm  font-medium text-gray-900 rounded-full"
                    type="button"
                    onClick={handleToggleLanguageDropdown}
                  >
                    <Image className="w-7 h-4 me-2" src={eng} alt="user photo" />
                    <span className="font-semibold">English </span>
                    <svg
                      className="w-2.5 h-2.5 ms-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>

                  {/* Language Dropdown menu */}
                  <div
                    id="dropdownUsers"
                    className={`z-40 ${isLanguageDropdownOpen ? 'block' : 'hidden'} bg-white divide-y divide-gray-100 rounded-md shadow w-36  absolute right-0`}

                  >
                    <ul className="h-auto py-2 overflow-y-auto text-gray-700" aria-labelledby="dropdownUsersButton">
                      <li>
                        <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-100">
                          <Image className="w-6 h-6 me-2 rounded-full" src={fr} alt="French flag" />
                          Français
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-100">
                          <Image className="w-6 h-6 me-2 rounded-full" src={de} alt="German flag" />
                          Deutsch
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="relative z-50"
                  onMouseOver={handleToggleCurrencyDropdown}
                  onMouseOut={handleCurrencyDropdownLeave}
                >
                  {/* Currency Dropdown button */}
                  <button
                    id="dropdownHoverButton"
                    data-dropdown-toggle="dropdownHover"
                    data-dropdown-trigger="hover"
                    className="text-black font-medium rounded-lg text-sm px-3  text-center inline-flex items-center"
                    type="button"
                    onClick={handleToggleCurrencyDropdown}
                  >
                    <span className="font-semibold">USD</span>
                    <svg
                      className="w-2.5 h-2.5 ms-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>

                  {/* Currency Dropdown menu */}
                  <div
                    id="dropdownHover"
                    className={`z-40 ${isCurrencyDropdownOpen ? 'block' : 'hidden'} bg-white divide-y divide-gray-100 rounded-md shadow w-28 absolute right-0`}

                  >
                    <ul className="py-2 text-sm text-gray-700 text-center" aria-labelledby="dropdownHoverButton">
                      <li>
                        <a href="#" className="block px-2 py-2 hover:bg-gray-100">
                          EUR
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block px-2 py-2 hover:bg-gray-100">
                          GBP
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <hr className="mt-1" />
        </div>
        <HeaderMiddle />
        <HeaderBottom />
      </header>

    </>
  );
};

export default Headers;
