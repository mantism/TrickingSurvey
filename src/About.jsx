import React, {Component} from 'react';
import Divider from './Divider';

class About extends Component {
  render() {
    return (
      <div className="About section">
        <h1>About</h1>
        <Divider/>
        <div className="content">
          In 2016, a survey was sent out to the Tricking community via several Tricking related 
          Facebook groups in an attempt to learn more about the community at large. <br/><br/>
          At the time, the Tricking facebook group contained <span className="highlight"> 23,155 </span> members.
          However, shortly after the survey was sent the original group was made secret and is now no longer active.
          From its ashes came a new Facebook group that now contains <span className="highlight"> 8,000+ </span>
          trickers and is much more active, well-maintained, and steadily growing. <br/> <br/> 
          Out of this old facebook group, <span className="highlight"> 365 </span> trickers answered the call,             responding to questions such as <i>"How long have you been tricking?"</i>, <i>"How often do you 
          train"</i>, <i>"What is your favorite trick?"</i>, and much more. <br/> <br/>
          <span className="CTA">Continue below to see what we've learned! </span>
        </div>
      </div>
    )
  }
}

export default About;
