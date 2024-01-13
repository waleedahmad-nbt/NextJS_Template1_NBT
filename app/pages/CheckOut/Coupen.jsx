import React from 'react';
import { RxCross2 } from 'react-icons/rx';

const Coupen = ({ onClose }) => {

    const onopenCoupen = () => {
        onClose();
    };

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
                <div className='relative'>
                    <RxCross2
                        className="absolute mb-[280px] ml-[485px] duration-500 ease-in-out hover:bg-black hover:text-white z-50 cursor-pointer w-10 h-10 font-light rounded-full p-2 text-lg text-black bg-white"
                        onClick={onClose}
                    />
                    <div className="bg-white  mt-8 pt-8 rounded-md w-[500px]">
                        <form className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8" action="#">
                            <h3 className="text-4xl font-semibold text-gray-900  text-center">Select or input Coupon</h3>
                            <div>
                                <p className='text-lg text-[#666666] p-2'>If you have a coupon code, please apply it below.</p>
                                <div>
                                    <input
                                        type="Username"
                                        name="Username"
                                        id="Username"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-full 
                                        block w-full p-4 py-3"
                                        placeholder="Coupen Code"
                                    />
                                </div>
                            </div>
                            <button
                                type="button"
                                onClick={onopenCoupen}
                                className="w-full text-white bg-black hover:scale-105 font-semibold rounded-full text-base  py-2.5 text-center"
                            >
                                APPLY COUPEN
                            </button>
                            <button
                                type="button"
                                onClick={onClose}
                                className="w-full text-black hover:text-[#666666]  font-semibold rounded-full text-base text-center"
                            >
                                CANCEL
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Coupen
