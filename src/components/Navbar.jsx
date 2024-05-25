import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div style={{display:'flex', justifyContent:'space-evenly'}}>
        <Link to='/'>Home</Link>
        <Link to='/admin'>Admin</Link>
        <Link to='/favorites'>Favorites</Link>
    </div>
  )
}

export default Navbar