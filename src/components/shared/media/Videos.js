import React from 'react';
import VideoNav from './VideoNav';
import CelloChristmas from './images/CelloChristmas.mp4';
import Beginners from './images/Beginners.mp4';
import {Grid} from 'semantic-ui-react';

const Videos = () => (

  <div className='div'>
    <br/>
    <div align='center'>
      <p style={{color: '#FEBE2A', fontSize: 30, opacity: .6}}>
        It's a String Thing
      </p>
    </div>
    <VideoNav/>
    <Grid columns={2} style={{marginTop: 1}} textAlign='center' stackable>
      <video width="500" controls>
        <source src={CelloChristmas} type="video/mp4"/>
        Your browser does not support HTML5 video.
      </video>
      <video width="500" controls>
        <source src={Beginners} type="video/mp4"/>
        Your browser does not support HTML5 video.
      </video>
    </Grid>
  </div>
)

export default Videos;
