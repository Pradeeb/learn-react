
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import './App.css'
import Navbar from './Components/Navbar'
import UseStateLearn from './Components/UseStateLearn'
import UseEffectLearn from './Components/UseEffectLearn'

function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
         <Route path='/home' element={<Home/>}/>
         <Route path='/usestate' element={<UseStateLearn/>}/>
          <Route path='/useeffect' element={<UseEffectLearn/>}/>
      </Routes>
    </Router>
  )
}

export default App
