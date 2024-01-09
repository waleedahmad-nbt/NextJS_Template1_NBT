'use client';
import React, { useEffect, useState } from 'react';
import { GoPencil } from 'react-icons/go';
import { IoIosSearch } from 'react-icons/io';
import { LiaShippingFastSolid } from 'react-icons/lia';
import { RiArrowDropDownLine, RiCouponLine } from 'react-icons/ri';
import FAQPage from './Faq';

const CheckOut = () => {
    const [inputValue, setInputValue] = useState('United States (US) Minor Outlying Islands');
    const [showCategoriesDropdown, setShowCategoriesDropdown] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [isOpenCity, setisOpenCity] = useState(false);
    const [selectedItem, setSelectedItem] = useState('');
    const items = ['Item 1', 'Item 2', 'Item 3'];

    const handleItemClick = (item) => {
        setSelectedItem(item);
        setisOpenCity(false);
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSearchInput = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const categories = [
        "Afghanistan",
        "Albania",
        "Algeria",
        "Andorra",
        "Angola",
        "Antigua and Barbuda",
        "Argentina",
        "Armenia",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bhutan",
        "Bolivia",
        "Bosnia and Herzegovina",
        "Botswana",
        "Brazil",
        "Brunei",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cabo Verde",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Central African Republic",
        "Chad",
        "Chile",
        "China",
        "Colombia",
        "Comoros",
        "Congo",
        "Costa Rica",
        "Croatia",
        "Cuba",
        "Cyprus",
        "Czech Republic",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic",
        "East Timor (Timor-Leste)",
        "Ecuador",
        "United States (US) Minor Outlying Islands"
    ];


    const filteredCategories = categories.filter(category =>
        category.toLowerCase().includes(searchTerm)
    );

    const handleCategoryClick = (category) => {
        setInputValue(category);
        setIsOpen(false);
    };
    const closeDropdown = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        document.body.addEventListener('click', closeDropdown);

        return () => {
            document.body.removeEventListener('click', closeDropdown);
        };
    }, []);

    return (
        <>
            <div className='xl:container xl:mx-auto'>
                <div className='mt-20 mb-16'>
                    <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white">
                        Checkout
                    </h1>
                    <div className='container'>
                        <div className='flex lg:flex-row flex-col'>

                            <div className='mt-12 mx-6 md:mx-14 sm:w-full md:w-[650px] lg-[700px]'>
                                <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Billing details
                                </h1>
                                <form className="space-y-10 flex flex-col " action="#">
                                    {/* First & Last Name */}
                                    <div className='flex flex-col md:flex-row gap-6'>
                                        <div className='w-full'>
                                            <label for="Name" className="block mb-2 text-base leading-5 text-black font-medium">First name *</label>
                                            <input type="Name" name="Name" id="Name" className="bg-gray-50 border p-2.5 w-full py-3.5
                             border-gray-300 text-gray-900 sm:text-sm rounded-full  block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="" required="" />
                                        </div>
                                        <div className='w-full'>
                                            <label for="Name" className="block mb-2 text-base leading-5 text-black font-medium">Last name *</label>
                                            <input type="Name" name="Name" id="Name" placeholder="" className="bg-gray-50 border p-2.5 w-full py-3.5
                             border-gray-300 text-gray-900 sm:text-sm rounded-full  block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                        </div>
                                    </div>
                                    {/* Company  */}
                                    <div>
                                        <label htmlFor="Username" className="block mb-2 text-base leading-5 text-black font-medium">Company name</label>
                                        <input
                                            type="Username"
                                            name="Username"
                                            id="Username"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-full 
                                    block w-full p-2.5 py-3 dark:bg-gray-700 dark:border-gray-600
                                    dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                                    dark:focus:border-blue-500"
                                            placeholder=""
                                            required=""
                                        />
                                    </div>
                                    {/* State & Region */}
                                    <div className="w-full">

                                        <label for="Username" className="block mb-2 text-base leading-5 text-black font-medium">Country / Region *</label>
                                        <div onClick={toggleDropdown} className='flex flex-row relative'>
                                            <input

                                                type="search"
                                                value={inputValue}
                                                readOnly
                                                className='bg-gray-50 border border-gray-300 text-gray-900 text-md font-semibold rounded-full 
                                        block w-full p-2.5 py-3 pr-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                                        dark:focus:border-blue-500'
                                            />
                                            <RiArrowDropDownLine className='text-3xl absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600' />
                                        </div>

                                        <div className="relative group">

                                            <div
                                                id="dropdown-menu"
                                                className={`${isOpen ? '' : 'hidden'} absolute top-1 right-0 mt-2 rounded-2xl border border-black shadow-lg bg-white ring-1 z-50 ring-black p-2 w-[550px] h-96 overflow-auto ring-opacity-5`}
                                            >
                                                <div className='flex items-center gap-2 rounded-3xl border-2 border-black'>
                                                    <input onChange={handleSearchInput}
                                                        value={searchTerm} type="search" className='py-2 rounded-3xl px-8 focus:outline-none w-full' />
                                                    <div type='button' className='flex-shrink-0 px-4 py-1'>
                                                        <IoIosSearch className='text-xl font-medium text-gray-600 hover:text-black transition duration-300' />
                                                    </div>
                                                </div>
                                                {filteredCategories.map((category, index) => (
                                                    <div
                                                        key={index}
                                                        onClick={() => handleCategoryClick(category)}
                                                        className="block font-semibold px-4 py-4 text-md text-gray-600 hover:bg-black hover:text-white active:bg-gray-100 duration-500 cursor-pointer rounded-md"
                                                    >
                                                        {category}
                                                    </div>
                                                ))}

                                            </div>
                                        </div>
                                    </div>
                                    {/* Street Address */}
                                    <div>
                                        <label for="Username" className="block mb-2 text-base leading-5 text-black font-medium">Street address * </label>
                                        <input type="Username" name="Username" id="Username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-full 
                        block  w-full p-2.5 py-3 mb-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                         dark:focus:border-blue-500" placeholder="House number and street name" required="" />
                                        <input type="Username" name="Username" id="Username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-full 
                        block w-full p-2.5 py-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                         dark:focus:border-blue-500" placeholder="Apartment,suite,unit,etc.(optional)" required="" />
                                    </div>
                                    {/* town City */}
                                    <div>
                                        <label for="Name" className="block mb-2 text-base leading-5 text-black font-medium">Town / City *</label>
                                        <input type="Name" name="Name" id="Name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-full 
                        block w-full p-2.5 py-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                         dark:focus:border-blue-500"
                                            placeholder="" required="" />
                                    </div>
                                    {/* State */}
                                    <div className="relative inline-block text-left">
                                        <div>
                                            <label for="Username" className="block mb-2 text-base leading-5 text-black font-medium">State *</label>
                                            <input
                                                onClick={() => setisOpenCity(!isOpenCity)}
                                                type="text"
                                                name="City"
                                                id="City"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-full block w-full p-2.5 py-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder={selectedItem || 'Select an item'}
                                            />
                                        </div>

                                        {isOpenCity && (
                                            <div className="absolute top-full left-0 mt-2 p-2 w-[550px] bg-white border border-gray-200 rounded-2xl shadow-lg">
                                                <div className="divide-y divide-gray-100">
                                                    <div className="p-2">
                                                        <input
                                                            type="text"
                                                            placeholder="Type something..."
                                                            className="w-full border rounded-full p-2"
                                                        />
                                                    </div>
                                                    {items.map((item) => (
                                                        <div
                                                            key={item}
                                                            className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                                                            onClick={() => handleItemClick(item)}
                                                        >
                                                            {item}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    {/* Zip Code */}
                                    <div>
                                        <label for="Username" className="block mb-2 text-base leading-5 text-black font-medium">ZIP Code *</label>
                                        <input type="Username" name="Username" id="Username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-full 
                        block w-full p-2.5 py-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                         dark:focus:border-blue-500" placeholder="" required="" />
                                    </div>
                                    {/* Phone & Email */}
                                    <div className='flex flex-col md:flex-row gap-6'>
                                        <div className='w-full'>
                                            <label for="Name" className="block mb-2 text-base leading-5 text-black font-medium">Phone *</label>
                                            <input type="Name" name="Name" id="Name" className="bg-gray-50 border p-2.5 w-full py-3.5
                             border-gray-300 text-gray-900 sm:text-sm rounded-full  block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="" required="" />
                                        </div>
                                        <div className='w-full'>
                                            <label for="Name" className="block mb-2 text-base leading-5 text-black font-medium">
                                                Email address *</label>
                                            <input type="Name" name="Name" id="Name" placeholder="" className="bg-gray-50 border p-2.5 w-full py-3.5
                             border-gray-300 text-gray-900 sm:text-sm rounded-full  block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label for="remember" className="text-gray-500 dark:text-gray-300">Ship to a different address?</label>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div className='mt-12 mx-4  sm:w-[400px] md:w-[500px]'>
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Order summary
                                </h1>
                                <hr className='mt-4' />
                                {/* Product 1 */}
                                <div className='flex flex-row items-center mt-4'>
                                    <img src="https://minimog.thememove.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_02_3-80x80.jpg" alt=""
                                        className='w-[60px] h-[60px]'
                                    />
                                    <div className='flex flex-col'>
                                        <p className='text-base font-semibold text-black text-ellipsis'>Amazfit GTS 2 Mini Sports Smartwatch GPS Bluetooth 5.0 Female Cycle Tracking Smart Watch For Android iOS Phone - GTS 2 Mini SPAIN <span> x10</span></p>
                                        <p className='text-sm font-normal text-gray-800'>Color:
                                            Sage Green</p>
                                        <p className='text-sm font-normal text-gray-800'>Size:
                                            GTS 2 Mini</p>
                                    </div>
                                    <p className='text-[#32BDE8] text-base'>$1,299.90</p>
                                </div>
                                <hr className='mt-2' />
                                {/* Product 2 */}
                                <div className='flex flex-row items-center mt-4'>
                                    <img src="https://minimog.thememove.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_02_3-80x80.jpg" alt=""
                                        className='w-[60px] h-[60px]'
                                    />
                                    <div className='flex flex-col'>
                                        <p className='text-base font-semibold text-black text-ellipsis'>Amazfit GTS 2 Mini Sports Smartwatch GPS Bluetooth 5.0 Female Cycle Tracking Smart Watch For Android iOS Phone - GTS 2 Mini SPAIN <span> x10</span></p>
                                        <p className='text-sm font-normal text-gray-800'>Color:
                                            Sage Green</p>
                                        <p className='text-sm font-normal text-gray-800'>Size:
                                            GTS 2 Mini</p>
                                    </div>
                                    <p className='text-[#32BDE8] text-base'>$1,299.90</p>
                                </div>

                                <hr className='mt-3' />
                                <div className='flex flex-col ml-auto mt-6 rounded-md'>
                                    <div className='flex flex-row gap-2 h-[60px] mx-auto'>
                                        <div className='flex flex-col w-[100px] md:w-[150px]  items-center hover:text-gray-500 text-black text-md cursor-pointer border-r mb-2'>
                                            <GoPencil className='text-2xl' />
                                            <p>Note</p>
                                        </div>
                                        <div className='flex flex-col w-[100px] md:w-[150px] items-center border-r mb-2  hover:text-gray-500 text-black text-md cursor-pointer'>
                                            <LiaShippingFastSolid className='text-2xl' />
                                            <p>Shipping</p>
                                        </div>
                                        <div className='flex flex-col w-[100px] md:w-[150px] items-center mb-2  hover:text-gray-500 text-black text-md cursor-pointer'>
                                            <RiCouponLine className='text-2xl' />
                                            <p className='text-lg'>Coupon</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className='flex flex-row justify-between h-[60px] items-center'>
                                        <p className='text-gray-500 text-md font-semibold'>Subtotal</p>
                                        <p className='text-[#32BDe8]'>$1,527.39</p>
                                    </div>
                                    <hr />
                                    <div className='flex flex-row justify-between items-center h-[77px] border-b'>
                                        <p className='text-gray-500 text-md font-semibold'>Shipping</p>
                                        <div className='flex flex-col gap-2'>
                                            <p className='flex flex-row gap-2 items-center'>
                                                <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-black bg-gray-100 border-gray-300 rounded-full focus:ring-black dark:focus:ring-black  " />
                                                <p >  Free shipping </p>
                                            </p>
                                            <p className='flex flex-row gap-2 items-center'>
                                                <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-black bg-gray-100 border-gray-300 rounded-full focus:ring-black dark:focus:ring-black  " />
                                                <p> Flat rate: <span className='text-[#32BDe8]'> $10.00</span></p>
                                            </p>

                                        </div>
                                    </div>
                                    <div className='flex flex-row justify-between h-[50px] items-center'>
                                        <p className='text-gray-800 text-md font-semibold'>Total</p>
                                        <p className='text-[#32BDe8]'>$1,527.39</p>
                                    </div>
                                </div>

                                <h1 className="text-2xl font-semibold mt-6 text-start text-gray-900 dark:text-white">
                                    Payment information
                                </h1>

                                <FAQPage />
                                <button type="submit" className="hover:scale-105 duration-300 focus:ring-4 focus:outline-none bg-black
                             text-white font-medium rounded-full text-lg w-full py-2 text-center items-center ml-2">PLACE ORDER</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CheckOut;