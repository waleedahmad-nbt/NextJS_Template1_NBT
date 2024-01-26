"use client";
import React, { useState } from "react";
import { CiStar } from "react-icons/ci";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import Link from "next/link";
import {
  addToFavorites,
  setProductDetails,
} from "@/app/lib/redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";
import WishlistModal from "./WishlistModal";
import { useRouter } from "next/navigation";
import { products } from "@/app/data";
import { FaRegEye } from "react-icons/fa";
import DetailsModal from "../DetailsModal/page";
import CompareProduct from "../Compare/page";

const Sellers = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [wishlistModalOpen, setWishlistModalOpen] = useState(false);
  const [DetailsModalOpen, setDetailsModalOpen] = useState(false);
  const [CompareModalOpen, setCompareModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const dispatch = useDispatch();
  const router = useRouter();
  const favorites = useSelector((state) => state.cart.favorites);

  const handleAddToFavorites = (product) => {
    dispatch(addToFavorites(product));
  };

  const toggleWishlistModal = () => {
    setWishlistModalOpen(!wishlistModalOpen);
  };

  const handleToggleWishlist = (event, product) => {
    event.stopPropagation();
    toggleWishlistModal();
    handleAddToFavorites(product);
  };

  const toggleDetailsModal = () => {
    setDetailsModalOpen(!DetailsModalOpen);
  };

  const handleToggleDetail = (event, product) => {
    event.stopPropagation();
    dispatch(setProductDetails(product));
    toggleDetailsModal();
  };
  const toggleCompareModal = () => {
    setCompareModalOpen(!CompareModalOpen);
  };

  const handleCompareModal = (event, product) => {
    event.stopPropagation();
    dispatch(setProductDetails(product));
    toggleCompareModal();
  };

  const handleProductClick = (product) => {
    dispatch(setProductDetails(product));
    router.push(`/pages/Details?${product.title}`);
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="xl:container xl:mx-auto">
        <div className="mt-20 mx-3 md:mx-16">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <h1 className="text-2xl md:text-4xl font-bold">
              Top 20 Best Seller
            </h1>
            <p className="text-md link-underline-s cursor-pointer">
              Go to Daily Deals Section
            </p>
          </div>
          <div className="border-b"></div>

          <Slider {...settings}>
            {products.map((product) => (
              <div
                key={product.id}
                className="relative cursor-pointer h-[450px] w-full mt-6 p-1 md:p-3 gap-5 overflow-hidden 
                border border-transparent hover:border-black rounded-lg"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
                onClick={() => handleProductClick(product)}
              >
                <div className="relative w-full h-[216px] p-2 overflow-hidden transition-transform duration-700 ease-in-out">
                  <img
                    src={
                      hoveredProduct === product.id
                        ? product.hoverImage
                        : product.imageSrc
                    }
                    className="w-full h-full object-cover transition-all duration-1000 ease-in-out hover:scale-105"
                    alt="img"
                  />

                  {hoveredProduct === product.id && (
                    <div className="absolute top-0 right-0 flex flex-col items-center p-2 space-y-2">
                      <Tooltip
                        title={
                          favorites.some((item) => item.id === product.id)
                            ? "Browse Wishlist"
                            : "Add to Wishlist"
                        }
                        position="left"
                        trigger="mouseenter"
                        animation="scale"
                        arrow={true}
                      >
                        <div
                          onClick={(event) =>
                            handleToggleWishlist(event, product)
                          }
                          className={`heart-icon p-3 bg-${
                            favorites.some((item) => item.id === product.id)
                              ? "black"
                              : "white"
                          } rounded-full text-${
                            favorites.some((item) => item.id === product.id)
                              ? "white"
                              : "black"
                          } hover:text-white hover:bg-black duration-300 ease-in-out text-xl`}
                        >
                          <CiStar />
                        </div>
                      </Tooltip>
                      <Tooltip
                        title="Compare"
                        position="left"
                        trigger="mouseenter"
                        animation="scale"
                        arrow={true}
                      >
                        <div
                          onClick={(event) =>
                            handleCompareModal(event, product)
                          }
                          className="p-3 bg-white rounded-full text-black hover:text-white hover:bg-black duration-300 ease-in-out text-xl"
                        >
                          <FaArrowRightArrowLeft />
                        </div>
                      </Tooltip>
                      <Tooltip
                        title="Quick View"
                        position="left"
                        trigger="mouseenter"
                        animation="scale"
                        arrow={true}
                      >
                        <div
                          onClick={(event) =>
                            handleToggleDetail(event, product)
                          }
                          className="p-3 bg-white rounded-full text-black hover:text-white hover:bg-black duration-300 ease-in-out text-xl"
                        >
                          <FaRegEye />
                        </div>
                      </Tooltip>
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-2 mt-2">
                  <h2 className="text-gray-400 text-sm cursor-pointer font-medium hover:text-black duration-500 tracking-tight uppercase">
                    <p>{product.category}</p>
                  </h2>
                  <Link
                    key={product.id}
                    href={`/pages/Details?id=${product.id}`}
                    passHref
                  >
                    <h3 className="text-ellipsis font-bold leading-6 text-black">
                      <p>{product.title}</p>
                    </h3>
                  </Link>

                  <div className="flex flex-row my-2 font-thin">
                    {Array.from({ length: product.rating }).map((_, index) => (
                      <CiStar key={index} />
                    ))}
                  </div>
                  <div className="flex flex-row gap-2">
                    <del aria-hidden="true">
                      <bdi className="text-gray-500 font-semibold text-md">
                        <span>$</span>
                        {product.originalPrice}
                      </bdi>
                    </del>
                    <bdi className="text-red-500 font-semibold">
                      <span>$</span>
                      {product.discountedPrice}
                    </bdi>
                  </div>
                  {hoveredProduct === product.id && (
                      <p className="bg-[#F1F1F1] mt-2 text-black w-full overflow-ellipsis hover:bg-black hover:text-white flex text-center justify-center font-semibold py-3 rounded-full duration-300 ease-in-out transform hover:scale-105 transition-opacity">
                        Select Options
                      </p>
                  )}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <WishlistModal
        modalOpen={wishlistModalOpen}
        closeModal={toggleWishlistModal}
        products={favorites}
      />
      <DetailsModal
        modalOpen={DetailsModalOpen}
        closeModal={toggleDetailsModal}
        selectedProduct={selectedProduct}
      />
      <CompareProduct
        modalOpen={CompareModalOpen}
        closeModal={toggleCompareModal}
        selectedProduct={selectedProduct}
      />
    </>
  );
};

export default Sellers;
