'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import CardProduct from '../CardProduct/CardProduct'
import ArrowRightIcon from '@/public/svg/ArrowRightIcon'
import ChevronLeftIcon from '@/public/svg/ChevronLeftIcon'
import ChevronRightIcon from '@/public/svg/ChevronRightIcon'
import { ShoesItemData } from '@/datas/shoesItemData'

export default function CarouselRelatedProduct() {
    return (
        <div>
            <p className="capitalize font-semibold text-[20px]">You might aslo like</p>

            <Swiper
                loop
                slidesPerView={3}
                navigation={{
                    nextEl: '.btn-next',
                    prevEl: '.btn-prev',
                }}
                modules={[Navigation]}
                spaceBetween={20}
                className="w-full h-full relative my-3"
            >
                {ShoesItemData.map((shoes) => {
                    return (
                        <SwiperSlide key={shoes.id}>
                            <CardProduct item={shoes} />
                        </SwiperSlide>
                    )
                })}
                <div className="">
                    <div className="btn-prev bg-slate-600 rounded-full p-2 inline-block opacity-50 cursor-pointer absolute top-1/2 left-0 z-10 -translate-y-1/2">
                        <div className="text-white w-6 h-6 ">
                            <ChevronLeftIcon />
                        </div>
                    </div>
                    <div className="btn-next bg-slate-600 rounded-full p-2 inline-block opacity-50 cursor-pointer absolute z-10 right-0 top-1/2 -translate-y-1/2">
                        <div className="text-white w-6 h-6 ">
                            <ChevronRightIcon />
                        </div>
                    </div>
                </div>
            </Swiper>
        </div>
    )
}
