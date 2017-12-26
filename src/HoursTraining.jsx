import React, {Component} from 'react';

class HoursTraining extends Component {
  render() {
    const url = require('./images/HoursTraining.svg');
    const labelStyles = {
      width: '20%',
      height: '100%',
      display: 'inline-block',
      textAlign: 'center',
      verticalAlign: 'top',
      padding: '2.5rem 0'
    }
    const imageStyles = {
      width: '80%',
      display: 'inline-block',
    }
    const topStyles = {
      display: 'block',
      margin: '2rem auto 0',
      width: '8rem'
    }
        
    return (
      <div className='hours-training' id='Weekly-training'>
        <h2> How many hours a week do they train? </h2>
        <div className='top-label' style={topStyles}>
          Hours per Week
        </div>
        <div className='side-label' style={labelStyles}>
          Number <br/> of <br/> Trickers
        </div>
        <img src={url} alt='Hours Training' style={imageStyles}/>
        <div style={{paddingBottom: "1rem"}}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default HoursTraining;
