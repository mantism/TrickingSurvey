import React, { Component } from 'react';
import Header from './Header';
import About from './About';
import Highlights from './Highlights';
import Demographics from './Demographics';
import Experience from './Experience';
import ReactTooltip from 'react-tooltip';

import './styles.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header title="Tricking Survey Results" subheading="2016" 
          icons={["pie", "gainer", "nodes"]}/>
        <About />
        <Highlights />
        <Demographics />
        <Experience />
        <Header title="Still in development!" subheading="Questions? You can reach me @ mikael.mantis7 at gmail.com" icons={["gainer"]}/>
        <ReactTooltip place='top' type='dark' effect='float'/>
      </div>
    );
  }
}

export default App;
