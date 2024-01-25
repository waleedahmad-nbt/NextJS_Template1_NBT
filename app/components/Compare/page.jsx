"use client";
import { setProductDetails } from "@/app/lib/redux/slices/cartSlice";
import React, { useRef, useState } from "react";
import { CiShare2 } from "react-icons/ci";
import { FaPrint } from "react-icons/fa6";
import { IoIosAdd } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";

const CompareProduct = ({ modalOpen, closeModal }) => {
  const dispatch = useDispatch();
  const modalRef = useRef();

  const selectedProduct = useSelector((state) => state.cart.selectedProduct);

  return (
    <>
      {modalOpen && (
        <>
        <div
          tabIndex="-1"
          aria-hidden="true"
          className="fixed inset-0 z-50 w-screen h-screen flex items-center justify-center bg-[#292a30] "
        >
          <div
            ref={modalRef}
            className="relative z-30 bg-white mx-4 mr-7 -mt-12 custom-scrollbar"
            onClick={(event) => event.stopPropagation()}
          >
            <RxCross2
              onClick={() => {
                dispatch(setProductDetails(null));
                closeModal();
              }}
              className="absolute z-50 right-0 top-0 duration-500 ease-in-out cursor-pointer w-12 h-12 p-3 text-xl text-black bg-[#FBFBFB]"
            />
            <div className="justify-between ">
              {selectedProduct && (
                <>
                  <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right">
                      <thead className="text-lg text-black">
                        <tr>
                          <th
                            scope="row"
                            className="min-w-[270px] min-h-[200px] flex items-center text-center justify-center text-base font-medium text-gray-900 whitespace-nowrap bg-[#F8F8F8]"
                          >
                            Title
                          </th>
                          <td scope="col" className="px-3 py-3">
                            {selectedProduct.title}
                          </td>
                          <td className="px-6 py-4">
                            <div class="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
                          </td>
                          <td className="px-6 py-4">
                            <div class="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
                          </td>
                          <td className="px-6 py-4">
                            <div class="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
                          </td>
                          <td className="px-6 py-4">
                            <div class="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd:bg-white  even:bg-gray-50 border-b bg-[#FBFBFB]">
                          <th
                            scope="row"
                            className="min-w-[270px] min-h-[298px] flex items-center text-center justify-center text-base font-medium text-gray-900 whitespace-nowrap bg-[#F8F8F8]"
                          >
                            Image
                          </th>
                          <td
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                          >
                            <img
                              src={selectedProduct.imageSrc}
                              alt=""
                              className="h-[261px] p-4 w-[261px]"
                            />
                          </td>

                          <td className="px-6 py-4">
                            <div class="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
                          </td>
                          <td className="px-6 py-4">
                            <div class="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
                          </td>
                          <td className="px-6 py-4">
                            <div class="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
                          </td>
                          <td className="px-6 py-4">
                            <div class="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
                          </td>
                        </tr>

                        <tr className="odd:bg-white text-[#32BDE8] text-lg font-semibold even:bg-gray-50 border-b">
                          <th
                            scope="row"
                            className="min-w-[270px] min-h-[100px] flex items-center text-center justify-center text-base font-medium text-gray-900 whitespace-nowrap bg-[#F8F8F8]"
                          >
                            Price
                          </th>
                          <td className=" px-6 py-4">
                            ${selectedProduct.discountedPrice}
                          </td>

                          <td className="px-6 py-4">
                            <div class="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
                          </td>
                          <td className="px-6 py-4">
                            <div class="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
                          </td>
                          <td className="px-6 py-4">
                            <div class="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
                          </td>
                          <td className="px-6 py-4">
                            <div class="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
                          </td>
                        </tr>

                        <tr className="odd:bg-white text-[#666666] text-lg  even:bg-gray-50 border-b">
                          <th
                            scope="row"
                            className="min-w-[270px] min-h-[200px] flex items-center text-center justify-center text-base font-medium text-gray-900 whitespace-nowrap bg-[#F8F8F8]"
                          >
                            Description
                          </th>
                          <td className=" px-6 py-4">
                            {selectedProduct.discription}
                          </td>
                          <td className="px-6 py-4">
                            <div class="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
                          </td>
                          <td className="px-6 py-4">
                            <div class="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
                          </td>
                          <td className="px-6 py-4">
                            <div class="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
                          </td>
                          <td className="px-6 py-4">
                            <div class="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
                          </td>
                        </tr>

                        <tr className="odd:bg-white text-[#666666] text-lg  even:bg-gray-50 border-b ">
                          <th
                            scope="row"
                            className="min-w-[270px] min-h-[100px] flex items-center text-center justify-center text-base font-medium text-gray-900 whitespace-nowrap bg-[#F8F8F8]"
                          >
                            Weight
                          </th>
                          <td className=" px-6 py-4">N/A</td>

                          <td className="px-6 py-4">
                            <div class="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
                          </td>
                          <td className="px-6 py-4">
                            <div class="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
                          </td>
                          <td className="px-6 py-4">
                            <div class="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
                          </td>
                          <td className="px-6 py-4">
                            <div class="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
                          </td>
                        </tr>

                        <tr className="text-[#666666] text-lg border-b">
                          <th
                            scope="row"
                            className="min-w-[270px] min-h-[100px] flex items-center text-center justify-center text-base font-medium text-gray-900 whitespace-nowrap bg-[#F8F8F8]"
                          >
                            Dimensions
                          </th>
                          <td className=" px-6 py-4">N/A</td>

                          <td className="px-6 py-4">
                            <div class="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
                          </td>
                          <td className="px-6 py-4">
                            <div class="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
                          </td>
                          <td className="px-6 py-4">
                            <div class="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
                          </td>
                          <td className="px-6 py-4">
                            <div class="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
                          </td>
                        </tr>

                        <tr className="odd:bg-white text-[#666666] text-lg even:bg-gray-50 border-b">
                          <th
                            scope="row"
                            className="min-w-[270px] min-h-[100px] flex items-center text-center justify-center text-base font-medium text-gray-900 whitespace-nowrap bg-[#F8F8F8]"
                          >
                            Additional information
                          </th>
                          <td className="px-6 py-4">
                            <div className="flex flex-row justify-between">
                              <h2 className="text-gray-600">Color</h2>
                              <p className="text-black">
                                {selectedProduct.colors}
                              </p>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div class="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
                          </td>
                          <td className="px-6 py-4">
                            <div class="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
                          </td>
                          <td className="px-6 py-4">
                            <div class="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
                          </td>
                          <td className="px-6 py-4">
                            <div class="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
                          </td>
                        </tr>
                        <tr>
                          <th
                            scope="row"
                            className="min-w-[270px] min-h-[100px] flex items-center text-center justify-center text-base font-medium text-gray-900 whitespace-nowrap bg-[#F8F8F8]"
                          >
                            Add to cart
                          </th>
                          <td
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                          >
                            <button
                              href="#"
                              className="bg-black mt-2 px-7 h-[40px] w-[261px] text-white rounded-full py-2 hover:scale-105 duration-300"
                            >
                              Select Options
                            </button>
                          </td>
                          <td className="px-6 py-4">
                            <div class="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
                          </td>
                          <td className="px-6 py-4">
                            <div class="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
                          </td>
                          <td className="px-6 py-4">
                            <div class="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
                          </td>
                          <td className="px-6 py-4">
                            <div class="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
                          </td>
                        </tr>
                        <tr></tr>
                      </tbody>
                    </table>
                  </div>
                </>
              )}
            </div>
          </div>

        


        </div>

          <div className="flex justify-end p-4">
            <FaPrint />
            <CiShare2 />
            <IoIosAdd />
            <button className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2">
              Close
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Add to Cart
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default CompareProduct;
