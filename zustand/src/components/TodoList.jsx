import React from 'react'

const TodoList = () => {
    
    const todo=[];
  return (
    <div>
        {
           todo.map((todo,index)=>(
            <div>
                <span className='{}'>{todo.text}</span>
                <button className='btn stn-success'>Complete</button>
                <button className='btn btn-danger'>Delete</button>
            </div>
           ))
           
        }
    </div>
  )
}

export default TodoList