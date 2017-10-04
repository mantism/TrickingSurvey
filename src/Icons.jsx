import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Icons extends Component {

  render() {
    const icons = this.props.icons.map((i) => {
      let classNames = ["icon", i].join(' ');
      return <li key={i} className={classNames} />
    })
    return (
      <ul className="icons">
        {icons}
      </ul>
    );
  }
}

Icons.propTypes = {
  icons: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Icons;