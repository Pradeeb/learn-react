import React,{useState,useEffect} from 'react'

function UseEffectLearn() {

    let [count,setCount]=useState(0);
    let [message,setMessage]=useState("initial Meassage");

    useEffect(()=>{
        console.log("component mounted / updated");
        console.log(message);
        console.log("count is increased to",count);
        
       },[count,message]);

  return (
    <div>
       <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 my-1 rounded'
       onClick={()=>{setCount(count=>count+1)}}
       >increase</button>
       <p>The Count Value IS : {count}</p>
       <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 my-1 rounded'
              onClick={()=>{setMessage("message update on click event")}}
       >messgae update</button>
    </div>
  )
}

export default UseEffectLearn