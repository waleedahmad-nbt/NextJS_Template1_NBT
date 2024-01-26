"use client";

const Music = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="mt-20 mx-3 md:mx-20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <h1 className="text-2xl md:text-4xl leading-10 font-bold">
              Music, Audio, Video
            </h1>
            <p className="text-md cursor-pointer link-underline-s ">
              Go to Daily Deals Section
            </p>
          </div>
          <div className="border-b"></div>
        </div>
        {/* show On Large Screen */}
        <div className="hidden lg:block">
          <div className="flex flex-row mt-10 mx-10 cursor-pointer ">
            <div className="w-[65%]">
              {/* Left Side */}
              <div className="relative col-span-1 flex rounded-lg h-full group overflow-hidden">
                <img
                  className="w-full h-260px object-cover rounded-lg transition-transform transform group-hover:scale-105 duration-700"
                  src="https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/shop-banner-02.jpg"
                  alt="Background Image"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full flex flex-row">
                    <div className="flex flex-col m-10">
                      <h3 className="text-3xl font-bold text-black">
                        Sony Headphone
                      </h3>
                      <span className="text-3xl font-bold text-black">
                        {" "}
                        at Best Prices
                      </span>
                      <div className="text-xl font-semibold text-black">
                        <span className="text-gray-800">Just Price</span>
                        <span className="text-red-600 text-xl font-bold">
                          $129.00
                        </span>
                      </div>
                      <div className="text-md mt-12">
                        <a
                          href="https://minimog.thememove.com/supergear/shop"
                          className="bg-black text-white px-7 font-semibold py-3 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
                        >
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ml-4">
              {/* <div className="flex flex-wrap border"> */}
              <div className="relative flex rounded-lg h-full group overflow-hidden ">
                <img
                  className="w-full h-260px object-cover rounded-lg transition-transform transform group-hover:scale-110 duration-700"
                  src="https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/cat-custom-fitness-headphone.jpg"
                  alt="Background Image"
                />
                <div className="absolute inset-0 flex">
                  <div className="flex flex-col justify-between">
                    <div className="text-lg font-semibold m-3">
                      <span className="text-black font-bold ">
                        Fitness <br />
                        Headphones
                      </span>
                    </div>
                    <p className="font-semibold text-gray-500 m-3">3 Items</p>
                  </div>
                </div>
              </div>
              <div className="relative flex rounded-lg h-full group overflow-hidden">
                <img
                  className="w-full h-260px object-cover rounded-lg  transition-transform transform group-hover:scale-110 duration-700"
                  src="https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/cat-custom-mp3-player.jpg"
                  alt="Background Image"
                />
                <div className="absolute inset-0 flex">
                  <div className="w-full flex flex-row">
                    <div className="flex flex-col justify-between">
                      <div className="text-lg font-semibold m-3">
                        <span className="text-black font-bold ">
                          MP3 Players
                        </span>
                      </div>
                      <p className="font-semibold text-gray-500 m-3">4 Items</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex rounded-lg h-full group overflow-hidden">
                <img
                  className="w-full h-260px object-cover rounded-lg  transition-transform transform group-hover:scale-110 duration-700"
                  src="https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/cat-custom-microphones.jpg"
                  alt="Background Image"
                />
                <div className="absolute inset-0 flex">
                  <div className="w-full flex flex-row">
                    <div className="flex flex-col justify-between">
                      <div className="font-semibold m-3 ">
                        <span className="text-black text-lg font-bold ">
                          Microphones
                        </span>
                      </div>
                      <p className="font-semibold text-gray-500 m-3">2 Items</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex rounded-lg h-full group overflow-hidden">
                <img
                  className="w-full h-260px object-cover rounded-lg  transition-transform transform group-hover:scale-110 duration-700"
                  src="https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/cat-custom-bluetooth-speakers.jpg"
                  alt="Background Image"
                />
                <div className="absolute inset-0 flex">
                  <div className="w-full flex flex-row">
                    <div className="flex flex-col justify-between">
                      <div className="font-semibold m-3">
                        <span className="text-black text-lg font-bold ">
                          Bluetooth <br /> speakers
                        </span>
                      </div>
                      <p className="font-semibold text-gray-500 m-3">2 Items</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex rounded-lg h-full group overflow-hidden">
                <img
                  className="w-full h-260px object-cover rounded-lg  transition-transform transform group-hover:scale-110 duration-700"
                  src="https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/cat-custom-on-ears-over-ears.jpg"
                  alt="Background Image"
                />
                <div className="absolute inset-0 flex">
                  <div className="w-full flex flex-row">
                    <div className="flex flex-col justify-between">
                      <div className="font-semibold m-3">
                        <span className="text-black text-lg font-bold ">
                          on-ears & <br /> over-ears{" "}
                        </span>
                      </div>
                      <p className="font-semibold text-gray-500 m-3">2 Items</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex rounded-lg h-full group overflow-hidden">
                <img
                  className="w-full h-260px object-cover rounded-lg  transition-transform transform group-hover:scale-110 duration-700"
                  src="https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/cat-custom-headphone-accessories.jpg"
                  alt="Background Image"
                />
                <div className="absolute inset-0 flex">
                  <div className="w-full flex flex-row">
                    <div className="flex flex-col justify-between">
                      <div className="font-semibold m-3">
                        <span className="text-black text-lg font-bold ">
                          Headphone <br /> Accessories
                        </span>
                      </div>
                      <p className="font-semibold text-gray-500 m-3">2 Items</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Show on small Screen */}
      <div className="block lg:hidden">
        {/* Left side */}
        <div className="grid grid-cols-1 h-[250px] mt-4 mx-4 sm:mx-10">
          <div className="relative flex rounded-lg w-full h-full group overflow-hidden">
            <img
              className="w-full h-full object-cover rounded-lg  transition-transform transform group-hover:scale-110 duration-700"
              src="https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/shop-banner-02.jpg"
              alt="Background Image"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full flex flex-row">
                <div className="flex flex-col m-6">
                  <h3 className="text-2xl font-bold text-black">
                    Sony Headphone
                  </h3>
                  <span className="text-xl  font-bold text-black">
                    {" "}
                    at Best Prices
                  </span>
                  <div className="text-xl font-semibold text-black mt-2 leading-8">
                    <span className="text-gray-800">Just Price</span>
                    <span className="text-red-600 text-xl font-bold">
                      $129.00
                    </span>
                  </div>
                  <div className="text-md mt-12">
                    <a
                      href="#"
                      className="bg-black text-white px-7 font-semibold py-4 rounded-full
                                             transition duration-300 ease-in-out transform hover:scale-105"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mt-2 p-3 mx-2 sm:mx-8">
          <div className="relative flex rounded-lg w-full h-full sm:h-[280px] group overflow-hidden">
            <img
              className="w-full h-260px object-cover rounded-lg transition-transform transform group-hover:scale-110 duration-700"
              src="https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/cat-custom-cleaning-appliances.jpg"
              alt="Background Image"
            />
            <div className="absolute inset-0 flex">
              <div className="flex flex-col justify-between">
                <div className="text-lg font-semibold mx-3">
                  <span className="text-black text-base font-semibold ">
                    Robot Clean
                  </span>
                </div>
                <p className=" font-semibold text-gray-500 m-3">3 Items</p>
              </div>
            </div>
          </div>
          <div className="relative  flex rounded-lg w-full  h-full sm:h-[280px] group overflow-hidden">
            <img
              className="w-full h-260px object-cover rounded-lg transition-transform transform group-hover:scale-110 duration-700"
              src="https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/cat-custom-fitness-headphone.jpg"
              alt="Background Image"
            />
            <div className="absolute inset-0 flex">
              <div className="flex flex-col justify-between">
                <div className="font-semibold mx-3">
                  <span className="text-black text-base font-semibold ">
                    Smart Watches
                  </span>
                </div>
                <p className="font-semibold text-gray-500 m-3">2 Items</p>
              </div>
            </div>
          </div>
          <div className="relative  flex rounded-lg w-full  h-full sm:h-[280px] group overflow-hidden">
            <img
              className="w-full h-260px object-cover rounded-lg transition-transform transform group-hover:scale-110 duration-700"
              src="https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/cat-custom-camera-photos.jpg"
              alt="Background Image"
            />
            <div className="absolute inset-0 flex">
              <div className="flex flex-col justify-between">
                <div className="font-semibold mx-3">
                  <span className="text-black text-base font-semibold ">
                    Cameras& <br /> Photos
                  </span>
                </div>
                <p className="font-semibold text-gray-500 mx-3">2 Items</p>
              </div>
            </div>
          </div>
          <div className="relative  flex rounded-lg w-full  h-full sm:h-[280px] group overflow-hidden">
            <img
              className="w-full h-260px object-cover rounded-lg transition-transform transform group-hover:scale-110 duration-700"
              src="https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/cat-custom-security-protection.jpg"
              alt="Background Image"
            />
            <div className="absolute inset-0 flex">
              <div className="flex flex-col justify-between">
                <div className="font-semibold mx-3">
                  <span className="text-black text-base font-semibold ">
                    Security & <br /> Protection{" "}
                  </span>
                </div>
                <p className="font-semibold text-gray-500 m-3">2 Items</p>
              </div>
            </div>
          </div>
          <div className="relative  flex rounded-lg w-full  h-full sm:h-[280px] group overflow-hidden">
            <img
              className="w-full h-260px object-cover rounded-lg transition-transform transform group-hover:scale-110 duration-700"
              src="https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/cat-custom-music-game-video.jpg"
              alt="Background Image"
            />
            <div className="absolute inset-0 flex">
              <div className="flex flex-col justify-between ">
                <div className="font-semibold mx-3">
                  <span className="text-black text-base font-semibold ">
                    Smart Watches
                  </span>
                </div>
                <p className="font-semibold text-gray-500 m-3">2 Items</p>
              </div>
            </div>
          </div>
          <div className="relative  flex rounded-lg w-full  h-full sm:h-[280px] group overflow-hidden">
            <img
              className="w-full h-260px object-cover rounded-lg transition-transform transform group-hover:scale-110 duration-700"
              src="https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/cat-custom-music-game-video.jpg"
              alt="Background Image"
            />
            <div className="absolute inset-0 flex">
              <div className="flex flex-col justify-between">
                <div className="font-semibold mx-3">
                  <span className="text-black text-base font-semibold ">
                    Smart Watches
                  </span>
                </div>
                <p className="font-semibold text-gray-500 m-3">2 Items</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Music;
