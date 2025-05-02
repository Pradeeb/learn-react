import { useState } from 'react'
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom"
import './App.css'
import Home from './components/Home'
import ReqularFetch from './components/ReqularFetch'
import ReactQueryFetch from './components/ReactQueryFetch'
import ReactQueryFetchByClick from './components/ReactQueryFetchByClick'
import ReactQueryById from './components/ReactQueryById'
import PaginationQuery from './components/PaginationQuery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <nav className='navbar'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/reqular'>Reqular Fetch</NavLink>
          <NavLink to='/react-query'>Query Fetch</NavLink>
          <NavLink to='/react-click'>Load data By Click</NavLink>
          <NavLink to='/react-pagination'>Pagination</NavLink>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/reqular' element={<ReqularFetch />} />
          <Route path='/react-query' element={<ReactQueryFetch />} />
          <Route path='/react-query/:postId' element={<ReactQueryById />} />
          <Route path='/react-click' element={<ReactQueryFetchByClick />} />
          <Route path='/react-pagination' element={<PaginationQuery />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
