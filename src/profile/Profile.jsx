import React from 'react'
import "./Profile.scss"
import cover from "../assets/IMG_3647.JPG"
import photo from "../assets/2023_05_18_21_52_IMG_4466.JPG"
import { Link } from 'react-router-dom'

export const Profile = () => {
  return (
    <div className='profile'>
        <div className="profile-cover">
            <img src={cover} alt="" />
        </div>
        <div className="profile-photo">
            <img src={photo} alt="" />
            <div className="hangle">
            <div className="name">Alikamatu Osama</div>
            <p>Full stack developer <span>MERN</span></p>
            </div>
        </div>
        <div className="navlinks">
            <ul>
                <Link to="/"><li>Bio</li></Link>
                <Link to="/skills"><li>Skills</li></Link>
                <Link to="/projects"><li>Projects</li></Link>
                <Link to="/contact"><li>Contect</li></Link>
            </ul>
            <hr />
        </div>
    </div>
  )
}
