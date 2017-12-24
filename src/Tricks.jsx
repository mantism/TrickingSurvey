import React, {Component} from 'react';
import Divider from './Divider';
import SocialMedia from './SocialMedia';
import FavoriteTricks from './FavoriteTricks';
import BarSection from './BarSection';
import kicksData from './data/kicks.json';
import flipsData from './data/flips.json';
import twistsData from './data/twists.json';
class Tricks extends Component {
  render() {
    const theme = "grey";

    return (
			<div className="Tricks" id="Tricks">
        <div className="section">
          <h1 className="headline">Tricks</h1>
          <Divider size={3}/>
          <p>Now lets take a look at what kinds of tricks people like to do 
          and where they like to upload them!</p>
          <SocialMedia description="Where do trickers upload videos?"/>
          <FavoriteTricks/>
          <BarSection data={kicksData} class="Kicks" description="Top 10 Favorite Kicks"
            xlabel="Kicks" ylabel="Num Trickers" theme={theme}>
            <p>
              <span className="highlight"> 6/10 </span> of the most favorited kicks
            also made it to the overall top 10 list. Because responders chose to make a distinction between 
            raiz, touchdown raiz, and frontswing raiz, the distinction was maintained in the chart above.
            </p>
          </BarSection>
          <BarSection data={flipsData} class="Flips" description="Top 10 Favorite Flips"
            xlabel="Flips" ylabel="Num Trickers" theme={theme}/>
          <BarSection data={twistsData} class="Twists" description="Top 10 Favorite Twists"
            xlabel="Twists" ylabel="Num Trickers" theme={theme}>
            <p> Oddly enough, tricks categorized as "twists" were outnumbered by "kicks" even though
            they tend to be the most visible and popular in videos. It would be interesting to see
            if these distributions would shift with a larger number of respondents. 
            </p>
          </BarSection>
          <p style={{paddingBottom: "1rem", marginBottom: 0}}>
            In total, the survey saw <span className="highlight">62 different tricks</span> mentioned. 
            Thats roughly a fifth of the number of tricks contained on <a href="https://www.club540.com">Club 540</a> (322 in total).
            However, its important to note that Club 540 is often cited as outdated. Currently, 
            <a href="http://teamloopkicks.com/">Team Loopkicks</a> is working on a more modern <a href="http://teamloopkicks.com/tricktionary/">tricktionary</a> that 
            contains significantly more data on the tricks we see in the community. 
            Another great resource for learning about tricks and the technical details behind them is <a href="https://www.tricktheory.com">Trick Theory</a>.
            Be sure to checkout either of these sites if you're at all confused by the terminology used in the charts
            or would just like to know more about the top tricks. 
          </p>
        </div>
			</div>
    )
  }
}

export default Tricks;
