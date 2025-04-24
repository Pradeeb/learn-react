import { useState } from 'react'
import './App.css'
import CustomerAdd from './component/CustomerAdd'
import CustomerView from './component/CustomerView';

import {Provider} from 'react-redux'
import Store from './Store'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Provider store={Store}>
      <h1>Learn redux</h1>
      <CustomerAdd />
      <CustomerView/>
      </Provider>
    </>
  )
}

export default App
