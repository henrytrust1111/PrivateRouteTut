import React from 'react'
import { Link } from 'react-router-dom'

function Admin() {
  return (
    <div className='home'>
        ADMIN
        <Link to={"/tutor"} className='link'>TUTOR</Link>
        <Link to={"/home"} className='link'>HOME</Link>
    </div>
  )
}

export default Admin
