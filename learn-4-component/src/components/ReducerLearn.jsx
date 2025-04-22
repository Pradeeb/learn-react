import { React, useReducer, useState } from 'react'

function reducerFn(currentState,acction){

  switch(acction.type){
    case "increment" :
    return {count:currentState.count + 1};
    case "decrement" :
    return {count:currentState.count - 1}
    default: return currentState ;
  }
 
}

function ReducerLearn() {

  let [state,dispatch]=useReducer(reducerFn,{count:1})

  console.log(state);
  

  let [count, setCount] = useState(1)

  function increment() {
   // setCount((count) => count + 1)
   dispatch({type:"increment"});
  }

  function decrement() {
   // setCount((count) => count - 1)
   dispatch({type:"decrement"});
  }


  return (
    <div className="flex">
     
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 my-1 rounded' onClick={increment}>Increment</button>
      <h3 className="border mx-5">number : {state.count}</h3>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 my-1 rounded' onClick={decrement}>Decrement</button>
    </div>
  )
}

export default ReducerLearn