import React, { Component } from 'react';
import {Nav, Posts, NewPost, Footer} from './modules'
import './styles/index.css'

export default class Admin extends Component {
  render() {
    return (
      <div className="Admin">
        <Nav/>
        <NewPost/>
        <Posts/>
        <Footer/>
      </div>
    );
  }
}
