import React, { Component } from 'react';
import Header from './Header';
import About from './About';
import Highlights from './Highlights';
import Geography from './Geography';
import Discovery from './Discovery';

import './styles.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <About />
        <Highlights />
        <Geography />
        <Discovery />
      </div>
    );
  }
}

export default App;
