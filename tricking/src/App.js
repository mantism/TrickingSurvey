import React, { Component } from 'react';
import Header from './Header';
import About from './About';

import './styles.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <About />
      </div>
    );
  }
}

export default App;
