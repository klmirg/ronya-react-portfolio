import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './components/Nav'
import About from './components/About'
import Contact from './pages/Contact'
import Footer from './components/Footer'
// import Header from './components/Header'
import Projects from './pages/Projects'
import Resume from './pages/Resume'


function App() {

  // const categories = [
  //   { name: 'About' },
  //   { name: 'Contact' },
  //   { name: 'Projects' },
  //   { name: 'Resume' }
  // ];

  return (
    <Router>
    <div>
      <Nav></Nav>
      {/* <About></About> */}
      {/* <Contact></Contact> */}
      <div>
        <Route exact path="/" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/resume" component={Resume} />
      </div>
      <Footer></Footer>
    </div>
    </Router>
  );
}

export default App;
