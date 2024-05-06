import React, { useEffect } from 'react'
import './Skills.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons/faHtml5'
import { faCss3 } from '@fortawesome/free-brands-svg-icons/faCss3'
import { faSass } from '@fortawesome/free-brands-svg-icons/faSass'
import { faJs } from '@fortawesome/free-brands-svg-icons/faJs'
import { faDatabase, faServer } from '@fortawesome/free-solid-svg-icons'
import { faEnvira, faGit, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'

export const Skills = () => {


  return (
    <div className='skills'>
        <h1 className='animation' data-aos="zoom-in">Skills</h1>
        <div className="skill-wrapper">
        <div className="skills-container">
            <div className="left">
                <h2 className='animation' data-aos='zoom-in'>Frontend</h2>
                <div className="left-skills animation" data-aos="zoom-in">
                    <div className="html">
                        <FontAwesomeIcon icon={faHtml5} className='logo' />
                        </div>
                        <div className="html-text">
                            <h2>HTML</h2>
                            <p>Experienced</p>
                    </div>
                    <div className="css">
                        <FontAwesomeIcon icon={faCss3} className='logo' />
                        </div>
                        <div className="css-text">
                            <h2>CSS</h2>
                            <p>Experienced</p>
                    </div>
                    <div className="sass">
                        <FontAwesomeIcon icon={faSass} className='logo'/>
                        </div>
                        <div className="sass-text">
                            <h2>SASS</h2>
                            <p>Intermediate</p>
                    </div>
                    <div className="js">
                        <FontAwesomeIcon icon={faJs}className='logo' />
                    </div>
                        <div className="js-text">
                            <h2>JavaScript</h2>
                            <p>Professional</p>
                        </div>
                        <div className="js">
                        <FontAwesomeIcon icon={faReact}className='logo' />
                    </div>
                        <div className="js-text">
                            <h2>React</h2>
                            <p>Professional</p>
                        </div>
                </div>
            </div>
        </div>
                <div className="skills-container">
            <div className="left">
                <h2 className='animation' data-aos='zoom-in'>Backend</h2>
                <div className="left-skills animation" data-aos='zoom-in'>
                    <div className="html">
                        <FontAwesomeIcon icon={faDatabase} className='logo' />
                        </div>
                        <div className="html-text">
                            <h2>mySQL</h2>
                            <p>Novice</p>
                    </div>
                    <div className="css">
                        <FontAwesomeIcon icon={faNodeJs} className='logo' />
                        </div>
                        <div className="css-text">
                            <h2>NodeJS</h2>
                            <p>Experienced</p>
                    </div>
                    <div className="css">
                        <FontAwesomeIcon icon={faEnvira} className='logo' />
                        </div>
                        <div className="css-text">
                            <h2>MangoDB</h2>
                            <p>Intermediate</p>
                    </div>
                    <div className="sass">
                        <FontAwesomeIcon icon={faServer} className='logo'/>
                        </div>
                        <div className="sass-text">
                            <h2>ExpressJS</h2>
                            <p>Intermediate</p>
                    </div>
                    <div className="js">
                        <FontAwesomeIcon icon={faGit}className='logo' />
                    </div>
                        <div className="js-text">
                            <h2>Git</h2>
                            <p>Professional</p>
                        </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Skills
