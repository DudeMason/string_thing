import React from 'react';
import PhotoNav from './PhotoNav';
import {Image, Grid} from 'semantic-ui-react';
import Recital2 from './images/2017Recital.jpg';
import Recital1 from './images/2019Recital.jpg';
import Christmas from './images/Christmas.jpg';
import FunRecital from './images/FunRecital.jpg';
import Instruments from './images/Instruments.jpg';
import ServiceChristmas from './images/ServiceChristmas.jpg';

const Photos = () => (

  <div className='div'>
    <PhotoNav/>
      <Grid columns={2} align='center' stackable>
        <Grid.Column>
          <Image size='huge' src={Recital2}/>
          <Image size='huge' src={Recital1}/>
          <Image size='huge' src={Christmas}/>
        </Grid.Column>
        <Grid.Column>
          <Image size='huge' src={ServiceChristmas}/>
          <Image size='large' src={FunRecital}/>
          <Image size='large' src={Instruments}/>
        </Grid.Column>
      </Grid>
  </div>
)

export default Photos;
