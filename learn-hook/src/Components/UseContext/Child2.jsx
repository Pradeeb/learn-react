import React, { useContext } from 'react'

const Child2 = () => {

    let {name,age}=useContext(CreateContex);
  return (
    <div>Child2 {name} {age}</div>
  )
}

export default Child2