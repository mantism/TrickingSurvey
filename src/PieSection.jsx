import React, {Component} from 'react';
import PieChart from './PieChart';
import VisibilitySensor from 'react-visibility-sensor';

class PieSection extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(isVisible) {
    console.log('test');
    this.props.currComponentInView('#' + this.props.class);
  }

  render() {
    const classNames = 'PieSection ' + this.props.class;
    
    return (
      <VisibilitySensor onChange={this.onChange}
        scrollCheck
        scrollThrottle={20}
        //partialVisibility
        >
        <div className={classNames} id={this.props.class}>
          <h2> {this.props.description} </h2>
          <PieChart width={this.props.width} height={this.props.height} data={this.props.data}
            donut={this.props.donut} theme={this.props.theme} float={this.props.float}
            outerRadius={this.props.outerRadius}
          />
          {this.props.children}
        </div>
      </VisibilitySensor>
    )
  }
}

PieSection.defaultProps = {
  width: 700,
  height: 500,
  donut: false,
}

export default PieSection;
