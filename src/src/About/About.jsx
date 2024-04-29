import React, { useEffect } from 'react'
import './About.scss'
import photo from '../assets/2023_07_05_13_58_IMG_5804.JPG'
import AOS from "aos"
import '../assets/aos.css'

const About = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, [])

  return (
    <div className='about'>
      <img src={photo} alt="" loading='lazy' className='animation' data-aos="zoom-in"/>
      <div className='left'>
        <h2 className='animation' data-aos="zoom-in">About Me</h2>
        <hr className='animation' data-aos="zoom-in"/>
        <p className='animation' data-aos="zoom-in">
        I am a full stack web developer with a passion for span creating interactive and responsive 
        web applications. I have experience working with JavaScript, React, Redux, Node.js, 
        Express, PostgreSQL, Sequelize, HTML, CSS, and Git. I am a quick learner and I am always looking to expand my knowledge and skill set. I am 
        a team player and I am excited to work with others to create amazing applications.
        </p>
        <div  className='stat animation' data-aos="zoom-in">
          <div className="boxes">
        <h3 className='animation' data-aos="zoom-in">5+</h3>
        <p  className='animation' data-aos="zoom-in">Years Experience</p>
      </div>
      <div className="boxes">
      <h3 className='animation' data-aos="zoom-in">30+</h3>
      <p className='animation' data-aos="zoom-in">Happy Clients</p>
      </div>
          </div>
      </div>
    </div>
  )
}

export default About
