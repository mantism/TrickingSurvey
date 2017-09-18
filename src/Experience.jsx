import React, {Component} from 'react';
import BarSection from './BarSection'
import Divider from './Divider';
import discoveryData from './data/discovery.json';
import yearsData from './data/yearsTricking.json';
import trainingData from './data/trainingHours.json';
import gatheringData from './data/gatherings.json';

class Experience extends Component {
  render() {
    return (
      <div className="Experience section">
        <h1>Experience</h1>
        <Divider/>
        <div className="content">
            In the survey, several questions were asked related to tricker's
              experience in the community such as <i>"How did you discover tricking?"</i>, 
              <i>"How many years have you been tricking?"</i>, <i>"How many hours a week do you train?"</i>, 
              and <i>"How many gatherings have you attended?"</i>
        </div> 
        <BarSection data={discoveryData} class="Discovery" description="How did Trickers discover tricking?"/>
        <BarSection data={yearsData} class="Years" description="How long have they been tricking?"/>
        <BarSection data={trainingData} class="Training" description="How many hours a week do they train?"/>
        <BarSection data={gatheringData} class="Gatherings" description="How many gatherings have you attended?"/>
      </div>
    );
  }
}

export default Experience;
