'use client'
import CardProduct from '@/components/Client/CardProduct/CardProduct'
import Carousel from '@/components/Client/CarouselHome/CarouselHome'
import { ShoesItemData } from '@/datas/shoesItemData'
import { useRouter } from 'next/navigation'

export default function Home() {
    const router = useRouter()

    const handleClick = () => {
        router.push('/product/1')
    }
    return (
        <main className="flex flex-col items-center justify-between">
            <div className="container">
                <Carousel />
                <div className="text-center text-oswald">
                    <h2 className="text-[34px] font-semibold">Cushioning for Your Miles</h2>
                    <p className="max-w-[70%] mx-auto text-xl">
                        A lightweight Nike ZoomX midsole is combined with increased stack heights to
                        help provide cushioning during extended stretches of running.
                    </p>
                </div>
                <div className="grid grid-cols-3 gap-4 py-6">
                    {ShoesItemData.map((shoes) => {
                        return <CardProduct key={shoes.id} item={shoes} onClick={handleClick} />
                    })}
                </div>
            </div>
        </main>
    )
}
