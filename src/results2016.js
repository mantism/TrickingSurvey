import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';
import About from './About';
import BackToTop from './BackToTop';
import Demographics from './Demographics';
import Divider from './Divider';
import Experience from './Experience';
import Footer from './Footer';
import Header from './Header';
import Highlights from './Highlights';
import Tricks from './Tricks';

class Results2016 extends Component {	
	render() {
    return (
      <div className="Results2016">
        <Header className="top" title="Tricking Survey Results" subheading="2016" 
          icons={["pie", "gainer", "nodes"]}/>
        <About />
        <Highlights />
        <Demographics />
        <Experience/>
        <Tricks>
          <div className="survey2017 section">
            <h1> 
              <a href="https://goo.gl/forms/hwi9tYjsArkKVDtL2"> 2017 Tricking Survey</a>  
            </h1>
            <Divider size={3}/>
            <p>So now what? We have all this data but what can we do with this? Well, 
              at the moment, not much! <span className="CTA">but thats 
              where the <a href="https://goo.gl/forms/hwi9tYjsArkKVDtL2">2017 Tricking Survey</a> comes in</span>!
              This time around we're asking people which gatherings they went to, which gatherings they want 
              to go to, who their favorite trickers are, who they think the best trickers are, and more.
              Given enough responses this time around we'll be able to come up with gathering rankings, 
              tricker rankings, have a better picture of how people train, and overall a 
              better understanding of the tricking community.
            </p>
            <h2 className="CTA"> So Trickers, lets make this happen and fill out the <a href="https://goo.gl/forms/hwi9tYjsArkKVDtL2">2017 Tricking Survey </a>
            </h2>
            <br/>
          </div>
        </Tricks>
        
        <Footer scrollTop={this.props.scrollTop}/> 
			 	<BackToTop scrollTop={this.props.scrollTop}/>
				<ReactTooltip place='top' type='dark' effect='float'/>
      </div>
    );
  }
}

export default Results2016;
