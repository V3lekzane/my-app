import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'
import productsArray, { Product } from 'utils/productsArray'

type LikeState = {
    [id: number]: boolean
}

const initialState: LikeState = {}

const likeSlice = createSlice({
    name: 'like',
    initialState: initialState,
    reducers: {
        toggleLike: (state, action: PayloadAction<number>) => {
            const id = action.payload
            state[id] = !state[id]
        },
    },
})

const productsSlice = createSlice({
    name: 'products',
    initialState: productsArray,
    reducers: {},
})

export const { toggleLike } = likeSlice.actions

export const store = configureStore({
    reducer: {
        productsLikeState: likeSlice.reducer,
        products: productsSlice.reducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
