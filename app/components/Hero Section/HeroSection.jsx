'use client';

import Link from "next/link";


const HeroSection = () => {
  return (
    <>
    {/* Hero Section 1 */}
      <div className="relative max-w-full h-[400px] md:h-[510px] overflow-hidden mx-3 md:mx-6 lg:mx-16">
        <img
          className="object-cover w-full h-full"
          src="https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/home-hero-banner.jpg"
          alt="Background Image"
        />
        <div className="absolute inset-0 flex flex-col justify-center  md:items-start text-white md:text-left px-4 md:px-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4">Mi Air Purifier</h2>
          <p className="text-sm md:text-lg mb-4 md:mb-8">The new tech gift you are wishing for right here.</p>
          <Link href="/pages/Shop">
            <p className="bg-white text-black text-center w-[160px] font-semibold py-2 md:py-3 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
              Shop Now
            </p>
          </Link>
        </div>
      </div>



      {/* Hero Section 2 */}
      <div className='mx-4 md:mx-16 flex flex-col md:flex-row gap-4 mt-6 md:mt-10'>

        <div className="relative col-span-1 flex rounded-lg w-full md:w-[380px] h-[260px] group overflow-hidden">
          <img
            className="w-full h-260px object-cover rounded-lg  transition-transform transform group-hover:scale-110 duration-700"
            src="https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/home-banner-01.jpg"
            alt="Background Image"
          />
          <div className="absolute flex items-center justify-center">
            <div className="w-full flex flex-row">
              <div className="flex flex-col justify-between  ml-7 mt-5 px-5">
                <h3 className="text-2xl lg:text-3xl font-bold text-black">New Deals at Best Prices</h3>
                <span className="text-xl leading-2  mt-2 font-semibold text-black">From $40.00</span>

                <div className="text-md underline mt-12 ">
                  <Link href="/pages/Shop">
                    <span className="button-text">Browse Deals</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative col-span-1 flex rounded-lg w-full md:w-[380px] h-[260px] group overflow-hidden">
          <img
            className="w-full h-260px object-cover rounded-lg  transition-transform transform group-hover:scale-110 duration-700"
            src="https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/home-banner-02.jpg"
            alt="Background Image"
          />
          <div className="absolute flex items-center justify-center">
            <div className="w-full flex flex-row">
              <div className="flex flex-col justify-between ml-4 mt-5 px-5">
                <h3 className="text-2xl md:text-3xl font-bold text-white">Colorful Redmi Note 6 Pro</h3>
                <span className="text-xl leading-2 mt-2 font-semibold text-white">From $40.00</span>

                <div className="text-md underline text-white mt-14">
                  <Link href="/pages/Shop">
                    <span className="button-text">Shop CellPhone</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative col-span-1 flex rounded-lg w-full md:w-[380px] h-[260px] group overflow-hidden">
          <img
            className="w-full h-260px object-cover rounded-lg  transition-transform transform group-hover:scale-110 duration-700"
            src="https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/home-banner-03.jpg"
            alt="Background Image"
          />
          <div className="absolute flex items-center justify-center">
            <div className="w-full flex flex-row">
              <div className="flex flex-col justify-between ml-4 mt-5 px-5">
                <h3 className="text-2xl md:text-3xl font-bold text-white">1000 mAh Power Bank</h3>
                <span className="text-xl mt-4 font-semibold text-white">From $40.00</span>

                <div className="text-md text-white underline mt-14">
                  <Link href="/pages/Shop">
                    <span>Shop Now</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>


    </>
  );
};

export default HeroSection;
