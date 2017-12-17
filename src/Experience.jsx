import React, {Component} from 'react';
import BarSection from './BarSection';
import PieSection from './PieSection';
import YearsVsGatherings from './YearsGatherings';
import HoursTraining from './HoursTraining';
import Header from './Header';
import discoveryData from './data/discovery.json';
import yearsData from './data/yearsTricking.json';
import allData from './data/trickingsurveyresults.json';

class Experience extends Component {
  render() {
    const theme = "dark";
    
    return (
      <div className="Experience">
        <Header title={'Experience'} subheading={'How did trickers discover tricking? How long have they been tricking? How often? Gatherings?!'}
          icons={["calendar", "wheel", "kick"]}
        />
        <div className="section">
          <div className="content">
              In the survey, several questions were asked related to tricker's
              experience in the community such as <i>"How did you discover tricking?"</i>, 
              <i>"How many years have you been tricking?"</i>, <i>"How many hours a week do you train?"</i>, 
              and <i>"How many gatherings have you attended?"</i>
          </div>
          <div className="content" style={{"marginTop": "0"}}>
            <PieSection data={discoveryData} class="Discovery" description="How did Trickers discover tricking?" 
              donut theme={theme}>
              <div style={{'marginBottom': '1.5rem'}}> 
                <p><span className="highlight">The Internet, Martial Arts, and Parkour</span> make up the three most common ways of discovering tricking. 
                  This comes as no surprise since without Martial Arts, tricking would not exist and without the
                  Internet it would not have expanded outside of the martial arts community. As for parkour, it would make sense as
                  the sports are commonly intertwined with eachother. 
                </p>
              </div>
            </PieSection>
            <BarSection data={yearsData} class="Years" description="How long have they been tricking?"
              xlabel="Years Tricking" ylabel="Number of Trickers"
              theme={theme}
            />
            <YearsVsGatherings data={allData} class="Years-Gatherings" theme={theme}/>
            <HoursTraining />
          </div>
          
        </div>
        
      </div>
    );
  }
}

export default Experience;