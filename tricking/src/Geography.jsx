import React, {Component} from 'react';
import { geoMercator, geoPath } from 'd3-geo';
import ReactTooltip from 'react-tooltip';
import _ from 'lodash';

import world from './data/world.js';
import trickerCountries from './data/trickerCountries.json';
import Divider from './Divider';
import HiddenContent from './HiddenContent';

const projection = geoMercator().scale(100).translate([ 800 / 2, 450 / 2 ]);
const pathGenerator = geoPath().projection(projection);

class Geography extends Component {
  constructor() {
    super();

    const tooltipDisplayBools = this.prepareTooltips();

    this.state = {
      listHidden: true,
      displayBools: tooltipDisplayBools,
      selectedISO: '',
    }

    this.toggleCountryList = this.toggleCountryList.bind(this);
    this.handleMarkerEnter = this.handleMarkerEnter.bind(this);
    this.handleMarkerLeave = this.handleMarkerLeave.bind(this);
  }

  prepareTooltips() {
    const displayBools = _.map(trickerCountries, country => {
      return (
        {
          iso: country.iso,
          display: false
      });
    });
    return displayBools;
  }

  toggleCountryList() {
    this.setState({listHidden: !this.state.listHidden});
  }

  handleMarkerEnter(iso) {
    this.handleMarkerInteraction(iso, true);
  }

  handleMarkerLeave(iso) {
    this.handleMarkerInteraction(iso, false);
  }

  handleMarkerInteraction(iso, bool) {
    const idx = _.findIndex(this.state.displayBools, (c) => {
      return c.iso === iso;
    });
    let bools = this.state.displayBools;
    bools[idx].display = bool;
    this.setState({
      displayBools: bools,
      selectedISO: iso
    });
  }

  render() {
    const countries = world.features.map((d,i) => {
      let color = '#f8f6f2';
      return <path key={'path' + i} d={pathGenerator(d)} className='country' fill={color} stroke='#888'/>
    });

    const circles = world.features.map((d,i) => {
      const color = '#0584ba';
      const id = d.id;
      let lat, lng, rad;

      if (trickerCountries[id]) {
        lat = trickerCountries[id].lat;
        lng = trickerCountries[id].lng;
        const coords = [lng, lat];
        const cntry = trickerCountries[id];

        if (id === 'USA') {
          rad = cntry.numTrickers * 0.25;
        } else if (id === 'DEU') {
          rad = cntry.numTrickers * 0.7;
        } else {
          rad = cntry.numTrickers * 1.2;
        }

        const toolTipVal = d.properties.name + '\r\n' + cntry.numTrickers;

        return <g key={ `marker-${i}`}>
                  <circle
                    cx={projection(coords)[0]} 
                    cy={projection(coords)[1]} 
                    r={rad} 
                    fill={color} 
                    stroke='#191970'
                    className='marker'
                    onMouseEnter={() => this.handleMarkerEnter(d.id)}
                    onMouseLeave={() => this.handleMarkerLeave(d.id)}
                    data-tip={toolTipVal}
                    />
              </g>      
      } else {
        return <circle key={`null-marker-${i}`} cx={0} cy={0} r={0}/>
      }
    });

    const countryList = (
        <div className="caption">
          <ul>
            <li> Antigua and Barbuda (2), Argentina (2), Australia (13), Austria (5), Azerbaijan (1), Belgium (1),
               Brazil (3), Canada (16), Chile (2) </li>
            <li> Costa Rica (1), Czech Republic (6), Denmark (1), Estonia (1), Finland (4), France (3), Germany (31),
               Greece (4), Guatemala (1) </li>
            <li>  Hong Kong (1), Hungary (1), India (2), Ireland (2), Israel (7), Italy (3), Jamaica (1), South Korea (1), 
              Lithuania (7), Malaysia (2) </li>
            <li> Mauritius (1), Mexico (2), Morocco (4), Netherlands (7), New Zealand (2), Norway (9), Peru (1), 
              Portugal (1), Romania (1) </li>
            <li> Serbia (1), Singapore (3), Slovakia (1), South Africa (1), Spain (4), Sweden (8), Switzerland (3), Thailand(2), Tunisia (3), United Kingdom (11), 
              United States (134), Uruguay (3)</li>
          </ul>
        </div>);

    return (
      <div className="Geography section">
        <h1>Geography</h1>
        <Divider size={2}/>
        <h3>Where are trickers from?</h3>
        <div className="Map"> 
          <svg viewBox="0 0 800 350"> 
            <g className="countries">
              {countries}
            </g>
            {circles}
          </svg>
          <div className="content">
          Here the bias towards US Citizens becomes very clear. <span className="highlight">134/365</span> of
          the respondents indicated they were from the United States. The country with the next highest
          number of respondents is Germany with <span className="highlight">31</span>. Followed by Canada with 
          <span className="highlight"> 16 </span> respondents. Hopefully, with future surveys we will be able to see
          a more representative map of the tricking community. In total, responses came from 49 different countries. 
          <span className="CTA" onClick={this.toggleCountryList}> Click here to see the entire list of represented countries.
          </span>
          <HiddenContent hidden={this.state.listHidden}>
            {countryList}
          </HiddenContent>
          </div>
        </div>
        <ReactTooltip place='top' type='dark' effect='float'/>
      </div>
    );
  }
}

export default Geography;