import React, { useState } from "react";
import "./Featured.css";

// Dummy video
const dummyVideo = "https://www.w3schools.com/html/mov_bbb.mp4";

// Add-to-cart sound
const addSound = new Audio("/sounds/add.mp3");


// Import images
import featured1 from "../assets/featured-1.png";
import featured2 from "../assets/featured-2.png";
import featured3 from "../assets/featured-3.png";

const productsData = [
  { id: 1, name: "All Seasons Candle - Bubble", type: "bubble", body: "Spring florals, summer citrus, autumn spices, winter warmth", price: 299, image: featured1, tag: "Bestseller" },
  { id: 2, name: "All Seasons Candle - Peony", type: "peony", body: "Spring florals, summer citrus, autumn spices, winter warmth", price: 299, image: featured2, tag: "Bestseller" },
  { id: 3, name: "All Seasons Candle - Daisy", type: "daisy", body: "Spring florals, summer citrus, autumn spices, winter warmth", price: 299, image: featured3, tag: "Bestseller" },
  { id: 4, name: "Party & Celebration ✨", type: "rose", body: "Birthday & special occasions", price: 399, image: featured1, tag: "Bestseller" },
  { id: 5, name: "Self-Love 🌸", type: "teddy", body: "Aromatherapy and mindfulness", price: 349, image: featured2, tag: "Bestseller" },
];

const Featured = ({ addToCart }) => {
  const [products, setProducts] = useState(productsData);
  const [sort, setSort] = useState("");

  const handleAdd = (product) => {
    addSound.currentTime = 0;
    addSound.play().catch(() => {});
    addToCart(product);
  };

  const handleSort = (e) => {
    const value = e.target.value;
    setSort(value);

    let sorted = [...productsData];

    if (value === "priceLow") sorted.sort((a, b) => a.price - b.price);
    else if (value === "priceHigh") sorted.sort((a, b) => b.price - a.price);
    else if (value === "name") sorted.sort((a, b) => a.name.localeCompare(b.name));
    else if (["bubble", "peony", "daisy", "rose", "teddy"].includes(value)) {
      sorted = sorted.filter((p) => p.type === value);
    }

    setProducts(sorted);
  };

  return (
    <>
      {/* Full-width Hero Section */}
      <div className="hero-video-full relative mb-10">
        <video className="hero-bg-video-full" autoPlay loop muted>
          <source src={dummyVideo} type="video/mp4" />
        </video>
        <div className="hero-overlay-full flex flex-col justify-center items-center text-center text-white p-4">
          <h1 className="hero-title-full">Featured Candles</h1>
          <p className="hero-text-full">
            Discover our full collection of candles for all occasions and seasons. Perfect scents for your mood and space.
          </p>
        </div>
      </div>

      {/* Centered Content: Sort + Cards */}
      <section className="featured-page max-w-6xl mx-auto px-6 py-12">
        {/* Sort / Filter */}
        <div className="flex justify-start mb-6">
          <select value={sort} onChange={handleSort} className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none">
            <option value="">Sort / Filter</option>
            <option value="priceLow">Price Low to High</option>
            <option value="priceHigh">Price High to Low</option>
            <option value="name">Name A-Z</option>
            <option value="bubble">Type: Bubble</option>
            <option value="peony">Type: Peony</option>
            <option value="daisy">Type: Daisy</option>
            <option value="rose">Type: Rose</option>
            <option value="teddy">Type: Teddy</option>
          </select>
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="relative group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 w-full overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover product-image" />
                <span className="absolute top-3 left-3 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-semibold text-sm shadow">
                  {product.tag}
                </span>
              </div>

              <div className="p-5 flex flex-col justify-between h-[220px] relative z-10">
                <div>
                  <h3 className="text-xl font-semibold mt-3">{product.name}</h3>
                  <p className="text-gray-700 mt-2 text-sm">{product.body}</p>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="font-bold text-lg text-gray-800">₹{product.price}</span>
                  <button
                    onClick={() => handleAdd(product)}
                    className="add-btn relative bg-gradient-to-r from-pink-400 to-pink-500 text-white font-semibold px-4 py-2 rounded-lg shadow-lg transform hover:scale-110 hover:shadow-xl transition-all duration-300"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Featured;
