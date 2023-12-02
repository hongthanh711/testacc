import DeleteBinLineIcon from '@/public/svg/DeleteBinIcon'
import Image from 'next/image'
import React from 'react'

export default function CartItem() {
    return (
        <div className="flex gap-4 border-b-[1px] p-4">
            <div className="relative basis-3/12 aspect-square object-cover object-center">
                <Image fill className="w-full h-full" src="/p1.png" alt="" />
            </div>
            <div className="basis-9/12">
                <div className="flex items-end justify-between">
                    <p className="text-[20px]">Jordan Retro 6 G</p>
                    <p className="mt-2 text-grey text-[14px] font-semibold">MRP : $ 19 695.00</p>
                </div>
                <p className="capitalize text-grey">Men&apos;s golf shoes</p>
                <div className="flex justify-between items-end mt-4 text-grey">
                    <div className="flex gap-4">
                        <div>Size</div>
                        <div>Quality</div>
                    </div>
                    <div className="w-4 h-4">
                        <DeleteBinLineIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}
