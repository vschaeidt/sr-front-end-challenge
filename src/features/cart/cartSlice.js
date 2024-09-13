import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        total: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            console.log(action);
            state.items = [...state.items, action.payload];
            state.total += 1;
        },
        removeFromCart: (state, action) => {
            state.items = state.items.findIndex(item => item.id === action.payload.id);
            state.total -= 1;
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;