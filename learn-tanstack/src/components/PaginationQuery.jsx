import { keepPreviousData, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useState } from 'react'

function PaginationQuery() {

  const fetchData= (pageNo)=>{
    return axios.get(`http://localhost:3001/items?_limit=5&_page=${pageNo}`)
  }

  const [page,setPage]=useState(0);

  const{data,isLoading,error}=useQuery(
    {
      queryKey:["items",page],
      queryFn:()=>fetchData(page),
      placeholderData:keepPreviousData,  // it is use for first time i give next it the buffer  feel so use this we can avoid it keep old date when new data load it erase
    }
  )
  
  if(isLoading){
    return <h3>Page is Loading..</h3>
  }else if(error){
    return <h3>geting error..{error}</h3>
  }
  return (
    <div className='container'>
 <h3>
  Pagination Example
 </h3>
 <div className='items'>
 {
  data?.data.map((item)=>(
    <div key={item.id} style={{color:item.color}} className='item'>{item.name}</div>
  ))
 }
 </div>
 <button className='btn-pagination' onClick={()=>{
 setPage((data=> data-1))
 }} disabled={page <=0 ? true:false}>Previous</button>
 <button className='btn-pagination' onClick={()=>{
      setPage((data=>data+1))
 }} disabled={page >= 3 ? true:false} >Next</button>
    </div>
  )
}

export default PaginationQuery