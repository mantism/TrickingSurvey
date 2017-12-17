import React, {Component} from 'react';
import _ from 'lodash';

class Legend extends Component {
  render() {
    let fontColor = (this.props.theme === 'dark') ? '#f0ede7' : '#000';
    let items = _.map(this.props.data, (d, i) => {
      return (
        <svg key={i}>
          <circle cx={30} cy={i * 21.5 + 20} r={5} fill={this.props.colorScale[i]}/>
          <text x={50} y={i * 21.5 + 23} fontFamily={'Roboto'} fontSize={`0.6rem`}
            fill={fontColor}>
            {d.id}
          </text>
        </svg>
      )
    });
    return (
      <g transform={`translate(285, 70)`}>
        {items}
      </g>
    )
  }
}

Legend.defaultProps={
  width: 200,
  height: 400
}

export default Legend