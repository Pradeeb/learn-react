import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <>
      <div>
        <ul className="navbar">
          <li>
            <Link to='/home'>Home</Link>
          </li>
          <li>
            <Link to='/usestate'>UseState</Link>
          </li>
          <li>
            <Link to='/useref'>UseRef </Link>
          </li>
          <li>
            <Link to='/useeffect'>UseEffect</Link>
          </li>
          <li>
            <Link to='/usememo'>UseMemo</Link>
          </li>
          <li>
            <Link to='/usecalback'>UseCallBack</Link>
          </li>
          <li>
            <Link to='/usecontext'>UseConext</Link>
          </li>
          <li>
            <Link to='/usereducer'>UseReducer </Link>
          </li>
          <li>
            <Link to='/customhook'>Custom Hook </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Navbar