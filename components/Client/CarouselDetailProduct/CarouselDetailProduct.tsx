'use client'

import Image from 'next/image'
import { useState } from 'react'

type ImgType = {
    id: string
    src: string
    alt: string
}

const dataImg: ImgType[] = [
    { id: '1', src: '/p1.png', alt: '1' },
    { id: '2', src: '/p2.png', alt: '2' },
    { id: '3', src: '/p3.png', alt: '3' },
    { id: '4', src: '/p4.png', alt: '4' },
    { id: '5', src: '/p5.png', alt: '5' },
]

export default function CarouselDetailProduct() {
    const [itemActive, setItemActive] = useState<ImgType>(dataImg[0])

    const handleHover = (img: { id: string; src: string; alt: string }) => {
        setItemActive(img)
    }
    return (
        <div className="flex gap-8">
            <div className="flex flex-col gap-4">
                {dataImg.map((img) => {
                    return (
                        <div
                            onMouseOver={() => handleHover(img)}
                            key={img.alt}
                            className="relative w-16 h-16 rounded-lg overflow-hidden"
                        >
                            <Image
                                className="object-cover"
                                src={img.src}
                                alt={img.alt}
                                fill
                            ></Image>
                            {img === itemActive && (
                                <div className="w-full h-full bg-black absolute z-10 opacity-20"></div>
                            )}
                        </div>
                    )
                })}
            </div>
            <div>
                <div className="relative w-full h-full overflow-hidden">
                    <img className="object-cover" src={itemActive.src} alt={itemActive.alt} />
                </div>
            </div>
        </div>
    )
}
