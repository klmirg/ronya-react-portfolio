import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "../src/App.css";
// import Nav from './components/Nav'
import About from './components/About'
import ContactForm from './pages/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
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
      <Header></Header>
      {/* <About></About> */}
      {/* <ContactForm></ContactForm> */}
      <div>
        <Route exact path="/About" component={About} />
        <Route exact path="/contact" component={ContactForm} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/resume" component={Resume} />
      </div>
      <Footer></Footer>
    </div>
    </Router>
  );
}

export default App;
