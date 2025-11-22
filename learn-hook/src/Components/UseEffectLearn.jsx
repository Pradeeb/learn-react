import React,{useEffect,useState} from 'react'

const UseEffectLearn = () => {

  const [name,setName]=useState("valan");

  function setValue(value){
    console.log(value);
    setName(value)
  }

  useEffect(()=>{
    console.log("run effect");
  },[name])
  console.log("Component Renderd");
  
  return (
    <div className='body'>
        <h1>{name}</h1>
        <input type="text" onChange={e => setValue(e.target.value)} />

        <div>
  <ol className="points">
    <li>useEffect is a React Hook used for running side effects in components (e.g., fetching data, DOM updates).</li>
    <li>It runs after the component renders.</li>
    <li>useEffect takes two arguments: a callback function and a dependency array.</li>
    <li>If the dependency array is empty, the effect runs only once (like componentDidMount).</li>
    <li>If you omit the dependency array, the effect runs after every render.</li>
    <li>If you provide dependencies, the effect runs only when those dependencies change.</li>
    <li>You can use multiple useEffect hooks in a single component — each with its own logic.</li>
    <li>Cleanup functions can be returned from useEffect to handle unmounting or re-running logic.</li>
    <li>A common mistake is using useEffect incorrectly in loops or conditionals — it should be called unconditionally at the top level.</li>
    <li>useEffect helps manage lifecycle-like behavior in functional components.</li>
  </ol>
</div>
    </div>
  )
}

export default UseEffectLearn