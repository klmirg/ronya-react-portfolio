import React from 'react';
import projects from '../../components/Projects';
import "./Projects.css";

function Portfolio () {

  return (
    <div className="grid">
        {projects.map((project) => (
          <div className="img-wrapper" key={project.id}>
            <img src={project.images} alt={project.alt} className={project.className}/>
            <div className="content fade" key={project.id}>
              <h3>{project.title}</h3>
              <a href={project.deployedUrl}><button>Check it out here!</button></a>
              <br></br>
              <br></br>
              <a href={project.githubUrl}><button>GitHub Repository</button></a>
          </div>
        </div>
        ))}
    </div>
    );
  }
  
  export default Portfolio;