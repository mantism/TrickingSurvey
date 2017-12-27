import React, {Component} from 'react';

class Image extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: props.url,
      alt: props.alt
    }
  }

  render() {

    let classNames=`image-container ${this.props.noMargs ? 'no-margs' : ''} ${this.props.size}`

    return (
      <div className={classNames}>
        <img src={this.state.url} alt={this.state.alt} />
      </div>
    )
  }
}

Image.defaultProps = {
  url: 'https://s3.amazonaws.com/tricking-survey-gifs/cork.gif',
  size: 'large',
}

export default Image;
