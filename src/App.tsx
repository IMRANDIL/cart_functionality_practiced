import { useState } from 'react'

import './App.css'
import ProductList from './components/ProductList';
import Cart from './components/Cart';

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
    const existingItemIndex = cart.findIndex((item) => item.id === product.id);

    if (existingItemIndex !== -1) {
      // If item already exists, update quantity and amount
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      // If item doesn't exist, add it to the cart
      setCart([...cart, { ...product, quantity: 1 }]);
    }
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
      {/* Render ProductList component */}
      <ProductList products={products} addToCart={addToCart} />

      {/* Render Cart component */}
      <Cart cart={cart} removeFromCart={removeFromCart} />
    </div>
    </>
  )
}

export default App
