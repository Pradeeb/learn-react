import React from 'react'
import { useSelector } from 'react-redux'
import { deleteCustomer } from '../slices/customerSlice';
import { useDispatch } from 'react-redux';

function CustomerView() {
  const listStyle={
    listStyle:'none'
  }

  const customers=useSelector((state) => state.customers )
  const dispatch=useDispatch();

  function deleteHandler(index){
    dispatch(deleteCustomer(index));
  }

  return (
    <div>
      <h3>Customer List</h3>
      <ul style={listStyle}>
        {customers.map((customer,index)=> <li key={index}>{customer} <button onClick={()=>deleteHandler(index)}>Delete</button></li>)}
      </ul>
    </div>
  )
}

export default CustomerView