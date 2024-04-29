import React, { useEffect } from 'react'
import './MobileNav.scss'
import AOS from 'aos'
import '../assets/aos.css'

const MobileNav = ({isOpen, toggleMenu}) => {

  useEffect(() => {
    AOS.init({duration: 1000})
  })

  return (
    <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
      <div className="menu-container" >
      <ul className='animation' data-aos='fade-up'>
          <li>Home</li>
          <li>Skill</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default MobileNav
