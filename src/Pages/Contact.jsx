import React from 'react';
import lon from '../assets/pizza.jpg';
import '../style/Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
      <div
        className='leftSide'
        style={{ backgroundImage: `url(${lon})` }}
      ></div>
      <div className='rightSide'>
        <h1>Contact Us</h1>
        <form id='contact-form' method='POST'>
          <label htmlFor='name'>Full Name</label>
          <input
            name='name'
            placeholder='Enter your name...'
            type='text'
          />
          <label htmlFor='email'>Email</label>
          <input
            name='email'
            placeholder='Enter your email...'
            type='email'
          />
          <label htmlFor='message'>Message</label>
          <textarea
            rows='6'
            placeholder='Enter message...'
            name='message'
            required
          />
          <button type='submit'>Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
