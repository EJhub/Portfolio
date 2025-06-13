import React from 'react';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import AboutMe from './pages/Aboutme';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <>
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <AboutMe />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
    </>
  );
}

export default App;