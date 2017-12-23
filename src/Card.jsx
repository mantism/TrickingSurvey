import React, {Component} from 'react';
import Divider from './Divider';
import Image from './Image';

class Card extends Component {
  render() {
    return (
      <div className="card">
        <Image url={this.props.imgUrl} size={"small"} noMargs/>
        <div className="card-content">
          <h3>{this.props.header}</h3>
          <Divider size={2}/>
          <p>{this.props.caption}</p>
        </div>
      </div>
    )
  }
}

export default Card;

/*<img src={this.props.imgUrl}/>
<video autoPlay="autoplay" loop="loop">
          <source src={this.props.vidUrl} type="video/mp4" />   
        </video>*/