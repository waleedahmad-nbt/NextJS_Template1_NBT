"use client";
import { BiMessageRoundedDots } from "react-icons/bi";
import { FaFacebookF, FaLinkedin, FaTumblr, FaTwitter } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import RelatedArticle from "./RelatedArticle";
import Comment from "./Comment";
import { useSelector } from "react-redux";

const page = () => {
  const selectedBlog = useSelector((state) => state.cart.selectedBlog);

  const slides = [
    {
      id: 1,
      imageUrl:
        "https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/blog_geart_01-427x250.jpg",
      category: "TECHNOLOGY",
      title: "Setup your Surround sound speaker",
    },
    {
      id: 2,
      imageUrl:
        "https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/blog_geart_02-427x250.jpg",
      category: "LIFE STYLE",
      title: "Hook up a receiver for you Home Theater",
    },
    {
      id: 3,
      imageUrl:
        "https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/blog_geart_03-427x250.jpg",
      category: "TECHNOLOGY",
      title: "TOp most Comfortable Headphones",
    },
    {
      id: 4,
      imageUrl:
        "https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/blog_gear_04-427x250.jpg",
      category: "TECHNOLOGY",
      title:
        "CUBOT X20 PRO: iPhone 11 rear camera design will be available for sale",
    },
    {
      id: 5,
      imageUrl:
        "https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/blog_gear_05-427x250.jpg",
      category: "TECHNOLOGY",
      title:
        "CUBOT X20 PRO: iPhone 11 rear camera design will be available for sale on SuperGear",
    },
    {
      id: 6,
      imageUrl:
        "https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/blog_gear_06-427x250.jpg",
      category: "TECHNOLOGY",
      title: "Get Teclast T30 tablet at an unexpected price at SuperGear",
    },
    {
      id: 7,
      imageUrl:
        "https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/blog_gear_07-427x250.jpg",
      category: "TECHNOLOGY",
      title:
        "Amazfit GTR Titanium Edition and Austrian Zircon Version will Officially go on Exclusive Global Sale",
    },
    {
      id: 8,
      imageUrl:
        "https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/blog_gear_08-427x250.jpg",
      category: "TECHNOLOGY",
      title: "Don’t miss out! Xiaomi Mi Note 10 exclusive global launch hit",
    },
    {
      id: 9,
      imageUrl:
        "https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/blog_gear_10-427x250.jpg",
      category: "TECHNOLOGY",
      title:
        "Do you want a stylish smartphone with a pop-up camera for budget price? Take the Elephone PX (2019)",
    },
    {
      id: 10,
      imageUrl:
        " https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/home-hero-banner-427x250.jpg",
      category: "TECHNOLOGY",
      title: "DJI Mavic Mini: the ultra-light consumer drone for beginner sale",
    },
  ];

  return (
    <>
      <div className="mx-2 lg:mx-16">
        <div className="flex flex-col lg:flex-row  gap-5 mt-24 pr-4">
          {selectedBlog && (
            <div className="w-[100%] lg:w-[75%] h-full">
              <div className="flex flex-col text-center items-center gap-3">
                <p className="text-sm hover:bg-[#e02b2b] font-semibold hover:text-white text-black p-1 duration-300">
                  {selectedBlog.category}
                </p>
                <p className="text-4xl font-semibold">
                  {selectedBlog.title}
                </p>
                <div className="text-sm font-semibold">
                  <a href="#" className="text-black hover:text-gray-500">
                    <span className="text-gray-500 mr-1">By</span>
                    Romantic Panini
                  </a>
                  <span className="text-gray-500 mx-1">on</span>
                  February 24, 2022
                </div>

                  <img src={selectedBlog.imageUrl} className="w-full" alt="" />
              </div>

              <div className="mt-7">
                <p className=" font-semibold text-xl text-[#2b2b2b]">
                 
                  {selectedBlog.description1}
                </p>
              </div>

              <div className="text-md mb-7  text-start text-[#666666] font-medium">
                <p className="my-6">
                 
                  {selectedBlog.description2}
                </p>
                <p>
                 
                  {selectedBlog.description3}
                </p>
              </div>

              <div className="mt-12 flex flex-col gap-8">
                <h2 className="text-2xl ">
                  {selectedBlog.headingPrimary}
                </h2>
                <p className="text-[#666666]">
                  {selectedBlog.headingDescription}
                </p>
                <img
                  src={selectedBlog.imageUrl2}
                  className="mx-4 transition-transform transform object-cover hover:scale-105 duration-700"
                  alt=""
                />
                <p className="text-md font-medium text-[#666666]">
                  {selectedBlog.headingDescription2}
                </p>
              </div>

              <blockquote class="text-2xl my-8 font-bold text-center m-6  leading-9 text-gray-900">
                <p>
                  {selectedBlog.blockquote}
                </p>
              </blockquote>

              <p className="text-base text-[#666666]">
               
                {selectedBlog.headingDescription3}
              </p>

              <div className="flex flex-row gap-3 my-8">
                <p className="font-medium">Share:</p>
                <div className="flex gap-4">
                  <FaFacebookF className="hover:text-[#888787] duration-300 cursor-pointer" />
                  <FaTwitter className="hover:text-[#888787] duration-300 cursor-pointer" />
                  <FaLinkedin className="hover:text-[#888787] duration-300 cursor-pointer" />
                  <FaTumblr className="hover:text-[#888787] duration-300 cursor-pointer" />
                  <IoMdMail className="hover:text-[#888787] duration-300 cursor-pointer" />
                </div>
              </div>

              <RelatedArticle />
              <Comment />
            </div>
          )}

          <div className="w-[100%] lg:w-[25%] flex flex-col gap-6">
            <div className="mb-3">
              <h1 className="text-lg font-semibold mb-3">Categories</h1>
              <ul className="flex flex-col gap-2">
                <li className="text-gray-600 font-medium hover:underline cursor-pointer">
                  Life Style
                </li>
                <li className="text-gray-600 font-medium hover:underline cursor-pointer">
                  Technology
                </li>
              </ul>
            </div>

            <div>
              <h1 className="text-xl font-semibold mb-3">Recent Comments</h1>
              <ol className="flex flex-col gap-2">
                <li className="flex flex-row items-start gap-1 mb-2">
                  <BiMessageRoundedDots className="text-4xl" />
                  <p className="text-black hover:text-gray-600 font-semibold cursor-pointer">
                    {" "}
                    <span className="text-gray-800 text-sm cursor-pointer hover:text-gray-400">
                      jenniferc{" "}
                    </span>{" "}
                    on Klipsch R-120SW Powerful Detailed Home Speaker – Unit
                  </p>
                </li>
                <li className="flex flex-row items-start gap-1 mb-2">
                  <BiMessageRoundedDots className="text-4xl" />
                  <p className="text-black hover:text-gray-600 font-semibold cursor-pointer">
                    {" "}
                    <span className="text-gray-800 text-sm cursor-pointer hover:text-gray-400">
                      jenniferc{" "}
                    </span>{" "}
                    on Klipsch R-120SW Powerful Detailed Home Speaker – Unit
                  </p>
                </li>
              </ol>
            </div>

            <div>
              <h1 className="text-md font-semibold mb-3">Recent Posts</h1>
              <div className="flex flex-col gap-4">
                {slides.map((slide) => (
                  <div key={slide.id} className="flex flex-row">
                    <img
                      src={slide.imageUrl}
                      className="w-[70px] h-[46px] transition-transformtransform object-cover hover:scale-105 duration-700"
                      alt=""
                    />
                    <div className="flex flex-col">
                      <a className="text-xs scale-95 hover:text-gray-500 cursor-pointer">
                        {slide.category}
                      </a>
                      <a className="text-base font-semibold scale-95 text-ellipsis">
                        {slide.title}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h1 className="text-md font-semibold mb-3">Tags</h1>
              <div className="flex flex-row flex-wrap gap-3">
                <p className="hover:underline hover:text-gray-500 text-gray-600 font-semibold">
                  audio
                </p>
                <p className="hover:underline hover:text-gray-500 text-gray-600 font-semibold">
                  life style
                </p>
                <p className="hover:underline hover:text-gray-500 text-gray-600 font-semibold">
                  smart watch
                </p>
                <p className="hover:underline hover:text-gray-500 text-gray-600 font-semibold">
                  sport watch
                </p>
                <p className="hover:underline hover:text-gray-500 text-gray-600 font-semibold">
                  supergear
                </p>
                <p className="hover:underline hover:text-gray-500 text-gray-600 font-semibold">
                  technology
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
