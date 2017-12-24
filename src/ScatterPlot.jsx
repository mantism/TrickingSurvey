import React, {Component} from 'react';
import { scaleBand } from 'd3-scale';
import Axes from './Axes';
import _ from 'lodash';

class ScatterPlot extends Component {
  constructor(props) {
    super(props);

    this.state = {
      containerWidth: null,
    }

    this.counts = this.aggregateData();
    this.getXScale = this.getXScale.bind(this);
    this.getYScale = this.getYScale.bind(this);
    this.fitParentContainer = this.fitParentContainer.bind(this);
  }

  componentDidMount() {
    this.fitParentContainer();
    window.addEventListener('resize', this.fitParentContainer);
  }

  componentWillMount() {
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

  aggregateData() {
    let counts = new Map();
    for (let d of this.props.data) {
      let str = d[this.props.x] + ' ' + d[this.props.y];
      if (counts.has(str)) {
        counts.set(str, counts.get(str) + 1);
      } else {
        counts.set(str, 1);
      }
    }
    return counts;
    
  }

  //need to figure out how to map, sort, and reduce all the values
  getXScale(width) {
    let domainValues = _.map(this.props.data, (d) => d[this.props.x]);
    let sortedVals = _.sortBy(domainValues, [(d) => {
      let rank = this.props.xRank[d];
      return (rank) ? rank : 8;
      
    }]);

    return scaleBand()
      .padding(this.props.padding)
      .domain(sortedVals)
      .range([this.props.margins.left, width - this.props.margins.left]);
  }

  getYScale(height) {
    let domainValues = _.map(this.props.data, (d) => d[this.props.y]);
    let sortedVals = _.sortBy(domainValues, [(d) => {
      let rank = this.props.yRank[d];
      return (rank) ? rank : 8;
    }])

    return scaleBand()
      .padding(this.props.padding)
      .domain(sortedVals)
      .range([height - this.props.margins.bottom, this.props.margins.top]);
  }

  render() {
    const width = Math.max(this.state.containerWidth, this.props.width);
    const height = this.props.width * (5/7);
    const xScale = this.getXScale(width);
    const yScale = this.getYScale(height);

    const circles = _.map(this.props.data, (point, i) => {
      const str = point[this.props.x] + ' ' + point[this.props.y];
      const numTrickers = this.counts.get(str);
      const dataStr = numTrickers + ' trickers : ' + point[this.props.x] + ' years ' + point[this.props.y] + ' gatherings';      
      return (
        <circle key={i}
          cx={xScale(point[this.props.x])}
          cy={yScale(point[this.props.y])}
          r={10}
          fill='#0584ba'
          fillOpacity='0.05'
          data-tip={dataStr}
        />
      );
    });

    return (
      <div id={this.props.class} className="chart-section" ref={(el)=> { this.container = el}}>
        <svg viewBox={`0 0 ${width} ${height}`}>
          <Axes scales={{xScale, yScale}} margins={this.props.margins} svgHeight={height} svgWidth={width} 
            xLabel={this.props.xlabel} yLabel={this.props.ylabel} theme={this.props.theme}
          />
          {circles}
        </svg>
      </div>
    );
  }
}

ScatterPlot.defaultProps = {
  width: 700,
  height: 500,
  padding: 25,
  margins: {
    top: 20,
    right: 100,
    bottom: 90,
    left: 120
  }
}

export default ScatterPlot;
