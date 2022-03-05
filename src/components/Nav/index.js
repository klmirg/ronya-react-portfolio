import React from 'react';
import { Link } from 'react-router-dom';
import About from '../About';
// import Header from 'Header';

function Nav() {
  return (
    <header>
      {/* <h1 className='my-name'> 
       Ronya Gettis   
      </h1> */}
      <nav>
        <ul className='header'>
          <li>
            <Link to={'/About'}>About</Link>
          </li>
          <li>
            <Link to={'Contact'}>Contact</Link>
          </li>
          <li>
            <Link to={'Projects'}>Projects</Link>
          </li>
          <li>
            <Link to={'Resume'}>Resume</Link>
          </li>
        </ul>
      </nav>
      <h1 className='my-name'> 
       Ronya Gettis   
      </h1>
    </header>
  )
}
export default Nav;