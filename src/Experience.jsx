import React, {Component} from 'react';
import BarSection from './BarSection';
import PieSection from './PieSection';
import YearsVsGatherings from './YearsGatherings';
import HoursTraining from './HoursTraining';
import Divider from './Divider';
import discoveryData from './data/discovery.json';
import yearsData from './data/yearsTricking.json';
import allData from './data/trickingsurveyresults.json';

class Experience extends Component {
  render() {
    const theme = "dark";
    
    return (
			<div className="Experience" id="Experience">
        <div className="section">
          <h1 className="headline">Experience</h1>
          <Divider size={3}/>
          <div className="content" style={{"marginTop": "0"}}>
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
            <BarSection data={yearsData} class="Years Tricking" description="How long have they been tricking?"
              xlabel="Years Tricking" ylabel="Number of Trickers"
              theme={theme}/>
            <YearsVsGatherings data={allData} class="Gatherings" theme={theme}>
              <div>
                <p>A strong linear correlation is shown between the number of years someone has been tricking
                  and the number of gatherings they've attended. However, no other correlation was found
                  between how long someone has been tricking and other pieces of data such as how often they train 
                  and how they discovered tricking.</p>
              </div>
            </YearsVsGatherings>
            <HoursTraining>
              Some interesting training habits mentioned include training 20+ hours a week as well as 
              cross-training with calisthenics, bboying, meditation, and trampolining.
            </HoursTraining>
          </div>    
        </div>
			</div>
    );
  }
}

export default Experience;
