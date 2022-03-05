import React from 'react';
import "../Projects/Projects.css";

function Projects () {

  return (
    <div>
      <ul>
        <li className="project1">
          <p>The Tech Blog</p>
          <a href="https://my-tech-blog22.herokuapp.com/">
            <img src={require(`../../assets/images/The-Tech-Blog-screenshot.png`)} className="my-2"  alt="Tech Blog website homepage" />
          </a>
        </li>
        <li className="project2">
          <p>BookShelf</p>
          <a href="https://bookshelf22.herokuapp.com/">
            <img src={require(`../../assets/images/BookShelf-screenshot.png`)} className="my-2" alt="Screenshot of BookShelf homepage" />
          </a>
        </li>
        <li className="project3">
          <p>BuzzStock</p>
          <a href="https://tavianjd.github.io/BuzzStock-Group/Project/">
            <img src={require(`../../assets/images/buzzstockscreenshot.png`)} className="my-2" alt="Screenshot of BuzzStock after searching for a stock" />
          </a>
        </li>
        <li className="project4">
          <p>Weather Dashboard</p>
          <a href="https://klmirg.github.io/Weather-dashboard/">
            <img src={require(`../../assets/images/weatherdashboard.png`)} className="my-2" alt="Screenshot of Weather Dashboard after searching 2 cities" />
          </a>
        </li>
        <li className="project5">
          <p>Budget Tracker</p>
          <a href="https://stormy-shore-50944.herokuapp.com/">
            <img src={require(`../../assets/images/BudgetTrackerScreenshot.png`)} className="my-2" alt="Screenshot of Budget Tracker app after multiple budgets are applied" />
          </a>
        </li>
        <li className="project6">
          <p>Ronya's First Portfolio</p>
          <a href="https://klmirg.github.io/The-Professional-Portfolio-of-Ronya-Gettis/">
            <img src={require(`../../assets/images/Portfolioscreenshot22.png`)} className="my-2" alt="Screenshot of Ronya's first portfolio" />
          </a>
        </li>
      </ul>
    </div>
  );
}


export default Projects;