import React, { useState } from 'react'

import logo from './utils/constanats.js'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate();

  const [searchTerm, setsearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if( searchTerm) {
      navigate( `/search/${searchTerm}` );
    }

    setsearchTerm( '' );
  }

  return (
    <div className='navbar'>
        <img src={logo} alt="Youtube logo" />
        <form action="" onSubmit={handleSubmit}>
          <div className='search' >
            <input type="text" placeholder='Search' onChange={(e) => {setsearchTerm(e.target.value)}} />
            <button onClick={handleSubmit}><i className="fa-solid fa-magnifying-glass"></i></button>
          </div>
        </form>
    </div>
  )
}

export default Navbar