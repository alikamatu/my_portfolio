import React from 'react'
import './About.scss'
import photo from '../assets/me.JPEG'

const About = () => {
  return (
    <div className='about'>
      <img src={photo} alt="" loading='lazy' />
      <div className='left'>
        <h2>About Me</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, vel sunt impedit, pariatur perferendis 
          consequuntur hic consectetur dolor sit velit illo assumenda vero. Provident perspiciatis ducimus repellendus dicta non in.</p>
          <div className="stat">
          <div className="boxes">
        <h3>5+</h3>
        <p>Years Experience</p>
      </div>
      <div className="box">
      <h3>30+</h3>
      <p>Happy Clients</p>
      </div>
          </div>
      </div>
    </div>
  )
}

export default About
