import React, { Component } from 'react';
import Legend from './Legend';
import * as scale from 'd3-scale';
import * as shape from 'd3-shape';
import _ from 'lodash';

class Slice extends Component {
  constructor(props) {
    super(props);

    this.state = {isHovered: false};
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
  }

  onMouseOver() {
    this.setState({isHovered: true});
  }

  onMouseOut() {
    this.setState({isHovered: false});
  }

  render() {
    let innerRadius = (this.props.donut) ? this.props.outerRadius - 20 : 0;
    let dataStr = (this.props.id) ? this.props.id + ': ' + this.props.value.value + ' trickers' : null;
    let padAngle = (this.props.donut) ? .01 : 0;
    let outerRadius = (this.state.isHovered) ? this.props.outerRadius * 1.05 : this.props.outerRadius;
    let arc = shape.arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius)
      .padAngle(padAngle);
    return (
      <g onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
        <path d={arc(this.props.value)} fill={this.props.fill}
          transform={`translate(${this.props.width / 2}, ${this.props.height / 3})`}
          data-tip={dataStr ? dataStr : ''}
        />
      </g>
    );
  }
}


Slice.defaultProps = {
  outerRadius: 150,
  donut: false,
}

class PieChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      containerWidth: null,
    }
    this.colorScale = scale.schemeCategory20
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
    let dataVals = _.map(this.props.data, d => d.val);
    let pie = shape.pie()(dataVals);
    let height = (5/7) * this.props.width;
    let slices = _.map(pie, (d, i) => {
      return (
        <Slice key={i} width={this.props.width} height={height}
          value={d} fill={this.colorScale[i]} donut={this.props.donut}
          id={this.props.data[i].id}
          />
      )
    });

    return (
      <div className="chart-section" ref={(el)=> { this.container = el}} style={{height}}>
			  <svg viewBox={`0 0 ${this.props.width} ${this.props.height}`}>
          {slices}
          <Legend data={this.props.data} colorScale={this.colorScale} theme={this.props.theme}/>
        </svg>
        
      </div>
    )
  }
}

PieChart.defaultProps = {
  outerRadius: 100,
  donut: false,
  width: 700,
  height: 500,
  padding: 50
}

export default PieChart;
