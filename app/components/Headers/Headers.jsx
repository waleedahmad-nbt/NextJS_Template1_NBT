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

  return (
    <>
      <header className="lg:mb-0 mb-2">
        <div className="h-8 mt-3 mx-4 lg:mx-9 hidden md:block">
          <div className="container mx-auto">
            <div className="flex justify-between my-2 font-sans font-semibold">

              <div className="hidden lg:block">
                <div className="flex flex-row items-center gap-5">
                  <a href="https://www.instagram.com/">
                    <div className="flex flex-row gap-1 cursor-pointer hover:text-gray-500 transition-all duration-100">
                      <FaInstagram className="text-base m-auto" />
                      <p className="text-base">100k Followers</p>
                    </div>
                  </a>

                  <a href="https://www.facebook.com/">
                    <div className="flex flex-row gap-1 text-base cursor-pointer hover:text-gray-500 transition-all duration-100">
                      <FaFacebook className=" m-auto" />
                      <p className="">300k Followers</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="flex flex-row gap-1">
                <span class="relative text-white font-bold text-16 rounded-3xl bg-red-500 w-14 h-6 mr-2 text-center">
                  Hot
                </span>

                <p>✌🏼 Free Express Shipping on orders $200!</p>
              </div>

              <div className="flex items-center h-6 relative">
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
                    className={`z-40 ${isLanguageDropdownOpen ? 'block' : 'hidden'} bg-white divide-y divide-gray-100 rounded-md shadow w-36 dark:bg-gray-700 dark:divide-gray-600 absolute right-0`}
                 
                  >
                    <ul className="h-auto py-2 overflow-y-auto text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUsersButton">
                      <li>
                        <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                          <Image className="w-6 h-6 me-2 rounded-full" src={fr} alt="French flag" />
                          Français
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                          <Image className="w-6 h-6 me-2 rounded-full" src={de} alt="German flag" />
                          Deutsch
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="relative z-50"
                  onMouseOver={handleToggleCurrencyDropdown}
                  onMouseOut={handleToggleCurrencyDropdown}
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
                    className={`z-40 ${isCurrencyDropdownOpen ? 'block' : 'hidden'} bg-white divide-y divide-gray-100 rounded-md shadow w-28 dark:bg-gray-700 absolute right-0`}
                   
                  >
                    <ul className="py-2 text-sm text-gray-700 text-center dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                      <li>
                        <a href="#" className="block px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                          EUR
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                          GBP
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <hr />
        </div>

        <HeaderMiddle />
        <HeaderBottom />
      </header>

    </>
  );
};

export default Headers;
