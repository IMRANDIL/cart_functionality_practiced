const CartModal = ({ cart, closeModal, setCart }) => {



  // Function to remove a product from the cart
  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
  };

// Calculate grand total
const grandTotal = cart.reduce((total, item) => total + item.totalPrice, 0);
    return (
        <div className="modal-overlay">
        <div className="modal">
          <h2>Shopping Cart</h2>
          <ul>
            {cart.map((item) => (
              <li key={item.id} onClick={()=>removeFromCart(item)}>
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