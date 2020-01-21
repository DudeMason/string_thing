import React from 'react'
import { Menu } from 'semantic-ui-react'
import {Link} from 'react-router-dom';

const PhotoNav = () => (
  <>
    <br/>
    <Menu attached='top' tabular inverted>
      <Menu.Item
        icon='camera'
        name='Photos'
        active={true}
      />
      <Link to='/videos'>
        <Menu.Item
          icon='video'
          name='Videos'
          active={false}
        />
      </Link>
    </Menu>
  </>
  )

export default PhotoNav;
