import React from 'react'
import { FaRegStar } from 'react-icons/fa'
import { IoMdStarOutline } from 'react-icons/io'

const Rating = () => {
    return (
        <>
            <div className='container mx-auto m-10 mt-11'>
                <h2 className='font-semibold text-2xl'>Rating & Review</h2>
                <div className='flex flex-row justify-between mt-8'>
                    <div className='flex flex-row items-center gap-3'>
                        <p className='flex flex-row text-gray-500 text-xl'>
                            <IoMdStarOutline />
                            <IoMdStarOutline />
                            <IoMdStarOutline />
                            <IoMdStarOutline />
                            <IoMdStarOutline />
                        </p>
                        <p className='text-sm text-black'>Based on 0 Reviews</p>
                    </div>

                    <button className='w-[150px] md:w-[200px] md:text-lg text-sm text-black border-2 font-semibold h-12 mt-1 bg-transparent
                     rounded-full duration-500 hover:bg-black hover:text-white transform hover:scale-105'>
                        WRITE A REVIEW
                    </button>
                </div>
                <hr className='mt-6' />
                <p className='mt-6 text-gray-700'>There are no reviews yet.</p>
            </div>
        </>
    )
}

export default Rating
