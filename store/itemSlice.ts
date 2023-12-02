import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
// import { RootState } from './store'
import { ImgItemType } from '@/types/Img.type'

// Define a type for the slice state
interface ItemState {
    value: number
    img: ImgItemType[]
    text: []
}

// Define the initial state using that type
const initialState: ItemState = {
    value: 5,
    img: [
        {
            id: 1,
            x: 200,
            y: 200,
            width: 200,
            height: 200,
            src: 'https://cdn.popsww.com/blog/sites/2/2022/02/zoro-sau-2-nam.jpg',
        },
        {
            id: 2,
            x: 20,
            y: 20,
            width: 300,
            height: 300,
            src: 'https://images.unsplash.com/photo-1508812369462-520971343b10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3165&q=80',
        },
    ],
    text: [],
}

export const itemSlice = createSlice({
    name: 'item',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
        addImg: (state, action: PayloadAction<ImgItemType>) => {
            state.img.push(action.payload)
            console.log(action.payload)
        },
    },
})

export const { increment, decrement, incrementByAmount, addImg } = itemSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default itemSlice.reducer
