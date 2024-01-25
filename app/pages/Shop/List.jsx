"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaRegEye, FaRegStar } from "react-icons/fa";
import { IoMdStarOutline } from "react-icons/io";
import WishlistModal from "./WishlistModal";
import { HiOutlineArrowsRightLeft } from "react-icons/hi2";
import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";
import { products } from "@/app/data";
import {
  addToFavorites,
  setProductDetails,
} from "@/app/lib/redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import DetailsModal from "@/app/components/DetailsModal/page";

const List = ({
  totalProducts,
  visibleProducts,
  loadMoreProducts,
  selectedCategory,
  selectedPriceRange,
  selectedColor,
  selectedSize,
  selectedType,
}) => {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const dispatch = useDispatch();
  const router = useRouter();
  const [wishlistModalOpen, setWishlistModalOpen] = useState(false);
  const [DetailsModalOpen, setDetailsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const favorites = useSelector((state) => state.cart.favorites);

  const handleAddToFavorites = (product) => {
    dispatch(addToFavorites(product));
  };

  const toggleWishlistModal = () => {
    setWishlistModalOpen(!wishlistModalOpen);
  };

  const handleToggleWishlist = (event, product) => {
    event.stopPropagation();
    const isFavorite = favorites.some((item) => item.id === product.id);

    if (isFavorite) {
      toggleWishlistModal();
    } else {
      handleAddToFavorites(product);
    }
  };

  const toggleDetailsModal = () => {
    setDetailsModalOpen(!DetailsModalOpen);
  };

  const handleToggleDetail = (event, product) => {
    event.stopPropagation();
    dispatch(setProductDetails(product));
    toggleDetailsModal();
  };

  const handleProductClick = (product) => {
    dispatch(setProductDetails(product));
    router.push(`/pages/Details?${product.title}`);
  };

  useEffect(() => {
    if (selectedCategory) {
      const filtered = products.filter((product) => {
        return product.Categories === selectedCategory;
      });
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [selectedCategory]);

  useEffect(() => {
    let filtered = products;

    if (selectedPriceRange) {
      filtered = filtered.filter(
        (product) =>
          product.originalPrice >= selectedPriceRange[0] &&
          product.originalPrice <= selectedPriceRange[1]
      );
    }

    setFilteredProducts(filtered);
  }, [selectedPriceRange]);

  useEffect(() => {
    let filtered = products;

    if (selectedColor) {
      filtered = filtered.filter(
        (product) => product.colors && product.colors.includes(selectedColor)
      );
    }

    if (selectedSize) {
      filtered = filtered.filter(
        (product) => product.size && product.size.includes(selectedSize)
      );
    }

    if (selectedType) {
      filtered = filtered.filter(
        (product) => product.types && product.types.includes(selectedType)
      );
    }

    setFilteredProducts(filtered);
  }, [selectedColor, selectedSize, selectedType]);

  useEffect(() => {
    let filtered = products;

    if (selectedType) {
      filtered = filtered.filter(
        (product) => product.types && product.types.includes(selectedType)
      );
    }
    setFilteredProducts(filtered);
  }, [selectedType]);

  return (
    <>
      <div>
        {filteredProducts.slice(0, visibleProducts).map((product) => (
          <div
            onMouseEnter={() => setHoveredProduct(product.id)}
            onMouseLeave={() => setHoveredProduct(null)}
            key={product.id}
            onClick={() => handleProductClick(product)}
            className={`flex sm:flex-row flex-col items-center mb-8 -z-10`}
          >
            <img
              src={
                hoveredProduct === product.id
                  ? product.hoverImage
                  : product.imageSrc
              }
              className="w-[270px] h-[270px]  transition-all duration-1000 ease-in-out hover:scale-105"
              alt=""
            />
            <div className="flex flex-col gap-3 mt-2 justify-center m-3 md:ml-16 w-full">
              <div className="flex flex-row">
                {Array.from({ length: product.rating }).map((_, index) => (
                  <IoMdStarOutline key={index} />
                ))}
              </div>

              <h6 className="text-gray-500 text-xs font-medium hover:text-gray-800 duration-500 tracking-tight uppercase">
                <a href="https://minimog.thememove.com/supergear/product-category/tv-audio/bluetooth-speakers/">
                  {product.category}
                </a>
              </h6>

              <h3 className="font-bold text-xl font-sans leading-8 hover:text-gray-500 text-start duration-700 ease-in-out text-black">
                <a href="#">{product.title}</a>
              </h3>

              <div>
                <p className="text-[#32BDE8] text-lg font-semibold">
                  {product.originalPrice}
                </p>
              </div>

              <p className="text-gray-500 text-base mt-3 font-medium">
                For Alexa It can be used not only in the United States, but also
                all countries which people speak English with American accent.…
              </p>

              <div className="flex flex-row flex-wrap mb-3 items-center gap-10">
                <a
                  href="#"
                  className="bg-black mt-2 w-[180px] text-[#F1F1F1]  text-center justify-center flex font-semibold py-3 rounded-full  duration-300 ease-in-out transform hover:scale-105"
                >
                  SELECT OPTIONS
                </a>

                <Tooltip
                  title={
                    favorites.some((item) => item.id === product.id)
                      ? "Browse Wishlist"
                      : "Add to Wishlist"
                  }
                  position="top"
                  trigger="mouseenter"
                  animation="scale"
                  arrow={true}
                >
                  <div
                    onClick={(event) => handleToggleWishlist(event, product)}
                    className={`p-3 bg-${
                      favorites.some((item) => item.id === product.id)
                        ? "black"
                        : "white"
                    } rounded-full text-${
                      favorites.some((item) => item.id === product.id)
                        ? "white"
                        : "black"
                    } hover:text-white hover:bg-black duration-300 ease-in-out text-xl`}
                  >
                    <FaRegStar />
                  </div>
                </Tooltip>

                <Tooltip
                  title="Compare"
                  position="top"
                  trigger="mouseenter"
                  animation="scale"
                  arrow={true}
                >
                  <div className="text-black duration-500 p-3 flex text-center justify-center h-[45px] w-[45px] text-xl hover:bg-black hover:text-white rounded-full">
                    <HiOutlineArrowsRightLeft />
                  </div>
                </Tooltip>

                <Tooltip
                  title="Quick View"
                  position="top"
                  trigger="mouseenter"
                  animation="scale"
                  arrow={true}
                >
                  <div
                    onClick={(event) => handleToggleDetail(event, product)}
                    className="p-3 bg-white rounded-full text-black hover:text-white hover:bg-black duration-300 ease-in-out text-xl"
                  >
                    <FaRegEye />
                  </div>
                </Tooltip>
              </div>
            </div>
          </div>
        ))}
      </div>

      {visibleProducts < totalProducts && (
        <button
          onClick={loadMoreProducts}
          className="bg-black mt-2 w-[153px] text-[#F1F1F1] px-5 m-auto flex text-center justify-center font-semibold py-3
        rounded-full  duration-300 ease-in-out transform hover:scale-105"
        >
          LOAD MORE
        </button>
      )}

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
    </>
  );
};

export default List;
