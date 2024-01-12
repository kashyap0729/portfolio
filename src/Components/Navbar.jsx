import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='header'>
        <NavLink to="/portfolio" className="w-50 h-10 rounded-lg items-center justify-center flex font-bold shadow-md">
            <p className='blue-gradient_text'>Rama Chandra Kashyap</p>
        </NavLink>
        <nav className='nav-abc flex text-lg gap-7 font-medium'>
            <NavLink to="/about" className={({isActive})=>isActive?
            'text-blue-500':'text-white'}>About</NavLink>
        </nav>
        <nav className='nav-abc flex text-lg gap-7 font-medium'>
            <NavLink to="/projects" className={({isActive})=>isActive?
            'text-blue-500':'text-white'}>Projects</NavLink>
        </nav>
        <nav className='nav-abc flex text-lg gap-7 font-medium'>
            <NavLink to="/contact" className={({isActive})=>isActive?
            'text-blue-500':'text-white'}>Contact</NavLink>
        </nav>
    </header>
  )
}

export default Navbar;