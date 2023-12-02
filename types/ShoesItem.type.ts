type ShoesItemType = {
    id: string
    title: string
    subTitle: string
    desr: string
    price: number
    srcImg: string
}

type SizeType = {
    size: string
    enabled: boolean
}

type ShoesDetailType = {
    id: string
    title: string
    price: number
    subTitle: string
    desr: string
    srcImg?: string[]
}

export type { ShoesItemType, SizeType, ShoesDetailType }
