import React, { Component } from 'react';
import {Nav, Posts, NewPost} from './modules'
import './styles/index.css'

export default class Admin extends Component {
  render() {
    return (
      <div className="Admin">
        <Nav/>
        <NewPost/>
        <Posts/>
      </div>
    );
  }
}
