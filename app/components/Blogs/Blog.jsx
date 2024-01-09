'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/swiper-bundle.css';
import BlogSlide from './Blogslide';
const Blog = () => {

    const slides = [
        {
            id: 1,
            imageUrl: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/blog_geart_01-427x250.jpg',
            category: 'TECHNOLOGY',
            title: 'Setup your Surround sound speaker',
        },
        {
            id: 2,
            imageUrl: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/blog_geart_02-427x250.jpg',
            category: 'LIFE STYLE',
            title: 'Hook up a receiver for you Home Theater',
        }, {
            id: 3,
            imageUrl: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/blog_geart_03-427x250.jpg',
            category: 'TECHNOLOGY',
            title: 'Top most Comfortable Headphones',
        },
        {
            id: 4,
            imageUrl: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/blog_gear_04-427x250.jpg',
            category: 'TECHNOLOGY',
            title: 'CUBOT X20 PRO: iPhone 11 rear camera design will be available for sale',
        }, {
            id: 5,
            imageUrl: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/blog_gear_05-427x250.jpg',
            category: 'TECHNOLOGY',
            title: 'CUBOT X20 PRO: iPhone 11 rear camera design will be available for sale on SuperGear'
        }, {
            id: 6,
            imageUrl: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/blog_gear_06-427x250.jpg',
            category: 'TECHNOLOGY',
            title: 'Get Teclast T30 tablet at an unexpected price at SuperGear',
        },
        {
            id: 7,
            imageUrl: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/blog_gear_07-427x250.jpg',
            category: 'TECHNOLOGY',
            title: 'Amazfit GTR Titanium Edition and Austrian Zircon Version will Officially go on Exclusive Global Sale',
        }, {
            id: 8,
            imageUrl: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/blog_gear_08-427x250.jpg',
            category: 'TECHNOLOGY',
            title: 'Don’t miss out! Xiaomi Mi Note 10 exclusive global launch hit',
        }, {
            id: 9,
            imageUrl: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/blog_gear_10-427x250.jpg',
            category: 'TECHNOLOGY',
            title: 'Do you want a stylish smartphone with a pop-up camera for budget price? Take the Elephone PX (2019)',
        },
        {
            id: 10,
            imageUrl: ' https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/home-hero-banner-427x250.jpg',
            category: 'TECHNOLOGY',
            title: 'DJI Mavic Mini: the ultra-light consumer drone for beginner sale',
        },
    ];



    return (
        <>
            <div className='xl:container xl:mx-auto'>
                <div className='mt-24 mx-4 sm:mx-16'>
                    <div className='flex text-center justify-center'>
                        <h1 className='text-4xl font-bold'>Our Blog Posts</h1>
                    </div>

                    <div className='flex flex-row gap-4 mt-16'>
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={2}
                            pagination={{ clickable: true }}
                            loop={true}
                            loopfillgroupwithblank={true}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
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
                                    <BlogSlide {...slide} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog
