import { useReducer } from "react"
const initialState = { count: 0 }

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 }
    case "decerement":
      return { count: state.count - 1 }
    case "reset":
      return { count:0 }
    default:
      break;
  }
}
const UseReducerLearn = () => {
  const [state,dispatch] = useReducer(reducer, initialState);

  return (

    <>
      <div>
        <h1>Count {state.count}</h1>
        <button onClick={()=>dispatch({type:'increment'})}>Increment</button>
        <button onClick={()=>dispatch({type:'decerement'})}>Decrement</button>
        <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
      </div>
    </>
  )
}

export default UseReducerLearn