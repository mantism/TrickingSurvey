import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Results2016 from './results2016';

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
    return <Results2016 scrollTop={this.scrollTop}/>;
  }
}

export default App;
