import React, {Component} from 'react';
import {connect} from 'react-redux'

class NewPost extends Component {
  state ={
    open: false
  }
  toggleModal = () => this.setState({open: !this.state.open})
  render() {
    return (
      <div className='NewPost'>
        <div>
          <p>Create a new post to appear on the home page</p>
        </div>
        <div className='button' onClick={this.toggleModal}>
          Create New Post
        </div>
      </div>
    )
  }
}

export default NewPost
