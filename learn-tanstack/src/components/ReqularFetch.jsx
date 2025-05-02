import React, { useEffect, useState } from 'react'
import axios from 'axios'

function ReqularFetch() {

    const [post,setPost]=useState([]);
    const [isLoad,setIsLoad]=useState(true);
    const [error,setError]=useState("");
    const [isError,setIsError]=useState(false);

    const fetchPost=async () =>{
        try {
            const response = await axios.get("http://localhost:3001/posts")
            setPost(response.data);
        } catch (error) {
            setError(error);
            setIsError(true)
        }finally{
            setIsLoad(false);
        }
    };
    useEffect(()=>{
        fetchPost();
    },[]);

    if(isLoad){
        return <p>Please wait while loading</p>
    }
    if(isError){
        return <p>get some error{error}</p>
    }

    return (
    <>
        <div className='container'>
            <h3>Reqular</h3>
            <ul className='posts'>
            {
                post.map((post)=>(<li key={post.id} className='post'>{post.title}</li>))
            }
            </ul>
        </div>
    </>
    )
}

export default ReqularFetch