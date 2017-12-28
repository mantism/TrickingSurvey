import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';
import About from './About';
import BackToTop from './BackToTop';
import Demographics from './Demographics';
import Experience from './Experience';
import Footer from './Footer';
import Header from './Header';
import Highlights from './Highlights';
import Tricks from './Tricks';

import './styles.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.scrollTop = this.scrollTop.bind(this);
	}

	scrollTop() {
		let doc = document.documentElement;
		let top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
		if (top > 0) {
			window.scrollTo(0, top - 100)
      setTimeout(this.scrollTop, 10)
		}
	}
	
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
        <Footer scrollTop={this.scrollTop}/> 
			 	<BackToTop scrollTop={this.scrollTop}/>
				<ReactTooltip place='top' type='dark' effect='float'/>
      </div>
    );
  }
}

export default App;
