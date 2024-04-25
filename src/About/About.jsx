import React from 'react'
import './About.scss'
import photo from '../assets/2023_07_05_13_58_IMG_5804.JPG'

const About = () => {
  return (
    <div className='about'>
      <img src={photo} alt="" loading='lazy' />
      <div className='left'>
        <h2>About Me</h2>
        <hr />
        <p>
        I am a full stack web developer with a passion for creating interactive and responsive web applications. I have experience working with JavaScript, React, Redux, Node.js, Express, PostgreSQL, Sequelize, HTML, CSS, and Git. I am a quick learner and I am always looking to expand my knowledge and skill set. I am 
        a team player and I am excited to work with others to create amazing applications.
        </p>
        <div className="stat">
          <div className="boxes">
        <h3>5+</h3>
        <p>Years Experience</p>
      </div>
      <div className="boxes">
      <h3>30+</h3>
      <p>Happy Clients</p>
      </div>
          </div>
      </div>
    </div>
  )
}

export default About
