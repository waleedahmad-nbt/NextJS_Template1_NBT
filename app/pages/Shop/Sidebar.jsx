"use client";
import React, { useEffect, useState } from "react";
import { MinusSmIcon, PlusSmIcon } from "@heroicons/react/solid";
import initAOS from "../../../utils/aos";
import { products } from "@/app/data";
import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";

const Sidebar = ({
  setSelectedCategory,
  setSelectedPriceRange,
  setSelectedColor,
  setSelectedSize,
  setSelectedType,
}) => {
  const [toggleStates, setToggleStates] = useState({
    categories: true,
    colors: false,
    sizes: false,
    types: false,
    price: false,
  });

  const [uniqueCategories, setUniqueCategories] = useState([]);

  const toggleDiv = (section) => {
    setToggleStates((prevStates) => ({
      ...prevStates,
      [section]: !prevStates[section],
    }));
  };

  useEffect(() => {
    setUniqueCategories(
      Array.from(new Set(products.map((product) => product.Categories)))
    );
    initAOS();
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handlePriceClick = (price) => {
    setSelectedPriceRange(price);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };
  const handleTypesClick = (types) => {
    setSelectedType(types);
  };

  return (
    <>
      <section className="">
        <div className="px-3 mx-auto ">
          <div className="mx-auto mt-8 space-y-4 md:mt-16">
            <div className="transition-all  duration-500">
              <div>
                <div
                  onClick={() => toggleDiv("categories")}
                  className="flex flex-row gap-9 justify-between mb-6"
                >
                  <span className="text-lg font-bold text-black">
                    {" "}
                    Categories{" "}
                  </span>
                  <button
                    type="button"
                    className="flex items-end justify-end w-full"
                  >
                    {toggleStates.categories ? (
                      <MinusSmIcon className="w-6 h-6 text-black text-lg" />
                    ) : (
                      <PlusSmIcon className="w-6 h-6 text-black text-lg" />
                    )}
                  </button>
                </div>
                {toggleStates.categories && (
                  <ul
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-easing="ease-in-sine"
                    className="text-md font-medium"
                  >
                    {uniqueCategories.map((category) => (
                      <li
                        key={category}
                        onClick={() => handleCategoryClick(category)}
                        className={`hover:text-gray-900 cursor-pointer hover:underline mb-4 duration-300
                      ease-in-out font-inter`}
                      >
                        {category}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div>
                <div
                  onClick={() => toggleDiv("colors")}
                  className="flex flex-row gap-9 justify-between mb-6 mt-10"
                >
                  <span className="text-lg font-bold text-black"> Colors </span>
                  <button
                    type="button"
                    className="flex items-end justify-end w-full"
                  >
                    {toggleStates.colors ? (
                      <MinusSmIcon className="w-6 h-6 text-black text-lg" />
                    ) : (
                      <PlusSmIcon className="w-6 h-6 text-black text-lg" />
                    )}
                  </button>
                </div>

                {toggleStates.colors && (
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-easing="ease-in-sine"
                    className="flex flex-row flex-wrap gap-2"
                  >
                    <Tooltip
                      title="Grass Green"
                      position="top"
                      trigger="mouseenter"
                      animation="scale"
                      arrow={true}
                    >
                      <div
                        onClick={() => handleColorClick("Grass Green")}
                        className="w-[32px] h-[32px] rounded-full border-2 overflow-hidden bg-[#ade9b7] hover:scale-110 transform-gpu transition-transform duration-300"
                      ></div>
                    </Tooltip>
                    <Tooltip
                      title="Pink"
                      position="top"
                      trigger="mouseenter"
                      animation="scale"
                      arrow={true}
                    >
                      <div
                        onClick={() => handleColorClick("Pink")}
                        className="w-[32px] h-[32px] rounded-full border-2 overflow-hidden bg-[#db32bf] hover:scale-110 transform-gpu transition-transform duration-300"
                      ></div>
                    </Tooltip>
                    <Tooltip
                      title="Platinum"
                      position="top"
                      trigger="mouseenter"
                      animation="scale"
                      arrow={true}
                    >
                      <div
                        onClick={() => handleColorClick("Platinum")}
                        className="w-[32px] h-[32px] rounded-full border-2 overflow-hidden bg-[#C1C1C1] hover:scale-110 transform-gpu transition-transform duration-300"
                      ></div>
                    </Tooltip>
                    <Tooltip
                      title="Red"
                      position="top"
                      trigger="mouseenter"
                      animation="scale"
                      arrow={true}
                    >
                      <div
                        onClick={() => handleColorClick("Red")}
                        className="w-[32px] h-[32px] rounded-full border-2 overflow-hidden bg-[#DD3333] hover:scale-110 transform-gpu transition-transform duration-300"
                      ></div>
                    </Tooltip>
                    <Tooltip
                      title="Sky Blue"
                      position="top"
                      trigger="mouseenter"
                      animation="scale"
                      arrow={true}
                    >
                      <div
                        onClick={() => handleColorClick("Sky Blue")}
                        className="w-[32px] h-[32px] rounded-full border-2 overflow-hidden bg-[#b1e2ef] hover:scale-110 transform-gpu transition-transform duration-300"
                      ></div>
                    </Tooltip>
                    <Tooltip
                      title="Yellow"
                      position="top"
                      trigger="mouseenter"
                      animation="scale"
                      arrow={true}
                    >
                      <div
                        onClick={() => handleColorClick("Yellow")}
                        className="w-[32px] h-[32px] rounded-full border-2 overflow-hidden bg-[#EEEE22] hover:scale-110 transform-gpu transition-transform duration-300"
                      ></div>
                    </Tooltip>
                    <Tooltip
                      title="Blue"
                      position="top"
                      trigger="mouseenter"
                      animation="scale"
                      arrow={true}
                    >
                      <div
                        onClick={() => handleColorClick("Blue")}
                        className="w-[32px] h-[32px] rounded-full border-2 overflow-hidden bg-[#1e73be] hover:scale-110 transform-gpu transition-transform duration-300"
                      ></div>
                    </Tooltip>
                    <Tooltip
                      title="Rose Gold"
                      position="top"
                      trigger="mouseenter"
                      animation="scale"
                      arrow={true}
                    >
                      <div
                        onClick={() => handleColorClick("Rose Gold")}
                        className="w-[32px] h-[32px] rounded-full border-2 overflow-hidden bg-[#c09e9d] hover:scale-110 transform-gpu transition-transform duration-300"
                      ></div>
                    </Tooltip>
                    <Tooltip
                      title="Gold"
                      position="top"
                      trigger="mouseenter"
                      animation="scale"
                      arrow={true}
                    >
                      <div
                        onClick={() => handleColorClick("Gold")}
                        className="w-[32px] h-[32px] rounded-full border-2 overflow-hidden bg-[#ffed8a] hover:scale-110 transform-gpu transition-transform duration-300"
                      ></div>
                    </Tooltip>
                    <Tooltip
                      title="Green"
                      position="top"
                      trigger="mouseenter"
                      animation="scale"
                      arrow={true}
                    >
                      <div
                        onClick={() => handleColorClick("Green")}
                        className="w-[32px] h-[32px] rounded-full border-2 overflow-hidden bg-[#77ba39] hover:scale-110 transform-gpu transition-transform duration-300"
                      ></div>
                    </Tooltip>
                    <Tooltip
                      title="Gray"
                      position="top"
                      trigger="mouseenter"
                      animation="scale"
                      arrow={true}
                    >
                      <div
                        onClick={() => handleColorClick("Gray")}
                        className="w-[32px] h-[32px] rounded-full border-2 overflow-hidden bg-[#D1D1D1] hover:scale-110 transform-gpu transition-transform duration-300"
                      ></div>
                    </Tooltip>
                    <Tooltip
                      title="Orange"
                      position="top"
                      trigger="mouseenter"
                      animation="scale"
                      arrow={true}
                    >
                      <div
                        onClick={() => handleColorClick("Orange")}
                        className="w-[32px] h-[32px] rounded-full border-2 overflow-hidden bg-[#db8632] hover:scale-110 transform-gpu transition-transform duration-300"
                      ></div>
                    </Tooltip>
                    <Tooltip
                      title="Flamingo Pink"
                      position="top"
                      trigger="mouseenter"
                      animation="scale"
                      arrow={true}
                    >
                      <div
                        onClick={() => handleColorClick("Flamingo Pink")}
                        className="w-[32px] h-[32px] rounded-full border-2 overflow-hidden bg-[#e8d4d5] hover:scale-110 transform-gpu transition-transform duration-300"
                      ></div>
                    </Tooltip>
                    <Tooltip
                      title="White"
                      position="top"
                      trigger="mouseenter"
                      animation="scale"
                      arrow={true}
                    >
                      <div
                        onClick={() => handleColorClick("White")}
                        className="w-[32px] h-[32px] rounded-full border-2 overflow-hidden bg-[#ffffff] hover:scale-110 transform-gpu transition-transform duration-300"
                      ></div>
                    </Tooltip>
                    <Tooltip
                      title="Stage Green"
                      position="top"
                      trigger="mouseenter"
                      animation="scale"
                      arrow={true}
                    >
                      <div
                        onClick={() => handleColorClick("Stage Green")}
                        className="w-[32px] h-[32px] rounded-full border-2 overflow-hidden bg-[#7d9391] hover:scale-110 transform-gpu transition-transform duration-300"
                      ></div>
                    </Tooltip>
                    <Tooltip
                      title="Black"
                      position="top"
                      trigger="mouseenter"
                      animation="scale"
                      arrow={true}
                    >
                      <div
                        onClick={() => handleColorClick("Black")}
                        className="w-[32px] h-[32px] rounded-full border-2 overflow-hidden bg-[#000000] hover:scale-110 transform-gpu transition-transform duration-300"
                      ></div>
                    </Tooltip>
                    <Tooltip
                      title="Dark Gray"
                      position="top"
                      trigger="mouseenter"
                      animation="scale"
                      arrow={true}
                    >
                      <div
                        onClick={() => handleColorClick("Dark Gray")}
                        className="w-[32px] h-[32px] rounded-full border-2 overflow-hidden bg-[#757575] hover:scale-110 transform-gpu transition-transform duration-300"
                      ></div>
                    </Tooltip>
                  </div>
                )}
              </div>

              <div>
                <div
                  onClick={() => toggleDiv("sizes")}
                  className="flex flex-row gap-9 justify-between mb-6 mt-10"
                >
                  <span className="text-lg font-bold text-black"> Sizes </span>
                  <button
                    type="button"
                    className="flex items-end justify-end w-full"
                  >
                    {toggleStates.sizes ? (
                      <MinusSmIcon className="w-6 h-6 text-black text-lg" />
                    ) : (
                      <PlusSmIcon className="w-6 h-6 text-black text-lg" />
                    )}
                  </button>
                </div>
                {toggleStates.sizes && (
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-easing="ease-in-sine"
                    className="flex flex-wrap gap-3"
                  >
                    <p
                       onClick={() => handleSizeClick("10 Inch")}
                      className="px-4 py-2 bg-transparent text-black text-lg border rounded-lg hover:bg-black hover:text-white duration-300 ease-in-out"
                    >
                      10 inch
                    </p>
                    <p
                       onClick={() => handleSizeClick("13.5 Inch")}
                      className="px-4 py-2 bg-transparent text-black text-lg border rounded-lg hover:bg-black hover:text-white duration-300 ease-in-out"
                    >
                      13.5 inch
                    </p>
                    <p
                      onClick={() => handleSizeClick("GTS 2 Mini")}
                      className="px-4 py-2 bg-transparent text-black text-lg border rounded-lg hover:bg-black hover:text-white duration-300 ease-in-out"
                    >
                      GTS 2 Mini
                    </p>
                  </div>
                )}
              </div>

              <div>
                <div
                  onClick={() => toggleDiv("types")}
                  className="flex flex-row gap-9 justify-between mb-6 mt-10"
                >
                  <span className="text-lg font-bold text-black"> Types </span>
                  <button
                    type="button"
                    className="flex items-end justify-end w-full"
                  >
                    {toggleStates.types ? (
                      <MinusSmIcon className="w-6 h-6 text-black text-lg" />
                    ) : (
                      <PlusSmIcon className="w-6 h-6 text-black text-lg" />
                    )}
                  </button>
                </div>
                {toggleStates.types && (
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-easing="ease-in-sine"
                    className="flex flex-wrap gap-3"
                  >
                    <p
                      onClick={() => handleTypesClick("EU Plug")}
                      className="px-4 py-2 bg-transparent text-black text-lg border rounded-lg hover:bg-black  hover:text-white duration-300 ease-in-out"
                    >
                      EU Plug
                    </p>
                    <p
                      onClick={() => handleTypesClick("UK Plug")}
                      className="px-4 py-2 bg-transparent text-black text-lg border rounded-lg hover:bg-black hover:text-white duration-300 ease-in-out"
                    >
                      UK Plug
                    </p>
                    <p
                      onClick={() => handleTypesClick("US Plug")}
                      className="px-4 py-2 bg-transparent text-black text-lg border rounded-lg hover:bg-black hover:text-white duration-300 ease-in-out"
                    >
                      US Plug
                    </p>
                  </div>
                )}
              </div>

              <div>
                <div
                  onClick={() => toggleDiv("price")}
                  className="flex flex-row gap-9 justify-between mb-6 mt-10"
                >
                  <span className="text-lg font-bold text-black"> Price </span>
                  <button
                    type="button"
                    className="flex items-end justify-end w-full"
                  >
                    {toggleStates.price ? (
                      <MinusSmIcon className="w-6 h-6 text-black text-lg" />
                    ) : (
                      <PlusSmIcon className="w-6 h-6 text-black text-lg" />
                    )}
                  </button>
                </div>
                {toggleStates.price && (
                  <ul
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-easing="ease-in-sine"
                    className="text-md font-medium"
                  >
                    <li
                      onClick={() => handlePriceClick(null)}
                      className="text-[#666666] cursor-pointer hover:underline mb-4 duration-300 ease-in-out font-inter"
                    >
                      All
                    </li>
                    <li
                      onClick={() => handlePriceClick([0, 140])}
                      className="text-[#32BDE8]  cursor-pointer mb-4 duration-300 ease-in-out font-inter"
                    >
                      <p className="space-x-2">
                        <span className="">$</span>0.00
                        <span className="text-black">–</span>{" "}
                        <span assName="">$</span>140.00
                      </p>
                    </li>
                    <li
                      onClick={() => handlePriceClick([140, 280])}
                      className="text-[#32BDE8]  cursor-pointer hover:underline mb-4 duration-300 ease-in-out font-inter"
                    >
                      <p className="space-x-2">
                        <span className="">$</span>140.00
                        <span className="text-black">–</span>{" "}
                        <span className="">$</span>280.00
                      </p>
                    </li>
                    <li
                      onClick={() => handlePriceClick([280, 420])}
                      className="text-[#32BDE8]  cursor-pointer  mb-4 duration-300 ease-in-out font-inter"
                    >
                      <p className="space-x-2">
                        <span className="">$</span>280.00
                        <span className="text-black">–</span>{" "}
                        <span className="">$</span>420.00
                      </p>
                    </li>
                    <li
                      onClick={() => handlePriceClick([420, 560])}
                      className="text-[#32BDE8]  cursor-pointer hover:underline mb-4 duration-300 ease-in-out font-inter"
                    >
                      <p className="space-x-2">
                        <span className="">$</span>420.00
                        <span className="text-black">–</span>{" "}
                        <span className="">$</span>560.00
                      </p>
                    </li>
                    <li
                      onClick={() => handlePriceClick([560, 700])}
                      className="text-[#32BDE8]  cursor-pointer hover:underline mb-4 duration-300 ease-in-out font-inter"
                    >
                      <p className="space-x-2">
                        <span className="">$</span>560.00
                        <span className="text-black">–</span>{" "}
                        <span className="">$</span>700.00
                      </p>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
