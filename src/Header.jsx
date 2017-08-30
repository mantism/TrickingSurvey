import React, {Component} from 'react';
import Icons from './Icons';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>Tricking Survey Results</h1>
        <h3>2016</h3>
        <Icons />
      </div>
    );
  }
}

export default Header;