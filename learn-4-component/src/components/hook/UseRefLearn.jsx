import React, { useState, useRef } from 'react'

function UseRefLearn() {

    const[input,setInput]=useState("");

    const inputRef=useRef();

    console.log("Vlaue Enterd "+input);

    const display=()=>{
       
        setInput(inputRef.current.value);
        
    }
    

  return (
    <div>
        <h1><b>USEREF</b></h1>
        <p>Below is, if i type input side every leater it's not reload component check console</p>
        
        <input className='border' ref={inputRef} type='text'/>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 my-1 rounded' 
         onClick={display}>show input</button>

        <p>Below is, if i type input side every leater reload component check console</p>
        <br/>
        <input className='border' type='text' value={input} onChange={(e)=> setInput(e.target.value)}/>
    </div>
  )
}

export default UseRefLearn