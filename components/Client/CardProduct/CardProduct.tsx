import { ShoesItemType } from '@/types/ShoesItem.type'
import Image from 'next/image'
import React from 'react'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    item: ShoesItemType
}
export default function CardProduct({ item, ...rest }: CardProps) {
    return (
        <div {...rest} className="w-full cursor-pointer relative">
            <div className="w-full aspect-square relative">
                <Image className="object-cover" fill src={item.srcImg} alt="product-1" />
            </div>
            <div className="p-2 w-full">
                <p>Jodan Delta 3 low</p>
                <div className="flex justify-between items-center">
                    <div>
                        <span>$77777</span>
                        <span className="line-through text-[14px]">$88888</span>
                    </div>
                    <div>
                        <span className="text-green-300">12.50% off</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
