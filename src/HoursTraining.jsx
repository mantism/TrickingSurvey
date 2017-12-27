import React, {Component} from 'react';
import _ from 'lodash';
import { scaleLinear } from 'd3-scale';
import hoursData from './data/trainingHours.json';

class HoursTraining extends Component {
	constructor(props) {
		super(props);
		let data = _.sortBy(hoursData, (d) => { return d.val});
    let max = data[data.length - 1]; 
		this.colorScale =scaleLinear()
			.domain([0, max.val])
		  .range(['#0584ba', '#cd853f']);
	}
	
	render() {
    let prevWidth = 0;
		let prevX = 25;
		const rectangles = _.map(hoursData, (d, i) => {
      let width = d.val * 1.4;
			let currX = prevX + prevWidth;
			let dataTip = d.val + ' trickers train ' + d.id + ' hours a week';
			let rect = <rect key={i} x={currX} y='0' width={width} height={25}
									fill={this.colorScale(d.val)} data-tip={dataTip}/>
			prevWidth = width;
			prevX = currX;
			return rect;
		});
        
    return (
      <div className='hours-training' id='Weekly-training'>
        <h2> How many hours a week do they train? </h2>
			  <div className="hours">
			    <svg viewBox={`0 0 500 50`}>
						<g>
							{rectangles}
							<text x='15' y='40' fontFamily='Open Sans' fontSize='8' fill='white'>
								{hoursData[0].id}
							</text>
			        <text x={prevX + prevWidth - 20} y='40' fontFamily='Open Sans' fontSize='8' fill='white'>
								{hoursData[hoursData.length -1].id}
							</text>
			    	</g>
		 			</svg>
			  </div>
        <div style={{paddingBottom: "1rem"}}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default HoursTraining;
