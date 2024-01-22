"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/swiper-bundle.css";
import { slides } from "@/app/data";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setBlogDetails } from "@/app/lib/redux/slices/cartSlice";

const Blog = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleProductClick = (blog) => {
    dispatch(setBlogDetails(blog));
    router.push(`/pages/Blogs?id=${blog.id}`);
  };

  return (
    <>
      <div className="xl:container xl:mx-auto">
        <div className="mt-24 mx-2 md:mx-10">
          <div className="flex text-center justify-center">
            <h1 className="text-2xl md:text-4xl font-bold">Our Blog Posts</h1>
          </div>

          <div className="flex flex-row mt-16">
            <Swiper
              spaceBetween={20}
              slidesPerView={3}
              pagination={{ clickable: true }}
              loop={true}
              breakpoints={{
                300: {
                  slidesPerView: 1.5,
                },
                640: {
                  slidesPerView: 2.5,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              {slides.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <div
                    onClick={() => handleProductClick(slide)}
                    className="flex flex-col w-full h-auto cursor-pointer overflow-hidden"
                  >
                    <div className="w-full h-full">
                      <img
                        src={slide.imageUrl}
                        alt="Blog Post Image"
                        className="transition-transform transform 
                        hover:scale-105 duration-700 w-full h-full"
                      />
                    </div>
                    <h4 className="text-xs mt-4 text-gray-800 hover:text-gray-500">
                      {slide.category}
                    </h4>
                    <p className="text-lg font-semibold mt-2 text-ellipsis">
                      {slide.title}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
