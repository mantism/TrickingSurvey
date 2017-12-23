import React, {Component} from 'react';
import ScatterPlot from './ScatterPlot';
import * as consts from './d3Consts';

class YearsVsGatherings extends Component {
  render() {
    
    const classNames = 'ScatterPlotSection ' + this.props.class;
    return (
      <div className={classNames}>
        <h2> # of Years Tricking vs # of Gatherings Attended </h2>
        <ScatterPlot data={this.props.data} class={this.props.class}
          xlabel="Years Tricking" ylabel="Gatherings Attended" theme={this.props.theme}
          x="numYearsTricking" y="numGatherings" xRank={consts.yearsRank}
          yRank={consts.gatherRank}
        />
        {this.props.children}
      </div>
    )
  }
}

export default YearsVsGatherings;