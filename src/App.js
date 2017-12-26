import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';
import Header from './Header';
import About from './About';
import Highlights from './Highlights';
import Demographics from './Demographics';
import Experience from './Experience';
import SideNav from './SideNav';
import Tricks from './Tricks';

import './styles.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currComponent: "#Overview"
    }

    this.currComponentInView = this.currComponentInView.bind(this);
  }

  currComponentInView(id) {
    this.setState({currComponent: id});
  }

  render() {
    return (
      <div className="app">
        <Header className="top" title="Tricking Survey Results" subheading="2016" 
          icons={["pie", "gainer", "nodes"]}/>
        <SideNav currComp={this.state.currComponent}/>
        <About currComponentInView={this.currComponentInView}/>
        <Highlights currComponentInView={this.currComponentInView}/>
        <Demographics currComponentInView={this.currComponentInView} />
        <Experience currComponentInView={this.currComponentInView}/>
        <Tricks currComponentInView={this.currComponentInView}/>
        <Header title="Still in development!" subheading="Questions? You can reach me @ mikael.mantis7 at gmail.com" icons={["gainer"]}/>
        <ReactTooltip place='top' type='dark' effect='float'/>
      </div>
    );
  }
}

export default App;
