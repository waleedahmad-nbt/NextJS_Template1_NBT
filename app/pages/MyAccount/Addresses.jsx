import React from 'react'
import { GoPencil } from 'react-icons/go'

const Addresses = () => {
    return (
        <>
            <div className='m-auto'>
                <p className='text-start ml-16 mt-6 text-gray-500 font-medium'>The following addresses will be used on the checkout page by default.</p>
                <div className='flex flex-col md:flex-row ml-16 mt-6 gap-9'>
                    <div className='w-full h-[170px] rounded-lg p-4 bg-[#F8F8F8]'>

                        <div className='flex justify-between items-center'>
                            <p className='text-xl font-semibold'>Billing address</p>
                            <GoPencil className='w-14 h-14 text-xl bg-white p-4 rounded-full' />
                        </div>
                        <div className='text-gray-500 mt-2'>
                            <p>Muhammad Asad</p>
                            <p>lahore</p>
                            <p>barket market, CA 50000</p>
                        </div>

                    </div>
                    <div className='w-full h-[170px] rounded-lg p-4 bg-[#F8F8F8]'>
                        <div className='flex justify-between items-center'>
                            <p className='text-xl font-semibold'>Shipping address</p>
                            <GoPencil className='w-14 h-14 text-xl bg-white p-4 rounded-full' />
                        </div>
                        <div className='text-gray-500 mt-2'>
                            <p>Muhammad Asad</p>
                            <p>lahore</p>
                            <p>barket market, CA 50000</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Addresses
