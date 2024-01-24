'use client';
import React from 'react';
import { BiMessageRoundedDots } from "react-icons/bi";
import BreadcrumbsBlog from './BreadcrumbsBlog';
import { slides } from '@/app/data';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { setBlogDetails } from '@/app/lib/redux/slices/cartSlice';

const page = () => {
    const router = useRouter();
    const dispatch = useDispatch();
  
    const handleProductClick = (blog) => {
      dispatch(setBlogDetails(blog));
      router.push(`/pages/Blogs?${blog.title}`);
    };
   

    return (
        <>
        <BreadcrumbsBlog/>
            <div className='xl:container xl:mx-auto'>
                <div className='mx-2 lg:mx-12 mt-20'>
                    <h1 className="text-4xl font-bold text-center text-gray-900">
                        Blog
                    </h1>
                    <div className='flex lg:flex-row flex-col gap-6 mt-16'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 w-full md:w-full lg:w-[80%] px-2 md:px-0'>
                            {slides.map((slide) => (
                                <div key={slide.id} onClick={()=>handleProductClick(slide)} className='flex flex-col mb-2 cursor-pointer'>
                                    <img
                                        src={slide.imageUrl}
                                        alt='Blog Post Image'
                                        className='transition-transform transform object-cover hover:scale-105 duration-700'
                                    />
                                    <h4 className='text-base font-bold mt-2 text-gray-800 hover:text-gray-500'>{slide.category}</h4>
                                    <p className='text-xl mb-8 font-bold text-ellipsis'>{slide.title}</p>
                                </div>
                            ))}
                        </div>


                        <div className='md:w-[300px] mx-2 md:mx-4 w-full flex flex-col gap-6'>
                            <div className='mb-3'>
                                <h1 className='text-2xl font-semibold mb-3'>Categories</h1>
                                <ul className='flex flex-col gap-2'>
                                    <li className='text-gray-600 font-medium hover:underline cursor-pointer'>Life Style</li>
                                    <li className='text-gray-600 font-medium hover:underline cursor-pointer'>Technology</li>
                                </ul>
                            </div>

                            <div>
                                <h1 className='text-2xl font-semibold mb-3'>Recent Comments</h1>
                                <ol className="flex flex-col gap-2">
                                    <li className="flex flex-row items-start gap-1 mb-2">
                                        <BiMessageRoundedDots className='text-4xl' />
                                        <p className='text-black hover:text-gray-600 font-semibold cursor-pointer'> <span className='text-gray-800 text-sm cursor-pointer hover:text-gray-400'>jenniferc </span> on Klipsch R-120SW Powerful Detailed Home Speaker – Unit</p>
                                    </li>
                                    <li className="flex flex-row items-start gap-1 mb-2">
                                        <BiMessageRoundedDots className='text-4xl' />
                                        <p className='text-black hover:text-gray-600 font-semibold cursor-pointer'> <span className='text-gray-800 text-sm cursor-pointer hover:text-gray-400'>jenniferc </span> on Klipsch R-120SW Powerful Detailed Home Speaker – Unit</p>
                                    </li>

                                </ol>
                            </div>

                            <div>
                                <h1 className='text-2xl font-semibold mb-3'>Recent Posts</h1>
                                <div className='flex flex-col gap-4'>
                                    {slides.map((slide) => (
                                        <div key={slide.id} className='flex flex-row'>

                                            <img src={slide.imageUrl}
                                                className='w-[70px] h-[46px] transition-transformtransform object-cover hover:scale-105 duration-700'
                                                alt="" />
                                            <div className='flex flex-col'>
                                                <a className='text-xs scale-95 hover:text-gray-500 cursor-pointer'>{slide.category}</a>
                                                <a className='text-base font-semibold scale-95 text-ellipsis'>{slide.title}</a>
                                            </div>

                                        </div>
                                    ))}
                                </div>

                            </div>


                            <div>
                                <h1 className='text-2xl font-semibold mb-3'>Tags</h1>
                                <div className='flex flex-row flex-wrap gap-4'>
                                    <p className='hover:underline hover:text-gray-500 text-gray-600 font-medium text-xl'>audio</p>
                                    <p className='hover:underline hover:text-gray-500 text-gray-600 font-medium text-xl'>life style</p>
                                    <p className='hover:underline hover:text-gray-500 text-gray-600 font-medium text-xl'>smart watch</p>
                                    <p className='hover:underline hover:text-gray-500 text-gray-600 font-medium text-xl'>sport watch</p>
                                    <p className='hover:underline hover:text-gray-500 text-gray-600 font-medium text-xl'>supergear</p>
                                    <p className='hover:underline hover:text-gray-500 text-gray-600 font-medium text-xl'>technology</p>
                                </div>
                            </div>


                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default page
