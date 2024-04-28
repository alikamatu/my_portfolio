import React, { useEffect } from 'react'
import './Contact.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import AOS from "aos"
import 'aos/dist/aos.css'

export const Contact = () => {

    useEffect(() => {
        AOS.init({duration: 1000});
    });

  return (
    <div className='contact'>
        <h2 className='animation' data-aos='zoom-in'>Get In Touch</h2>
        <form action="">
            <div className="fill-area animation" data-aos='zoom-in'>
            <label htmlFor=""><p>Name</p></label>
    <input type="text" name="" id="" placeholder='Name' />
            </div>
            <div className="fill-area animation" data-aos='zoom-in'>
            <label htmlFor=""><p>Email</p></label>
    <input type="email" name="" id="" placeholder='Email' />
            </div>
            <div className="fill-area animation" data-aos='zoom-in'>
            <label htmlFor=""><p>Message</p></label>
    <textarea name="" id="" cols="30" rows="10" placeholder='Leave a message!'></textarea>
            </div>
            <button className='animation' data-aos='zoom-in'>Send</button>
        </form>
        <div className="handles animation" data-aos='zoom-in'>
            <div className="media">
                <a href="https://github.com/alikamatu">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>
            <div className="media">
                <a href="https://wa.me/message/QG2I4UCCBBKFE1">
                    <FontAwesomeIcon icon={faWhatsapp} />
                </a>
            </div>
            <div className="media">
                <a href="https://x.com/czerze?s=21">
                    <FontAwesomeIcon icon={faXTwitter} />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Contact
