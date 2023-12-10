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

  // State to manage the items in the cart
  const [cart, setCart] = useState([]);

    // Function to add a product to the cart
    const addToCart = (product) => {
      setCart([...cart, product]);
    };
  
    // Function to remove a product from the cart
    const removeFromCart = (product) => {
      const updatedCart = cart.filter((item) => item.id !== product.id);
      setCart(updatedCart);
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
