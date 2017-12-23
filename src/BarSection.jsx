import React, {Component} from 'react';
import BarChart from './BarChart';
import Divider from './Divider';

class BarSection extends Component {
  render() {
    const classNames = 'BarSection ' + this.props.class;
    
    return (
      <div className={classNames}>
        <Divider size={3}/>
        <h2> {this.props.description} </h2>
        <BarChart width={this.props.width} height={this.props.height} data={this.props.data}
          xlabel={this.props.xlabel} ylabel={this.props.ylabel} theme={this.props.theme}
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