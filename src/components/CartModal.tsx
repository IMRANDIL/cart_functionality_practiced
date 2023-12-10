const CartModal = ({ cart, closeModal, setCart }) => {



  // Function to remove a product from the cart
  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
  };


    return (
        <div className="modal-overlay">
        <div className="modal">
          <h2>Shopping Cart</h2>
          <ul>
            {cart.map((item) => (
              <li key={item.id} onClick={()=>removeFromCart(item)}>
                {item.name} - ${item.price} - Quantity: {item.quantity}
              </li>
            ))}
          </ul>
          <button onClick={closeModal}>Close</button>
        </div>
      </div>
    );
  };

export default CartModal