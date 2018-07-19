import React, {Component} from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'


const HomeIcon = () =>
<div className="HomeIcon">
  <svg width="36" height="36" viewBox="0 0 48 48">
    <path d="M20 40V28h8v12h10V24h6L24 6 4 24h6v16z"/>
  </svg>
</div>

const Nav = () =>
<nav>
  <span className='home'>
    <Link to="/"><HomeIcon/></Link>
  </span>
  <span className='title'>Unipro Content Platform - Admin Panel</span>
  <span className='auth'>Not logged in</span>
</nav>


export default connect(state => ({
}))(Nav)
