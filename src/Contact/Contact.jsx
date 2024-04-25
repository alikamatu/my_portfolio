import React from 'react'
import './Contact.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export const Contact = () => {
  return (
    <div className='contact'>
        <h2>Get In Touch</h2>
        <form action="">
            <div className="fill-area">
            <label htmlFor=""><p>Name</p></label>
    <input type="text" name="" id="" placeholder='Name' />
            </div>
            <div className="fill-area">
            <label htmlFor=""><p>Email</p></label>
    <input type="email" name="" id="" placeholder='Email' />
            </div>
            <div className="fill-area">
            <label htmlFor=""><p>Message</p></label>
    <textarea name="" id="" cols="30" rows="10" placeholder='Leave a message!'></textarea>
            </div>
            <button>Send</button>
        </form>
        <div className="handles">
            <div className="media">
                <FontAwesomeIcon icon={faWhatsapp}/>
            </div>
            <div className="media">
                <FontAwesomeIcon icon={faGithub} />
            </div>
            <div className="media">
                <FontAwesomeIcon icon={faLinkedin} />
            </div>
        </div>
    </div>
  )
}

export default Contact
