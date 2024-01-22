'use client';
import { useState, useEffect, useRef } from 'react';
import List from './List';
import TwoColumn from './TwoColumn';
import ThreeColumn from './ThreeColumn';
import FourColumn from './FourColumn';
import FiveColumn from './FiveColumn';
import { RxColumns } from 'react-icons/rx';
import { FaBars, FaGripLinesVertical } from 'react-icons/fa';
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';

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

                        <Tooltip
                            title="list"
                            position="top"
                            trigger="mouseenter"
                            animation="scale"
                            arrow={true}
                        >
                            <div
                                className='cursor-pointer bg-[#F2F2F2] w-[36px] h-[36px] p-2 rounded-md text-lg hover:text-white hover:bg-black text-black flex items-center justify-center'
                                onClick={() => toggleLayout('one-column')}
                            >
                                <FaBars />
                            </div>
                        </Tooltip>

                        <Tooltip
                            title="2 Columns"
                            position="top"
                            trigger="mouseenter"
                            animation="scale"
                            arrow={true}
                        >
                            <div className='cursor-pointer bg-[#F2F2F2] w-[36px] h-[36px] p-2 rounded-md
                         text-base hover:text-white hover:bg-black text-black
                         flex items-center justify-center' onClick={() => toggleLayout('two-column')}>
                                <FaGripLinesVertical />
                            </div>
                        </Tooltip>

                        <Tooltip
                            title="3 Columns"
                            position="top"
                            trigger="mouseenter"
                            animation="scale"
                            arrow={true}
                        >
                            <div className='cursor-pointer bg-[#F2F2F2] w-[36px] h-[36px] p-2.5 rounded-md text-base m-auto
                         hover:text-white hover:bg-black text-black flex items-center justify-center' onClick={() => toggleLayout('three-column')} >
                                <FaBars style={{ transform: 'rotate(90deg)' }} />
                            </div>
                        </Tooltip>
                        <Tooltip
                            title="4 Columns"
                            position="top"
                            trigger="mouseenter"
                            animation="scale"
                            arrow={true}
                        >
                            <div className='cursor-pointer hidden lg:block bg-[#F2F2F2] w-[36px] h-[36px] p-2 rounded-md text-lg hover:text-white hover:bg-black text-black
                        flex items-center justify-center' onClick={() => toggleLayout('four-column')}>
                                <RxColumns className='' />
                            </div>
                        </Tooltip>
                        <Tooltip
                            title="5 Columns"
                            position="top"
                            trigger="mouseenter"
                            animation="scale"
                            arrow={true}
                        >
                            <div className='cursor-pointer hidden lg:block bg-[#F2F2F2] w-[36px] h-[36px] p-2 rounded-md text-lg hover:text-white hover:bg-black text-black
                        flex items-center justify-center' onClick={() => toggleLayout('five-column')}>
                                <RxColumns className='' />
                            </div>
                        </Tooltip>



                    </div>
                </div>

                {renderLayout()}


            </div>
        </>

    );
};

export default Products;
