import React, {Component} from 'react';

class Divider extends Component {
  render() {
    return (
      <div className="divider">
        <ul>
          <li className="colorA" />
          <li className="colorB" />
          <li className="colorC" />
        </ul>
      </div>
    );
  }
}

export default Divider;