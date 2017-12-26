import React, {Component} from 'react';
import BarChart from './BarChart';
import VisibilitySensor from 'react-visibility-sensor';

class BarSection extends Component {
  constructor(props) {
    super(props);
    
    this.onChange = this.onChange.bind(this);
  }

  onChange(isVisible) {
    this.props.currComponentInView('#' + this.props.class);
  }

  render() {
    const classNames = 'BarSection ' + this.props.class;
    
    return (
      <VisibilitySensor onChange={this.onChange}
          scrollCheck
          scrollThrottle={20}
          >
        <div className={classNames} id={this.props.class}>
          <h2> {this.props.description} </h2>
          <BarChart width={this.props.width} height={this.props.height} data={this.props.data}
            xlabel={this.props.xlabel} ylabel={this.props.ylabel} theme={this.props.theme}
          />
          {this.props.children}
        </div>
      </VisibilitySensor>
    )
  }
}

BarSection.defaultProps = {
  width: 700,
  height: 500,
}

export default BarSection;
