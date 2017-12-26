import React, {Component} from 'react';

class SideNav extends Component {

  render() {
    let isDemographics = this.props.currComp === '#Demographics' || this.props.currComp === '#Geography' 
      || this.props.currComp === '#Gender';
    let isExperience = this.props.currComp === '#Experience' || this.props.currComp === '#Discovery' 
      || this.props.currComp === '#Years-Tricking' || this.props.currComp === '#Gatherings' || this.props.currComp === '#Weekly-training';
    let isTricks = this.props.currComp === '#Tricks' || this.props.currComp === '#Video-Uploads' 
      || this.props.currComp === '#Top-10-Tricks' || this.props.currComp === '#Kicks' || this.props.currComp === '#Flips'
      || this.props.currComp === '#Twists';
    console.log(this.props.currComp);
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
          <li className={(isDemographics) ? 'active' : 'inactive'}>
            <a id="Demographics-button" href="#Demographics">Demographics</a>
          </li>
          <ul>
            <li className={(this.props.currComp === '#Geography') ? 'active' : 'inactive'}>
              <a id="Geography-button" href="#Geography">Geography</a>
            </li>
            <li className={(this.props.currComp === '#Gender') ? 'active' : 'inactive'}>
              <a id="Gender-button" href="#Gender">Gender</a>
            </li>
          </ul>
          <li className={(isExperience) ? 'active' : 'inactive'}>
            <a id="Experience-button" href="#Experience">Experience</a>
          </li>
          <ul>
            <li className={(this.props.currComp === '#Discovery') ? 'active' : 'inactive'}>
              <a id="Discovery-button" href="#Discovery">Discovery</a>
            </li>
            <li className={(this.props.currComp === '#Years-Tricking') ? 'active' : 'inactive'}>
              <a id="Years-tricking-button" href="#Years-Tricking">Years Tricking</a>
            </li>
            <li className={(this.props.currComp === '#Gatherings') ? 'active' : 'inactive'}>
              <a id="Gatherings-button" href="#Gatherings">Gatherings</a>
            </li>
            <li className={(this.props.currComp === '#Weekly-training') ? 'active' : 'inactive'}>
              <a id="Weekly-training-button" href="#Weekly-training">Weekly Training</a>
            </li>
          </ul>
          <li className={(isTricks) ? 'active' : 'inactive'}>
            <a id="Tricks-button" href="#Tricks">Tricks</a>
          </li>
          <ul>
            <li className={(this.props.currComp === '#Video-Uploads') ? 'active' : 'inactive'}>
              <a id="Video-uploads-button" href="#Video-Uploads">Video Uploads</a>
            </li>
            <li className={(this.props.currComp === '#Top-10-Tricks') ? 'active' : 'inactive'}>
              <a id="Top-10-trick-button" href="#Top-10-Tricks">Top 10 Tricks</a>
            </li>
            <li className={(this.props.currComp === '#Kicks') ? 'active' : 'inactive'}>
              <a id="Kicks-button" href="#Kicks">Top 10 Kicks</a>
            </li>
            <li className={(this.props.currComp === '#Flips') ? 'active' : 'inactive'}>
              <a id="Flips-button" href="#Flips">Top 10 Flips</a>
            </li>
            <li className={(this.props.currComp === '#Twists') ? 'active' : 'inactive'}>
              <a id="Twists-button" href="#Twists">Top 10 Twists</a>
            </li>
          </ul>
        </ul>
      </div>
    );
  }
}

export default SideNav;