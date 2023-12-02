'use client'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import './style.scss'

import { Navigation, Autoplay } from 'swiper'
import Image from 'next/image'
import ArrowRightIcon from '@/public/svg/ArrowRightIcon'
import ArrowLeftIcon from '@/public/svg/ArrowLeftIcon'

export default function Carousel() {
    return (
        <>
            <Swiper
                navigation={{
                    nextEl: '.button-next-slide',
                    prevEl: '.prev-button',
                }}
                modules={[Navigation, Autoplay]}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                simulateTouch={false}
                className="carousel"
            >
                <SwiperSlide>
                    <div className="slide">
                        <img alt="slide-1" src="/slide-1.png" />
                        <div className="button-shopnow">Shop now</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide">
                        <img alt="slide-1" src="/slide-2.png" />
                        <div className="button-shopnow">Shop now</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide">
                        <img alt="slide-1" src="/slide-3.png" />
                        <div className="button-shopnow">Shop now</div>
                    </div>
                </SwiperSlide>

                <div className="navigation">
                    <div className="prev-button">
                        <div className="prev-icon">
                            <ArrowLeftIcon />
                        </div>
                    </div>
                    <div className="button-next-slide">
                        <div className="next-icon">
                            <ArrowRightIcon />
                        </div>
                    </div>
                </div>
            </Swiper>
        </>
    )
}
