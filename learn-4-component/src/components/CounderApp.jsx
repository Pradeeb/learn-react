import React, { useState } from 'react'

function CounderApp() {

    let[count,setCount]=useState(0);

    function increase(){

        setCount(count => count+1)
        
    }
    function decrease(){

        setCount(count = count-1)
        
    }

  return (
    <div>
        <h1>Counter count -{count} </h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 my-1 mx-1 rounded" onClick={increase}>Increase</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 my-1 rounded" onClick={decrease}>Decrease</button>
    </div>
  )
}

export default CounderApp