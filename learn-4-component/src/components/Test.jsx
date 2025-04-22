import React, { useReducer, useState } from 'react'

// Reducer function that handles different action types
function reducerFn(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Test() {
  const [name, setName] = useState("Valan");
  const [state, dispatch] = useReducer(reducerFn, { count: 1 });

  function fullName() {
    setName("Valan Pradeeb");
  }

  function changeName() {
    setName("Pradeeb");
  }

  function increment() {
    dispatch({ type: 'increment' }); // ✅ Correctly sending an action
  }

  return (
    <div>
      <h2>{name}</h2>
      <h1>Count: {state.count}</h1> {/* ✅ Display count properly */}
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 my-1 rounded'
        onClick={fullName}
      >
        Full Name
      </button>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 my-1 rounded'
        onClick={changeName}
      >
        Change Name
      </button>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 my-1 rounded'
        onClick={increment}
      >
        Increment
      </button>
    </div>
  );
}

export default Test;
