import React from 'react'

const Product = React.memo(({ prod, addToCart }) => {
    console.log("Prdouct load =>", prod);

    return (
        <div>
            <h1>{prod}</h1>
            <button onClick={addToCart}>add to cart</button>

        </div>
    )
});

export default Product