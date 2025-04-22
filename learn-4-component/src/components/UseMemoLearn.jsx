import React, { useMemo, useState } from 'react'

function UseMemoLearn() {

    let [count,setCount]=useState(10);
    let [arr,setArr]=useState([1,2,3,4,5]);

    function showMax(){
        console.log("show max function load");
        
        return Math.max(...arr);
    }

    const memoNum=useMemo(()=>showMax(),[arr])  // use memo use for pure funtion it mean the pure function data mostly dont modify useMemo meorize the value and dotn reload it

  return (
    <div>
               <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 my-1 rounded' onClick={()=>{setCount(count=>count+1)}}>
                increase
               </button>
               <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 my-1 rounded' onClick={()=>{setArr([...arr,Math.round(count*Math.random())])}}>
                add array value
               </button>
               <p>{memoNum}</p>
               <p>{JSON.stringify(arr)}</p>
               <p>{count}</p>
    </div>
  )
}

export default UseMemoLearn