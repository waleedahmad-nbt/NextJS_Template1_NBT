import React from 'react'

const page = () => {
    return (
        <>
            <div className='container mx-auto'>

                <div className='mt-12 mb-16'>
                    <h1 className="text-4xl font-bold text-center text-gray-900 ">
                        Checkout
                    </h1>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 justify-between p-14'>


                    <div class="relative overflow-x-auto">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
                            <thead class="text-xs text-gray-900 uppercase ">
                                <tr>
                                    <th scope="col" class="px-10 py-3">
                                        Product name
                                    </th>
                                    <th scope="col" class="px-10 py-3">
                                        Color
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-white ">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900  dark:text-white">
                                        Apple MacBook Pro 17"
                                    </th>
                                    <td class="px-6 py-4">
                                        Silver
                                    </td>
                                  
                                </tr>
                                <tr class="bg-white ">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900">
                                        Microsoft Surface Pro
                                    </th>
                                    <td class="px-6 py-4">
                                        White
                                    </td>
                                   
                                </tr>
                                <tr class="bg-white ">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900">
                                        Magic Mouse 2
                                    </th>
                                    <td class="px-6 py-4">
                                        Black
                                    </td>
                                   
                                </tr>
                            </tbody>
                        </table>
                    </div>


                    <div>


                        <div class="relative shadow-md sm:rounded-lg">
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
                                <tbody>
                                    <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                        <th scope="row" class="border px-6 py-4 font-medium text-gray-900 text-lg dark:text-white">
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
                                        <td class="px-6 py-4 text-[#32BDE8] text-base font-semibold">
                                            $649.95
                                        </td>
                                    </tr>

                                    <tr class="bg-[#FCFCFC] border-b">
                                        <th scope="row" class="border px-6 py-4 font-medium text-gray-900 text-lg ">
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
                                        <td class="px-6 py-4 text-[#32BDE8] text-base font-semibold">
                                            $649.95
                                        </td>
                                    </tr>
                                    <tr class="bg-[#FCFCFC] border-b">
                                        <th scope="row" class="border px-6 py-4 font-semibold text-[#000] text-lg ">
                                            Subtotal:
                                        </th>
                                        <td class="px-6 py-4 text-[#32BDE8] text-base font-semibold">
                                            $649.95
                                        </td>
                                    </tr>
                                    <tr class="bg-[#FCFCFC] border-b">
                                        <th scope="row" class="border px-6 py-4 font-semibold text-[#000] text-lg ">
                                            Shipping:
                                        </th>
                                        <td class="px-6 py-4 text-[#32BDE8] text-base font-semibold">
                                            $10.00<span className='text-[#666666] text-base'> via Flat rate</span>
                                        </td>
                                    </tr>
                                    <tr class="bg-[#FCFCFC] border-b">
                                        <th scope="row" class="border px-6 py-4 font-semibold text-[#000] text-lg ">
                                            Payment method:
                                        </th>
                                        <td class="px-6 py-4 text-[#666666] text-lg font-semibold">
                                            Direct bank transfer
                                        </td>
                                    </tr>
                                    <tr class="bg-[#FCFCFC] border-b">
                                        <th scope="row" class="border px-6 py-4 font-semibold text-[#000] text-lg ">
                                            Total:
                                        </th>
                                        <td class="px-6 py-4 text-[#32BDE8] text-base font-semibold">
                                            $674.85
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default page
