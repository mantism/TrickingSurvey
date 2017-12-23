import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Icons from './Icons';

class Header extends Component {
  render() {
    let classNames = "header " + this.props.className;

    return (
      <div className={classNames}>
        <h1>{this.props.title}</h1>
        <h4>{this.props.subheading}</h4>
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