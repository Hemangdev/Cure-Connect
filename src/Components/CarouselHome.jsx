/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Keyboard, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import img1 from '../assets/banner-1.png'
import img2 from '../assets/banner-2.png'
import img3 from '../assets/banner-3.png'
import img4 from '../assets/banner-4.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const BannerImages = [
    {
        id: 1,
        link: '/',
        img: img1
    },
    {
        id: 2,
        link: '/',
        img: img2
    },
    {
        id: 3,
        link: '/',
        img: img3
    },
    {
        id: 4,
        link: '/',
        img: img4
    },
]

const CarouselHome = () => {
    return (
        <>
            <section className="hero-banner">

                <Swiper
                 
                    slidesPerView={1}
                    spaceBetween={30}
                    speed={1200}
                    // navigation={true}
                    modules={[Keyboard, Pagination, Navigation, Autoplay]}
                    className="mySwiper"
                    keyboard={{
                        enabled: true
                    }}
                    pagination={{
                        clickable: true
                    }}
                    autoplay={{
                        delay: 9000,
                        disableOnInteraction: false
                    }}

                    breakpoints={{

                        1200: {
                            slidesPerView: 1
                        }
                    }}
                >
                    {BannerImages.map((item) => {
                        return (
                            <SwiperSlide>
                                <a>
                                    <img
                                        className="img-fluid w-100 banner-img h-auto"
                                        src={item.img}
                                        alt='banner-image'
                                    />
                                </a>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </section>


        </>
    )
}

export default CarouselHome