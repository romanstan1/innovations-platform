import React, { Component } from 'react';
import {Footer, About, Heading, Works} from '../components'

export default class Home extends Component {
  render() {
    return (
      <div className="App Home">
        <Heading/>
        <About/>
        <Works/>
        <Footer/>
      </div>
    );
  }
}
