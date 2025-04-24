import React, { useState } from 'react'
import { addCustomer as addcustomerAction } from '../slices/customerSlice';
import { useDispatch } from 'react-redux';

function CustomerAdd() {

  const[input,setInput]=useState("");
  const dispatch=useDispatch();
 // const[customers,setCustomers]=useState([])

  function addCustomer(){
    if(input){
    //  setCustomers((previousState)=> [...previousState,input])     
      dispatch(addcustomerAction(input));
      setInput("");
    }
  }

  return (
    <div>
        <h3>Add New Coustomer</h3>
        <input type='text' value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button onClick={addCustomer}>Add</button>
    </div>
  )
}

export default CustomerAdd