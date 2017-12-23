import React, {Component} from 'react';
import Header from './Header';
import SocialMedia from './SocialMedia';
import Tricks from './Tricks';
class Habits extends Component {
  render() {
    const theme = "grey";

    return (
      <div className="Habits">
        <div className="section">
          <div className="content" style={{marginTop: 0, padding: 0}}>
            <h2>Now lets take a look at what kinds of tricks people like to do 
              and where they like to upload them! </h2>
            <SocialMedia description="Where do trickers upload videos?"/>
            <Tricks/>
          </div>
        </div> 
      </div>
    )
  }
}

export default Habits;