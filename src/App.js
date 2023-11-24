import './App.css'
import React from 'react';
import Header from '../src/Component/Header/Header';
import Hero from '../src/Component/Hero/Hero';
import Project from '../src/Component/Projects/Projects'

function App(){
  return (
    <>
      <Header/>
      <Hero/>
      <Project/>
    </>
  )
}

export default App;