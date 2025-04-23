import React, { useCallback, useState } from 'react'
import UseCallBackList from './UseCallBackList';

function UseCallBackLearn() {

    const [num,setNum]=useState(0);
    const [dark,setDark] =  useState(false);

    const getItems = useCallback(()=>{
      return [num+1,num+2,num+3];
  },[num])

    const theme = {
        backgroundColor: dark ? "black" : "white",
        color:dark ? "white" : "black"
    }

  return (
    <div style={theme}>
        
        <input type="number" value={num} onChange={(e)=> setNum(parseInt(e.target.value))}  className="border"/>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 my-1 rounded' 
        onClick={()=>setDark(current=>!current)}>toggle Theme</button>
        <UseCallBackList getItems={getItems}/>
    </div>
  )
}

export default UseCallBackLearn