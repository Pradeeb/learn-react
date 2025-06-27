import React from 'react'

const Product = React.memo(({product ,addToCard}) => {
    console.log("Product page rendered");
    
  return (
    <div>
        <h1>Product name : {product}</h1>
        <button onClick={addToCard}>add to cart</button>
    </div>
  )
});

export default Product