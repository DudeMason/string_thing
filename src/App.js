import React from 'react';
import './App.css';
import {Route, Switch, Link} from 'react-router-dom';
import Home from './components/shared/Home';
import Contact from './components/shared/Contact';
import About from './components/shared/About';
import Photos from './components/shared/media/Photos';
import Videos from './components/shared/media/Videos';
import NoMatch from './components/shared/NoMatch';
import Navbar from './components/shared/Navbar';

const App = () => (

  <div>
    <Navbar />
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/contact' component={Contact}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/photos' component={Photos}/>
      <Route exact path='/videos' component={Videos}/>
      <Route component={NoMatch} />
    </Switch>
    <div className='watermark'>
      <p align='center' style={{opacity: .5, fontSize: 17, color: 'white'}}>
        <a href='/' style={{color: 'white'}}><u>It's a String Thing</u></a>
        <br/>
        <i style={{fontSize: 12}}>
          <Link to='/about'>
          <b style={{color: 'white'}}>-About-</b>
          </Link>
          <br/>
          © 2020 Website Created by Mason D Eyre
          <br/>
          <a href='mailto:mason.deyre@gmail.com' style={{color: 'white'}}>
            -mason.deyre@gmail.com-
          </a>
          <br/>
          <a href='http://www.masoneyre.com' style={{color: 'white'}}>
            www.masoneyre.com
          </a>
        </i>
        <br/>
      </p>
    </div>
  </div>
)

export default App;
