import React from 'react';
import "../About/About.css";

function About() {
  return (
    <section className='about'>
      <img className="myImage" src={require(`../../assets/images/ImageOfRonya.jpg`)} alt="Ronya Gettis by a body of water" />
      <p id="about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ab voluptatem facilis ipsa dolor culpa facere vel ducimus est unde expedita consequuntur nostrum quam corporis nam repellat magni doloribus quos!</p>
    </section>
    
  );
}

export default About;