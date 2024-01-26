import React from 'react';
import { RxCross2 } from 'react-icons/rx';

const SellerNote = ({ onClose }) => {
    const onLogin = () => {
        onClose();
    };

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
                <div className='relative'>
                    <RxCross2
                        className="absolute shadow-xl top-2 -right-4 duration-500 ease-in-out hover:bg-black hover:text-white z-50 cursor-pointer w-10 h-10 font-light rounded-full p-2 text-lg text-black bg-white"
                        onClick={onClose}
                    />
                    <div className="bg-white  mt-8 pt-8 rounded-md w-[500px]">
                        <form className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8" action="#">
                            <h3 className="text-4xl font-semibold text-gray-900  text-center">Add note for seller</h3>
                            <div>
                                <textarea
                                    id="message"
                                    rows="6"
                                    className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 "
                                    placeholder="Notes about your order, e.g. special notes for delivery."
                                ></textarea>
                            </div>
                            <button
                                type="button"
                                onClick={onLogin}
                                className="w-full text-white bg-black hover:scale-105 font-semibold rounded-full text-base  py-2.5 text-center"
                            >
                                SAVE
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
    );
};

export default SellerNote;
