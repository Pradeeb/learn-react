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
    </CreateContex.Provider>
  );
};

export default Parent;
