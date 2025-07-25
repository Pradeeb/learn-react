
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import './App.css'
import Navbar from './Components/Navbar'
import UseStateLearn from './Components/UseStateLearn'
import UseEffectLearn from './Components/UseEffectLearn'
import UseReducerLearn from './Components/UseReducerLearn'
import UseRefLearn from './Components/UseRefLearn'
import UseMemoLearn from './Components/UseMemoLearn'
import UseCallbackLearn from './Components/UseCallback/UseCallbackLearn'
import Parent from './Components/UseContext/Parent'
import CustomHookTest from './Components/CustomHook/CustomHookTest'

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/usestate' element={<UseStateLearn />} />
        <Route path='/useeffect' element={<UseEffectLearn />} />
        <Route path='/usereducer' element={<UseReducerLearn />} />
        <Route path='/useref' element={<UseRefLearn />} />
        <Route path='/usememo' element={<UseMemoLearn />} />
        <Route path='/usecalback' element={<UseCallbackLearn />} />
        <Route path='/usecontext' element={<Parent />} />
         <Route path='/customhook' element={<CustomHookTest />} />
      </Routes>
    </Router>
  )
}

export default App
