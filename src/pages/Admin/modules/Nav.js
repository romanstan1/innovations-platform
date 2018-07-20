import React, {Component} from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import {UserModal} from './Modal'

const HomeIcon = () =>
<div className="HomeIcon">
  <svg width="36" height="36" viewBox="0 0 48 48">
    <path d="M20 40V28h8v12h10V24h6L24 6 4 24h6v16z"/>
  </svg>
</div>

class Nav extends Component {

  render() {
    const {loggedIn, user} = this.props
    return (
      <nav>
        <span className='home'>
          <Link to="/"><HomeIcon/></Link>
        </span>
        <span className='title'>Unipro Content Platform - Admin Panel</span>
        {
          loggedIn?
          <span className='auth'>{user.email.split("@").shift()}</span>
          : null
        }
      </nav>
    )
  }
}


export default connect(state => ({
  loggedIn: state.data.loggedIn,
  user: state.data.user
}))(Nav)
