import React from 'react'

const QuikView = () => {
    return (
        <>
            <div className='flex flex-col md:flex-row mt-10'>
                <div className='flex flex-col items-center w-2/12'>
                    <div className='hidden md:block'>
                        {thumbnails.map((thumb, index) => (
                            <div
                                key={thumb.id}
                                onClick={() => handleThumbnailClick(thumb.imageUrl, index)}
                                className={`flex flex-col w-[100px] h-[100px] cursor-pointer ${index === selectedThumbnailIndex ? 'active-thumbnail' : ''}`}
                            >
                                <img src={thumb.imageUrl} alt="" className={`w-[90px] object-contain h-[90px] rounded-md border hover:border-gray-700 hover:scale-95 duration-700 ${index === selectedThumbnailIndex ? 'active-thumbnail-image' : ''}`} />

                            </div>
                        ))}
                    </div>
                </div>

                {/* Main Image */}

                <div className='relative items-center w-full md:w-2/6'
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="relative">
                        <div className="relative group" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            {isHovered && (
                                <>
                                    <button
                                        className="text-black  transition-opacity duration-500 absolute p-2 flex text-center justify-center h-[45px] w-[45px] top-1/2 left-4 transform -translate-y-1/2 text-2xl hover:bg-black hover:text-white bg-[#F2F2F2] rounded-full"
                                        onClick={handlePrevClick}
                                    >
                                        <GrFormPreviousLink />
                                    </button>
                                    <button
                                        className="transition-opacity ml-7 duration-500 absolute p-2 flex text-center justify-center h-[45px] w-[45px] top-1/2 right-4 transform -translate-y-1/2 text-black text-2xl hover:bg-black hover:text-white bg-[#F2F2F2] rounded-full"
                                        onClick={handleNextClick}
                                    >
                                        <GrFormNextLink />
                                    </button>
                                </>
                            )}
                            <img src={selectedImage} alt="Main Image" className='w-[450px] h-[470px] object-cover' />
                        </div>
                    </div>
                </div>

                {/* Content */}
                < div className='flex flex-col mt-6 md:w-1/3 lg:w-2/5 mx-auto md:mx-0' >
                    <div className='flex flex-row '>
                        <h3 className="font-bold text-xl md:text-2xl  leading-8 hover:text-gray-500 text-start duration-700 ease-in-out text-black">
                            <a href="#">Xiaomi Mi Watch Lite GPS Bluetooth 5.1 Smart Watch Sports Fitness Heart Rate Monitor 1.4 Inch TFTLCD Screen 5 ATM Waterproof Mi Band</a>
                        </h3>
                        <WishlistModal />
                    </div>

                    <div className='flex flex-row my-2 px-3 justify-between mt-6 font-thin'>
                        <div>
                            <p className='text-[#32BDE8] text-2xl font-semibold'>$129.00</p>
                        </div>
                        <div className='flex flex-row items-center'>
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                            <span className='text-gray-600 ml-3 text-md'>(0 review)</span>
                        </div>
                    </div>

                    <div className='flex fle-row items-center gap-2 mt-3'>
                        <FaRegEye />
                        <p className='leading-7 font-medium text-md tracking-tight'> <span className='text-lg font-semibold'> 20 </span> people are viewing this right now
                        </p>
                    </div>
                    <div className='flex flex-col mt-6'>
                        <p>Color:</p>
                        <div className='flex flex-row gap-2'>
                            <div class="w-12 h-12 rounded-full border-2 overflow-hidden bg-[#ade9b7] hover:scale-110 transform-gpu transition-transform duration-300">
                            </div>
                            <div class="w-12 h-12 rounded-full border-2 overflow-hidden bg-[#dd3333] hover:scale-110 transform-gpu transition-transform duration-300">
                            </div>
                            <div class="w-12 h-12 rounded-full border-2 overflow-hidden bg-[#757575] hover:scale-110 transform-gpu transition-transform duration-300">
                            </div>
                        </div>
                    </div>

                    <p className='mt-4 font-semibld text-lg'>Quantity</p>
                    <div className='flex flex-row gap-3 md:gap-8 items-center'>
                        <div className="flex w-[150px] mt-4 max-w-[150px] h-max bg-[#F1F1F1] px-5 py-3 justify-between rounded-3xl items-center overflow-hidden">
                            <button className="h-full px-1"><FaMinus /></button>
                            <p className="h-full w-[50px] flex justify-center items-center">
                                2
                            </p>
                            <button className="h-full px-1">
                                <FaPlus />
                            </button>
                        </div>
                        <button className='w-full text-md text-black font-semibold h-12 mt-3 bg-[#F1F1F1] rounded-full hover:bg-black
                         hover:text-white duration-500 transform hover:scale-110 lg:mr-3'>
                            Add To Cart
                        </button>
                    </div>

                    <button className='w-full text-lg mt-3 text-white font-semibold h-12  bg-black rounded-full
                     duration-500 transform hover:scale-105'>
                        Buy Now
                    </button>



                    <div className='flex flex-row flex-wrap mt-2 mx-2 gap-8 mb-3'>
                        <div className='flex flex-row gap-3 items-center font-medium cursor-pointer hover:text-gray-500 duration-300'>
                            <FaArrowRightArrowLeft />
                            <p>Compare</p>
                        </div>
                        
                        <div className='flex flex-row gap-3 items-center font-medium cursor-pointer hover:text-gray-500 duration-300'>
                            <FaRegQuestionCircle />
                            <p>Ask a Question</p>
                        </div>
                        <div className='flex flex-row gap-3 items-center font-medium cursor-pointer hover:text-gray-500 duration-300'>
                            <IoShareSocialOutline className='text-lg font-bold' />
                            <p>Share</p>
                        </div>

                    </div>
                    <hr />
                    <div className='flex flex-row mx-4 gap-2 mt-4'>
                        <p className='flex items-center gap-2 font-semibold text-gray-700'> <TbTruckDelivery className='text-2xl' /> Estimated Delivery:</p>
                        <p className='text-gray-500 font-semibold'>15 - 22 Dec, 2023</p>
                    </div>
                    <div className='flex flex-row mx-4 gap-2 mt-3'>
                        <p className='flex items-center gap-2 font-semibold text-gray-700'> <GoInbox className='text-2xl' />Free Shipping & Returns:
                        </p>
                        <p className='text-gray-500 font-medium '>On all orders over <span className='text-[#32BDE8]'> $200.00 </span> </p>
                    </div>

                    <div className='w-full pt-4 h-[80px] bg-[#F1F1F1] gap-2 mx-4 rounded-lg mt-3 flex flex-col items-center'>
                        <img src="https://minimog-4437.kxcdn.com/supergear/wp-content/themes/minimog/assets/woocommerce/product-trust-badge.png" alt="" />
                        <p className='text-sm font-semibold text-gray-700'>Guaranteed safe & secure checkout</p>
                    </div>

                </div>



            </div>
        </>
    )
}

export default QuikView
