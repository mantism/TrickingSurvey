import React, {Component} from 'react';
import PieChart from './PieChart';
import Divider from './Divider';

class PieSection extends Component {
  render() {
    const classNames = 'PieSection ' + this.props.class;
    
    return (
      <div className={classNames}>
        <Divider size={3}/>
        <h3> {this.props.description} </h3>
        <PieChart width={this.props.width} height={this.props.height} data={this.props.data}
          donut={this.props.donut} theme={this.props.theme} float={this.props.float}
          outerRadius={this.props.outerRadius}
        />
        {this.props.children}
      </div>
    )
  }
}

PieSection.defaultProps = {
  width: 700,
  height: 500,
  donut: false,
}

export default PieSection;