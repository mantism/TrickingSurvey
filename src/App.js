import React, { Component } from 'react';
import Header from './Header';
import About from './About';
import Highlights from './Highlights';
import Geography from './Geography';
import Experience from './Experience';

import './styles.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <About />
        <Highlights />
        <Geography />
        <Experience />
      </div>
    );
  }
}

export default App;
