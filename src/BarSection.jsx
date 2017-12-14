import React, {Component} from 'react';
import BarChart from './BarChart';
import Divider from './Divider';

class BarSection extends Component {
  render() {
    const classNames = 'BarSection ' + this.props.class;
    
    return (
      <div className={classNames}>
        <Divider size={3}/>
        <h3> {this.props.description} </h3>
        <BarChart width={this.props.width} height={this.props.height} data={this.props.data}
          xlabel={this.props.xlabel} ylabel={this.props.ylabel}
        />
        {this.props.children}
      </div>
    )
  }
}

BarSection.defaultProps = {
  width: 700,
  height: 500,
}

export default BarSection;