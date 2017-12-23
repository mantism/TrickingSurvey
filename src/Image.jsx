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
        this.setState({height: '10.08rem', width: '17.92rem'});
        break;
      case 'medium':
        this.setState({height: '14.4rem', width: '25.6rem'});
        break;
      case 'large':
        this.setState({height: '21.6rem', width: '38.4rem'});
        break;
      default: 
        this.setState({height: '14.4rem', width: '25.6rem'});
    }
  }

  render() {

    let classNames=`image-container ${this.props.noMargs ? 'no-margs' : ''}`

    return (
      <div className={classNames}>
        <img src={this.state.url} alt={this.state.alt} 
        style={{height: this.state.height, width: this.state.width}} />
      </div>
    )
  }
}

Image.defaultProps = {
  url: 'https://s3.amazonaws.com/tricking-survey-gifs/cork.gif',
  size: 'large',
}

export default Image;