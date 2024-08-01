import React from 'react'
import "./Bio.scss"
import file from '../assets/document.pdf'

export const Bio = () => {

  const handleDownlaod = () => {
    const link = document.createElement('a');
    link.href = file
    link.download = 'Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className="bio">
    <h1>Bio</h1>
    <p>I am a full stack web developer with a passion for creating interactive and responsive web applications. 
        I have experience working with JavaScript, React, Redux, Node.js, Express, Mongo, Tailwind, HTML, CSS, and Git. 
        I am a quick learner and I am always looking to expand my knowledge and skill set. 
        I am a team player and I am excited to work with others to create amazing applications.</p>
        <button onClick={handleDownlaod}>Download CV</button>
</div>
  )
}

export default Bio
