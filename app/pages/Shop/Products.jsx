'use client';
import { useState, useEffect, useRef } from 'react';
import WishlistModal from './WishlistModal';
import List from './List';
import TwoColumn from './TwoColumn';
import ThreeColumn from './ThreeColumn';
import FourColumn from './FourColumn';
import FiveColumn from './FiveColumn';

const Products = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const [selectedLayout, setSelectedLayout] = useState('five-column');

    const toggleLayout = (layout) => {
        setSelectedLayout(layout);
    };



    const toggleDropdown = () => {
        setDropdownOpen((prev) => !prev);
    };

    const closeDropdownOnOutsideClick = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', closeDropdownOnOutsideClick);
        return () => {
            document.removeEventListener('click', closeDropdownOnOutsideClick);
        };
    }, []);

    const renderGridLayout = () => {
        return <div><List /></div>
    };

    const renderTwoColumnLayout = () => {
        return <div><TwoColumn /></div>;
    };

    const renderThreeColumnLayout = () => {
        return <div><ThreeColumn /></div>;
    };

    const renderFourColumnLayout = () => {
        return <div><FourColumn /></div>;
    };

    const renderFiveColumnLayout = () => {
        return <div><FiveColumn /></div>;
    };


    const renderLayout = () => {
        switch (selectedLayout) {
            case 'grid':
                return renderGridLayout();
            case 'two-column':
                return renderTwoColumnLayout();
            case 'three-column':
                return renderThreeColumnLayout();
            case 'four-column':
                return renderFourColumnLayout();
            case 'five-column':
                return renderFiveColumnLayout();
            default:
                return renderGridLayout();
        }
    };


    return (
        <>
            <div className=' flex flex-col'>
                <div className="flex flex-col md:flex-row md:justify-between justify-start items-start md:items-center">
                    <h3 className="text-gray-500 font-medium text-base">
                        Showing 12 of 33 results
                    </h3>
                    <div className='flex flex-row gap-2 items-center'>
                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={toggleDropdown}
                                className="text-black hover:text-gray-500 font-medium text-base px-0 md:px-5 py-2.5 text-center inline-flex items-center"
                                type="button"
                            >
                                Default sorting
                                <svg
                                    className={`w-2.5 h-2.5 ml-2 ${dropdownOpen ? 'rotate-180' : ''}`}
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 4 4 4-4"
                                    />
                                </svg>
                            </button>

                            {dropdownOpen && (
                                <div className="absolute right-0 z-40 mt-2 w-44 bg-white rounded-lg shadow h-44 overflow-y-auto">
                                    <ul className="py-2 text-sm text-gray-700">
                                        <li>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 hover:bg-black hover:text-white"
                                            >
                                                Default Sorting
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 hover:bg-black hover:text-white"
                                            >
                                                Popularity
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 hover:bg-black hover:text-white"
                                            >
                                                Average Rating
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 hover:bg-black hover:text-white"
                                            >
                                                Latest
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 hover:bg-black hover:text-white"
                                            >
                                                Price: Low To High
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 hover:bg-black hover:text-white"
                                            >
                                                Price: High To Low
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>

                        <div className='cursor-pointer' onClick={() => toggleLayout('one-column')}>
                            <svg className='bg-[#F2F2F2] w-[36px] h-[36px] p-2 rounded-md text-lg' viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="15.25" y="4.25" width="1.5" height="12.5" rx="0.75" transform="rotate(90 15.25 4.25)" fill="#000000"></rect>
                                <rect x="15.25" y="8.25" width="1.5" height="12.5" rx="0.75" transform="rotate(90 15.25 8.25)" fill="#000000"></rect>
                                <rect x="15.25" y="12.25" width="1.5" height="12.5" rx="0.75" transform="rotate(90 15.25 12.25)" fill="#000000"></rect>
                            </svg>
                        </div>
                        <div className='cursor-pointer' onClick={() => toggleLayout('two-column')}>
                            <svg className='bg-[#F2F2F2] w-[36px] h-[36px] p-2 rounded-md text-lg' viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="6.25" y="2.75" width="1.5" height="12.5" rx="0.75" fill="#000000"></rect>
                                <rect x="10.25" y="2.75" width="1.5" height="12.5" rx="0.75" fill="#000000"></rect>
                            </svg>
                        </div>
                        <div className='cursor-pointer hidden lg:block ' onClick={() => toggleLayout('three-column')} >
                            <svg className='bg-[#F2F2F2] w-[36px] h-[36px] p-2 rounded-md text-lg' viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="4.25" y="2.75" width="1.5" height="12.5" rx="0.75" fill="#000000"></rect>
                                <rect x="8.25" y="2.75" width="1.5" height="12.5" rx="0.75" fill="#000000"></rect>
                                <rect x="12.25" y="2.75" width="1.5" height="12.5" rx="0.75" fill="#000000"></rect>
                            </svg>
                        </div>
                        <div className='cursor-pointer hidden lg:block' onClick={() => toggleLayout('four-column')}>
                            <svg className='bg-[#F2F2F2] w-[36px] h-[36px] p-2 rounded-md text-lg' viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="2.25" y="2.75" width="1.5" height="12.5" rx="0.75" fill="#000000"></rect>
                                <rect x="6.25" y="2.75" width="1.5" height="12.5" rx="0.75" fill="#000000"></rect>
                                <rect x="10.25" y="2.75" width="1.5" height="12.5" rx="0.75" fill="#000000"></rect>
                                <rect x="14.25" y="2.75" width="1.5" height="12.5" rx="0.75" fill="#000000"></rect>
                            </svg>
                        </div>
                        <div className='cursor-pointer hidden lg:block' onClick={() => toggleLayout('five-column')}>
                            <svg className='bg-[#F2F2F2] w-[36px] h-[36px] p-2 rounded-md text-lg' viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.25" y="2.75" width="1.5" height="12.5" rx="0.75" fill="#000000"></rect>
                                <rect x="4.25" y="2.75" width="1.5" height="12.5" rx="0.75" fill="#000000"></rect>
                                <rect x="8.25" y="2.75" width="1.5" height="12.5" rx="0.75" fill="#000000"></rect>
                                <rect x="12.25" y="2.75" width="1.5" height="12.5" rx="0.75" fill="#000000"></rect>
                                <rect x="16.25" y="2.75" width="1.5" height="12.5" rx="0.75" fill="#000000"></rect>
                            </svg>
                        </div>

                    </div>
                </div>

                {renderLayout()}

                
            </div>
        </>

    );
};

export default Products;
