import React from 'react';

const ProductTable = () => {
    return (
        <>
            <div className='hidden md:block'>
                <div className="relative overflow-x-auto">
                    <table className="w-full md:max-w-2xl mx-20 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase">
                            <tr>
                                <th scope="col" className="px-4 md:px-6 py-3">
                                    Order
                                </th>
                                <th scope="col" className="px-4 md:px-6 py-3">
                                    Date
                                </th>
                                <th scope="col" className="px-4 md:px-6 py-3">
                                    Status
                                </th>
                                <th scope="col" className="px-4 md:px-6 py-3">
                                    Total
                                </th>
                                <th scope="col" className="px-4 md:px-6 py-3">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-[#F8F8F8] space-y-2">
                            <TableRow
                                Order="#1227"
                                Date="December 21, 2023"
                                Status="On hold"
                                Total="$519.96 for 4 items"
                                Actions="View"
                            />
                            <TableRow
                                Order="#1227"
                                Date="December 21, 2023"
                                Status="On hold"
                                Total="$519.96 for 4 items"
                                Actions="View"
                            />
                            <TableRow
                                Order="#1227"
                                Date="December 21, 2023"
                                Status="On hold"
                                Total="$519.96 for 4 items"
                                Actions="View"
                            />
                        </tbody>
                    </table>
                </div>
            </div>

            <div className='block md:hidden'>
                <div className='space-y-3 p-4'>
                    <div className='flex flex-col gap-2 mx-6 p-3 bg-[#F8F8F8] rounded-lg'>
                        <p className='text-black font-semibold text-base'>#1229</p>
                        <p className='text-[#666666] font-semibold text-base'>December 21, 2023</p>
                        <p className='text-[#E4A508] text-lg'>On hold</p>
                        <p className='text-[#666666] text-lg'><span className='text-[#32BDE8] text-lg'> $448.00</span> for 4 items</p>
                        <a
                            href='#'
                            className='w-[100px] py-3 text-md text-black font-semibold h-10 mt-1 bg-white rounded-full text-center hover:bg-black hover:text-white duration-500 transform hover:scale-110 scale-105'
                        >
                            View
                        </a>
                    </div>
                    <div className='flex flex-col gap-2 mx-6 p-3 bg-[#F8F8F8] rounded-lg'>
                        <p className='text-black font-semibold text-base'>#1229</p>
                        <p className='text-[#666666] font-semibold text-base'>December 21, 2023</p>
                        <p className='text-[#E4A508] text-lg'>On hold</p>
                        <p className='text-[#666666] text-lg'><span className='text-[#32BDE8] text-lg'> $448.00</span> for 4 items</p>
                        <a
                            href='#'
                            className='w-[100px] py-3 text-md text-black font-semibold h-10 mt-1 bg-white rounded-full text-center hover:bg-black hover:text-white duration-500 transform hover:scale-110 scale-105'
                        >
                            View
                        </a>
                    </div>
                    <div className='flex flex-col gap-2 mx-6 p-3 bg-[#F8F8F8] rounded-lg'>
                        <p className='text-black font-semibold text-base'>#1229</p>
                        <p className='text-[#666666] font-semibold text-base'>December 21, 2023</p>
                        <p className='text-[#E4A508] text-lg'>On hold</p>
                        <p className='text-[#666666] text-lg'><span className='text-[#32BDE8] text-lg'> $448.00</span> for 4 items</p>
                        <a
                            href='#'
                            className='w-[100px] py-3 text-md text-black font-semibold h-10 mt-1 bg-white rounded-full text-center hover:bg-black hover:text-white duration-500 transform hover:scale-110 scale-105'
                        >
                            View
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

const TableRow = ({ Order, Date, Status, Total, Actions }) => {
    return (
        <tr className="bg-[#F8F8F8] border-b mb-9">
            <th
                scope="row"
                className="px-4 md:px-6 py-4 font-medium text-black hover:text-gray-500 cursor-pointer duration-300 whitespace-nowrap dark:text-white"
            >
                {Order}
            </th>
            <td className="px-4 md:px-6 py-4 text-gray-500 text-base">{Date}</td>
            <td className="px-4 md:px-6 py-4 text-[#E4A508] font-medium text-md">{Status}</td>
            <td className="px-4 md:px-6 py-4 text-md text-gray-600">
                <span className='text-[#32BDe8] text-base '>{Total}</span>
            </td>
            <td className="px-4 md:px-6 py-4">
                <a
                    href='#'
                    className='px-6 md:px-10 py-3 text-md text-black font-semibold h-10 mt-1 bg-white rounded-full hover:bg-black hover:text-white duration-500 transform hover:scale-110 scale-105'
                >
                    {Actions}
                </a>
            </td>
        </tr>
    );
};

export default ProductTable;
