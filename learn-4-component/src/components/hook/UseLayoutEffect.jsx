import React,{useLayoutEffect,useRef,useState} from 'react'

// its used for muted DOM with sysnchronized
const UseLayoutEffect = () => {
    let [height,setHeight]=useState(0);
    let boxRef=useRef();

    let measureBox=()=>{
         const height =boxRef.current.clientHeight;
         setHeight(height);
    }

    useLayoutEffect(()=>{
        measureBox();
    },[])

  return (
    <>
    <div ref={boxRef} style={{height:'400px',backgroundColor:'GrayText'}}>UseLayoutEffect</div> {/*  if we made any manual change here height it sysnchronily add H1 tag below */}
    <h1>{height}px</h1>
   </>
  )
}

export default UseLayoutEffect