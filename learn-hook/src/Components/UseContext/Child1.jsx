// Child1.js
import React, { useContext } from 'react';
import { CreateContex } from './Parent'; // ✅ Import the context
import Child2 from './Child2';

const Child1 = () => {
  const { secondName, setSecondName } = useContext(CreateContex);
  setSecondName("pradeeb")
  return (
    <>
      <div>Child1</div>
      <Child2 />
    </>
  );
};

export default Child1;
