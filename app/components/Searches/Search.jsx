import Link from 'next/link';
import React from 'react'

const Search = () => {
    return (
        <>
            <div className='mt-20 mx-20'>
                <div className='flex flex-row justify-between'>
                    <h1 className='text-4xl leading-10 font-bold'>Popular Search</h1>
                </div>
                <hr className='mt-4' />
            </div>

            {/* Popular Searches */}
            <div className='flex flex-row flex-wrap mt-9 gap-4 mx-4 md:mx-20'>
                <Link href='/pages/ResultFor'>
                    <p className='border-2 cursor-pointer border-[#e4e2e2] hover:bg-black hover:scale-110 hover:text-white transition transform
                 duration-500 ease-in-out px-4 py-3 h-12 rounded-3xl text-center'>
                        Accessories
                    </p>
                </Link>
                <Link href='/pages/ResultFor'>
                    <p className='border-2 border-[#e4e2e2] cursor-pointer transition transform duration-500 ease-in-out px-4 py-3 h-12 rounded-3xl text-center 
                 hover:bg-black hover:scale-105 hover:text-white'>
                        Headphones
                    </p>
                </Link>
                <Link href='/pages/ResultFor'>
                    <p className='border-2 cursor-pointer border-[#e4e2e2] hover:bg-black hover:scale-110 hover:text-white transition transform
                 duration-500 ease-in-out px-4 py-3 h-12 rounded-3xl text-center'>
                        Cameras
                    </p>
                </Link>
                <Link href='/pages/ResultFor'>
                    <p className='border-2 cursor-pointer border-[#e4e2e2] hover:bg-black hover:scale-110 hover:text-white transition transform
                 duration-500 ease-in-out px-4 py-3 h-12 rounded-3xl text-center'>
                        Audio
                    </p>
                </Link>
                <Link href='/pages/ResultFor'>
                    <p className='border-2 cursor-pointer border-[#e4e2e2] hover:bg-black hover:scale-110 hover:text-white transition transform
                 duration-500 ease-in-out px-5 py-3 h-12 rounded-3xl text-center'>
                        Laptop & Computer
                    </p>
                </Link>
                <Link href='/pages/ResultFor'>
                    <p className='border-2 cursor-pointer border-[#e4e2e2] hover:bg-black hover:scale-110 hover:text-white transition transform
                 duration-500 ease-in-out px-4 py-3 h-12 rounded-3xl text-center'>
                        Cell Phone
                    </p>
                </Link>
            </div>

            {/* Discount */}

            <div className='mx-4 lg:mx-20 mt-8 h-52 relative overflow-hidden'>
                <div className="flex flex-row justify-between w-full h-full text-center bg-[#f5f5f5] rounded-2xl relative z-10">
                    <div className='relative flex'>
                        <img src="https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/home-callout-shape-left.png" alt="Left Image" className="" />
                    </div>
                    <div className='relative flex md:p-0 pt-10'>
                        <img src="https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/home-callout-shape-right.png" alt="Right Image" className="" />
                    </div>
                    <div className="absolute mx-auto w-full my-8 lg:my-16">
                        <div className='flex flex-col md:flex-row text-center justify-center gap-1'>
                            <h2 className="text-3xl font-bold mt-2">Sony Headphone</h2>
                            <a href="#" className="w-[270px] h-[55px] mx-auto md:mx-0 text-red-600 border-red-600 border-2 flex items-center justify-center rounded-full text-2xl
                              font-bold duration-500 hover:scale-100 ease-in-out hover:bg-red-600 hover:text-white">
                                <span>Discount 20%</span>
                            </a>
                        </div>
                        <p className="mb-4 mt-5 text-sm text-[#666666]">You’re out to play or stepping out to make</p>
                    </div>

                </div>
            </div>




            {/* Brands */}
            <div className='mt-20 md:mx-20 mx-4'>
                <div className='flex md:flex-row flex-col justify-between gap-2'>
                    <h1 className='text-2xl leading-10 font-bold'>Brands We Distribute</h1>
                    <p className='text-md underline cursor-pointer'>View All Brands</p>
                </div>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-6 gap-0 lg:gap-4 mt-7 mx-4 lg:mx-20 border rounded-lg border-gray-200'>
                <div className='w-full cursor-pointer border-b border-r p-3'>
                    <img src="https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/brand-mi.png"
                        className='w-32 mt-2 hover:opacity-40 duration-1000'
                        alt="Left Image" />
                </div>
                <div className='w-full border-b border-r cursor-pointer p-3'>
                    <img src="https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/brand-sony.png"
                        className='w-32 mt-5 hover:opacity-40 duration-1000'
                        alt="Left Image" />
                </div>
                <div className='w-full border-r cursor-pointer border-b lg:border-r p-3'>
                    <img src="https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/brand-marshall.png"
                        className='w-32 mt-2 hover:opacity-40 duration-1000' alt="Left Image" />
                </div>
                <div className='w-full border-r cursor-pointer border-b lg:border-r p-3'>
                    <img src="https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/brand-leehur.png"
                        className='w-32 mt-2 hover:opacity-40 duration-1000' alt="Left Image" />
                </div>
                <div className='w-full cursor-pointer p-3'>
                    <img src="https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/brand-jbl.png"
                        className='w-32 mt-2 hover:opacity-40 duration-1000' alt="Left Image" />
                </div>
                <div className='w-full cursor-pointer border-l lg:border-r p-3'>
                    <img src="https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/brand-lg.png"
                        className='w-32 mt-2 hover:opacity-40 duration-1000' alt="Left Image" />
                </div>
            </div>





            {/* Brands */}
        </>
    )
}

export default Search;
