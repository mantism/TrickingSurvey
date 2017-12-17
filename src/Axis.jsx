import React, {Component} from 'react';
import * as d3Axis from 'd3-axis';
import {select as d3Select} from 'd3-selection';

class Axis extends Component {
  constructor(props) {
    super(props);

    this.fontColor = (this.props.theme === 'dark') ? '#f0ede7' : '#000';
  }

  componentDidMount() {
    this.renderAxis();
  }

  componentDidUpdate() {
    this.renderAxis();
  }

  renderAxis() {
    const axisType = `axis${this.props.orient}`;
    const axis = d3Axis[axisType]()
      .scale(this.props.scale)

    d3Select(this.axisElement).call(axis);
  }

  render() {
    return (
      <svg>
        <g className={`Axis Axis-${this.props.orient}`}
          ref={(el) => { this.axisElement = el;}}
          transform={this.props.translate}
        />
        <text x='0' y='35' transform={`${this.props.transformLabel}`}
          fill={this.fontColor}>
          {this.props.label}
        </text>
      </svg>
    )
  }
}

export default Axis;