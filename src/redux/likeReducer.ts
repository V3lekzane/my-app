import { createSlice, PayloadAction } from '@reduxjs/toolkit'

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

export const { toggleLike } = likeSlice.actions

export default likeSlice.reducer
