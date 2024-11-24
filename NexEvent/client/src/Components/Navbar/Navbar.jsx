import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpg'

export const Navbar = () => {
  return (
    <nav className='container'>
        <img src={logo} alt="" className='logo' />
        <ul>
            <li>Home</li>
            <li>Events</li>
            <li>Service</li>
            <li><button className='btn'>Contact</button></li>
        </ul>
    </nav>
  )
}
export default Navbar
