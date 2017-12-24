import React, {Component} from 'react';
import PieChart from './PieChart';
import genderData from './data/gender.json';

class Gender extends Component {
  render() {
    return (
      <div className="Gender" id="Gender">
        <h2> What do trickers identify as? (gender) </h2>
        <div className="left">
          <PieChart data={genderData} class="Gender" float="left"
             outerRadius={100} theme="none" labels/>
        </div>
        <div className="right">
          <p>Of the 365 responses, 11 trickers identified as females. That 
            is only <span className="highlight"> 3% </span> of the respondents.
            Despite being a male dominated sport, the issue of gender imbalance 
            is periodically discussed within the tricking community. In recent years, a 
            tremendous effort has been made by groups such as <a href="https://www.facebook.com/EuphoriaTricking/"> 
            Euphoria Tricking </a> to bridge this gap through hosting events and 
            heavy promotion of female trickers. However, the tricking community is
            still far from being balanced gender-wise.
          </p>
        </div>
        
        
      </div>

    )
  }
}

export default Gender;
