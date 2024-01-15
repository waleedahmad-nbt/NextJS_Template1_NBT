"use client";
import React, { useState } from 'react'
import { IoIosSearch } from 'react-icons/io';
import { MdArrowDropDown } from 'react-icons/md';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { RxCross2 } from 'react-icons/rx';

const Shipping = ({ onClose }) => {
    const [inputValue, setInputValue] = useState('Punjab');
    const [CountriesValue, setCountriesValue] = useState('Punjab');
    const [searchTerm, setSearchTerm] = useState('');
    const [searchCountry, setSearchCountry] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenCountries, setIsOpenCountries] = useState(false);
    const [isOpenCategories, setIsOpenCategories] = useState(false);


    const toggleDropdownCountries = () => {
        setIsOpenCountries(!isOpenCountries);
        setIsOpenCategories(false);
    };

    const toggleDropdownCategories = () => {
        setIsOpenCategories(!isOpenCategories);
        setIsOpenCountries(false);
    };

    const onSubmit = () => {
        onClose();
    };


    const handleSearchInput = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const handleSearchCountries = (e) => {
        setSearchCountry(e.target.value.toLowerCase());
    };

    const handleCategoryClick = (category) => {
        setInputValue(category);
        setIsOpen(false);
    };
    const handleCountriesClick = (category) => {
        setCountriesValue(category);
        setIsOpen(false);
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
    const countries = [
        "Pakistan",
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

    const filteredCountries = countries.filter(category =>
        category.toLowerCase().includes(searchCountry)
    );
    const filteredCategories = categories.filter(category =>
        category.toLowerCase().includes(searchTerm)
    );



    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
                <div className='relative'>
                    <RxCross2
                        className="absolute shadow-md mb-[400px] ml-[410px] duration-500 ease-in-out hover:bg-black hover:text-white z-50 cursor-pointer w-10 h-10 font-light rounded-full p-2 text-lg text-black bg-white"
                        onClick={onClose}
                    />
                    <div className="bg-white mt-2 pt-8 rounded-md w-full">
                        <form className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8" action="#">
                            <h3 className="text-4xl font-semibold text-black text-center">Estimate shipping rates</h3>

                            <div className="w-full">
                                <div onClick={toggleDropdownCountries} className='flex flex-row relative'>
                                    <input
                                        type="search"
                                        value={CountriesValue}
                                        readOnly
                                        className='bg-gray-50 border border-gray-300 text-gray-900 text-md font-semibold rounded-full 
                                        block w-full p-2.5 py-3 pr-10'
                                    />
                                    <RiArrowDropDownLine className='text-3xl absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600' />
                                </div>

                                <div className="relative group">

                                    <div
                                        id="dropdown-menu"
                                        className={`${isOpenCountries ? '' : 'hidden'} absolute top-1 right-0 mt-2 rounded-2xl border
                                        border-black shadow-lg bg-white ring-1 z-50 ring-black p-2 w-full h-[200px] overflow-auto ring-opacity-5`}
                                    >
                                        <div className='flex items-center gap-2 rounded-3xl border-2 border-black'>
                                            <input onChange={handleSearchCountries}
                                                value={searchCountry} type="search" className='py-2 rounded-3xl px-8 focus:outline-none w-full' />
                                            <div type='button' className='flex-shrink-0 px-4 py-1'>
                                                <IoIosSearch className='text-xl font-medium text-gray-600 hover:text-black transition duration-300' />
                                            </div>
                                        </div>
                                        {filteredCountries.map((category, index) => (
                                            <div
                                                key={index}
                                                onClick={() => handleCountriesClick(category)}
                                                className="block font-semibold px-4 py-4 text-md text-gray-600 hover:bg-black
                                                 hover:text-white active:bg-gray-100 duration-500 cursor-pointer rounded-md"
                                            >
                                                {category}
                                            </div>
                                        ))}

                                    </div>
                                </div>

                            </div>

                            <div className="w-full">
                                <div onClick={toggleDropdownCategories} className='flex flex-row relative'>
                                    <input
                                        type="search"
                                        value={inputValue}
                                        readOnly
                                        className='bg-gray-50 border border-gray-300 text-gray-900 text-md font-semibold rounded-full 
                                        block w-full p-2.5 py-3 pr-10'
                                    />
                                    <RiArrowDropDownLine className='text-3xl absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600' />
                                </div>

                                <div className="relative group">

                                    <div
                                        id="dropdown-menu"
                                        className={`${isOpenCategories ? '' : 'hidden'} absolute top-1 right-0 mt-2 rounded-2xl border
                                        border-black shadow-lg bg-white ring-1 z-50 ring-black p-2 w-full h-[200px] overflow-auto ring-opacity-5`}
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
                                                className="block font-semibold px-4 py-4 text-md text-gray-600 hover:bg-black
                                                 hover:text-white active:bg-gray-100 duration-500 cursor-pointer rounded-md"
                                            >
                                                {category}
                                            </div>
                                        ))}

                                    </div>
                                </div>

                            </div>

                            <div>
                                <input
                                    type="name"
                                    name="Username"
                                    id="Username"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-full 
                                    block w-full p-2.5 py-3"
                                    placeholder="Town / City"
                                />
                            </div>
                            <div>
                                <input
                                    type="number"
                                    name="zip code"
                                    id="Username"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-full 
                                    block w-full p-2.5 py-3"
                                    placeholder="Postcode / ZIP"
                                />
                            </div>


                            <button
                                type="button"
                                onClick={onSubmit}
                                className="w-full text-white bg-black hover:scale-105 font-semibold rounded-full text-base  py-2.5 text-center"
                            >
                                CALCULATE SHIPPING RATES
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

export default Shipping
