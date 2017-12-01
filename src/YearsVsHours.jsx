import React, {Component} from 'react';
import ScatterPlot from './ScatterPlot';

class YearsVsHours extends Component {
  render() {
    
    const classNames = 'ScatterPlotSection ' + this.props.class;
    return (
      <div className={classNames}>
        <h3> # of Years Tricking vs # of Hours Tricking Per Week </h3>
        <ScatterPlot data={this.props.data} class={this.props.class}/>
      </div>
    )
  }
}

export default YearsVsHours;