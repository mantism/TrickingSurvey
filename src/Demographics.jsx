import React, {Component} from 'react';
import Divider from './Divider';
import Geography from './Geography';
import Gender from './Gender';

class Demographics extends Component {
  render() {
    return (
      <div className="Demographics" id="Demographics">
        <div className="section">
          <h1>Demographics</h1>
          <Divider size={3}/>
          <Geography currComponentInView={this.props.currComponentInView}/>
          <Gender currComponentInView={this.props.currComponentInView}/>
        </div>
      </div>
    )
  }
}

export default Demographics;
