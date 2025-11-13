import React, { Suspense } from 'react'
import './App.css'
import Lazy from './components/lazy'

const LasyComponent=React.lazy(()=> import("./components/lazy'"))
function App() {

  return (
    <>
      <Suspense fallback={<div>Loading</div>}>
       <LasyComponent/>
      <Suspense/>
    </>
  )
}

export default App
