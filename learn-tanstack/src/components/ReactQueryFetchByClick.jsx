import React from 'react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'

function ReactQueryFetchByClick() {
 

     const fetchPosts = () =>{
        return axios.get("http://localhost:3001/posts")
        }
    
       const {data,isLoading,isFetching,error,isError,refetch }= useQuery({  // we can give any positions  isLoading,isFetching,error,isError,data 
            queryKey:["posts"],
            queryFn: () => fetchPosts(),  
            enabled:false,          // the query function did not load when we call (refetch)  that time call URL below button usw call   
        },)
    
        if(isLoading){
            return <p>Please wait while loading</p>
        }
        if(isError){
            return <p>get some error{error}</p>
        }
      
        return (
            <div className='container'>
                <h3>React Query Fetch</h3>
                <ul className='posts'>
                {
                    data?.data.map((post)=>(
                    <Link key={post.id} to={`/react-query/${post.id}`}>
                    <li className='post'>{post.title}</li>
                    </Link>)
                )
                }
                </ul>
                <button onClick={refetch}>Load...</button>
            </div>
        )
}

export default ReactQueryFetchByClick