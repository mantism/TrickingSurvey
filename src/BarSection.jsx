import React, {Component} from 'react';
import BarChart from './BarChart';
import Divider from './Divider';

class BarSection extends Component {
  render() {
    const margins = {
      left: 100,
      top: 0,
      right: 100,
      bottom: 70
    }

    const classNames = 'BarSection ' + this.props.class;
    
    return (
      <div className={classNames}>
        <Divider size={2}/>
        <h3> {this.props.description} </h3>
        <BarChart width={this.props.width} height={this.props.height} data={this.props.data}
                  margins={margins} />
      </div>
    )
  }
}

BarSection.defaultProps = {
  width: 700,
  height: 500,
}

export default BarSection;