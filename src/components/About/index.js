import React from 'react';
import "../About/About.css";

function About() {
  return (
    <section className='about'>
      <img className="myImage" src={require(`../../assets/images/ImageOfRonya.jpg`)} alt="Ronya Gettis by a body of water" />
      <p id="about">Hi! My name is Ronya Gettis, I am a recent graduate of the University of Minnesota Coding Bootcamp where I earned 
      a certificate of completion. I am aspiring to become a full stack web developer. I find programming languages and what they can 
      accomplish to be absolutely fascinating. I come from a background in customer service, with 15 years of experience working in restaurants,
      with many different job titles throughout those years. I love continuing to learn and develop new skills, wherever I am. I am a team player
      with a natural ability to adapt to diverse and fast paced environments. I love problem solving which is what led me to my interested in learning
      Web Development. I would love a chance to broaden my knowledge and continue growing and learning in this field! </p>
    </section>
    
  );
}

export default About;