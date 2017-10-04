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
        <Header title="Tricking Survey Results" subheading="2016" 
          icons={["pie", "gainer", "nodes"]}/>
        <About />
        <Highlights />
        <Geography />
        <Experience />
        <Header title="Still in development!" subheading="You can reach me @ mikael.mantis7 at gmail.com" icons={["gainer"]}/>
      </div>
    );
  }
}

export default App;
