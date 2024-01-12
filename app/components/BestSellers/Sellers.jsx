'use client';
import React, { useState } from 'react';
import { CiStar } from 'react-icons/ci';
import { FaEye, FaStar } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowRightArrowLeft } from 'react-icons/fa6';
import Link from 'next/link';
import { addToCart, addToFavorites, removeFromFavorites } from '@/app/lib/redux/slices/cartSlice';
import { IoBagOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';
import WishlistModal from './WishlistModal';

const Sellers = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [wishlistModalOpen, setWishlistModalOpen] = useState(false);

  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.cart.favorites);

  const handleAddToFavorites = (product) => {
    dispatch(addToFavorites(product));
  };


  const toggleWishlistModal = () => {
    setWishlistModalOpen(!wishlistModalOpen);
  };


  const handleToggleWishlist = (product) => {
    const isFavorite = favorites.some((item) => item.id === product.id);

    if (isFavorite) {
      toggleWishlistModal();
    } else {
      handleAddToFavorites(product);
    }
  };


  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const SliderData = [
    {
      id: 1,
      imageSrc: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/03/product_gear_speaker_1_1-655x655.jpg',
      hoverImage: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/03/product_gear_speaker_1_2-450x450.jpg',
      category: 'Bluetooth Speakers',
      title: 'Klipsch R-120SW Powerful Detailed Home Speaker – Unit',
      rating: 5,
      originalPrice: 139.00,
      discountedPrice: 129.00,
    },
    {
      id: 2,
      imageSrc: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_32_1-655x655.jpg',
      hoverImage: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_32_3-450x450.jpg',
      category: 'Bluetooth Speakers',
      title: 'Klipsch R-120SW Powerful Detailed Home Speaker – Unit',
      rating: 5,
      originalPrice: 139.00,
      discountedPrice: 129.00,
    },
    {
      id: 3,
      imageSrc: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_31_1-655x655.jpg',
      hoverImage: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_31_2-655x655.jpg',
      category: 'Bluetooth Speakers',
      title: 'UMIDIGI Power 3 6150mAh 6.53 Inch FHD+ 4GB Global Version Helio P60 64GB ROM Quad Camera Android 10 Face ID Smartphone',
      rating: 5,
      discountedPrice: 219.90,
    }, {
      id: 4,
      imageSrc: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_30_1-655x655.jpg',
      hoverImage: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_30_2-655x655.jpg',
      category: 'Bluetooth Speakers',
      title: 'Klipsch R-120SW Powerful Detailed Home Speaker – Unit',
      rating: 5,
      originalPrice: 139.00,
      discountedPrice: 129.00,
    },
    {
      id: 5,
      imageSrc: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_29_1-655x655.jpg',
      hoverImage: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_29_2-655x655.jpg',
      category: 'Bluetooth Speakers',
      title: 'Klipsch R-120SW Powerful Detailed Home Speaker – Unit',
      rating: 5,
      originalPrice: 139.00,
      discountedPrice: 129.00,
    },
    {
      id: 6,
      imageSrc: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_29_1-655x655.jpg',
      hoverImage: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_29_2-655x655.jpg',
      category: 'Bluetooth Speakers',
      title: 'Klipsch R-120SW Powerful Detailed Home Speaker – Unit',
      rating: 5,
      originalPrice: 139.00,
      discountedPrice: 129.00,
    },
    {
      id: 7,
      imageSrc: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_27_1-655x655.jpg',
      hoverImage: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_27_2-655x655.jpg',
      category: 'Bluetooth Speakers',
      title: 'DIDSeth Pan Tilt Security Light Camera Full HD 1080P Wireless Wi-Fi IP Camera Home Dome Surveillance Cameras',
      rating: 5,
      originalPrice: 49.00,
      discountedPrice: 48.00,
    }, {
      id: 8,
      imageSrc: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_26_3-655x655.jpg',
      hoverImage: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_26_1-655x655.jpg',
      category: 'Bluetooth Speakers',
      title: 'VIOMI V2 Pro LDS Sensor 2 In 1 Sweeping Mopping Robot Wet And Dry Vacuum Cleaner 2100Pa Strong Suction Self-Charging',
      rating: 5,
      originalPrice: 139.00,
      discountedPrice: 129.00,
    },
  ];


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
      <div className='xl:container xl:mx-auto'>
        <div className='mt-20 mx-3 md:mx-16'>
          <div className='flex flex-col md:flex-row justify-between border-b'>
            <h1 className='text-2xl md:text-4xl font-bold'>Top 20 Best Seller</h1>
            <p className='text-md underline cursor-pointer'>Go to Daily Deals Section</p>
          </div>

          <Slider {...settings}>
            {SliderData.map((product) => (
              <div
                key={product.id}
                className='relative cursor-pointer h-[450px] w-full mt-6 p-1 md:p-3 gap-5 overflow-hidden 
                border border-transparent hover:border-black rounded-lg'
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <div className='relative w-full h-[216px] p-2 overflow-hidden transition-transform duration-700 ease-in-out'>
                  <img
                    src={hoveredProduct === product.id ? product.hoverImage : product.imageSrc}
                    className='w-full h-full object-cover transition-all duration-1000 ease-in-out hover:scale-105'
                    alt="img"
                  />

                  {hoveredProduct === product.id && (
                    <div className='absolute top-0 right-0 flex flex-col items-center p-2 space-y-2'>
                      <Tooltip
                        title={favorites.some((item) => item.id === product.id) ? "Browse Wishlist" : "Add to Wishlist"}
                        position="left"
                        trigger="mouseenter"
                        animation="scale"
                        arrow={true}
                      >
                        <div onClick={() => handleToggleWishlist(product)}
                          className={`heart-icon p-3 bg-${favorites.some((item) => item.id === product.id) ? 'black' : 'white'} rounded-full text-${favorites.some((item) => item.id === product.id) ? 'white' : 'black'} hover:text-white hover:bg-black duration-300 ease-in-out text-xl`}>
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
                        <div className='p-3 bg-white rounded-full text-black hover:text-white hover:bg-black duration-300 ease-in-out text-xl'>
                          <FaArrowRightArrowLeft />
                        </div>
                      </Tooltip>
                      <Tooltip
                        title="Cart"
                        position="left"
                        trigger="mouseenter"
                        animation="scale"
                        arrow={true}
                      >
                        <div onClick={() => handleAddToCart(product)} className='p-3 bg-white rounded-full text-black hover:text-white hover:bg-black duration-300 ease-in-out text-xl'>
                          <IoBagOutline />
                        </div>
                      </Tooltip>
                    </div>
                  )}

                </div>

                <div className='flex flex-col gap-2 mt-2'>
                  <h2 className='text-gray-500 text-xs font-medium hover:text-gray-800 duration-500 tracking-tight uppercase'>
                    <p>{product.category}</p>
                  </h2>
                  <Link key={product.id} href={`/pages/Details?id=${product.id}`} passHref>
                    <h3 className='text-ellipsis font-semibold leading-6 text-black'>
                      <p>{product.title}</p>
                    </h3>
                  </Link>

                  <div className='flex flex-row my-2 font-thin'>
                    {Array.from({ length: product.rating }).map((_, index) => (
                      <CiStar key={index} />
                    ))}
                  </div>
                  <div className='flex flex-row gap-2'>
                    <del aria-hidden='true'>
                      <bdi className='text-gray-500 font-semibold text-md'>
                        <span>$</span>
                        {product.originalPrice}
                      </bdi>
                    </del>
                    <bdi className='text-red-500 font-semibold'>
                      <span>$</span>
                      {product.discountedPrice}
                    </bdi>
                  </div>
                  {hoveredProduct === product.id && (
                    <Link
                      href='/pages/Details'>
                      <p
                        className='bg-[#F1F1F1] mt-2 text-black w-full overflow-ellipsis hover:bg-black hover:text-white flex text-center justify-center font-semibold py-3 rounded-full duration-300 ease-in-out transform hover:scale-105 transition-opacity'
                      >
                        Select Options
                      </p>
                    </Link>

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
    </>
  );
};

export default Sellers;
