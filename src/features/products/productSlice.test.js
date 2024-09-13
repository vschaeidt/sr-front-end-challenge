import productsReducer, { filterByColor, sortBy, setProducts } from './productsSlice';

describe('products reducer', () => {
    const initialState = {
        products: [],
        filteredProducts: [],
        filter: "",
        sort: "",
        colors: [],
    };

    const sampleProducts = [
        { id: 1, name: 'Product A', price: 10, colors: ['red', 'blue'] },
        { id: 2, name: 'Product B', price: 15, colors: ['green', 'blue'] },
        { id: 3, name: 'Product C', price: 5, colors: ['red', 'yellow'] },
    ];

    it('should handle initial state', () => {
        expect(productsReducer(undefined, { type: 'unknown' })).toEqual(initialState);
    });

    it('should handle setProducts', () => {
        const actual = productsReducer(initialState, setProducts(sampleProducts));
        expect(actual.products).toEqual(sampleProducts);
        expect(actual.filteredProducts).toEqual(sampleProducts);
        expect(actual.colors).toEqual(['red', 'blue', 'green', 'yellow']);
    });

    it('should handle filterByColor', () => {
        const stateWithProducts = productsReducer(initialState, setProducts(sampleProducts));
        const actual = productsReducer(stateWithProducts, filterByColor('red'));
        expect(actual.filter).toBe('red');
        expect(actual.filteredProducts).toEqual([
            { id: 1, name: 'Product A', price: 10, colors: ['red', 'blue'] },
            { id: 3, name: 'Product C', price: 5, colors: ['red', 'yellow'] },
        ]);
    });

    it('should handle sortBy price', () => {
        const stateWithProducts = productsReducer(initialState, setProducts(sampleProducts));
        const actual = productsReducer(stateWithProducts, sortBy('price'));
        expect(actual.sort).toBe('price');
        expect(actual.filteredProducts).toEqual([
            { id: 3, name: 'Product C', price: 5, colors: ['red', 'yellow'] },
            { id: 1, name: 'Product A', price: 10, colors: ['red', 'blue'] },
            { id: 2, name: 'Product B', price: 15, colors: ['green', 'blue'] },
        ]);
    });

    it('should handle sortBy name', () => {
        const stateWithProducts = productsReducer(initialState, setProducts(sampleProducts));
        const actual = productsReducer(stateWithProducts, sortBy('name'));
        expect(actual.sort).toBe('name');
        expect(actual.filteredProducts).toEqual([
            { id: 1, name: 'Product A', price: 10, colors: ['red', 'blue'] },
            { id: 2, name: 'Product B', price: 15, colors: ['green', 'blue'] },
            { id: 3, name: 'Product C', price: 5, colors: ['red', 'yellow'] },
        ]);
    });

    it('should handle filter and sort combined', () => {
        const stateWithProducts = productsReducer(initialState, setProducts(sampleProducts));
        let actual = productsReducer(stateWithProducts, filterByColor('blue'));
        actual = productsReducer(actual, sortBy('price'));
        expect(actual.filter).toBe('blue');
        expect(actual.sort).toBe('price');
        expect(actual.filteredProducts).toEqual([
            { id: 1, name: 'Product A', price: 10, colors: ['red', 'blue'] },
            { id: 2, name: 'Product B', price: 15, colors: ['green', 'blue'] },
        ]);
    });
});
