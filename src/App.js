import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';
import About from './About';
import Demographics from './Demographics';
import Experience from './Experience';
import Footer from './Footer';
import Header from './Header';
import Highlights from './Highlights';
import Tricks from './Tricks';

import './styles.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header className="top" title="Tricking Survey Results" subheading="2016" 
          icons={["pie", "gainer", "nodes"]}/>
        <About />
        <Highlights />
        <Demographics />
        <Experience/>
        <Tricks />
        <Footer icons={["gainer"]}/> 
			  <ReactTooltip place='top' type='dark' effect='float'/>
      </div>
    );
  }
}

export default App;
