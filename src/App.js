import React, { Component } from 'react';
import Hero from './components/Hero/hero';
import Description from './components/Description/description';
import Courses from './components/Courses/courses';
import Steps from './components/Steps/steps';
import Value from './components/Value/value';
import Register from './components/Register/register';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero/>
        <Description/>
        <Courses/>
        <Steps/>
        <Value/>
        <Register/>
      </div>
    );
  }
}

export default App;
