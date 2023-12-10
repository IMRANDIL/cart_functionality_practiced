import React from 'react'

const ProductList = ({ products, addToCart }) => {
    return (
      <div className="product-list-container">
      <h2 className="product-list-title">Products</h2>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <div className="product-info">
              <span className="product-name">{product.name}</span>
              <span className="product-price">${product.price}</span>
            </div>
            <button className="add-to-cart-button" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
    );
  };

export default ProductList