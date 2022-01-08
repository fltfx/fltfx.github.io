import Nav from './components/Nav';
import Welcome from './components/Welcome';
import About from './components/About';
import Projects from './components/Projects';
import Work from './components/Work';
import Footer from './components/Footer';
import './App.css';
import React from 'react';

function App() {
  return (
  <React.Fragment>
    <Nav/>
    <Welcome/>
    <About/>
    <Projects/>
    <Work/>
    <Footer/>
  </React.Fragment>
  );
}

export default App;
