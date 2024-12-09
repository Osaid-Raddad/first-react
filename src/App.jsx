import React, { useState } from 'react';

export default function App() {
  const Product = {
    name: 'Iphone',
    price: '$1500',
    description: 'lorem ipsum dolor sit amet, consectetur adip',
  };

  const [counter, setCounter] = useState(0);
  const [showProduct, setShowProduct] = useState(false); 

  const increase = () => {
    setCounter(counter + 1);
  };

  const display = () => {
    setShowProduct(!showProduct); 
  };

  return (
    <>
      <h1>Count: {counter}</h1>
      <button className="btn btn-primary" onClick={increase}>Increase</button>
      <br />
      <button type="button" className="btn btn-outline-info" onClick={display}> showProduct </button>
      {showProduct && ( 
        <div>
          <h1>Product Details</h1>
          <p className="fw-bold">Name: {Product.name}</p>
          <p className="fw-bold">Price: {Product.price}</p>
          <p className="fw-bold">Description: {Product.description}</p>
        </div>
      )}
    </>
  );
}

