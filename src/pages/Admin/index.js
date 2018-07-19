import React, { Component } from 'react';
import {Nav} from './modules'
import './styles/index.css'

export default class Admin extends Component {
  render() {
    return (
      <div className="Admin">
        <Nav/>
        {/* <Heading/>
        <About/>
        <Works/>
        <Footer/> */}
      </div>
    );
  }
}
