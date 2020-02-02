import React from 'react';
import PhotoNav from './PhotoNav';
import PicViewer from './PicViewer';

const Photos = () => (

  <div className='div' align='center'>
    <br/>
    <div>
      <p style={{color: '#FEBE2A', fontSize: 30, opacity: .6}}>
        It's a String Thing
      </p>
    </div>
    <PhotoNav/>
      <PicViewer/>
  </div>
)

export default Photos;
