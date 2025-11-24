import { useCallback, useState } from 'react'
import Product from './Product'

const UseCallbackLearn = () => {
     const [number,setNumber] = useState(0);
     const [cart,setcart] = useState(0);
     const [products,setProducts] = useState(["Product 1","Product 2"]);
     
     // useCallback use for avoid recate funtion without any change becase it depend add props function
     const addToCard = useCallback(()=>{
        setcart(cart+1);
     },[cart]);
     console.log("component render");
     
  return (
    <div className='body'>

        <div>
            <h1>Count of click :{number}</h1>
            <button onClick={()=> setNumber(number+1)}>click</button>

            <h1>Count of cart :{cart}</h1>
            {
                products.map((product,index)=>(
                 <Product product={product} key={index} addToCard={addToCard}/>
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