import React, {Component} from 'react';

class Divider extends Component {
  render() {
    return (
      <div className="divider">
        <ul>
          {this.props.size >= 1 ? <li className="colorA" /> : ""}
          {this.props.size >= 2 ? <li className="colorB" /> : ""}
          {this.props.size >= 3 ? <li className="colorC" /> : ""}
        </ul>
      </div>
    );
  }
}

Divider.defaultProps = {
  size: 3,
}
export default Divider;