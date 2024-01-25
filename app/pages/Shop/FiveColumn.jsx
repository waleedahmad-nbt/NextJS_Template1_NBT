"use client";
import { products } from "@/app/data";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";
import { FaArrowRightArrowLeft, FaRegEye } from "react-icons/fa6";
import { IoBagOutline } from "react-icons/io5";
import WishlistModal from "./WishlistModal";
import { useRouter } from "next/navigation";
import {
  addToCart,
  addToFavorites,
  setProductDetails,
} from "@/app/lib/redux/slices/cartSlice";
import DetailsModal from "@/app/components/DetailsModal/page";
import CompareProduct from "@/app/components/Compare/page";

const FiveColumn = ({
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
  const [wishlistModalOpen, setWishlistModalOpen] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [DetailsModalOpen, setDetailsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [CompareModalOpen, setCompareModalOpen] = useState(false);
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
      <div className={`grid grid-cols-2 lg:grid-cols-5`}>
        {filteredProducts.slice(0, visibleProducts).map((product) => (
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
                      onClick={(event) => handleCompareModal(event, product)}
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
                      onClick={(event) => handleToggleDetail(event, product)}
                      className="p-3 bg-white rounded-full text-black hover:text-white hover:bg-black duration-300 ease-in-out text-xl"
                    >
                      <FaRegEye />
                    </div>
                  </Tooltip>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-2 mt-2">
              <h2 className="text-gray-500 text-xs font-medium hover:text-gray-800 duration-500 tracking-tight uppercase">
                <p>{product.category}</p>
              </h2>
              <h3 className="text-ellipsis font-semibold leading-6 text-black">
                <p>{product.title}</p>
              </h3>

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
                <Link href="/pages/Details">
                  <p className="bg-[#F1F1F1] mt-2 text-black w-full overflow-ellipsis hover:bg-black hover:text-white flex text-center justify-center font-semibold py-3 rounded-full duration-300 ease-in-out transform hover:scale-105 transition-opacity">
                    Select Options
                  </p>
                </Link>
              )}
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
        <CompareProduct
        modalOpen={CompareModalOpen}
        closeModal={toggleCompareModal}
        selectedProduct={selectedProduct}
      />
    </>
  );
};

export default FiveColumn;
