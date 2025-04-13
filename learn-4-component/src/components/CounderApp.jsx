import React, { useState } from 'react'

function CounderApp() {

    let[count,setCount]=useState(0);

    function increase(){

        setCount(count => count+1)
        
    }
    function decrease(){

        setCount(count = count-1)
        
    }

    let message;
    if(count>= 10&& count<=20){
        message=(
        <div>
            <h3>you clicked{count} time</h3>
        </div>
        )
    }else if(count< 10){
        message=(
            <div>
                <h3>stil dont reach the minimum rewarts</h3>
            </div>
            )
    }else{
        message =(
            <div>
            <h3>You are master</h3>
        </div>
        )
            
        }
    

  return (
    <div>
        <h1>Counter count -{count} </h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 my-1 mx-1 rounded" onClick={increase}>Increase</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 my-1 rounded" onClick={decrease}>Decrease</button>
        {count >= 10 ? <p>you unlocked a 10% Discount</p> : <p>click 10 timed to unlock Reward</p>}
        {message}
    </div>
  )
}

export default CounderApp