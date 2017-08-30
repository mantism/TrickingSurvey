import React, {Component} from 'react';
import _ from 'lodash';

class HiddenContent extends Component {
  render() {
    const hidden = this.props.hidden ? 'hidden' : '';
    const classes = _.join(['hiddenContent', hidden], ' ');

    return (
      <div className={classes}>
        {this.props.children}
      </div>
    )
  }
}

export default HiddenContent;