'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/swiper-bundle.css';
import ArticleSlide from './ArticleSlide';

const RelatedArticle = () => {
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
            title: 'Hook up a receiver for your Home Theater',
        },
        {
            id: 3,
            imageUrl: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/blog_geart_03-427x250.jpg',
            category: 'TECHNOLOGY',
            title: 'Top most Comfortable Headphones',
        },
        {
            id: 4,
            imageUrl: 'https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/blog_geart_01-427x250.jpg',
            category: 'TECHNOLOGY',
            title: 'Top most for your Home Theater',
        },
    ];

 

    return (


        <div className='mt-20'>
            <h1 className='text-center justify-center text-3xl font-bold'>Related Articles</h1>

            <Swiper
                spaceBetween={50}
                slidesPerView={2}
                pagination={{ clickable: true }}
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
                        <ArticleSlide {...slide} />
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>


    );
};

export default RelatedArticle;
