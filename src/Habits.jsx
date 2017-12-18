import React, {Component} from 'react';
import SocialMedia from './SocialMedia';
import Header from './Header';

class Habits extends Component {
  render() {
    const theme = "grey";

    return (
      <div className="Habits">
        <Header title='Social Media Usage and Favorite Tricks' 
          icons={["gainer"]}
        />
        <div className="section">
          <div className="content" style={{padding: 0}}>
            <h2>Now lets take a look at what kinds of tricks people like to do 
            and where they like to upload them! </h2>
          </div>
          <div className="content" style={{marginTop: 0, padding: 0}}>
            <SocialMedia description="Where do trickers upload videos?"/>
          </div>
        </div> 
      </div>
    )
  }
}

export default Habits;