import { useState } from "react";

function LearnUsestate() {

    // **************************************************** single state value
    const [value, setValue] = useState("Study")

    //***************************************************** mutible state value
    const [name, setName] = useState("valan");
    const [age, setAge] = useState(26);

    //******************************************************state with object value
    const [bike, setBike] = useState(
        {
            name: "R15",
            color: "red",
            year: 2020
        }
    );
    function clearBikeDetail() {  // here not get old missing details
        setBike(
            {
                name: "R15 V3",
                color: "gray and red",
            }
        );
    }
    function clearBikeDetails() { // here get old details and new value  
        setBike((oldValue) => {
            return { ...oldValue, year: 2019, name: "R15 V3" }
        });
    }

    //*********************************************************state with Array

    const [list,setList] =useState([]);
    let[num,setNum] = useState(1);

    function addItem (){
      const value="list "+num;
      setList((previousData) =>{ return[...previousData,value]});
      setNum((priviousValue) => { return priviousValue+1 })
    }

    return (
        <>
            {/*single state value */}
            <p>Learn usestate for {value}</p>
            <button onClick={() => { setValue('developing') }}>Change</button>

            {/*mutiple state value */}
            <p>My name is {name} and i am {age} old</p>
            <button onClick={() => { setName("Nazim"); setAge(37) }}>change person</button>

            {/*state with object value*/}
            <p>I have a {bike.color} color {bike.name} bike it's made on {bike.year}</p>
            <button onClick={clearBikeDetails}>full details</button>

             {/*state with List value*/}

             <h1>state with List value</h1>
             <button onClick={addItem}>click me</button>

             <ul>
                {
                    list.map((x,index)=><li key={index}>{x}</li>)
                }
             </ul>
            
        </>
    );
}
export default LearnUsestate;  