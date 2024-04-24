import React from 'react'
import './MobileNav.scss'

const MobileNav = ({isOpen, toggleMenu}) => {
  return (
    <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
      
      <div className="menu-container">
      <ul>
          <li><a href="https://www.google.com">Home</a></li>
          <li>Skill</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default MobileNav
