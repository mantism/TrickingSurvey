import React, {Component} from 'react';
import * as shape from 'd3-shape';
import Divider from './Divider';
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
  
  onMouseOver() {
    this.setState({isHovered: true});
  }

  onMouseOut() {
    this.setState({isHovered: false});
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
      <div className="SocialMedia">
        <Divider size={3} />
        <h2> {this.props.description} </h2>
        <div className="chart-section" style={{marginBottom: 0}}>
          <svg viewBox={`0 0 ${this.props.width} ${this.props.height}`}>
            <g>
              <path d={youTubeCircle()} fill={'#cc181e'}
                transform={`translate(150, 140)`}
              />
              <text x='0' y='0' transform={`translate(85, 60)`}
                fill={'#cc181e'} fontSize={`2rem`} fontFamily={'Roboto'}>
                <tspan x='35' dy='1.2em'>{this.state.youTube} </tspan>
                <tspan x='5' dy='1.2em'>YouTube</tspan>
                <tspan x='-5' dy='1.2em'>Uploaders </tspan>
              </text>
            </g>
            <g>
              <path d={instaCircle()} fill={'#9b6954'}
                transform={`translate(400, 230)`}
              />
              <text x='0' y='0' transform={`translate(325, 130)`}
                fill={'#9b6954'} fontSize={`2.5rem`} fontFamily={'Roboto'}>
                <tspan x='42' dy='1.2em'>{this.state.insta} </tspan>
                <tspan x='-12' dy='1.2em'>Instagram</tspan>
                <tspan x='-12' dy='1.2em'>Uploaders </tspan>
              </text>
            </g>
            <g>
              <path d={bothCircle()} fill={'#0584ba'}
                transform={`translate(200, 340)`}
              />
              <text x='0' y='0' transform={`translate(142, 282)`}
                fill={'#0584ba'} fontSize={`1.8rem`} fontFamily={'Roboto'}>
                <tspan x='35' dy='1.2em'>{this.state.both} </tspan>
                <tspan x='-2' dy='1.2em'>Upload to</tspan>
                <tspan x='30' dy='1.2em'>Both </tspan>
              </text>
            </g>
            <g>
              <text transform={'translate(300, 400)'} fill={'#39393A'}
                fontSize={'1.25rem'} fontFamily={'Roboto'}>
                {this.state.neither} Upload to Neither YouTube nor Instagram
              </text>
              <text transform={'translate(300, 430)'} fill={'#51848b'}
                fontSize={'1.2rem'} fontFamily={'Roboto'}>
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
  width: 700,
  height: 500
}

export default SocialMedia;