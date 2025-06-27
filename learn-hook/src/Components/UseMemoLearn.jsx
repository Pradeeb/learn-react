import React, { useMemo, useState } from 'react';

const UseMemoLearn = () => {
    const [number, setNumber] = useState(0);
    const [arr, setArr] = useState([1,2,3,4,5]);

    const findMax=()=>{
        console.log("find max use pure function");
        
        return Math.round(Math.max(...arr))
    }

    const memoMax=useMemo(()=>findMax() || 0,[arr]);
    console.log("component is renderd");
  
    return (
        <div className='body'>
        
             <h2>{memoMax} is a maximun id {arr}, state change count :{number}</h2>
             <button onClick={()=>setNumber(number+1)}>change the state</button>

             <button onClick={()=>setArr([...arr,Math.round(Math.random()+10)])}>change the arr</button>
         

            <ol className="points">
                <li><b>UseMemo</b> it's used for only pure function</li>
                 <li><b>pure function</b> mean its not create any side effect and when give same input retrun same result</li>
                <li><code>useMemo</code> is a React Hook that memoizes the result of a computation between renders.</li>
                <li>It returns a cached value: <code>{`const memoizedValue = useMemo(() => compute(), [dependencies])`}</code>.</li>
                <li>The function only re-runs when one of the dependencies changes.</li>
                <li>It helps optimize performance by avoiding unnecessary recalculations.</li>
                <li>Commonly used with expensive computations like filtering, sorting, or calculating derived state.</li>
                <li>Returns the result of the function, not a function reference (unlike <code>useCallback</code>).</li>
                <li>Acts as a cache for pure function output based on input (dependencies).</li>
                <li>Should not be used for side effects; only for returning computed values.</li>
                <li>Improves rendering performance in large or frequently updated components.</li>
                <li>Be cautious: avoid overusing it for minor optimizations; profile first.</li>
            </ol>
        </div>
    );
};

export default UseMemoLearn;
