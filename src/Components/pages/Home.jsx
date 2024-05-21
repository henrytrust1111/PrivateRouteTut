import React from 'react'
import "./page.css"
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
        HOME
        <Link to={"/tutor"} className='link'>TUTOR</Link>
        <Link to={"/admin"} className='link'>ADMIN</Link>
    </div>
  )
}

export default Home
