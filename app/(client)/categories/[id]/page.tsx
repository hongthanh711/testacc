import CardProduct from '@/components/Client/CardProduct/CardProduct'
import React from 'react'

type Props = {}

export default function Category({}: Props) {
    return (
        <div className="py-8">
            <h1 className="text-[30px] text-center">Running Shoes</h1>
            <div className="grid grid-cols-3 gap-4 py-6">
                {/* <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct /> */}
            </div>
        </div>
    )
}
