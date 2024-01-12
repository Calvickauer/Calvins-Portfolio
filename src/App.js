import React from 'react';
import Contact from './components/Contact';
import Header from './components/Header';
import AboutMe from './components/Aboutme';
import Projects from './components/Projects';
import Skills from './components/Skills';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Contact />
        <AboutMe />
        <Skills />
        <Projects />
      </main>
    </div>
  );
}

export default App;
