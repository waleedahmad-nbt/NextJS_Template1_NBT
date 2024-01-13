'use client';
import React from 'react';
import { useSelector } from 'react-redux';

const page = () => {

    const CartItems = useSelector((state) => state.cart.items);

    const calculateSubtotal = () => {
        return CartItems.reduce((acc, item) => {
            return acc + item.originalPrice * item.quantity;
        }, 0);
    };
    const calculateTotal = () => {
        return calculateSubtotal();
    };


    return (
        <>
            <div className='container mx-auto'>

                <div className='mt-12 mb-16'>
                    <h1 className="text-4xl font-bold text-center text-gray-900 ">
                        Checkout
                    </h1>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 justify-between gap-10 p-4 md:p-12'>


                    <div className="relative overflow-x-auto">
                        <ul className="space-y-4">
                            <li className="space-x-10">
                                <span className="text-lg font-medium text-[#666666]">Order number:</span>
                                <span className="text-lg font-semibold text-[#666666]">1232</span>
                            </li>

                            <li className="space-x-24">
                                <span className="text-lg font-medium text-[#666666]">Date:</span>
                                <span className="text-lg font-semibold text-[#666666]">January 13, 2024</span>
                            </li>


                            <li className="space-x-24">
                                <span className="text-lg font-medium text-[#666666]">Total:</span>
                                <span className="text-lg font-medium text-[#32BDE8]"><span className=""><bdi><span className="woocommerce-Price-currencySymbol">$</span>879.85</bdi></span></span>
                            </li>

                            <li className="space-x-4">
                                <span className="text-lg font-medium text-[#666666]">Payment method:</span>
                                <span className="text-lg font-semibold text-[#666666]">Direct bank transfer</span>
                            </li>
                        </ul>
                    </div>


                    <div>


                        <div class="relative sm:rounded-lg">
                            <table class="w-full text-sm text-left rtl:text-right text-gray-500 border">
                                <thead class="text-base text-black uppercase border">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                            Product
                                        </th>
                                        <th scope="col" class="px-6 py-3 border">
                                            Total
                                        </th>
                                    </tr>
                                </thead>
                                {CartItems.map((item) => {
                                    const { id, title, originalPrice, quantity } = item;
                                    const itemSubtotal = originalPrice * quantity;
                                    <tbody key={id}>
                                        <tr class="border-b">
                                            <th scope="row" class="border px-6 py-4 font-medium text-gray-900 text-lg dark:text-white">
                                                {title}
                                                <ul className='p-4'>
                                                    <li className='list-disc text-[#666666] font-semibold'>Color:
                                                        <p className='font-medium'>Sage Green</p>
                                                    </li>
                                                    <li className='list-disc text-[#666666] font-semibold'>Size:
                                                        <p className='font-medium'>GTS 2 Mini</p>
                                                    </li>
                                                </ul>
                                            </th>
                                            <td class="px-6 py-4 text-[#32BDE8] text-base font-semibold">
                                                {itemSubtotal}
                                            </td>
                                        </tr>

                                        {/* <tr className=" border-b">
                                        <th scope="row" className="border px-6 py-4 font-medium text-gray-900 text-lg ">
                                            Amazfit GTS 2 Mini Sports Smartwatch GPS Bluetooth 5.0 Female Cycle Tracking Smart Watch For Android iOS Phone - GTS 2 Mini SPAIN × 5
                                            <ul className='p-4'>
                                                <li className='list-disc text-[#666666] font-semibold'>Color:
                                                    <p className='font-medium'>Sage Green</p>
                                                </li>
                                                <li className='list-disc text-[#666666] font-semibold'>Size:
                                                    <p className='font-medium'>GTS 2 Mini</p>
                                                </li>
                                            </ul>
                                        </th>
                                        <td className="px-6 py-4 text-[#32BDE8] text-base font-semibold">
                                            $649.95
                                        </td>
                                    </tr> */}
                                        <tr className=" border-b">
                                            <th scope="row" className="border px-6 py-4 font-semibold text-[#000] text-lg ">
                                                Subtotal:
                                            </th>
                                            <td className="px-6 py-4 text-[#32BDE8] text-base font-semibold">
                                                ${itemSubtotal.toFixed(2)}
                                            </td>
                                        </tr>
                                        <tr className=" border-b">
                                            <th scope="row" className="border px-6 py-4 font-semibold text-[#000] text-lg ">
                                                Shipping:
                                            </th>
                                            <td className="px-6 py-4 text-[#32BDE8] bg-[#FCFCFC] text-base font-semibold">
                                                $10.00<span className='text-[#666666] text-base'> via Flat rate</span>
                                            </td>
                                        </tr>
                                        <tr className="border-b">
                                            <th scope="row" className="border px-6 py-4 font-semibold text-[#000] text-lg ">
                                                Payment method:
                                            </th>
                                            <td className="px-6 py-4 text-[#666666] text-lg font-semibold">
                                                Direct bank transfer
                                            </td>
                                        </tr>
                                        <tr className="border-b">
                                            <th scope="row" className="border px-6 py-4 font-semibold text-[#000] text-lg ">
                                                Total:
                                            </th>
                                            <td className="px-6 py-4 text-[#32BDE8] bg-[#FCFCFC] text-base font-semibold">
                                                ${calculateTotal().toFixed(2)}
                                            </td>
                                        </tr>
                                        <tr className="border-b">
                                            <th scope="row" className="border px-6 py-4 font-semibold text-[#000] text-lg ">
                                                Note:
                                            </th>
                                            <td className="px-6 py-4 text-[#32BDE8] bg-[#FCFCFC] text-base font-semibold">
                                                Hello World!
                                            </td>
                                        </tr>
                                    </tbody>
                                })}
                            </table>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default page
