import { useEffect, useRef } from "react";

const CartModal = ({ cart, closeModal, setCart }) => {

  const removeFromCart = (event, product) => {

     // Stop the propagation of the click event
  event.stopPropagation();
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
  };

// Calculate grand total
const grandTotal = cart.reduce((total, item) => total + item.totalPrice, 0);
    return (
        <div className="modal-overlay" onClick={closeModal}>
        <div className="modal">
          <h2>Shopping Cart</h2>
          <ul>
            {cart.map((item) => (
              <li key={item.id} onClick={(event)=>removeFromCart(event, item)}>
                {item.name} - ${item.totalPrice} - Quantity: {item.quantity}
              </li>
            ))}
          </ul>
           {/* Display grand total */}
        <div className="grand-total">Grand Total: ${grandTotal}</div>
          <button onClick={closeModal}>Close</button>
        </div>
      </div>
    );
  };

export default CartModal