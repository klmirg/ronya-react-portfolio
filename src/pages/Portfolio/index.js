import React from 'react';
import projects from '../../components/Projects';
import "./Projects.css";

function Portfolio () {
// const [currentProject, setCurrentProject] = useState(projects[0]);
// const [projects] = useState([])
  return (
    <div className="grid">
        {projects.map((project) => (
          <div className="img-wrapper">
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
  //  <div className="grid">
  //    <div className="img-wrapper">
  //     <ul className="projectlist">
  //       {projects.map((project) => (
  //       <li className="project" key={project.id}>
  //           <img src={project.images} className="projectimg" alt={project.alt} />
  //         <div className='content'>
  //         <h3>{project.title}</h3>
  //           <p>{project.text}</p>
  //         <a href={project.deployedUrl}>
  //           <button>Check it out here!</button>
  //         </a> 
  //          <a href={project.githubUrl}>
  //           <button>GitHub Repository</button>
  //         </a>
  //         </div>
  //       </li>
  //       ))}
  //     </ul>
  //    </div>
  //  </div>


// return (
//   <div className='projects'>
//   <ul className='projectlist'>
//     <li className="project1">
//       <h3>BookShelf</h3>
//       <a href="https://bookshelf22.herokuapp.com/">
//         <img src={require(`../../assets/images/BookShelf-screenshot.png`)} className="projectimg" alt="Screenshot of BookShelf homepage" />
//       </a>
//       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolores aliquam maxime, iusto dolore quisquam molestiae velit in voluptatem necessitatibus illum quam qui cupiditate veniam! Assumenda sit nemo quidem illum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla nihil ullam non nemo, ad eum voluptatem neque illum libero corporis. Corporis ipsam maiores saepe exercitationem corrupti sit adipisci quo minima?</p>
//     </li>
//     <li className="project2">
//       <h3>BuzzStock</h3>
//       <a href="https://tavianjd.github.io/BuzzStock-Group/Project/">
//         <img src={require(`../../assets/images/buzzstockscreenshot.png`)} className="projectimg" alt="Screenshot of BuzzStock after searching for a stock" />
//       </a>
//     </li>
//     <li className="project3">
//       <h3>Weather Dashboard</h3>
//       <a href="https://klmirg.github.io/Weather-dashboard/">
//         <img src={require(`../../assets/images/weatherdashboard.png`)} className="projectimg" alt="Screenshot of Weather Dashboard after searching 2 cities" />
//       </a>
//     </li>
//     <li className="project4">
//       <h3>Budget Tracker</h3>
//       <a href="https://stormy-shore-50944.herokuapp.com/">
//         <img src={require(`../../assets/images/BudgetTrackerScreenshot.png`)} className="projectimg" alt="Screenshot of Budget Tracker app after multiple budgets are applied" />
//       </a>
//     </li>
//     <li className="project5">
//       <h3>The Tech Blog</h3>
//         <img src={require(`../../assets/images/The-Tech-Blog-screenshot.png`)} className="projectimg"  alt="Tech Blog website homepage" />
//       <a href="https://my-tech-blog22.herokuapp.com/">
//         <button>Deployed Application</button>
//       </a>
//       <a href="https://github.com/klmirg/Challenge14-The-Tech-Blog.git">
//         <button>GitHub Repository</button>
//       </a>
//     </li>
//     <li className="project6">
//       <h3>Ronya's First Portfolio</h3>
//       <a href="https://klmirg.github.io/The-Professional-Portfolio-of-Ronya-Gettis/">
//         <img src={require(`../../assets/images/Portfolioscreenshot22.png`)} className="projectimg" alt="Screenshot of Ronya's first portfolio" />
//       </a>
//     </li>
//   </ul>
//   </div> 
//   )
//   }