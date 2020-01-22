import React from 'react';
import {Segment, Divider} from 'semantic-ui-react';

const Home = () => (

  <div className='landing' align='center'>
    <br/>
    <Segment style={{opacity: .9, padding: 60}} inverted compact align='center' className='seg'>
      <p style={{color: '#FEBE2A', fontSize: 45}}>
        It's a
        <br/>
        String Thing
      </p>
      <p style={{fontSize: 17}}>
        Music School
      </p>
      <Divider/>
    </Segment>
  </div>
)

export default Home;
