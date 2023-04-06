import { createSlice } from '@reduxjs/toolkit'

const OBJAVE = [
    {
        id: 'dsklfsmlfsio3pwq',
        text: "Hej evo i mene",
        slika: 'https://placehold.co/600x400/EEE/31343C',
        lajk: false,
        vrijeme: new Date()
    },
    {
        id: 'hghmdsopewqscd322',
        text: "Evo i druga moja objava",
        slika: 'https://placehold.co/600x400/EEE/00343C',
        lajk: true,
        vrijeme: new Date()
    },
]

const initialState = {
    value: OBJAVE,
}


export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.value = [...state.value, action.payload]
        },
        editPost: (state, action) => state,
        deletePost: (state, action) => state,
    },
})

export const { addPost, editPost, deletePost } = postSlice.actions

export default postSlice.reducer