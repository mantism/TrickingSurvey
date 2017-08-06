import React, {Component} from 'react';
import Divider from './Divider';

class About extends Component {
  render() {
    return (
      <div className="About">
        <h1>Overview</h1>
        <Divider/>
        <p> In 2016, a survey was sent out to the Tricking community via several Tricking related 
            Facebook groups in an attempt to learn more about the community at large. </p>
      </div>
    )
  }
}

export default About;
