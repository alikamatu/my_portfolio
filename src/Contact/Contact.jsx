import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_f2woego', 'template_kdye2is', formData, 'tFXLVLC8LfILvCMlG')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
      })
      .catch((error) => {
        console.log('FAILED...', error);
        alert('Failed to send message.');
      });

    setFormData({ name: '', email: '', message: '' }); // Reset form after submission
  };

  return (
    <div className='contact'>
      <form onSubmit={handleSubmit}>
        <div className="input-fields">
          <div className="fill-area animation" data-aos='zoom-in'>
            <label><p>Name</p></label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              placeholder='Name' 
              required 
            />
          </div>
          <div className="fill-area animation" data-aos='zoom-in'>
            <label><p>Email</p></label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              placeholder='Email' 
              required 
            />
          </div>
        </div>
        <div className="fill-area animation" data-aos='zoom-in'>
          <label><p>Message</p></label>
          <textarea 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            cols="30" 
            rows="10" 
            placeholder='Leave a message!' 
            required 
          />
        </div>
        <button className='animation' data-aos='zoom-in' type='submit'>Send</button>
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
  );
};

export default Contact;
