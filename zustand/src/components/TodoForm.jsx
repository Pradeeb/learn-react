import { useState } from 'react'

const TodoForm = () => {
    const [text, setText] = useState("");

    const addwork=(e)=>{
        e.preventDefault();

        setText("");
    }

    return (
        <>
            <form action="addwork" className='d-flex'>
                <input className='form-control' type="text" placeholder='Enter new Todo'/>
                <input className='btn btn-primary mx-1' type='submit' value="Submit"/>
            </form>
        </>)
}

export default TodoForm