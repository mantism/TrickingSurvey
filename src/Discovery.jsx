import React, { Component } from 'react';
import BarChart from './BarChart';
import data from './data/discovery.json';
class Discovery extends Component {
  render() {
    const margins = {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
    }

    return (
      <div className="discovery-chart-section">
        <BarChart width={this.props.width} height={this.props.height} data={data}
          margins={margins}/>
      </div>
    )
  }
}

Discovery.defaultProps = {
  width: 500,
  height: 250,
}

export default Discovery;
