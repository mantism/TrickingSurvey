import React, {Component} from 'react';
import { scaleBand } from 'd3-scale';
import Axes from './Axes';
import _ from 'lodash';
import * as consts from './d3Consts';

class ScatterPlot extends Component {
  constructor(props) {
    super(props);

    this.state = {
      containerWidth: null,
    }

    this.counts = this.aggregateData();
    this.getXScale = this.getXScale.bind(this);
    this.getYScale = this.getYScale.bind(this);
  }

  aggregateData() {
    let counts = new Map();
    for (let d of this.props.data) {
      let str = d.numYearsTricking + ' ' + d.numGatherings;
      if (counts.has(str)) {
        counts.set(str, counts.get(str) + 1);
      } else {
        counts.set(str, 1);
      }
    }
    return counts;
    
  }

  //need to figure out how to map, sort, and reduce all the values
  getXScale() {
    let domainValues = _.map(this.props.data, (d) => d.numYearsTricking);
    let sortedVals = _.sortBy(domainValues, [(d) => {
      let rank = consts.yearsRank[d];
      return (rank) ? rank : 8;
      
    }]);

    return scaleBand()
      .padding(this.props.padding)
      .domain(sortedVals)
      .range([this.props.padding, (this.props.width)]);
  }

  getYScale() {
    let domainValues = _.map(this.props.data, (d) => d.numGatherings);
    let sortedVals = _.sortBy(domainValues, [(d) => {
      let rank = consts.gatherRank[d];
      return (rank) ? rank : 8;
    }])

    return scaleBand()
      .padding(this.props.padding)
      .domain(sortedVals)
      .range([this.props.height - this.props.padding, this.props.padding]);
  }

  render() {
    const xScale = this.getXScale();
    const yScale = this.getYScale();
    const height = this.props.height;
    const width = this.props.width;

    const circles = _.map(this.props.data, (point, i) => {
      const str = point.numYearsTricking + ' ' + point.numGatherings;
      const numTrickers = this.counts.get(str);
      const dataStr = numTrickers + ' trickers : ' + point.numYearsTricking + ' years ' + point.numGatherings + ' gatherings';      
      return (
        <circle key={i}
          cx={xScale(point.numYearsTricking)}
          cy={yScale(point.numGatherings)}
          r={10}
          fill='#0584ba'
          fillOpacity='0.1'
          data-tip={dataStr}
        />
      );
    });

    return (
      <div className="scatterPlot-section">
        <svg width={width} height={height}>
          {circles}
          <Axes scales={{xScale, yScale}} margins={this.props.margins} svgHeight={height} svgWidth={width} />
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
    right: 30,
    bottom: 30,
    left: 40
  }
}

export default ScatterPlot;