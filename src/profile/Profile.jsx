import React, { useContext } from 'react'
import "./Profile.scss"
import cover from "../assets/programmer.png"
import photo from "../assets/image.png"
import { Link } from 'react-router-dom'
import { DarkModeContext } from '../darkModeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons'

export const Profile = () => {

    const {toggle,darkMode} = useContext(DarkModeContext);

  return (
    <div className='profile'>
        <div className="profile-cover">
            <img src={cover} alt="" />
        </div>
        <div className="profile-photo">
           <div className="photo">
           </div>
           <img src={photo} alt="" />
            <div className="handle">
            <div className="name">Alikamatu Osama</div>
            <p>Full stack developer</p>
            <p>Graphic Designer</p>
            </div>
        </div>
        <div className="navlinks">
            <ul>
                <Link className='base' style={{textDecoration: "none"}} to="/"><li>Bio</li></Link>
                <Link style={{textDecoration: "none"}} to="/skills"><li>Skills</li></Link>
                <Link style={{textDecoration: "none"}} to="/projects"><li>Projects</li></Link>
                <Link style={{textDecoration: "none"}} to="/contact"><li>Contect</li></Link>
                <li>{darkMode ? <FontAwesomeIcon icon={faCircleHalfStroke} onClick={toggle} className='mode'/> 
            : <FontAwesomeIcon icon={faCircleHalfStroke} onClick={toggle} className='mode'/>}</li>
            </ul>
            <hr />
        </div>
    </div>
  )
}
