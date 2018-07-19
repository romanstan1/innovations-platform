import React, {Component} from 'react';
import {connect} from 'react-redux'

const Nav = () =>
<nav>
  <span className='home'>
    <a href="/">Home</a>
  </span>
  <span className='title'>Unipro Content Platform - Admin Panel</span>
  <span className='auth'>Not logged in</span>
</nav>


export default connect(state => ({
}))(Nav)
