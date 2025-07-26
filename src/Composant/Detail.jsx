import React from 'react';

function Detail({ selectedProduct }) {
  
  if (!selectedProduct) {
    return <p >Select a product to see details.</p>;
  }

  return (
    <div className='second'>
      <img src={selectedProduct.image} alt={selectedProduct.name}  />
      <h1 >{selectedProduct.name}</h1>
      <h2 >{selectedProduct.brand}</h2>
      <p >{selectedProduct.price}</p>
      <p >★ {selectedProduct.rating} / 5</p>
    </div>
  );
}

export default Detail;