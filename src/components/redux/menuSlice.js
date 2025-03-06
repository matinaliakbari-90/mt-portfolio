import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    menuOpen: false
}

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        toogleMenu: (state) => {
            state.menuOpen = !state.menuOpen
        }
    }
})

export const menuReducer = menuSlice.reducer
export const { toogleMenu } = menuSlice.actions