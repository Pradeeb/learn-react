import { useReducer } from "react"
const initialState = { count: 0 }

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 }
    case "decerement":
      return { count: state.count - 1 }
    case "reset":
      return { count: 0 }
    default:
      break;
  }
}
const UseReducerLearn = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (

    <>
      <div>
        <h1>Count {state.count}</h1>
        <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
        <button onClick={() => dispatch({ type: 'decerement' })}>Decrement</button>
        <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      </div>
      <ol className="points">
        <li><b>useReducer</b> is a React Hook used for managing complex state logic in function components.</li>
        <li>It’s an alternative to <code>useState</code>, especially useful when:
          <ul>
            <li>State depends on previous state values</li>
            <li>Multiple related state transitions</li>
            <li>State update logic needs to be centralized</li>
          </ul>
        </li>
        <li>Syntax: <code>{`const [state, dispatch] = useReducer(reducer, initialState)`}</code></li>
        <li><b>Reducer function</b> takes two arguments: <code>state</code> and <code>action</code>, and returns the new state.</li>
        <li><b>Initial state</b> is the starting value for the state object.</li>
        <li><b>Dispatch function</b> is used to send actions to the reducer to update the state.</li>
        <li><b>Action</b> is typically an object with a <code>type</code> field (and optionally a <code>payload</code>).</li>
        <li>Common pattern in Redux-like state management.</li>
        <li>Example reducer:
          <pre>
            {`const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      return state;
  }
};`}
          </pre>
        </li>
        <li>Best used for:
          <ul>
            <li>Form state management</li>
            <li>Toggle logic</li>
            <li>Undo/redo functionality</li>
          </ul>
        </li>
        <li>Can be combined with <code>useContext</code> to share reducer-based state globally.</li>
      </ol>

    </>
  )
}

export default UseReducerLearn