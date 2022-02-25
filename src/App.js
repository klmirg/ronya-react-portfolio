import React from 'react';
import Nav from './components/Nav'
import About from './components/About'
// import Contact from './components/Contact'
// import Footer from './components/Footer'
// import Header from './components/Header'
// import Projects from './components/Projects'


function App() {

  // const categories = [
  //   { name: 'About' },
  //   { name: 'Contact' },
  //   { name: 'Projects' },
  //   { name: 'Resume' }
  // ];

  return (
    <div>
      <Nav
        
      ></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
