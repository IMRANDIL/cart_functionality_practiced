const CartModal = ({ cart, closeModal }) => {
    return (
      <div className="modal">
        <h2>Shopping Cart</h2>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price} - Quantity: {item.quantity}
            </li>
          ))}
        </ul>
        <button onClick={closeModal}>Close</button>
      </div>
    );
  };

export default CartModal