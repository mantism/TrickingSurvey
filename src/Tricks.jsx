import React, {Component} from 'react';
import Card from './Card';
import Divider from './Divider';
import tricksData from './data/popularTricks.json';
import _ from 'lodash';

class Tricks extends Component {
  render() {
    let cards = _.map(tricksData, (t, i) => {
      return <Card key={i} id={i} header={t.trick + ': ' + t.count} 
              caption={t.caption} vidUrl={t.vidUrl} imgUrl={t.imgUrl}/>
    })
    
    return (
      <div className="trick-section">
        <h1>Favorite Tricks</h1>
        <div className="Tricks">
          {cards}
        </div>
      </div>
      
    )
  }
}

export default Tricks;
