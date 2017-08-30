import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';
import { scaleLinear, scaleBand } from 'd3-scale';
import { range } from 'd3-array';
import { axisBottom, axisRight } from 'd3-axis';

import _ from 'lodash';

class Bar extends Component {
  render() {
    return (
			<rect fill={this.props.color} width={this.props.width} height={this.props.height}
				x={this.props.offset} y={this.props.availableHeight - this.props.height}/>
		);
  }
}

Bar.defaultProps = {
	width: 0,
  height: 0,
  offset: 0,
	availableHeight: 0,
	color: '#0584ba',
}

class BarChart extends Component {
	render() {
    const sortedData = _.sortBy(this.props.data, [(o) => {return o.val}]);
    const max = sortedData[sortedData.length - 1].val;

    const width = this.props.width - this.props.margins.left - this.props.margins.right;
    const height = this.props.height - this.props.margins.top - this.props.margins.bottom;
    const xScale = scaleBand().rangeRound([0, width], 0.1).domain(range(this.props.data.length));
    const yScale = scaleLinear().range([0, height]).domain([0, max]);

    const bars = _.map(this.props.data, (point, i) => {
      return (
        <Bar width={25} height={yScale(point.val)} availableHeight={height} 
          offset={xScale(i)} color={this.props.color} key={i}/>
      )
    });

    const divStyle = {
      width,
      height
    }
    const xAxis = axisBottom(xScale);
		return (
      <div className="barChart-section" style={divStyle}>
			  <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height}>
				  {bars}
          <g>
            {xAxis}
          </g>
			  </svg>
      </div>
		)
	}
}

BarChart.defaultProps = {
  width: 800,
  height: 350,
  title: '',
  color: '#0584ba',
  margins: {
    top: 20,
    right: 30,
    bottom: 30,
    left: 40
  }
}

export default BarChart;