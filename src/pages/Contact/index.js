import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import "../Contact/Contact.css";

function ContactForm () {

  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      console.log(isValid)
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
    setFormState({...formState, [e.target.name]: e.target.value });
    }
  }
  // console.log(formState)

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }
  return (
    <section className="contact-form">
      <h2>Contact me</h2>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className='name'>
          <label htmlFor="name" className='name'>Name:</label>
          <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
        </div>
        <div className='email'>
          <label htmlFor="email" className="email">Email:</label>
          <input type="email" defaultValue={email} onBlur={handleChange} name="email"  />
        </div>
        <div className="message">
          <label htmlFor="message" className="message">Message:</label>
          <input type="text" defaultValue={message} onBlur={handleChange}/>
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit" className='contact'>Submit</button>
      </form>
    </section>
  );
}


export default ContactForm;