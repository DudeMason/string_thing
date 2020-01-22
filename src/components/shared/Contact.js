import React from 'react';
import {Segment} from 'semantic-ui-react'

const Contact = () => (

  <div className='div' align='center'>
    <br/>
    <div>
      <p style={{color: '#FEBE2A', fontSize: 30, opacity: .6}}>
        It's a String Thing
      </p>
    </div>
    <Segment compact style={{marginTop: 200, marginBottom: 200}}>
      <p align='center'>
        Rachel Harris -- Owner
        <br/>
        <a href='mailto:racheljh5514@gmail.com'><u>racheljh5514@gmail.com</u></a>
        <br/>
        Social?
      </p>
    </Segment>
  </div>
)

export default Contact;
