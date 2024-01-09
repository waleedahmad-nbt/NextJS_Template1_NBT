'use client';
import Sidebar from './Sidebar';
import Products from './Products';

const page = () => {

    return (
        <>
            <div className='xl:container xl:mx-auto'>
                <div className='mt-20 mx-3'>
                    <h1 className="text-4xl font-bold text-center text-gray-900">
                        Shop
                    </h1>

                    <div className='flex flex-row m-4 gap-4'>

                        <div className='w-[250px] hidden lg:block h-full'>
                            <Sidebar />
                        </div>

                        <div className='w-full'>
                            <Products className="md:mx-6 mx-3" />
                            <a className="bg-black mt-2 w-[153px] text-[#F1F1F1] px-5 m-auto flex text-center justify-center  font-semibold py-3
                         rounded-full  duration-300 ease-in-out transform hover:scale-105">
                                LOAD MORE
                            </a>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default page;
