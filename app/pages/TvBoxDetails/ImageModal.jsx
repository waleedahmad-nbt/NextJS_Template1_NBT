'use client';
import { XIcon } from '@heroicons/react/solid';
import { IoShareSocial } from 'react-icons/io5';
import { FaRegCopy, FaRegPlayCircle } from 'react-icons/fa';
import { ImZoomIn, ImZoomOut } from 'react-icons/im';
import { MdOutlineFullscreen } from 'react-icons/md';
import { HiDownload } from 'react-icons/hi';
import 'react-image-gallery/styles/css/image-gallery.css';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';

const ImageModal = ({ isOpen, onClose }) => {

    if (!isOpen) {
        return null;
    }

    return (
        <div className='bg-black w-full h-full relative z-50'>
            <div className='absolute left-5 top-1/2 transform -translate-y-1/2'>
                <button
                    className='text-white p-2 flex text-center left-5 justify-center h-10 w-10 text-2xl rounded-full transition-opacity duration-500'
                >
                    <FaArrowLeftLong />
                </button>
            </div>
            <div className='absolute right-5 top-1/2 transform -translate-y-1/2'>
                <button
                    className='text-white p-2 flex  text-center justify-center h-10 w-10 text-2xl rounded-full transition-opacity duration-500'
                >
                    <FaArrowRightLong />
                </button>
            </div>
            <div className="bg-[#949393] bg-opacity-80 flex items-center justify-between w-full p-4">
                <div className='flex items-center'>
                    <p className="text-[#afadad]">5 / 6</p>
                </div>
                <div className='flex items-center gap-7'>
                    <button className="text-[#afadad] hover:text-[#ffffff] duration-300 ease-in-out">
                        <IoShareSocial className="h-6 w-6" />
                    </button>
                    <button className="text-[#afadad] hover:text-[#ffffff] duration-300 ease-in-out">
                        <FaRegCopy className="h-6 w-6" />
                    </button>
                    <button className="text-[#afadad] hover:text-[#ffffff] duration-300 ease-in-out">
                        <ImZoomOut className="h-6 w-6" />
                    </button>
                    <button className="text-[#afadad] hover:text-[#ffffff] duration-300 ease-in-out">
                        <ImZoomIn className="h-6 w-6" />
                    </button>
                    <button className="text-[#afadad] hover:text-[#ffffff] duration-300 ease-in-out">
                        <FaRegPlayCircle className="h-6 w-6" />
                    </button>
                    <button className="text-[#afadad] hover:text-[#ffffff] duration-300 ease-in-out">
                        <HiDownload className="h-6 w-6" />
                    </button>
                    <button onClick={onClose} className="text-[#afadad] hover:text-[#ffffff] duration-300 ease-in-out">
                        <XIcon className="h-6 w-6" />
                    </button>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <div className='flex flex-col items-center w-[550px] mx-auto text-center justify-center'>
                    <img src="https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_18_6.jpg"
                        alt=""
                        className=''
                    />
                    <div className="text-center p-2 bg-slate-400 w-full">product_gear_18_1</div>
                </div>
            </div>

        </div>
    );
};

export default ImageModal;
