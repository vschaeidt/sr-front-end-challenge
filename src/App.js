import React, { useState } from "react";
import { products } from "./data";
import { links } from "./links";
import "./App.css";

import Img from "./atoms/Image";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import MobileMenu from "./components/menu/MobileMenu";

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
            <select onChange={handleFilterChange}>
              <option value="">All</option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
            </select>
          </label>
          <label>
            Sort by:
            <select onChange={handleSortChange}>
              <option value="">None</option>
              <option value="price">Price</option>
              <option value="name">Name</option>
            </select>
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
