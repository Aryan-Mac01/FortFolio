import './App.css'

import React from 'react';
import Header from '../src/Component/Header/Header';
import Hero from '../src/Component/Hero/Hero';
import Project from '../src/Component/Projects/Projects'
import About from '../src/Component/About/About';
import Skills from '../src/Component/Skills/Skills';
import Education from '../src/Component/Education/Education';
import Contact from '../src/Component/Contact/Contact';


function App(){
  return (
    <>
      <Header/>
      <Hero/>
      <Project/>
      <About/>
      <Skills/>
      <Education/>
      <Contact/>
    </>
  )
}



export default App;

