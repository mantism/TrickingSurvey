import React, {Component} from 'react';

class Image extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: props.url,
      alt: props.alt
    }
    this.calcSize = this.calcSize.bind(this);
  }

  componentWillMount() {
    this.calcSize(this.props.size);
  }

  //image sizes assume 16:9 ratio
  calcSize(size) {
    switch(size) {
      case 'small':
        this.setState({height: '144rem', width: '256rem'});
        break;
      case 'medium':
        this.setState({height: '216rem', width: '384rem'});
        break;
      case 'large':
        this.setState({height: '288rem', width: '512rem'});
        break;
      default: 
        this.setState({height: '216rem', width: '384rem'});
    }
  }

  render() {
    //style

    return (
      <div className="image-container">
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