import React, { useEffect, useState } from 'react'

function UseCallBackList({getItems}) {
  
    const [item,setItem]=useState([]);

    useEffect(()=>{
        setItem(getItems());
        console.log("use Efect run");
        
    },[getItems])
     
  return (
    <div>
        {item.map((item,index)=>{
           return <p key={index}>{item}</p>
        })}
    </div>
  )
}

export default UseCallBackList