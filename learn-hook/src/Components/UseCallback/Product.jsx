import React from 'react'

// React.memo => use for avoid to re render if without modified props value come
const Product = React.memo(({product ,addToCard}) => {
    console.log("Product page rendered");
    
  return (
    <div style={{border:"2px solid black",  width:"50%" , margin:"10px" , padding:"10px"}}>
        <h1>Product name : {product}</h1>
        <button onClick={addToCard}>add to cart</button>
    </div>
  )
});

export default Product