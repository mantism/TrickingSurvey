import React, { Component } from 'react';
import BarChart from './BarChart';
import data from './data/discovery.json';
import Divider from './Divider';

class Discovery extends Component {
  render() {
    const margins = {
      left: 60,
      top: 0,
      right: 20,
      bottom: 100,
    }

    return (
      <div className="Discovery section">
        <h1>Discovery</h1>
        <Divider size={3}/>
        <h3>How did Trickers discover tricking?</h3>
        <BarChart width={this.props.width} height={this.props.height} data={data}
          margins={margins}/>
      </div>
    )
  }
}

Discovery.defaultProps = {
  width: 700,
  height: 500,
}

export default Discovery;
