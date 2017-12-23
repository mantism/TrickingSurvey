import React, {Component} from 'react';
import Card from './Card';
import Divider from './Divider';
import tricksData from './data/popularTricks.json';
import _ from 'lodash';

class FavoriteTricks extends Component {
  render() {
    let cards = _.map(tricksData, (t, i) => {
      return <Card key={i} id={i} header={t.trick + ': ' + t.count + ' trickers'} 
              caption={t.caption} vidUrl={t.vidUrl} imgUrl={t.imgUrl}/>
    })
    
    return (
      <div>
        <h2>Top 10(ish) Favorite Tricks:</h2>
        <div className="FavoriteTricks">
          {cards}
        </div>
      </div>
      
    )
  }
}

export default FavoriteTricks;
