import React from "react";
import { FaTrash } from "react-icons/fa"; // <-- Import FontAwesome trash icon
import "./CartDrawer.css";

const CartDrawer = ({ cart, setCart, closeCart, placeOrder }) => {
  const updateQuantity = (index, delta) => {
    const updated = [...cart];
    const newQty = updated[index].quantity + delta;
    if (newQty < 1) return;
    updated[index].quantity = newQty;
    setCart(updated);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-backdrop">
      <div className="cart-drawer open">
        <div className="cart-header">
          <h3>Your Cart 🛒</h3>
          <button className="close-btn" onClick={closeCart}>✖</button>
        </div>

        <div className="cart-items">
          {cart.length === 0 ? (
            <p className="empty-cart">Your cart is empty.</p>
          ) : (
            cart.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-image" />
                
                <div className="cart-details">
                  <p className="cart-name">{item.type} - {item.name}</p>
                  <p className="cart-price">₹{item.price} x {item.quantity} = ₹{item.price * item.quantity}</p>
                  <div className="quantity-controls">
                    <button className="qty-btn" onClick={() => updateQuantity(index, -1)}>-</button>
                    <span className="qty-value">{item.quantity}</span>
                    <button className="qty-btn" onClick={() => updateQuantity(index, 1)}>+</button>
                  </div>
                </div>

                <button className="remove-btn" onClick={() => removeFromCart(index)}>
                  <FaTrash />
                </button>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-footer">
            <p className="cart-total">Total: ₹{total}</p>
            <button className="place-btn" onClick={placeOrder}>
              Place Order on WhatsApp
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
