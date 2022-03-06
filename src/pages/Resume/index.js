import React from 'react';
import resume from '../../assets/resume/Ronya-Gettis-resume.pdf';

function Resume () {

  const languages = ["JavaScript", "SQL", "HTML/CSS", "Express.js", "React", "Node.js"]
  return (
    <div>
      <a href={resume}>
        <button>Check out my resume here!</button>
      </a>
      <h4>Languages:</h4>
      <ul className='skills'>
     {languages.map((language, i) => (
       <li key={i}>{language}</li>
     ))}
     </ul>
    </div>
  );
}

export default Resume;

{/* <ul className="skills">
        <li>JavaScript</li>
        <li>SQL</li>
        <li>HTML/CSS</li>
        <li>Express.js</li>
        <li>React</li>
        <li>Node.js</li>
      </ul> */}