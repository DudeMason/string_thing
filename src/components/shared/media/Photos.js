import React from 'react';
import PhotoNav from './PhotoNav';
import {Image, Grid, Segment} from 'semantic-ui-react';
import Recital2 from './images/2017Recital.jpg';
import Recital1 from './images/2019Recital.jpg';
import Christmas from './images/Christmas.jpg';
import FunRecital from './images/FunRecital.jpg';
import Instruments from './images/Instruments.jpg';
import ServiceChristmas from './images/ServiceChristmas.jpg';

const Photos = () => (

  <div className='div'>
    <br/>
    <div align='center'>
      <p style={{color: '#FEBE2A', fontSize: 30, opacity: .6}}>
        It's a String Thing
      </p>
    </div>
    <PhotoNav/>
      <Grid columns={2} align='center' stackable>
        <Grid.Column>
          <Segment compact>
            <Image size='huge' src={Recital2}/>
          </Segment>
          <Segment compact>
            <Image size='huge' src={Recital1}/>
          </Segment>
          <Segment compact>
            <Image size='huge' src={Christmas}/>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment compact>
            <Image size='huge' src={ServiceChristmas}/>
          </Segment>
          <Segment compact>
            <Image size='large' src={FunRecital}/>
          </Segment>
          <Segment compact>
            <Image size='large' src={Instruments}/>
          </Segment>
        </Grid.Column>
      </Grid>
  </div>
)

export default Photos;
