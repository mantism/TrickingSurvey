import React, {Component} from 'react';

class BackToTop extends Component {
  render() {
		return (
			<div className="back-top-btn">
				<a onClick={this.props.scrollTop}>
					<i className="fa fa-hand-o-up fa-2x" aria-hidden="true"></i>
				</a>
			</div>
		)
	}
}

export default BackToTop;
