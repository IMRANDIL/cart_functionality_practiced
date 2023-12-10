import { useState } from 'react'

import './App.css'
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import CartModal from './components/CartModal';

function App() {
 
   // State to manage the list of products
   const [products] = useState([
    { id: 1, name: 'Product 1', price: 20 },
    { id: 2, name: 'Product 2', price: 30 },
    { id: 3, name: 'Product 3', price: 25 },
  ]);

  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addToCart = (product) => {
    const updatedCart = [...cart];
    const existingItem = updatedCart.find((item) => item.id === product.id);
  
    if (existingItem) {
      // If item already exists, update quantity and total price
      existingItem.quantity += 1;
      existingItem.totalPrice = existingItem.quantity * existingItem.price;
    } else {
      // If item doesn't exist, add it to the cart with initialized totalPrice
      updatedCart.push({ ...product, quantity: 1, totalPrice: product.price });
    }
  
    setCart(updatedCart);
  };
  
  

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div>
      <div className="cart-icon" onClick={openModal}>
        🛒 {cart.reduce((total, item) => total + item.quantity, 0)}
      </div>

      <ProductList products={products} addToCart={addToCart} />

      {isModalOpen && <CartModal cart={cart} closeModal={closeModal} setCart={setCart} />}
    </div>
    </>
  )
}

export default App
