import React, {Component} from 'react';
import Divider from './Divider';
import Geography from './Geography';
import Gender from './Gender';

class Demographics extends Component {
  render() {
    return (
      <div className="Demographics section">
        <h1>Demographics</h1>
        <Divider size={3}/>
        <Geography />
        <Gender/>
      </div>
    )
  }
}

export default Demographics;