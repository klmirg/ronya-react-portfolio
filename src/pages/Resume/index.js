import React from 'react';
import resume from '../../assets/resume/Ronya-Gettis-resume.pdf';
import "../Resume/Resume.css";

function Resume () {

  const technicalSkills = [
    "JavaScript", 
    "SQL", 
    "HTML/CSS", 
    "MERN", 
    "MySQL", 
    "NoSQL", 
    "Bootstrap", 
    "jQuery", 
    "Inquirer", 
    "Jest", 
    "Sequelize", 
    "Mongoose", 
    "Handlebars", 
    "Heroku", 
    "Git", 
    "JSON", 
    "API's"
  ]
  
  return (
    <div className="resume">
      <a href={resume}>
        <button>Check out my resume here!</button>
      </a>
      <h4>Technical Skills:</h4>
      <ul className='skills'>
     {technicalSkills.map((technicalSkill, i) => (
       <li key={i}>{technicalSkill}</li>
     ))}
     </ul>
    </div>
  );
}

export default Resume;