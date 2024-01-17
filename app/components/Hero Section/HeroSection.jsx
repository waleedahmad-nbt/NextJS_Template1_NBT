"use client";

import Link from "next/link";

const HeroSection = () => {
  return (
    <>
      {/* Hero Section 1 */}
      <div className="xl:container xl:mx-auto">
        <div className="relative max-w-full h-[400px] md:h-[510px] overflow-hidden mx-3 md:mx-6 lg:mx-12">
          <img
            className="object-cover w-full h-full"
            src="https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/home-hero-banner.jpg"
            alt="Background Image"
          />
          <div className="absolute inset-0 flex flex-col justify-center  md:items-start text-white md:text-left px-4 md:px-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4">
              Mi Air Purifier
            </h2>
            <p className="text-sm md:text-lg mb-4 md:mb-8">
              The new tech gift you are wishing for right here.
            </p>
            <Link href="/pages/Shop">
              <p className="bg-white text-black text-center w-[160px] font-semibold py-2 md:py-3 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
                Shop Now
              </p>
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section 2 */}
      <div className="xl:container xl:mx-auto">
        <div className="mx-4 md:mx-12 flex flex-col md:flex-row gap-7 mt-6 md:mt-10">
          <Link href="/pages/Shop">
            <div className="relative flex rounded-lg h-full md:h-[250px] w-full  group overflow-hidden">
              <img
                className="object-cover rounded-lg  transition-transform transform group-hover:scale-110 duration-700"
                src="https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/home-banner-01.jpg"
                alt="Background Image"
              />
              <div className="absolute flex flex-col justify-between space-y-8 xl:space-y-10 w-[250px] p-2 md:p-6">
                <div className="">
                  <h3 className="text-2xl md:text-3xl font-bold text-black">
                    New Deals at Best Prices
                  </h3>
                  <span className="text-xl mt-2 font-semibold text-black">
                    From $40.00
                  </span>
                </div>
                <div className="text-md underline text-black">
                  <span className="button-text">Browse Deals</span>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/pages/Shop">
            <div className="relative flex rounded-lg h-full md:h-[250px] w-full  group overflow-hidden">
              <img
                className="object-cover rounded-lg  transition-transform transform group-hover:scale-110 duration-700"
                src="https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/home-banner-02.jpg"
                alt="Background Image"
              />
              <div className="absolute flex flex-col justify-between space-y-8 xl:space-y-10 w-[250px] p-2 md:p-6">
                <div className="">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Colorful Redmi Note 6 Pro
                  </h3>
                  <span className="text-xl mt-2 font-semibold text-white">
                    From $40.00
                  </span>
                </div>
                <div className="text-md underline text-white">
                  <span className="button-text">Shop CellPhone</span>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/pages/Shop">
            <div className="relative flex rounded-lg h-full md:h-[250px] w-full  group overflow-hidden">
              <img
                className="object-cover rounded-lg  transition-transform transform group-hover:scale-110 duration-700"
                src="https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/home-banner-03.jpg"
                alt="Background Image"
              />
              <div className="absolute flex flex-col justify-between space-y-8 xl:space-y-10 w-[250px] p-2 md:p-6">
                <div className="">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    1000 mAh Power Bank
                  </h3>
                  <span className="text-xl font-semibold text-white">
                    From $40.00
                  </span>
                </div>
                <div className="text-md text-white underline">
                  <span>Shop Now</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
