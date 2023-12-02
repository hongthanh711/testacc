'use client'

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'
import { ShoesItemType } from '@/types/ShoesItem.type'

interface CartState {
    cart: ShoesItemType[]
}

const initialState: CartState = {
    cart: [],
}

export const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // decrement: (state) => {
        //     state.value -= 1
        // },
        // // Use the PayloadAction type to declare the contents of `action.payload`
        // incrementByAmount: (state, action: PayloadAction<number>) => {
        //     state.value += action.payload
        // },
        addItem: (state, action: PayloadAction<any>) => {
            state.cart.push(action.payload)
            console.log(action)
        },
    },
})

export const { addItem } = CartSlice.actions

export default CartSlice.reducer
