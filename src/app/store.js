import { configureStore } from '@reduxjs/toolkit'
import productsReducer from '../features/products/productsSlice'
import cartSlice from '../features/cart/cartSlice'

export default configureStore({
    reducer: {
        products: productsReducer,
        cart: cartSlice,
    },
})