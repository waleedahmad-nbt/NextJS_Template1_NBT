'use client';
import Sellers from './components/BestSellers/Sellers';
import Blog from './components/Blogs/Blog';
import Deals from './components/Deals/Deals';
import Electronics from './components/Electronics&Music/Electronics';
import HeroSection from './components/Hero Section/HeroSection';
import Music from './components/Electronics&Music/Music';
import PopularCategories from './components/Categories/PopularCategories';
import Search from './components/Searches/Search';
import SwiperComponent from './components/Swiper/Swiper';
import ForgotPassword from './components/ForgotPassword/page';

export default function Home() {
  return (
    <>
      <SwiperComponent />
      <HeroSection />
      <PopularCategories />
      <Deals />
      <Electronics />
      <Sellers />
      <Music />
      <Search />
      <Blog /> 
    </>
  )
}
