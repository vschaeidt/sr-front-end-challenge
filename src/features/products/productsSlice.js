import { createSlice } from '@reduxjs/toolkit';

const sortProducts = (a, b, sortBy) => {
    if (sortBy === "price") {
        return a.price - b.price;
    } else if (sortBy === "name") {
        return a.name.localeCompare(b.name);
    }
    return 0;
};

const filterProducts = (products, filter) => products.filter(product => !filter || product.colors.includes(filter));

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        filteredProducts: [],
        filter: "",
        sort: "",
    },
    reducers: {
        filterByColor: (state, action) => {
            state.filter = action.payload;
            state.filteredProducts = filterProducts(state.products, action.payload);
        },
        sortBy: (state, action) => {
            state.sort = action.payload;
            state.filteredProducts = state.filteredProducts.sort((a, b) => sortProducts(a, b, action.payload));
        },
        setProducts: (state, action) => {
            state.products = action.payload;
            state.filteredProducts = filterProducts(state.products, state.filter).sort((a, b) => sortProducts(a, b, state.sort));
        },
    },
});

// Action creators are generated for each case reducer function
export const { filterByColor, sortBy, setProducts } = productsSlice.actions;

export default productsSlice.reducer;