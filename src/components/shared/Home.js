import React from 'react';
import {Segment, Divider} from 'semantic-ui-react';

const Home = () => (

  <div className='landing' align='center'>
    <br/>
    <Segment style={{opacity: 3, padding: 20}} inverted compact align='center' className='seg'>
      <p style={{color: '#FEBE2A', fontSize: 30}}>
        It's a
        <br/>
        String Thing</p>
      <p>
        Music School
      </p>
      <Divider/>
    </Segment>
  </div>
)

export default Home;
