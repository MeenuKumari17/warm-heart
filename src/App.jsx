import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import CartDrawer from "./components/CartDrawer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import OurCollection from "./components/OurCollections";
import FeaturedSection from "./components/FeaturedSection";
import CustomCandleOrder from "./components/CustomCandleOrder";
import Footer from "./components/Footer";

// Import your pages
import AllSeasons from "./pages/AllSeasons";
import PartyCelebration from "./pages/PartyCelebration";
import PremiumGifting from "./pages/PremiumGifting";
import SelfLove from "./pages/SelfLove";
import Featured from "./pages/Featured";

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const placeOrder = () => {
    if (!cart.length) return alert("Cart is empty!");
    const orderLines = cart.map(
      (item, i) =>
        encodeURIComponent(
          `${i + 1}. ${item.type || ""} - ${item.name} - ₹${item.price} x ${item.quantity} = ₹${item.price * item.quantity}`
        )
    );
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const whatsappMsg = `Hello! I want to place an order:%0A${orderLines.join(
      "%0A"
    )}%0A%0ATotal: ₹${total}`;
    window.open(`https://wa.me/919693594620?text=${whatsappMsg}`, "_blank");
  };

  return (
    <div>
      <Navbar cartCount={cart.length} onCartClick={() => setIsCartOpen(true)} />

      {/* CartDrawer is always rendered */}
      {isCartOpen && (
        <CartDrawer
          cart={cart}
          setCart={setCart}
          removeFromCart={removeFromCart}
          placeOrder={placeOrder}
          closeCart={() => setIsCartOpen(false)}
          isOpen={isCartOpen}
        />
      )}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <OurCollection />
              <FeaturedSection addToCart={addToCart} />
              <CustomCandleOrder />
            </>
          }
        />
        <Route path="/all-seasons" element={<AllSeasons addToCart={addToCart} />} />
        <Route path="/party-celebration" element={<PartyCelebration addToCart={addToCart} />} />
        <Route path="/premium-gifting" element={<PremiumGifting addToCart={addToCart} />} />
        <Route path="/self-love" element={<SelfLove addToCart={addToCart} />} />
        <Route path="/featured" element={<Featured addToCart={addToCart} />} />
      </Routes>
    <Footer />

    </div>
  );
}

export default App;
