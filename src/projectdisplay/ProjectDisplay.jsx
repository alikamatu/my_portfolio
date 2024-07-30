import React, { useState } from 'react'
import Category from '../category/Category'
import './ProjectDisplay.scss'
import Projects from '../projects/Projects'

const ProjectDisplay = () => {

    const [menu, setMenu] = useState('All')

  return (
    <div className='project-display'>
      <Category menu={menu} setMenu={setMenu} />
      <Projects menu={menu} setMenu={setMenu} />
    </div>
  )
}

export default ProjectDisplay
