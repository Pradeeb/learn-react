import React from 'react'
import useCustomHook from './UseCustomHook'

const CustomHookTest = () => {

 const {count,increment} = useCustomHook();
  return (
    <>
    <div>
        <h1> Count : {count} </h1>
        <button onClick={increment}>Increment</button>
    </div>
    </>
  )
}

export default CustomHookTest