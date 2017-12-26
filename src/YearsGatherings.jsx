import React, {Component} from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import ScatterPlot from './ScatterPlot';
import * as consts from './d3Consts';

class YearsVsGatherings extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(isVisible) {
    this.props.currComponentInView('#' + this.props.class);
  }

  render() {
    const classNames = 'ScatterPlotSection ' + this.props.class;
    return (
      <VisibilitySensor onChange={this.onChange}
      scrollCheck
      scrollThrottle={20}
      //partialVisibility
      >
        <div className={classNames}>
          <h2> # of Years Tricking vs # of Gatherings Attended </h2>
          <ScatterPlot data={this.props.data} class={this.props.class}
            xlabel="Years Tricking" ylabel="Gatherings Attended" theme={this.props.theme}
            x="numYearsTricking" y="numGatherings" xRank={consts.yearsRank}
            yRank={consts.gatherRank}
          />
          {this.props.children}
        </div>
      </VisibilitySensor>
    )
  }
}

export default YearsVsGatherings;