import React from 'react';
import { Link } from 'react-router-dom';
import About from 'About';
// import Header from 'Header';

function Nav() {
  return (
    <header>
      <h2> 
       Ronya Gettis   
      </h2>
      <nav>
        <ul>
          <li>
            <Link to={'/About'}>About</Link>
          </li>
          <li>
            <span>Contact</span>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Nav;