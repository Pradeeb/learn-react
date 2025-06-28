import React, { createContext } from 'react'
import Child1 from './Child1'

let CreateContex=createContext();

const Parent = () => {
      const name = 'valan';
      const age = 25;

    const [secondName, setSecondName] = useState('initial');
  return (
    <CreateContex.Provider value={{ name, age , secondName , }}>
        <div>Parent</div>
        <Child1 />
    </CreateContex.Provider>

  )
}

export default Parent