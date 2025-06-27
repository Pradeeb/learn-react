import React,{useCallback, useState} from 'react'
import Product from './Product'

const UseCallbackLearn = () => {
    const [product,setProduct]=useState(['product 1','product 2'])
    const [count,setCount]=useState(0);
    const [cart,setcart]=useState(0);

    const addToCart = useCallback(() =>{
        setcart(cart + 1);
    },[cart]);
  return (
    <div className='body'>
         <h1>Count : {count}</h1>
         <button onClick={()=>setCount(count+1)}>Click the button for increate</button>

          <h1>Cart : {cart}</h1>
    <div >
        {
            product.map((curent,index)=>(
               <Product prod={curent} key={index} addToCart={addToCart}/>
            ))
        }
    </div>
                <ol className="points">
                <li><b>useCallback</b> is a React Hook used to memoize <b>function references</b>.</li>
                <li>It returns a <b>memoized version of the callback function</b> that only changes if its dependencies change.</li>
                <li>Useful when passing callbacks to <code>React.memo</code>-wrapped components to prevent unnecessary re-renders.</li>
                <li>Syntax: <code>{`const fn = useCallback(() => { ... }, [deps])`}</code>.</li>
                <li>Does <b>not</b> execute the function — it just memoizes the function definition.</li>
                <li><b>Dependencies array</b> controls when the function is recreated.</li>
                <li>Optimizes performance by keeping the same function identity between renders when dependencies don’t change.</li>
                <li>Should be used when:
                    <ul>
                        <li>Passing callback to child components</li>
                        <li>Using functions inside <code>useEffect</code> or <code>useMemo</code></li>
                    </ul>
                </li>
                <li>Compare with <code>useMemo</code>:
                    <ul>
                        <li><code>useMemo</code> returns a <b>value</b></li>
                        <li><code>useCallback</code> returns a <b>function</b></li>
                    </ul>
                </li>
                <li>Doesn't help unless function identity matters (e.g., props, dependencies).</li>
                <li>Avoid overusing it; only use it when performance problems appear.</li>
            </ol>
    </div>
  )
}

export default UseCallbackLearn