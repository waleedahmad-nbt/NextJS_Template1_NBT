"use client";
import React, { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { GoPencil } from "react-icons/go";
import { RiCouponLine } from "react-icons/ri";
import { LiaShippingFastSolid } from "react-icons/lia";
import EmptyCart from "./EmptyCart";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  removeExpiredItems,
  removeFromCart,
  setProductDetails,
} from "@/app/lib/redux/slices/cartSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Page = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [selectedShippingOption, setSelectedShippingOption] = useState("free");

  const CartItems = useSelector((state) => state.cart.items);
  const cartQuantity = CartItems ? CartItems.length : 0;

  const calculateSubtotal = () => {
    return CartItems.reduce((acc, item) => {
      return acc + item.originalPrice * item.quantity;
    }, 0);
  };
  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const shippingRate = selectedShippingOption === "flat" ? 10 : 0;
    return subtotal + shippingRate;
  };

  const handleIncrement = (itemId) => {
    dispatch(increment({ itemId }));
  };

  const handleDecrement = (itemId) => {
    dispatch(decrement({ itemId }));
  };

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleProductClick = (item) => {
    dispatch(setProductDetails(item));
    router.push(`/pages/Details?id=${item.id}`);
  };

  return (
    <>
      <div className="xl:container xl:mx-auto">
        {cartQuantity === 0 ? (
          <EmptyCart />
        ) : (
          <>
            <div>
              <div className="mt-20">
                <div className="flex flex-col items-center">
                  <h1 className="text-center text-4xl font-bold">Cart</h1>
                  <p className="text-lg font-semibold invisible md:visible">
                    🔥 These products are limited, checkout within{" "}
                    <span className="text-red-600"></span>
                  </p>
                </div>
              </div>
              <div className="p-4 border-b mx-20 mt-16 lg:block hidden">
                <div className="container mx-auto flex justify-between items-center">
                  <p className="text-black text-lg">Product</p>
                  <div className="space-x-20">
                    <a href="#" className="text-black">
                      Price
                    </a>
                    <a href="#" className="text-black">
                      Quantity
                    </a>
                    <a href="#" className="text-black ml-10">
                      SubTotal
                    </a>
                  </div>
                </div>
              </div>
              {CartItems.map((item) => {
                const { id, imageSrc, title, originalPrice, quantity } = item;
                const itemSubtotal = originalPrice * quantity;
                return (
                  <>
                    <div
                      key={id}
                      className="flex flex-col md:flex-row justify-between mx-4 md:mx-0"
                    >
                      {/* Left */}
                      <div className="flex mx-2 md:mx-10">
                        <img
                          src={imageSrc}
                          alt=""
                          className="md:w-[110px] md:h-[110px] h-[75px] w-[75px] mx-1 md:mx-0 items-center mt-4"
                        />
                        <div
                          onClick={() => handleProductClick(item)}
                          className="flex flex-col mt-5 gap-1"
                        >
                          <p className="text-md font-semibold hover:text-gray-500">
                            {title}
                          </p>
                          <p className="text-base font-medium">
                            Color: Sage Green
                          </p>
                          <p>Size: GTS 2 Mini</p>
                          <p
                            onClick={() => handleRemoveFromCart(item)}
                            className="md:mt-3 mt-1 text-gray-800 hover:text-gray-500 cursor-pointer"
                          >
                            Remove
                          </p>
                        </div>
                      </div>
                      <div className="md:flex items-center mr-24 gap-9 ml-24 md:ml-0">
                        <p className="text-[#32BDe8] my-2 md:my-10 hidden md:block">
                          ${originalPrice}
                        </p>
                        <div
                          className="flex justify-center w-[100px] md:w-[120px] h-8 md:h-12 text-center items-center border rounded-3xl
                          mt-2 md:mt-2 space-x-2"
                        >
                          <FaMinus
                            onClick={() => handleDecrement(id)}
                            className="font-light"
                          />
                          <p class="h-full w-[50px] flex justify-center items-center">
                            {item.quantity}
                          </p>
                          <FaPlus
                            onClick={() => handleIncrement(id)}
                            className="font-light"
                          />
                        </div>
                        <div className="flex items-center gap-4">
                          <p className="block md:hidden text-base text-gray-500 font-semibold">
                            Subtotal:
                          </p>
                          <p className="text-[#32BDe8] my-2 md:my-9">
                            ${itemSubtotal.toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                    <hr className="mx-4 md:mx-20 mt-2 md:mt-6" />
                  </>
                );
              })}
            </div>

            <div className="w-full md:w-[400px] h-[350px] bg-[#FFFFFF] shadow-2xl flex flex-col ml-auto p-9 z-50 m-14 rounded-md">
              <div className="flex flex-row gap-2 h-[60px] border-b mx-auto">
                <div className="flex flex-col w-[70px] sm:w-[100px] items-center border-r mb-2">
                  <GoPencil className="text-2xl" />
                  <p>Note</p>
                </div>
                <div className="flex flex-col w-[70px] sm:w-[100px] items-center border-r mb-2">
                  <LiaShippingFastSolid className="text-2xl" />
                  <p>Shipping</p>
                </div>
                <div className="flex flex-col w-[70px] sm:w-[100px] items-center mb-2">
                  <RiCouponLine className="text-2xl" />
                  <p className="text-lg">Coupon</p>
                </div>
              </div>
              <div className="flex flex-row justify-between h-[50px] items-center border-b">
                <p>Subtotal</p>
                <p className="text-[#32BDe8]">
                  ${calculateSubtotal().toFixed(2)}
                </p>
              </div>
              <div className="flex flex-row justify-between items-center h-[77px] border-b">
                <p>Shipping</p>
                <div className="flex flex-col gap-2">
                  <p className="flex flex-row gap-2 items-center">
                    <input
                      type="radio"
                      id="freeShipping"
                      name="shippingOption"
                      value="free"
                      checked={selectedShippingOption === "free"}
                      onChange={() => setSelectedShippingOption("free")}
                      className="w-4 h-4 text-black bg-gray-100 border-gray-300 rounded-full focus:ring-black"
                    />
                    <p>Free shipping</p>
                  </p>
                  <p className="flex flex-row gap-2 items-center">
                    <input
                      type="radio"
                      id="flatRateShipping"
                      name="shippingOption"
                      value="flat"
                      checked={selectedShippingOption === "flat"}
                      onChange={() => setSelectedShippingOption("flat")}
                      className="w-4 h-4 text-black bg-gray-100 border-gray-300 rounded-full focus:ring-black"
                    />
                    <p>
                      Flat rate: <span className="text-[#32BDe8]">$10.00</span>
                    </p>
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-between h-[50px] items-center">
                <p>Total</p>
                <p className="text-[#32BDe8]">${calculateTotal().toFixed(2)}</p>
              </div>
              <Link href="/pages/CheckOut">
                <button className="w-full flex items-center text-center justify-center text-lg text-white font-semibold h-10 mt-1 bg-black rounded-full duration-500 transform hover:scale-110 scale-105">
                  CHECKOUT
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Page;
