// src/app/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from '../components/nav/Navigation';
import AboutMe from '../components/about/AboutMe';
import '../App.css';
import Projects from '../components/projects/Projects';
import Skills from '../components/skills/Skills';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<AboutMe />} />
        </Routes>
        <Projects />
        <Skills />
      </div>
    </Router>
  );
}

export default App;
