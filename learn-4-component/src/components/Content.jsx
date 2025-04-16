import React, { useContext, useState } from 'react'
import CounderApp from './CounderApp';
import { userContext } from '../App';
import LearnList from './LearnList';

const Content = (props) => {
    console.log(props);

    let {user}=useContext(userContext);

    let [user1,setUser]=useState("valan");

    function printSomeThing() {
        console.log("content hello");
        setUser("valan pradeeb");
    }
    

    return (
        <div className='flex justify-center '>
            <div>
                <h1 style={{ textAlign: "center" }} className="text-3xl font-bold underline">{user1} {user.age}</h1>  {/*Use context api use state pass*/}

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 my-1 rounded" onClick={printSomeThing}>click Me</button>
                {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 my-1 rounded" onClick={() => { printSomeThing() }}>click Me</button> */}
                <CounderApp/>
                <LearnList/>
            </div>

        </div>
    )
}

export default Content