import React from 'react'
import { useStrore } from '../store';

const TodoList = () => {
    
    const todos=useStrore(state => state.todos);
    const toggleTodo=useStrore(state => state.toggleTodo);
    const deleteTodo=useStrore(state => state.deleteTodo)

  return (
    <div>
        {
           todos.map((todo,index)=>(
            <div className="todo-item" key={index}>
                <span className={todo.completed ? "completed":""}>{todo.text}</span>
                <button className='btn btn-success' disabled={todo.compleded} onClick={()=>toggleTodo(index)}>Complete</button>
                <button className='btn btn-danger' onClick={()=>deleteTodo(index)}>Delete</button>
            </div>
           ))
           
        }
    </div>
  )
}

export default TodoList