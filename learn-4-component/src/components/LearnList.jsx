import React, { useState } from 'react'
import { FaTrashCan } from "react-icons/fa6";

function LearnList() {

    let [items,setItems]=useState(
        [
            {id:1, label:"HTML & CSS", checked : true},
            {id:2, label:"java script", checked : true},
            {id:3, label:"react js", checked : true},
        ]
    )

  return (
    <>
    <div>Learn List</div>
    <div>
        <input type="text" className='border'/><button className='border'>add</button>
    </div>
    <ul>
        {
            items.map(
                (item) =>{
                    return(
                        <li key={item.id}>
                            <input type='checkbox' checked={item.checked}/>
                            <label>{item.label}</label>
                            <FaTrashCan role="button"/>
                        </li>
                    )
                }
            )
        }
    </ul>
    </>
  )
}

export default LearnList