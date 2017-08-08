import React, {Component} from 'react';
import Divider from './Divider';
import Image from './Image';

class Highlights extends Component {
  render() {
    const corkURL = "https://s3.amazonaws.com/tricking-survey-gifs/cork.gif";
    const aerialRaizURL ="https://s3.amazonaws.com/tricking-survey-gifs/aerial_ct_raiz.gif";

    return (
      <div className="Highlights section">
        <h1>Highlights</h1>
        <Divider size={1}/>
        <div className="content">
            In total, only 15 questions were asked. Some key highlights are:
            <ul>
              <li> The most popular trick is <span className="highlight"> Cork </span></li>
              <li> Although combo's weren't asked for, the most mentioned combo is <span className="highlight"> 
                Aerial -> front swing -> Raiz</span></li>
              <Image alt="cork" url={corkURL} size="medium"/>
              <Image alt="aerial_raiz" url={aerialRaizURL} size="medium"/>
              <li> Most of the respondents train between <span className="highlight">4-6 hours</span> a week </li>
              <li> Approximately <span className="highlight">60%</span> of the respondents have been tricking 
              between <span className="highlight">1 and 5 years</span> </li>
              <li> <span className="highlight">116/365</span> said they discovered tricking through the internet </li>
              <li> More trickers claimed to upload videos to YouTube than Instagram </li>
            </ul>
        </div>
        <div className="content no-background">
           Obviously, this survey was not perfect. Along with the fact that only a small percentage of the 
           community responded, it was heavily biased against trickers who don't speak English. Hopefully, 
           future surveys can yield a large sample pool and more diverse responses.
           <br/>
        </div>
       
      </div>
    )
  }
}

export default Highlights;