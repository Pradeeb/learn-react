// Child2.js
import React, { useContext } from 'react';
import { CreateContex } from './Parent'; // ✅ Import the context

const Child2 = () => {
  const { name, age, secondName } = useContext(CreateContex);
  return (
    <div>
      Child2 {name} {secondName}, Age: {age}
    </div>
  );
};

export default Child2;
