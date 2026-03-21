
import {useState} from 'react';
import './App.css'

function App() {

  const[name,setName]=useState("");
  const[password,setPassword]=useState("");
  const[show,setShow]=useState(false);
  
  const namefun=(e)=>{
     setName(e.target.value)
  }
   const passwordfun=(e)=>{
    setPassword(e.target.value)
  }

  const showfun= ()=>{

    setShow((pre)=>{
      if(pre == false){return true}
      else{return false}
       
    })

  }

  return (
    <>
     <div color='login'>
      <h1>Login</h1>
      <div className='input'>
        <input name='username' type='text' required placeholder='user name' /> {/*onChange={(e)=> setName(e.target.value)} */}
      </div>
      <div className='input'>
        <input name='password' type='password' required placeholder='password' onChange={(e)=>passwordfun(e)}/>
      </div>
      <div className='input'>
        <input type="button" className='button' onClick={showfun} value={"Login"}/>
      </div>
      { show ? <h5>{`${name}   ${password}`}</h5> : null}
     </div>
    </>
  )
}

export default App
