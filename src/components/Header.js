import React from 'react'
import './Header.css'
import Logo from './Logo'

const Header = () => {
  return (
    <div className='header'>
        <div className="header_logo">
            <Logo/>
        </div>

        <div className="header_right">
            <a href='/'>Login</a>
            <button href='/'>Sign up</button>
        </div>
        
    </div>
  )
}

export default Header