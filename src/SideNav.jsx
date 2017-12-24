import React, {Component} from 'react';
import {Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
class SideNav extends Component {
  handleSelect(selectedKey) {
		console.log(`test ${selectedKey}`);
	}

  render() {
    return (
      <Nav bsStyle='pills' stacked activeKey={1} onSelect={this.handleSelect}>
		    <NavItem eventKey={1} href="#Overview">Overview</NavItem>
        <NavItem eventKey={2} href="#Highlights">Highlights</NavItem>
			  <NavDropdown id="Demographics" eventKey={3} title="Demographics" href="#Demographics">
				  <MenuItem eventKey={3.1} href="#Geography">Geography</MenuItem>
          <MenuItem eventKey={3.2} href="#Gender">Gender</MenuItem>
		    </NavDropdown>
        <NavDropdown id="Experience" eventKey={4} title="Experience" href="#Experience">
          <MenuItem eventKey={4.1} href="#Discovery">Discovery</MenuItem>
          <MenuItem eventKey={4.2} href="#Years-tricking">Years Tricking</MenuItem>
          <MenuItem eventKey={4.3} href="#Gatherings">Gatherings</MenuItem>
          <MenuItem eventKey={4.4} href="#Weekly-training">Weekly Training</MenuItem>
        </NavDropdown>
        <NavDropdown id="Tricks" eventKey={5} title="Tricks" href="#Tricks">
          <MenuItem eventKey={5.1} href="#Video-uploads">Video Uploads</MenuItem>
          <MenuItem eventKey={5.2} href="#Top-10-tricks">Top 10 Tricks</MenuItem>
          <MenuItem eventKey={5.3} href="#Kicks">Top 10 Kicks</MenuItem>
          <MenuItem eventKey={5.4} href="#Flips">Top 10 Flips</MenuItem>
          <MenuItem eventKey={5.5} href="#Twists">Top 10 Twists</MenuItem>
        </NavDropdown>
      </Nav>
    );
  }
}

export default SideNav;
