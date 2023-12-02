'use client'
import Button from '@/components/Button/Button'
import CartItem from '@/components/Client/CartItem/CartItem'
import DeleteBinLineIcon from '@/public/svg/DeleteBinIcon'
import { useAppSelector } from '@/store/hook'
import Image from 'next/image'
import React from 'react'

type cartDataType = {
    id: string
    srcImg: string
    title: string
    subTitle: string
    size: string
    quality: number
    price: number
}

export default function Cart() {
    const cart = useAppSelector((state) => state.cart.cart)
    console.log(cart)

    return (
        <div className="p-10">
            <h1 className="font-semibold text-[30px] text-center">Shopping Cart</h1>
            <div>
                <div className="flex gap-10">
                    <div className="w-2/3">
                        <p className="font-semibold text-[18px]">Cart items</p>
                        <CartItem />
                        <CartItem />
                        <CartItem />
                    </div>
                    <div className="w-1/3 flex flex-col gap-4">
                        <p className="font-semibold text-[18px]">Summary</p>
                        <div className="bg-gray-200 rounded-lg p-5">
                            <div className="flex justify-between font-semibold">
                                <p className="uppercase">Subtotal</p>
                                <p>MRP : $ 19 695.0</p>
                            </div>
                            <div className="h-[0.5px] bg-black w-[90%] mx-auto my-2"></div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quis
                                hic rerum quae mollitia recusandae a vel accusantium error rem,
                                pariatur officiis odit architecto nisi similique aut! Mollitia, id
                                perspiciatis.
                            </p>
                        </div>
                        <Button>Checkout</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
