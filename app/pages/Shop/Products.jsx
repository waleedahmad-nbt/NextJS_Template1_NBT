"use client";
import { useState, useEffect, useRef } from "react";
import List from "./List";
import TwoColumn from "./TwoColumn";
import ThreeColumn from "./ThreeColumn";
import FourColumn from "./FourColumn";
import FiveColumn from "./FiveColumn";
import { RxColumns } from "react-icons/rx";
import { FaBars, FaGripLinesVertical } from "react-icons/fa";
import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";

const Products = ({ selectedCategory,selectedPriceRange }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [selectedLayout, setSelectedLayout] = useState("five-column");
  const [totalProducts, setTotalProducts] = useState(33);
  const [visibleProducts, setVisibleProducts] = useState(12);

  const toggleLayout = (layout) => {
    setSelectedLayout(layout);
  };

  const loadMoreProducts = () => {
    setVisibleProducts((prevVisibleProducts) => {
      const newVisibleProducts = prevVisibleProducts + 12;
      return Math.min(newVisibleProducts, totalProducts);
    });
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const closeDropdownOnOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };


  useEffect(() => {
    document.addEventListener("click", closeDropdownOnOutsideClick);
    return () => {
      document.removeEventListener("click", closeDropdownOnOutsideClick);
    };
  }, []);

  const renderListLayout = () => {
    return (
      <div>
        <List
          totalProducts={totalProducts}
          visibleProducts={visibleProducts}
          loadMoreProducts={loadMoreProducts}
          selectedCategory={selectedCategory}
          selectedPriceRange={selectedPriceRange}
        />
      </div>
    );
  };

  const renderTwoColumnLayout = () => {
    return (
      <div>
        <TwoColumn
          totalProducts={totalProducts}
          visibleProducts={visibleProducts}
          loadMoreProducts={loadMoreProducts}
          selectedCategory={selectedCategory}
          selectedPriceRange={selectedPriceRange}
        />
      </div>
    );
  };

  const renderThreeColumnLayout = () => {
    return (
      <div>
        <ThreeColumn
          totalProducts={totalProducts}
          visibleProducts={visibleProducts}
          loadMoreProducts={loadMoreProducts}
          selectedCategory={selectedCategory}
          selectedPriceRange={selectedPriceRange}
        />
      </div>
    );
  };

  const renderFourColumnLayout = () => {
    return (
      <div>
        <FourColumn
          totalProducts={totalProducts}
          visibleProducts={visibleProducts}
          loadMoreProducts={loadMoreProducts}
          selectedCategory={selectedCategory}
          selectedPriceRange={selectedPriceRange}
        />
      </div>
    );
  };

  const renderFiveColumnLayout = () => {
    return (
      <div>
        <FiveColumn
          totalProducts={totalProducts}
          visibleProducts={visibleProducts}
          loadMoreProducts={loadMoreProducts}
          selectedCategory={selectedCategory}
          selectedPriceRange={selectedPriceRange}
        />
      </div>
    );
  };

  const renderLayout = () => {

    switch (selectedLayout) {
      case "list":
        return renderListLayout();
      case "two-column":
        return renderTwoColumnLayout();
      case "three-column":
        return renderThreeColumnLayout();
      case "four-column":
        return renderFourColumnLayout();
      case "five-column":
        return renderFiveColumnLayout();
      default:
        return renderListLayout();
    }
  };

  return (
    <>
      <div className=" flex flex-col">
        <div className="flex flex-col md:flex-row md:justify-between justify-start items-start md:items-center">
          <h3 className="text-gray-500 font-medium text-base">
            Showing {visibleProducts} of {totalProducts} results
          </h3>
          <div className="flex flex-row gap-2 items-center">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="text-black hover:text-gray-500 font-medium text-base px-0 md:px-5 py-2.5 text-center inline-flex items-center"
                type="button"
              >
                Default sorting
                <svg
                  className={`w-2.5 h-2.5 ml-2 ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
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

              {dropdownOpen && (
                <div className="absolute right-0 z-40 mt-2 w-44 bg-white rounded-lg shadow h-44 overflow-y-auto">
                  <ul className="py-2 text-sm text-gray-700">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-black hover:text-white"
                      >
                        Default Sorting
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-black hover:text-white"
                      >
                        Popularity
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-black hover:text-white"
                      >
                        Average Rating
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-black hover:text-white"
                      >
                        Latest
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-black hover:text-white"
                      >
                        Price: Low To High
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-black hover:text-white"
                      >
                        Price: High To Low
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <Tooltip
              title="list"
              position="top"
              trigger="mouseenter"
              animation="scale"
              arrow={true}
            >
              <div
                className="cursor-pointer bg-[#F2F2F2] w-[36px] h-[36px] p-2 rounded-md text-lg hover:text-white hover:bg-black text-black flex items-center justify-center"
                onClick={() => toggleLayout("list")}
              >
                <FaBars />
              </div>
            </Tooltip>

            <Tooltip
              title="2 Columns"
              position="top"
              trigger="mouseenter"
              animation="scale"
              arrow={true}
            >
              <div
                className="cursor-pointer bg-[#F2F2F2] w-[36px] h-[36px] p-2 rounded-md
                         text-base hover:text-white hover:bg-black text-black
                         flex items-center justify-center"
                onClick={() => toggleLayout("two-column")}
              >
                <FaGripLinesVertical />
              </div>
            </Tooltip>

            <Tooltip
              title="3 Columns"
              position="top"
              trigger="mouseenter"
              animation="scale"
              arrow={true}
            >
              <div
                className="cursor-pointer bg-[#F2F2F2] w-[36px] h-[36px] p-2.5 rounded-md text-base m-auto
                         hover:text-white hover:bg-black text-black flex items-center justify-center"
                onClick={() => toggleLayout("three-column")}
              >
                <FaBars style={{ transform: "rotate(90deg)" }} />
              </div>
            </Tooltip>
            <Tooltip
              title="4 Columns"
              position="top"
              trigger="mouseenter"
              animation="scale"
              arrow={true}
            >
              <div
                className="cursor-pointer hidden lg:block bg-[#F2F2F2] w-[36px] h-[36px] p-2 rounded-md text-lg hover:text-white hover:bg-black text-black
                        flex items-center justify-center"
                onClick={() => toggleLayout("four-column")}
              >
                <RxColumns className="" />
              </div>
            </Tooltip>
            <Tooltip
              title="5 Columns"
              position="top"
              trigger="mouseenter"
              animation="scale"
              arrow={true}
            >
              <div
                className="cursor-pointer hidden lg:block bg-[#F2F2F2] w-[36px] h-[36px] p-2 rounded-md text-lg hover:text-white hover:bg-black text-black
                        flex items-center justify-center"
                onClick={() => toggleLayout("five-column")}
              >
                <RxColumns className="" />
              </div>
            </Tooltip>
          </div>
        </div>

        {renderLayout()}
      </div>
    </>
  );
};

export default Products;
