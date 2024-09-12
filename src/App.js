import React, { useEffect } from "react";
import { products } from "./data";
import { links } from "./links";
import "./App.css";

import { useSelector, useDispatch } from 'react-redux'
import { filterByColor, sortBy, setProducts } from './features/products/productsSlice'

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import MobileMenu from "./components/menu/MobileMenu";
import Select from "./components/Select";
import ProductCard from "./components/product/ProductCard";

function App() {
  const sortedProducts = useSelector((state) => state.products.filteredProducts);
  const dispatch = useDispatch();
  //load the products once
  useEffect(() => {
    dispatch(setProducts(products));
  }, [])

  const colorOptions = [
    { value: "", label: "All" },
    { value: "red", label: "Red" },
    { value: "blue", label: "Blue" },
    { value: "green", label: "Green" },
  ];

  const sortOptions = [
    { value: "", label: "None" },
    { value: "price", label: "Price" },
    { value: "name", label: "Name" },
  ];

  return (
    <div className="app-container">
      <div className="sticky-header">
        <Header />
        <MobileMenu links={links} />
        <Menu links={links} />
      </div>
      <div className="content">
        <h1>Product Listing Page</h1>
        <div>
          <label>
            Filter by color:
            <Select options={colorOptions} onChange={event => dispatch(filterByColor(event.target.value))} />
          </label>
          <label>
            Sort by:
            <Select options={sortOptions} onChange={event => dispatch(sortBy(event.target.value))} />
          </label>
        </div>
        <div className="product-grid">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
