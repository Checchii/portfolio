// src/app/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from '../components/nav/Navigation';
import AboutMe from '../components/about/AboutMe';
import '../App.css';
import Projects from '../components/projects/Projects';
import Skills from '../components/skills/Skills';
import Footer from '../components/footer/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <AboutMe />
        <Projects />
        <Skills />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
