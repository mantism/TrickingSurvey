import React, {Component} from 'react';

class Footer extends Component {
	render() {
		return (
			<div className="footer">
				<h1>Thanks for visiting!</h1>
				<h3>TrickStats.com - 2017</h3>
				<div className="col">
			  	<h5><a href="">2017 Survey</a></h5>
					<h5><a href="https://mantism.github.io">About Me</a></h5>
					<h5><a href="mailto:mikael.mantis7@gmail.com">Contact Me</a></h5>
				  <h5><a className="scroll-top" onClick={this.props.scrollTop}>Back to Top</a></h5>
					<br/>
				</div>
			  <div className="col">
			  	<div className="logo"/>
				  <a href="https://github.com/mantism/TrickingSurvey">
						<i className="fa fa-github fa-2x" aria-hidden="true"></i>
					</a>
			    <h5>
						<i className="fa fa-code fa-1x" aria-hidden="true"></i>
						 with <i className="fa fa-heart fa-1x" aria-hidden="true"></i>
			       by Mikael Mantis
			    </h5>
					<h5 style={{lineHeight: '16px'}}> Special thanks to Mike Hom for the logo and design help.</h5>
				</div>
			</div>
		);
	}
}

export default Footer;
