import React, {Component} from 'react';
import * as shape from 'd3-shape';
import data from './data/trickingsurveyresults.json';

class SocialMedia extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHovered: false,
      youTube: (data.filter(d => d.doesYoutube === 'Yes').length),
      insta: (data.filter(d => d.doesInsta === 'Yes').length),
      both: (data.filter(d => d.doesYoutube === 'Yes' && d.doesInsta === 'Yes').length),
      neither: (data.filter(d => d.doesYoutube === 'No' && d.doesInsta === 'No').length),
      other: (data.filter(d => d.otherAcc !== "").length)
    };

    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
  }

  onMouseOver(e) {
 		e.target.setAttribute('opacity', '0.5');
	}

  onMouseOut(e) {
 		e.target.setAttribute('opacity', '1.0');
  }

  render() {
   
    let youTubeCircle = shape.arc()
      .innerRadius(this.state.youTube * 0.55 - 10)
      .outerRadius((this.state.isHovered) ? this.state.youTube * 0.56 : this.state.youTube * 0.55)
      .startAngle(0)
      .endAngle(Math.PI * 2);

    let instaCircle = shape.arc()
      .innerRadius(this.state.insta * 0.55 - 10)
      .outerRadius((this.state.isHovered) ? this.state.insta * 0.56 : this.state.insta * 0.55)
      .startAngle(0)
      .endAngle(Math.PI * 2);

    let bothCircle = shape.arc()
      .innerRadius(this.state.both * 0.55 - 10)
      .outerRadius((this.state.isHovered) ? this.state.both * 0.56 : this.state.both * 0.55)
      .startAngle(0)
      .endAngle(Math.PI * 2);
    
    return (
      <div className="SocialMedia" id="Video-Uploads">
        <h2> {this.props.description} </h2>
        <div className="chart-section" style={{marginBottom: 0}}>
          <svg viewBox={`0 0 ${this.props.width} ${this.props.height}`}>
            <g>
              <path d={youTubeCircle()} fill={'#cc181e'}
                transform={`translate(150, 130)`}
                onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}/>
              <text x='0' y='0' transform={`translate(85, 50)`}
                fill={'#cc181e'} fontSize={`2rem`} fontFamily={'Open Sans'}>
                <tspan x='35' dy='1.2em'>{this.state.youTube} </tspan>
                <tspan x='5' dy='1.2em'>YouTube</tspan>
                <tspan x='-5' dy='1.2em'>Uploaders </tspan>
              </text>
            </g>
            <g>
              <path d={instaCircle()} fill={'#9b6954'}
                transform={`translate(400, 220)`}
                onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}
								/>
              <text x='0' y='0' transform={`translate(325, 120)`}
                fill={'#9b6954'} fontSize={`2.5rem`} fontFamily={'Open Sans'}>
                <tspan x='42' dy='1.2em'>{this.state.insta} </tspan>
                <tspan x='-12' dy='1.2em'>Instagram</tspan>
                <tspan x='-12' dy='1.2em'>Uploaders </tspan>
              </text>
            </g>
            <g>
              <path d={bothCircle()} fill={'#0584ba'}
                transform={`translate(200, 330)`}
                onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}
              />
              <text x='0' y='0' transform={`translate(142, 272)`}
                fill={'#0584ba'} fontSize={`1.8rem`} fontFamily={'Open Sans'}>
                <tspan x='35' dy='1.2em'>{this.state.both} </tspan>
                <tspan x='-2' dy='1.2em'>Upload to</tspan>
                <tspan x='30' dy='1.2em'>Both </tspan>
              </text>
            </g>
            <g>
              <text transform={'translate(300, 390)'} fill={'#39393A'}
                fontSize={'1.25rem'} fontFamily={'Open Sans'}>
                {this.state.neither} Upload to Neither YouTube nor Instagram
              </text>
              <text transform={'translate(300, 420)'} fill={'#51848b'}
                fontSize={'1.2rem'} fontFamily={'Open Sans'}>
                {this.state.other} Upload Elsewhere
              </text>    
            </g>
          </svg>
        </div>
      </div>
    )
  }
}

SocialMedia.defaultProps = {
  width: 750,
  height: 450
}

export default SocialMedia;
