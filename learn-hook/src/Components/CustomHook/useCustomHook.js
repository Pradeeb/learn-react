// useCustomHook.js
import { useState } from 'react';

function useCustomHook() {
  const [count, setCount] = useState(1);

  const increment = () => setCount(count + 1);

  return { count, increment };
}

export default useCustomHook;
