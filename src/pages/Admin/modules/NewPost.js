import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import Dialog from '@material-ui/core/Dialog';

const DialogWrapper = ({state, handleClose, handleTextInput}) =>
  <Dialog
    open={state.open}
    onClose={handleClose}
    open={state.open}
    >
    <div className='new-post-modal'>

      <div>Title</div>
      <input onChange={handleTextInput} value={state.title} data-type='title' type="text"/>

      <div>Description</div>
      <input onChange={handleTextInput} value={state.description} data-type='description' type="text"/>

      <div>Link</div>
      <input onChange={handleTextInput} value={state.link} data-type='link' type="text"/>

      <div className='upload-post'>
        <div className='button'>Upload Post</div>
      </div>

    </div>
  </Dialog>


class NewPost extends Component {
  state ={
    open: false,
    title:'',
    description: '',
    link:''
  }

  handleTextInput = (e) => {
    console.log('text:', e.target.dataset.type)
    this.setState({ [e.target.dataset.type]: e.target.value})
  }

  handleClose = () => this.setState({open: false})
  handleOpen = () => this.setState({open: true})
  render() {
    return (
      <Fragment>
        <DialogWrapper
          handleClose={this.handleClose}
          state={this.state}
          handleTextInput={this.handleTextInput}
        />
        <div className='NewPost'>
          <div>
            <p>Create a new post to appear on the home page</p>
          </div>
          <div className='button' onClick={this.handleOpen}>
            Create New Post
          </div>
        </div>
      </Fragment>
    )
  }
}

export default NewPost
