import React, { useState } from 'react'

function UseStateLearn() {

    const [user,setUser]=useState("react");

    function changeName(){
        setUser("UseState Learn");
        
    }
    function rename(){
        setUser("react");
        
    }

  return (
    <div>
        <h3>Name : {user}</h3>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 my-1 rounded' onClick={changeName}>Change name</button>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 my-1 rounded' onClick={rename}>Rename</button>
    </div>
  )
}

export default UseStateLearn