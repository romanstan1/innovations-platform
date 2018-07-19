import React, { Component } from 'react';
import {Footer, About, Heading, Works} from './modules'
import './styles/index.css'

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Heading/>
        <About/>
        <Works/>
        <Footer/>
      </div>
    );
  }
}
