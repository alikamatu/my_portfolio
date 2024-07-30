import React from 'react'
import "./Projects.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { project } from '../assets/projects'

export const Projects = ({menu}) => {
  return (
    <div className='projects'>
      {project.map((item, index) => {
        if (menu==="All" || menu===item.category) {
        return  <div className="project-template" key={index}>
        <div className="image-sec">
        <img src={item.imageUrl} alt="" />
        </div>
        <div className="details-sec">
          <div className="top">
          <h2>{item.name}</h2>
          <hr />
          <FontAwesomeIcon icon={faLink} className='icon' /> 
          </div>
          <div className="stack">
            <p>{item.stack}</p>
          </div>
          <p>{item.description}</p>
        </div>
      </div>
}})}
    </div>
  )
}

export default Projects