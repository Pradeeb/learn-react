import { useEffect, useState } from "react";

export default function LearnUseeffect() {
    const [count, setCount] = useState(1);

   // useeffect use for the screen render, useEffect call back function after give [] the [] inside give value fallow screen rendered.

   //*******************************************************************if given [] value fallowed screen rendered.

    useEffect(() => {
        console.log("Screen renderd..");
        checkCount();
    }, [count]);

   // *******************************************************************if not give []  array value its loop
    // useEffect(() => {
    //     console.log("Screen renderd..");
    //     // checkCount();
        
    //     setTimeout(()=>{
    //         setCount((priviousValue)=>{return priviousValue+1});
    //     },1000);
    // });

    function increaseCount (){
        setCount((priviousValue)=>{return priviousValue+1});
    }
    function checkCount (){
        if(count > 10)
        setCount(1);
    }


    return (
        <div>
            <h1>Screen rendered {count} times!</h1>
            <button onClick={increaseCount}>Screen render</button>
        </div>
    );
}