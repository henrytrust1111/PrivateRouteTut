import React from 'react'
import { Link } from 'react-router-dom'

function Tutor() {
  return (
    <div className='home'>
    TUTOR
    <Link to={"/admin"} className='link'>ADMIN</Link>
    <Link to={"/home"} className='link'>HOME</Link>
</div>
  )
}

export default Tutor