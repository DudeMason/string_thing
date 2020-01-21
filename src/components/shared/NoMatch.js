import React from 'react';
import {Header} from 'semantic-ui-react';

const NoMatch = () => (

  <div align='center' style={{marginBottom: 200}}>
    <br/>
    <br/>
    <Header as='h2' inverted>404 Error! Page doesn't exist.</Header>
    <a href='/' style={{fontSize: 19}}><u>Back to Home</u></a>
  </div>
)

export default NoMatch;
