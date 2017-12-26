import React, {Component} from 'react';

class SideNav extends Component {

  render() {
    return (
      <div className="side-nav">
        <h2>Tricking Survey</h2>
        <ul id="side-nav">
          <li className={(this.props.currComp === '#Overview') ? 'active' : 'inactive'}>
            <a id="Overview-button" href="#Overview">Overview</a>
          </li>
          <li className={(this.props.currComp === '#Highlights') ? 'active' : 'inactive'}>
            <a id="Highlights-button" href="#Highlights">Highlights</a>
          </li>
          <li className={(this.props.currComp === '#Demographics') ? 'active' : 'inactive'}>
            <a id="Demographics-button" href="#Demographics">Demographics</a>
          </li>
          <ul>
            <li><a id="Geography-button" href="#Geography">Geography</a></li>
            <li><a id="Gender-button" href="#Gender">Gender</a></li>
          </ul>
          <li className={(this.props.currComp === '#Experience') ? 'active' : 'inactive'}>
            <a id="Experience-button" href="#Experience">Experience</a>
          </li>
          <ul>
            <li><a id="Discovery-button" href="#Discovery">Discovery</a></li>
            <li><a id="Years-tricking-button" href="#Years-Tricking">Years Tricking</a></li>
            <li><a id="Gatherings-button" href="#Gatherings">Gatherings</a></li>
            <li><a id="Weekly-training-button" href="#Weekly-training">Weekly Training</a></li>
          </ul>
          <li className={(this.props.currComp === '#Tricks') ? 'active' : 'inactive'}>
            <a id="Tricks-button" href="#Tricks">Tricks</a>
          </li>
          <ul>
            <li><a id="Video-uploads-button" href="#Video-Uploads">Video Uploads</a></li>
            <li><a id="Top-10-trick-button" href="#Top-10-Tricks">Top 10 Tricks</a></li>
            <li>
              <a id="Kicks-button" href="#Kicks">Top 10 Kicks</a>
            </li>
            <li>
              <a id="Flips-button" href="#Flips">Top 10 Flips</a>
            </li>
            <li>
              <a id="Twists-button" href="#Twists">Top 10 Twists</a>
            </li>
          </ul>
        </ul>
      </div>
    );
  }
}

export default SideNav;