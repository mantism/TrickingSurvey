import React, {Component} from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import Divider from './Divider';
import Geography from './Geography';
import Gender from './Gender';

class Demographics extends Component {
  constructor(props) {
    super(props);
    this.id = '#Demographics';
    this.onChange = this.onChange.bind(this);
  }

  onChange(isVisibile) {
    this.props.currComponentInView(this.id);
  }
  
  render() {
    return (
      <VisibilitySensor onChange={this.onChange}
        scrollCheck
        scrollThrottle={20}
        >
        <div className="Demographics" id="Demographics">
          <div className="section">
            <h1>Demographics</h1>
            <Divider size={3}/>
            <Geography currComponentInView={this.props.currComponentInView}/>
            <Gender currComponentInView={this.props.currComponentInView}/>
          </div>
        </div>
      </VisibilitySensor>
    )
  }
}

export default Demographics;
