import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        total: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            // Add item logic
        },
        removeFromCart: (state, action) => {
            // Remove item logic
        },
        updateQuantity: (state, action) => {
            // Update quantity logic
        },
        // Other cart-related reducers
    },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;