// Parent.js
import React, { createContext, useState } from 'react';
import Child1 from './Child1';

export const CreateContex = createContext(); // ✅ Export the context

const Parent = () => {
  const name = 'valan';
  const age = 25;

  const [secondName, setSecondName] = useState('initial');

  return (
    <CreateContex.Provider value={{ name, age, secondName, setSecondName }}>
      <div>Parent</div>
      <Child1 />
      <ol className="points">
        <li><b>useContext</b> is a React Hook used to access values from a <code>React Context</code>.</li>
        <li>It helps in avoiding <b>prop drilling</b> by allowing components to consume global values directly.</li>
        <li>Syntax: <code>{`const value = useContext(MyContext)`}</code></li>
        <li>Requires a context object created with <code>createContext()</code>.</li>
        <li>Works inside the <b>function component</b> only — it cannot be used in class components.</li>
        <li>The value returned is determined by the nearest matching <code>Context.Provider</code> up the tree.</li>
        <li><b>Automatically subscribes</b> the component to context changes — triggers re-render on updates.</li>
        <li>Should be used when:
          <ul>
            <li>You want to share state or functions across multiple components</li>
            <li>You want to avoid passing props down manually at many levels</li>
          </ul>
        </li>
        <li>Compare with <code>useReducer</code> or <code>Redux</code> for more advanced shared state logic.</li>
        <li>Can also be combined with <code>useState</code>, <code>useReducer</code>, or <code>useCallback</code> for managing and sharing logic.</li>
        <li><b>Context updates</b> cause re-renders in all consuming components — avoid excessive updates for performance.</li>
      </ol>

    </CreateContex.Provider>
  );
};

export default Parent;
