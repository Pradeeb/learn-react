import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
function App() {


  return (
    <div>
      <p className='h1'>Zustand Todo List</p>
      <TodoForm/>
      <TodoList/>
    </div>
  )
}

export default App
