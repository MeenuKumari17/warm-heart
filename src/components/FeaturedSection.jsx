import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./featuredSection.css";

import featured1 from "../assets/featured-1.png";
import featured2 from "../assets/featured-2.png";
import featured3 from "../assets/featured-3.png";

// Add-to-cart sound
const addSound = new Audio("/sounds/add.mp3");

const productsData = [
  { id: 1, name: "All Seasons Candle", type: "bubble", body: "Spring florals, summer citrus, autumn spices, winter warmth", price: 299, image: featured1, tag: "Bestseller" },
  { id: 2, name: "Party & Celebration ✨", type: "rose", body: "Birthday & special occasions", price: 399, image: featured2, tag: "Bestseller" },
  { id: 3, name: "Self-Love 🌸", type: "teddy", body: "Aromatherapy and mindfulness", price: 349, image: featured3, tag: "Bestseller" },
];

const FeaturedSection = ({ addToCart }) => {
  const navigate = useNavigate();
  const [products, setProducts] = useState(productsData);
  const [filter, setFilter] = useState("");

  const handleAdd = (product) => {
    addSound.currentTime = 0;
    addSound.play().catch(() => {});
    addToCart(product);
  };

  const handleViewMore = () => {
    navigate("/featured"); // redirect to the featured page
  };

  return (
    <section id="featured" className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Featured Products</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="relative group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            
            {/* Image */}
            <div className="relative h-64 w-full overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover product-image" />
              <span className="absolute top-3 left-3 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-semibold text-sm shadow">
                {product.tag}
              </span>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col justify-between h-[220px] relative z-10">
              <div>
                <h3 className="text-xl font-semibold mt-3">{product.name}</h3>
                <p className="text-gray-700 mt-2 text-sm">{product.body}</p>
              </div>

              {/* Price + Add Button */}
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

      {/* View More Button */}
      <div className="flex justify-center mt-10">
<button
  onClick={handleViewMore}
  className="view-more-btn"
>
  <span>View More</span>
</button>
      </div>
    </section>
  );
};

export default FeaturedSection;
