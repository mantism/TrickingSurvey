import React, { Component } from 'react';
import Header from './Header';
import About from './About';
import Highlights from './Highlights';
import Demographics from './Demographics';
import Experience from './Experience';
import SideNav from './SideNav';
import Tricks from './Tricks';
import ReactTooltip from 'react-tooltip';
import {Row, Col, Grid} from 'react-bootstrap';
import './styles.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header className="top" title="Tricking Survey Results" subheading="2016" 
          icons={["pie", "gainer", "nodes"]}/>
        <Grid bsClass="container">
			    <Row>
					  <Col xs={2} className="side-nav">	
			        <h2>Tricking Survey</h2>
			        <SideNav/>
			      </Col>
			      <Col xs={8}>
			    	  <About />
              <Highlights />
              <Demographics />
              <Experience />
              <Tricks/>
			      </Col>
			    </Row>
			  </Grid>
        <Header title="Still in development!" subheading="Questions? You can reach me @ mikael.mantis7 at gmail.com" icons={["gainer"]}/>
        <ReactTooltip place='top' type='dark' effect='float'/>
      </div>
    );
  }
}

export default App;
