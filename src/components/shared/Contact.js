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
    <Segment inverted compact style={{marginTop: 100, marginBottom: 100}}>
      <p align='center' style={{fontSize: 20}}>
        Rachel Harris -- Owner
        <br/>
        <a href='mailto:racheljh5514@gmail.com'><u>racheljh5514@gmail.com</u></a>
        <br/>
        <br/>
        Social Medias?
      </p>
    </Segment>
  </div>
)

export default Contact;
