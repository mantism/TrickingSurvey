import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Icons from './Icons';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>{this.props.title}</h1>
        <h3>{this.props.subheading}</h3>
        <Icons icons={this.props.icons}/>
      </div>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subheading: PropTypes.string,
  icons: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Header;