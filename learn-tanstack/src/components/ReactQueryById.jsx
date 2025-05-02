import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom'

function ReactQueryById() {
  function  fetchfunction(postId){
     return axios.get(`http://localhost:3001/posts/${postId}`)
    }
    const{postId}=useParams();  
   const {data,isError,isLoading,error} =useQuery(
       {
        queryKey:["posts",postId],
        queryFn:()=>fetchfunction(postId)
       }
   )
   if(isError){
    return <h3>Its get error</h3>
   }else if(isLoading){
    return <h3>Its get Loading...</h3>
   }else if(error){
    return <h3>{error}</h3>
   }
 
   const{title,body,id}=data?.data || {};
  return (
    <div className='container'>
        <h3>{id} {title}</h3>
        <h3>{body}</h3>
    </div>
  )
}

export default ReactQueryById