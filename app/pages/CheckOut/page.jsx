"use client";
import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import FAQPage from "./Faq";
import { useSelector } from "react-redux";
import EmptyCart from "../Cart/EmptyCart";
import { ImInfo } from "react-icons/im";
import { useRouter } from "next/navigation";
import OrderSummary from "./OrderSummary";
import BreadcrumbsCheckout from "./BreadcrumbsCheckout";

const CheckOut = () => {
  const [inputValue, setInputValue] = useState(
    "United States (US) Minor Outlying Islands"
  );
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpenCountries, setIsOpenCountries] = useState(false);
  const [CountriesValue, setCountriesValue] = useState("Punjab");
  const [searchCountry, setSearchCountry] = useState("");
  const [selectedFAQ, setSelectedFAQ] = useState(null);

  const router = useRouter();

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    streetAddress: "",
    city: "",
    zipCode: "",
    phone: "",
    email: "",
  });
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    streetAddress: "",
    city: "",
    zipCode: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    const requiredFields = ["email"];

    requiredFields.forEach((field) => {
      if (!formData[field].trim()) {
        newErrors[field] = "This field is required";
      } else if (field === "email" && !isValidEmail(formData[field])) {
        newErrors[field] = "Please enter a valid email address";
      }
    });

    if (!formData.firstName.trim()) {
      newErrors.firstName = "This field is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "This field is required";
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = "This feild is required";
    }
    if (!formData.streetAddress.trim()) {
      newErrors.streetAddress = "This feild is required";
    }
    if (!formData.city.trim()) {
      newErrors.city = "This feild is required";
    }
    if (!formData.zipCode.trim()) {
      newErrors.zipCode = "This feild is required";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "This feild is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "This feild is required";
    }

    setErrors(newErrors);
    console.log(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isFormValid = validateForm();
    console.log("Is form valid?", isFormValid);
    if (isFormValid) {
      router.push("/pages/Order");
    }
  };

  const CartItems = useSelector((state) => state.cart.items);
  const cartQuantity = CartItems ? CartItems.length : 0;

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
    "United States (US) Minor Outlying Islands",
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
    "United States (US) Minor Outlying Islands",
  ];

  const filteredCountries = countries.filter((category) =>
    category.toLowerCase().includes(searchCountry)
  );

  const handleCountriesClick = (category) => {
    setCountriesValue(category);
    setIsOpen(false);
  };

  const handleSearchCountries = (e) => {
    setSearchCountry(e.target.value.toLowerCase());
  };
  const toggleDropdownCountries = () => {
    setIsOpenCountries(!isOpenCountries);
  };

  const filteredCategories = categories.filter((category) =>
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
    document.body.addEventListener("click", closeDropdown);

    return () => {
      document.body.removeEventListener("click", closeDropdown);
    };
  }, []);

  return (
    <>
      <BreadcrumbsCheckout />
      <div className="container mx-auto">
        <div className="mt-20 mb-16">
          {cartQuantity === 0 ? (
            <>
              <div className="flex items-center gap-2 bg-[#F7F7F7] mx-2 md:mx-20 py-4 px-2 md:px-4">
                <ImInfo />
                <p className="text-gray-950">
                  Checkout is not available whilst your cart is empty.
                </p>
              </div>
              <EmptyCart />
            </>
          ) : (
            <>
              <h1 className="text-4xl font-bold text-center text-gray-900 ">
                Checkout
              </h1>
              <form onSubmit={handleSubmit}>
                <div className="flex lg:flex-row flex-col">
                  <div className="mt-12 mx-6 md:mx-14 sm:w-full md:w-[650px] lg-[700px]">
                    <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                      Billing details
                    </h1>
                    <div className="space-y-10 flex flex-col">
                      {/* First & Last Name */}
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="w-full">
                          <label
                            for="Name"
                            className="block mb-2 text-base leading-5 text-black font-medium"
                          >
                            First name *
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            id="Name"
                            className={`border p-2.5 w-full py-3.5
                                                        border-gray-300 text-gray-900 sm:text-sm rounded-full block ${
                                                          errors.firstName
                                                            ? "border-red-500"
                                                            : ""
                                                        }`}
                            placeholder=""
                            aria-required="true"
                            onChange={handleChange}
                          />
                          {errors.firstName && (
                            <p className="text-red-500">{errors.firstName}</p>
                          )}
                        </div>
                        <div className="w-full">
                          <label
                            for="Name"
                            className="block mb-2 text-base leading-5 text-black font-medium"
                          >
                            Last name *
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            id="Name"
                            className={`border p-2.5 w-full py-3.5
                                                        border-gray-300 text-gray-900 sm:text-sm rounded-full block ${
                                                          errors.lastName
                                                            ? "border-red-500"
                                                            : ""
                                                        }`}
                            placeholder=""
                            aria-required="true"
                            onChange={handleChange}
                          />
                          {errors.lastName && (
                            <p className="text-red-500">{errors.lastName}</p>
                          )}
                        </div>
                      </div>
                      {/* Company */}
                      <div>
                        <label
                          htmlFor="Username"
                          className="block mb-2 text-base leading-5 text-black font-medium"
                        >
                          Company name
                        </label>
                        <input
                          type="Name"
                          name="companyName"
                          id="Name"
                          className={`border p-2.5 w-full py-3.5
                                                    border-gray-300 text-gray-900 sm:text-sm rounded-full block ${
                                                      errors.companyName
                                                        ? "border-red-500"
                                                        : ""
                                                    }`}
                          aria-required="true"
                          onChange={handleChange}
                        />
                        {errors.companyName && (
                          <p className="text-red-500">{errors.companyName}</p>
                        )}
                      </div>
                      {/* country & Region */}
                      <div className="w-full">
                        <label
                          for="Username"
                          className="block mb-2 text-base leading-5 text-black font-medium"
                        >
                          Country / Region *
                        </label>
                        <div
                          onClick={toggleDropdown}
                          className="flex flex-row relative"
                        >
                          <input
                            type="search"
                            value={inputValue}
                            className="border border-gray-300 text-gray-900 text-md font-semibold rounded-full 
                                                        block w-full p-2.5 py-3 pr-10"
                          />
                          <RiArrowDropDownLine className="text-3xl absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
                        </div>

                        <div className="relative group">
                          <div
                            id="dropdown-menu"
                            className={`${
                              isOpen ? "" : "hidden"
                            } absolute top-1 right-0 mt-2 rounded-2xl border border-black shadow-lg bg-white ring-1 z-50 ring-black p-2 w-full h-[300px] overflow-auto ring-opacity-5`}
                          >
                            <div className="flex items-center gap-2 rounded-3xl border-2 border-black">
                              <input
                                onChange={handleSearchInput}
                                value={searchTerm}
                                type="search"
                                className="py-2 rounded-3xl px-8 focus:outline-none w-full"
                              />
                              <div
                                type="button"
                                className="flex-shrink-0 px-4 py-1"
                              >
                                <IoIosSearch className="text-xl font-medium text-gray-600 hover:text-black transition duration-300" />
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
                        <label
                          for="Username"
                          className="block mb-2 text-base leading-5 text-black font-medium"
                        >
                          Street address *{" "}
                        </label>
                        <input
                          name="streetAddress"
                          id="Name"
                          className={`border p-2.5 w-full py-3.5
                                                    border-gray-300 text-gray-900 sm:text-sm rounded-full block ${
                                                      errors.streetAddress
                                                        ? "border-red-500"
                                                        : ""
                                                    }`}
                          aria-required="true"
                          onChange={handleChange}
                          placeholder="House number and street name"
                        />
                        {errors.streetAddress && (
                          <p className="text-red-500">{errors.streetAddress}</p>
                        )}
                        <input
                          name="streetAddress"
                          id="Username"
                          className="mt-2 border border-gray-300 text-gray-900 sm:text-sm rounded-full 
                                                block w-full p-2.5 py-3 "
                          placeholder="Apartment,suite,unit,etc.(optional)"
                        />
                      </div>
                      {/* town City */}
                      <div>
                        <label
                          for="Name"
                          className="block mb-2 text-base leading-5 text-black font-medium"
                        >
                          Town / City *
                        </label>
                        <input
                          name="city"
                          id="Name"
                          className={`border p-2.5 w-full py-3.5
                                                border-gray-300 text-gray-900 sm:text-sm rounded-full block ${
                                                  errors.city
                                                    ? "border-red-500"
                                                    : ""
                                                }`}
                          placeholder=""
                          aria-required="true"
                          onChange={handleChange}
                        />
                        {errors.city && (
                          <p className="text-red-500">{errors.city}</p>
                        )}
                      </div>
                      {/* State */}
                      <div className="w-full">
                        <div
                          onClick={toggleDropdownCountries}
                          className="flex flex-row relative"
                        >
                          <input
                            type="search"
                            value={CountriesValue}
                            readOnly
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-md font-semibold rounded-full 
                                                            block w-full p-2.5 py-3 pr-10"
                          />
                          <RiArrowDropDownLine className="text-3xl absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
                        </div>

                        <div className="relative group">
                          <div
                            id="dropdown-menu"
                            className={`${
                              isOpenCountries ? "" : "hidden"
                            } absolute top-1 right-0 mt-2 rounded-2xl border
                                        border-black shadow-lg bg-white ring-1 z-50 ring-black p-2 w-full h-[200px] overflow-auto ring-opacity-5`}
                          >
                            <div className="flex items-center gap-2 rounded-3xl border-2 border-black">
                              <input
                                onChange={handleSearchCountries}
                                value={searchCountry}
                                type="search"
                                className="py-2 rounded-3xl px-8 focus:outline-none w-full"
                              />
                              <div
                                type="button"
                                className="flex-shrink-0 px-4 py-1"
                              >
                                <IoIosSearch className="text-xl font-medium text-gray-600 hover:text-black transition duration-300" />
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
                      {/* Zip Code */}
                      <div>
                        <label
                          for="Username"
                          className="block mb-2 text-base leading-5 text-black font-medium"
                        >
                          ZIP Code *
                        </label>
                        <input
                          name="zipCode"
                          id="Username"
                          className={`border p-2.5 w-full py-3.5
                                                 border-gray-300 text-gray-900 sm:text-sm rounded-full block ${
                                                   errors.zipCode
                                                     ? "border-red-500"
                                                     : ""
                                                 }`}
                          placeholder=""
                          aria-required="true"
                          onChange={handleChange}
                        />
                        {errors.zipCode && (
                          <p className="text-red-500">{errors.zipCode}</p>
                        )}
                      </div>
                      {/* Phone & Email */}
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="w-full">
                          <label
                            for="Name"
                            className="block mb-2 text-base leading-5 text-black font-medium"
                          >
                            Phone *
                          </label>
                          <input
                            type="number"
                            name="phone"
                            id="Name"
                            className={`border p-2.5 w-full py-3.5
                                                        border-gray-300 text-gray-900 sm:text-sm rounded-full block ${
                                                          errors.phone
                                                            ? "border-red-500"
                                                            : ""
                                                        }`}
                            placeholder=""
                            aria-required="true"
                            onChange={handleChange}
                          />
                          {errors.phone && (
                            <p className="text-red-500">{errors.phone}</p>
                          )}
                        </div>
                        <div className="w-full">
                          <label
                            for="Name"
                            className="block mb-2 text-base leading-5 text-black font-medium"
                          >
                            Email address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="Name"
                            className={`border p-2.5 w-full py-3.5
                                                        border-gray-300 text-gray-900 sm:text-sm rounded-full block ${
                                                          errors.email
                                                            ? "border-red-500"
                                                            : ""
                                                        }`}
                            placeholder=""
                            aria-required="true"
                            onChange={handleChange}
                          />
                          {errors.email && (
                            <p className="text-red-500">{errors.email}</p>
                          )}
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="remember"
                            aria-describedby="remember"
                            type="checkbox"
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                            required=""
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label for="remember" className="text-gray-500">
                            Ship to a different address?
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-12 mx-4 md:mx-0 w-full md:w-[500px]">
                    <OrderSummary />

                    <FAQPage />
                    <button
                      type="submit"
                      className="hover:scale-105 duration-300 bg-black
                                                text-white font-medium rounded-full text-lg w-full py-2 text-center items-center"
                    >
                      PLACE ORDER
                    </button>
                  </div>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CheckOut;
