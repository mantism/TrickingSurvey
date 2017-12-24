import React, {Component} from 'react';

class SideNav extends Component {
  render() {
    return (
      <div className="side-nav">
        <h2>Tricking Survey </h2>
        <ul>
          <li>Overview</li>
          <li>Highlights</li>
          <li>Demographics</li>
          <li>Experience</li>
          <ul>
            <li>Discovery</li>
            <li>Years Tricking</li>
            <li>Gatherings</li>
            <li>Weekly Training</li>
          </ul>
          <li>Tricks</li>
          <ul>
            <li>Video Uploads</li>
            <li>Top 10 Tricks</li>
            <li>Top 10 Kicks</li>
            <li>Top 10 Flips</li>
            <li>Top 10 Twists</li>
          </ul>
        </ul>
      </div>
    );
  }
}

export default SideNav;