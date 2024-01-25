'use client';
import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter } from 'react-icons/fa';
import { GrLinkNext } from 'react-icons/gr';

const Footer = () => {
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);

  const toggleNewsletter = () => {
    setIsNewsletterOpen(!isNewsletterOpen);
  };

  const [faq, setFaq] = useState([
    {
      question: 'FIND IT FAST',
      answer: [
        "About Us",
        "Top Searches",
        "Privacy Policy",
        "Terms and Conditions",
        "Testimonials"
      ],
      open: false
    },
    {
      question: 'CUSTOMER CARE',
      answer: [
        "My Account",
        "Track Order",
        "Shop",
        "Wishlist",
        "Returns/Exchange"
      ],
      open: false
    },
    {
      question: 'OTHER BUSINESS',
      answer: [
        "Partnership Programs",
        "Associate Program",
        "Wholesale Socks",
        "Wholesale Funny Socks"
      ],
      open: false
    },
  ]);

  const toggleFaq = (index) => {
    setFaq(faq.map((item, i) => {
      if (i === index) {
        item.open = !item.open;
      } else {
        item.open = false;
      }

      return item;
    }));
  }

  return (
    <>
      {/* Upper Footer */}
      <div className='bg-[#F7F7F7] mt-16'>

        {/* Show on sm and lg screen */}
        <div className='xl:container xl:mx-auto'>
          <div className='md:hidden lg:flex flex flex-row justify-between p-7 mx-0 md:mx-10 '>
            <div className='w-full md:w-1/5'>
              <div className='flex flex-col md:flex-row text-center items-center  border-gray-300'>
                <img
                  src="https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/footer-image-box-01.png"
                  alt=""
                  className='w-[45px] h-[50px]'
                />
                <div className='flex flex-col text-center ml-2 gap-2 mt-5'>
                  <h2 className='text-base leading-6 text-start text-[#000000] font-semibold'>High Quality Selection</h2>
                  <p className='text-sm text-[#666] leading-5 text-start font-medium hidden md:block'>
                    Total Product Quality Control For Peace Of Mind
                  </p>
                </div>
              </div>
            </div>
            <div className='w-[1px] h-[60px] my-auto bg-gray-300'></div>

            <div className='w-full md:w-1/5 mt-4 md:mt-0'>
              <div className='flex flex-col md:flex-row items-center border-gray-300'>
                <img
                  src="https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/footer-image-box-02.png"
                  alt=""
                />
                <div className='flex flex-col ml-2 gap-2 mt-5'>
                  <h2 className='text-base leading-6 text-[#000000] font-semibold'>Affordable Prices</h2>
                  <p className='text-sm text-[#666] leading-5 font-medium hidden md:block'>Factory Direct Prices For Maximum Savings</p>
                </div>
              </div>
            </div>
            <div className='w-[1px] h-[70px] my-auto bg-gray-300'></div>

            <div className='w-full md:w-1/5 mt-4 md:mt-0'>
              <div className='flex  flex-col md:flex-row items-center border-gray-300'>
                <img
                  src="https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/footer-image-box-03.png"
                  alt=""
                />
                <div className='flex flex-col ml-2 gap-2 mt-5'>
                  <h2 className='text-base leading-6 text-[#000000] font-semibold'>Express Shipping</h2>
                  <p className='text-sm text-[#666] leading-5 font-medium hidden md:block'>Fast, Reliable Delivery From Global Warehouses</p>
                </div>
              </div>
            </div>
            <div className='w-[1px] h-[70px] my-auto bg-gray-300'></div>

            <div className='w-full md:w-1/5 mt-4 md:mt-0'>
              <div className='flex flex-col md:flex-row items-center'>
                <img src="https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/footer-image-box-04.png" alt="" />
                <div className='flex flex-col ml-2 gap-2 mt-5'>
                  <h2 className='text-base leading-6 text-[#000000] font-semibold'>Worry Free</h2>
                  <p className='text-sm text-[#666] leading-5 font-medium hidden md:block'>
                    Instant Access To Professional Support
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Show only on md:screen */}
        <div className='container mx-auto'>
          <div className='hidden md:grid lg:hidden grid-cols-2 duration-500 ease-in-out'>
            <div className='w-full'>
              <div className='flex flex-col md:flex-row text-center items-center  border-gray-300'>
                <img
                  src="https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/footer-image-box-01.png"
                  alt=""
                  className='w-[45px] h-[50px]'
                />
                <div className='flex flex-col text-center ml-2 gap-2 mt-5'>
                  <h2 className='text-base leading-6 text-start text-[#000000] font-bold'>High Quality Selection</h2>
                  <p className='text-sm text-[#666] leading-5 text-start font-medium'>
                    Total Product Quality Control For Peace Of Mind
                  </p>
                </div>
              </div>
            </div>
            <div className='w-full mt-4 md:mt-0'>
              <div className='flex flex-col md:flex-row items-center border-gray-300'>
                <img
                  src="https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/footer-image-box-02.png"
                  alt=""
                />
                <div className='flex flex-col ml-2 gap-2 mt-5'>
                  <h2 className='text-base leading-6 text-[#000000] font-bold'>Affordable Prices</h2>
                  <p className='text-sm text-[#666] leading-5 font-medium hidden md:block'>Factory Direct Prices For Maximum Savings</p>
                </div>
              </div>
            </div>
            <div className='w-full mt-4 md:mt-0'>
              <div className='flex  flex-col md:flex-row items-center border-gray-300'>
                <img
                  src="https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/footer-image-box-03.png"
                  alt=""
                />
                <div className='flex flex-col ml-2 gap-2 mt-5'>
                  <h2 className='text-base leading-6 text-[#000000] font-bold'>Express Shipping</h2>
                  <p className='text-sm text-[#666] leading-5 font-medium hidden md:block'>Fast, Reliable Delivery From Global Warehouses</p>
                </div>
              </div>
            </div>
            <div className='w-full mt-4 md:mt-0'>
              <div className='flex flex-col md:flex-row items-center'>
                <img src="https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/footer-image-box-04.png" alt="" />
                <div className='flex flex-col ml-2 gap-2 mt-5'>
                  <h2 className='text-base leading-6 text-[#000000] font-bold'>Worry Free</h2>
                  <p className='text-sm text-[#666] leading-5 font-medium hidden md:block'>
                    Instant Access To Professional Support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Middle Footer */}
      <div className='xl:container xl:mx-auto'>
        <div className='hidden md:block duration-500 ease-in-out'>
          <div className='grid  md:grid-cols-2 lg:grid-cols-4 p-6 md:p-14 gap-4'>

            <div className='flex flex-col gap-4'>
              <h1 className='text-sm font-bold'>FIND IT FAST</h1>
              <p className='text-base leading-7 font-medium text-[#666] cursor-pointer hover:text-black duration-300'>Top Searches</p>
              <p className='text-base leading-7 font-medium text-[#666] cursor-pointer hover:text-black duration-300'>About Us</p>
              <p className='text-base leading-7 font-medium text-[#666] cursor-pointer hover:text-black duration-300'>Privacy Policy</p>
              <p className='text-base leading-7 font-medium text-[#666] cursor-pointer hover:text-black duration-300'>Terms and Conditions</p>
              <p className='text-base leading-7 font-medium text-[#666] cursor-pointer hover:text-black duration-300'>Testimonials</p>
            </div>

            <div className='flex flex-col gap-4'>
              <h1 className='text-sm font-bold'>CUSTOMER CARE</h1>
              <p className='text-base leading-7 font-medium text-[#666] cursor-pointer hover:text-black duration-300'>My Account</p>
              <p className='text-base leading-7 font-medium text-[#666] cursor-pointer hover:text-black duration-300'>Track Order</p>
              <p className='text-base leading-7 font-medium text-[#666] cursor-pointer hover:text-black duration-300'>Shop</p>
              <p className='text-base leading-7 font-medium text-[#666] cursor-pointer hover:text-black duration-300'>Wishlist</p>
              <p className='text-base leading-7 font-medium text-[#666] cursor-pointer hover:text-black duration-300'>Returns/Exchange</p>
            </div>
            <div className='flex flex-col gap-4'>
              <h1 className='text-sm font-bold'>OTHER BUSINESS</h1>
              <p className='text-base leading-7 font-medium text-[#666] cursor-pointer hover:text-black duration-300'>Partnership Programs</p>
              <p className='text-base leading-7 font-medium text-[#666] cursor-pointer hover:text-black duration-300'>Associate Program</p>
              <p className='text-base leading-7 font-medium text-[#666] cursor-pointer hover:text-black duration-300'>Wholesale Socks</p>
              <p className='text-base leading-7 font-medium text-[#666] cursor-pointer hover:text-black duration-300'>Wholesale Funny Socks</p>
            </div>

            <div className='flex flex-col gap-4'>
              <div>
                <h1 className='text-sm font-bold'>NEWSLETTER</h1>
              </div>

              <div className='flex items-center rounded-3xl w-full md:w-[250px] border-2 border-black'>
                <input className='py-3 rounded-3xl px-2 focus:outline-none w-full' />
                <button type='button' className='flex-shrink-0 px-3 py-2'>
                  <GrLinkNext className='text-xl font-medium text-gray-600 hover:text-black transition duration-300' />
                </button>
              </div>

              <p className='text-sm text-[#000] leading-5'>
                {' '}
                <span className='text-lg'>*</span> By Signing up here I agree to receive Minigear’s email newsletter.
              </p>
              <div className='flex flex-row gap-6 mt-3 text-lg'>
                <FaPinterestP className='hover:text-gray-500 duration-300 cursor-pointer' />
                <FaFacebookF className='hover:text-gray-500 duration-300 cursor-pointer' />
                <FaInstagram className='hover:text-gray-500 duration-300 cursor-pointer' />
                <FaTwitter className='hover:text-gray-500 duration-300 cursor-pointer' />
              </div>
            </div>

          </div>
        </div>
      </div>
      <hr />

      {/* Faq Footer */}
      <section className="block md:hidden">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto mt-8 ">
            {faq.map((item, index) => (
              <div key={index} className="transition-all duration-500 ease-in-out bg-white  cursor-pointer">
                <button type="button" className="flex items-center justify-between w-full px-4 py-5 sm:p-6" onClick={() => toggleFaq(index)}>
                  <span className="flex text-lg font-semibold text-black"> {item.question} </span>

                  <svg className={`w-6 h-6 text-gray-400 ${item.open ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div className={`${item.open ? 'block' : 'hidden'} text-lg space-y-2 px-4 pb-2 sm:px-6`}>
                  {item.answer.map((answer, idx) => (
                    <p className='text-gray-600 hover:text-black' key={idx} dangerouslySetInnerHTML={{ __html: answer }}></p>
                  ))}
                </div>

              </div>
            ))}
          </div>

          <div>
            <button onClick={toggleNewsletter} type="button" className="flex items-center justify-between w-full px-4 py-5 sm:p-6">
              <span className="flex text-lg font-semibold text-black">NEWSLETTER </span>

              <svg className={`w-6 h-6 text-gray-400 `} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isNewsletterOpen && (
              <div className='flex flex-col gap-4 container mx-auto duration-500 ease-in-out'>

                <div className='flex items-center rounded-3xl w-full md:w-[250px] border-2 border-black'>
                  <input className='py-3 rounded-3xl px-2 focus:outline-none w-full' />
                  <button type='button' className='flex-shrink-0 px-3 py-2'>
                    <GrLinkNext className='text-xl font-medium text-gray-600 hover:text-black transition duration-300' />
                  </button>
                </div>

                <p className='text-sm text-[#000] leading-5'>
                  {' '}
                  <span className='text-lg'>*</span> By Signing up here I agree to receive Minigear’s email newsletter.
                </p>
                <div className='flex flex-row gap-6 mt-3 text-lg'>
                  <FaPinterestP className='hover:text-gray-500 duration-300 cursor-pointer' />
                  <FaFacebookF className='hover:text-gray-500 duration-300 cursor-pointer' />
                  <FaInstagram className='hover:text-gray-500 duration-300 cursor-pointer' />
                  <FaTwitter className='hover:text-gray-500 duration-300 cursor-pointer' />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>


      {/* Bottom Footer */}
      <div className='xl:container xl:mx-auto'>
        <div className='flex flex-col md:flex-row mb-10 md:mb-3 gap-4 text-center justify-between p-8 items-center mx-8'>
          <p className='text-sm leading-5 tracking-wider text-gray-500'>© 2022 Minimog Theme. All rights reserved.</p>
          <img src="https://minimog-4437.kxcdn.com/wp-content/uploads/2021/11/payment.png" alt="" />
        </div>
      </div>

    </>
  );
};

export default Footer;
