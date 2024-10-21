import { useState } from "react";

function LearnUsestate(){

    // single state value
    const[value,setValue]=useState("Study")

    //mutible state value
    const[name,setName]=useState("valan");
    const[age,setAge]=useState(26);

    //state with object value
    const [bike,setBike] = useState(
        {
            name:"R15",
            color:"red",
            year:2020
        }
    );
 
    // use below 
    function clearBikeDetail(){
        setBike({
          name:"R15 V3",
          color:"red black"
        }
        );
    }
    

    return(
     <>
     {/*single state value */}
     <p>Learn usestate for {value}</p>
     <button onClick={()=>{setValue('developing')}}>Change</button>

     {/*mutiple state value */}
     <p>My name is {name} and i am {age} old</p>
     <button onClick={() => {setName("Nazim");setAge(37)}}>change person</button>

     {/*state with object value*/}
     <p>I have a {bike.color} color {bike.name} bike it's made on {bike.year}</p>
     <button onClick={clearBikeDetail}>full details</button>
     </>
    );
}
export default LearnUsestate;  