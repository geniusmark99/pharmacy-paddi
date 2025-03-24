'use client';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import { useRef } from 'react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { ArrowLogo } from '../icons/ArrowLogo';



export const HomeSliderWidget = () => {


    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);

    const SliderImage = [
        { name: "", number: 200, image: "/images/banner01.png" },
        { name: "", number: 210, image: "/images/banner02.png" },
        { name: "", number: 220, image: "/images/banner03.png" },
        { name: "", number: 230, image: "/images/banner04.png" },
        { name: "", number: 240, image: "/images/coupon.webp" },
    ]

    return (
        <div className='relative'>


            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30}

                slidesPerView={1} // Default for mobile
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                pagination={{ clickable: true }}
                breakpoints={{
                    640: {
                        slidesPerView: 2, // 2 slides for tablets (screen width >= 640px)
                    },
                    1024: {
                        slidesPerView: 4, // 4 slides for desktops (screen width >= 1024px)
                    },
                }}
                onBeforeInit={(swiper) => {
                    if (swiper.params.navigation) {
                        const navigation = swiper.params.navigation;
                        if (typeof navigation !== 'boolean') {
                            navigation.prevEl = prevRef.current;
                            navigation.nextEl = nextRef.current;
                        }
                    }
                }}
                className="w-full mt-10 mx-4"
            // data-aos="fade-up" data-aos-delay="200"
            >

                {SliderImage.map((e, index) => (
                    <SwiperSlide
                        key={index}

                        className="w-full mx-2 px-10 lg:px-3 lg:w-[370px] mr-4"
                    >
                        <div className="relative">
                            <Image
                                width={580}
                                height={270}
                                priority
                                alt={e.name}
                                src={e.image}
                                className='h-auto w-full rounded-md'
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>


            {/* Custom Navigation Buttons */}
            <button
                ref={prevRef}
                className="absolute z-[500] flex justify-center items-center *:hover:translate-x-[-8px] size-10 lg:size-14 top-1/2 left-2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-700"
            >
                <ArrowLogo type='left' className='fill-white size-5' />
            </button>
            <button
                ref={nextRef}
                className="absolute z-[500] flex justify-center items-center *:hover:translate-x-2 size-10 lg:size-14 top-1/2 right-2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-700"
            >
                <ArrowLogo type='right' className='fill-white size-5' />

            </button>
        </div>
    )
}

export default HomeSliderWidget;