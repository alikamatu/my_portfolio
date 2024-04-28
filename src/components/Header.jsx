import React, { useContext, useEffect, useState } from 'react'
import './Header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faHtml5, faNodeJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import MobileNav from '../MobileNav/MobileNav'
import { faBars, faLightbulb, faMoon, faXmark } from '@fortawesome/free-solid-svg-icons'
import { DarkModeContext } from '../darkModeContext'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Header = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, [])

    const [openMenu, setOpenMenu] = useState(false); 

  const {toggle, darkMode} = useContext(DarkModeContext);


    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    }
  return (
    <>
    <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
    <div className='header'>
      <div className="header-container">
      </div>
      <div className="navlinks">
        <ul>
          <li>Home</li>
          <li>Skill</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
       <div className="mode">
       {
          darkMode ? (<FontAwesomeIcon icon={faLightbulb}  className='icon' onClick={toggle}/>) :
          <FontAwesomeIcon icon={faMoon}  className='icon' onClick={toggle }/>
        }
       </div>
        <button className='menu' onClick={toggleMenu}>
          <span 
          className={"material-symbols-outlined"}
          >
        {openMenu ? <FontAwesomeIcon icon={faXmark}/> : <FontAwesomeIcon icon={faBars} />}
          </span>
        </button>
        </div>
      <div className="header-wrapper animation">
        <div className="left animation" data-aos="zoom-in">
        <p className='greet'>Hello there, I'm</p>
      <p className='name'>Alikamatu Osama</p>
      <h2 className='stat'>A Full Stack Developer</h2>
      <p className='lorem'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore laboriosam asperiores, quod officia delectus.</p>
      <div className="icons">
        <FontAwesomeIcon icon={faReact} className='icon' />
        <FontAwesomeIcon icon={faCss3} className='icon'/>
        <FontAwesomeIcon icon={faHtml5} className='icon'/>
        <FontAwesomeIcon icon={faPython} className='icon'/>
        <FontAwesomeIcon icon={faNodeJs} className='icon' />
      </div>
      <button>Let's get to work</button>
        </div>
        <div className="right">
        </div>
      </div>
    </div>
    </>
  )
}

export default Header
