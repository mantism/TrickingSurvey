import React, { Component } from 'react';
import { scaleLinear, scaleBand } from 'd3-scale';
import Axes from './Axes';

import _ from 'lodash';

class Bar extends Component {
  constructor(props) {
    super(props);

    this.colorScale = scaleLinear()
      .domain([0, this.props.max])
      .range(['#04B8FF', '#0584ba']);
  }

  render() {
    const scales = this.props.scales;
    const margins = this.props.margins;
    const height = this.props.height;
    const point = this.props.point;
    const {xScale, yScale} = scales;
    const toolTipVal = point.id + ':\r\n' + point.val + ' trickers';
    return (
			<rect key={point.id} 
          x={xScale(point.id)} 
          y={yScale(point.val)} 
          height={height - margins.bottom - yScale(point.val)}
          width={xScale.bandwidth()}
          fill={this.colorScale(point.val)}
          data-tip={toolTipVal}
        /> 
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
  constructor(props) {
    super(props);

    this.state = {
      containerWidth: null,
    }

    this.fitParentContainer = this.fitParentContainer.bind(this);
  }

  componentDidMount() {
    this.fitParentContainer();
    window.addEventListener('resize', this.fitParentContainer);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.fitParentContainer);
  }

  fitParentContainer() {
    const { containerWidth } = this.state;
    const currentContainerWidth = this.container.getBoundingClientRect().width;
    
    const shouldResize = containerWidth !== currentContainerWidth;
    if (shouldResize) {
      this.setState({
        containerWidth: currentContainerWidth,
      });
    }
  }

	render() {
    const sortedData = _.sortBy(this.props.data, [(o) => {return o.val}]);
    const max = sortedData[sortedData.length - 1].val;

    const width = Math.max(this.state.containerWidth, this.props.width);
    const height = this.props.width * (5/7);

    const xScale = scaleBand()
      .padding(0.5)
      .domain(this.props.data.map(d => d.id))
      .range([this.props.margins.left, width - this.props.margins.right]);

    const yScale = scaleLinear()
      .domain([0, max])
      .range([height - this.props.margins.bottom, this.props.margins.top]);

    const bars = _.map(this.props.data, (point, i) => {
      return (
        <Bar key={point.id}
             max={max}
             scales={{xScale, yScale}}
             margins={this.props.margins}
             point={point}
             height={height}
             
        />
      )
    });

		return (
      <div className="barChart-section" ref={(el)=> { this.container = el}} style={{height}}>
			  <svg viewBox={`0 0 ${width} ${height}`}>
          <Axes scales={{xScale, yScale}} margins={this.props.margins} 
            svgHeight={height} svgWidth={width}
            xLabel="testingXLabel" yLabel="testingYLabel" />
          {bars}
        </svg>
        
      </div>
		)
	}
}

BarChart.defaultProps = {
  width: 700,
  height: 500,
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