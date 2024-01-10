import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import './HeaderStyles.css'
import { FaBars, FaTimes } from 'react-icons/fa';
function Header() {
  const [click, setClick] = useState(false);
    const handleClick=(()=>{
        return setClick(!click);
    })
  return (
    <>
      <div className='header text-color'>
        <p style={{ fontSize: '24px', fontWeight: '700', color: '#FCEE21' }}>Dive Into Skills</p>
        <ul className={click ?('nav-menu active'):('nav-menu')}>
          <Link to='/'><li className='nav-item' >
            Home
          </li></Link>
          <Link to='/Blogs'><li className='nav-item'>
            Blogs
          </li></Link>
          <Link to='/Courses'><li className='nav-item'>
            Courses
          </li></Link>
          <Link to='/About'><li className='nav-item'>
            About
          </li></Link>
          <Link to='/Contact'><li className='nav-item'>
            Contact
          </li></Link>
        </ul>
        <div className='hamsburger' onClick={handleClick}>
          {click ? (<FaTimes size={25} style={{ color: 'white' }} />) : <FaBars size={25} style={{ color: 'white' }} />}


        </div>
      </div>
    </>
  )
}

export default Header