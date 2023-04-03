import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carrtItem: [],
    amount: 111,
    total: 0,
    isLoad: true,
}

const cartSlice = createSlice({
    name: "cart",
    initialState
})

export default cartSlice.reducer;