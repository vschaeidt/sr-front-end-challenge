import React, { useState } from "react";
import { products } from "./data";
import { links } from "./links";
import "./App.css";

import Img from "./atoms/Image";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import MobileMenu from "./components/menu/MobileMenu";
import Select from "./components/Select";

function App() {
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  const filteredProducts = products.filter(
    (product) => !filter || product.colors.includes(filter)
  );

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sort === "price") {
      return a.price - b.price;
    } else if (sort === "name") {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });

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
            <Select options={colorOptions} onChange={handleFilterChange} />
          </label>
          <label>
            Sort by:
            <Select options={sortOptions} onChange={handleSortChange} />
          </label>
        </div>
        <div className="product-grid">
          {sortedProducts.map((product) => (
            <div key={product.id} className="product-card">
              <Img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <p>${product.price.toFixed(2)}</p>
              <p>Colors: {product.colors.join(", ")}</p>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
