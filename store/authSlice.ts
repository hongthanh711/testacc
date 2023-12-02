'use client'

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'

interface AuthState {
    isLogin: boolean
}

// Define the initial state using that type
const initialState: AuthState = {
    isLogin: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state) => {
            state.isLogin = true
        },
        logout: (state) => {
            state.isLogin = false
        },

        // decrement: (state) => {
        //     state.value -= 1
        // },
        // // Use the PayloadAction type to declare the contents of `action.payload`
        // incrementByAmount: (state, action: PayloadAction<number>) => {
        //     state.value += action.payload
        // },
    },
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer
