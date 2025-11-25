import axios from 'axios'
import React from 'react'
import {useQuery} from '@tanstack/react-query'

function ReactQueryFetch() {

    const fetchPosts = () =>{
    return axios.get("http://localhost:3001/posts")
    }

   const {data,isLoading,isFetching,error,isError, }= useQuery({  // we can give any positions  isLoading,isFetching,error,isError,data 
        queryKey:["posts"],
        queryFn: () => fetchPosts(),
//        staleTime:10000,           // we can control Fetching time
//        refetchInterval:1000,      // its give fetching time usecase like share market price update
//        refetchIntervalInBackground:true  //it's use for another broswer tap the url is fetching it use for setion time decrese HDFC VC model
    })

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
                data?.data.map((post)=>(<li key={post.id} className='post'>{post.title}</li>))
            }
            </ul>
        </div>
    )
}

export default ReactQueryFetch