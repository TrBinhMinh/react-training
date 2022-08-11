import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { items: 0 };
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            state.items++;
        },
    },
});

const store = configureStore({
    reducer: {
        cartReducer: cartSlice.reducer,
    },
});

export default store;
