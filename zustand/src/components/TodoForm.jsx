import { useState } from 'react'
import { useStrore } from '../store';

const TodoForm = () => {
    const [text, setText] = useState("");

    const addTodo = useStrore((state)=> state.addTodo)

    const addwork=(e)=>{
        e.preventDefault();
        if(text.trim() !== ""){
        addTodo({text,completed:false})
        setText("");
        }
    }

    return (
        <>
            <form onSubmit={addwork} className='d-flex'>
                <input className='form-control' type="text" placeholder='Enter new Todo' value={text} onChange={(e) => setText(e.target.value)}/>
                <input className='btn btn-primary mx-1' type='submit' value="Submit"/>
            </form>
        </>)
}

export default TodoForm