import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import Dialog from '@material-ui/core/Dialog';
import {uploadPost} from 'store/modules/actions'

const NewPostModal = ({state, handleClose, handleTextInput, handleUpload}) =>
  <Dialog
    open={state.open}
    onClose={handleClose}
    >
    <div className='modal'>
      <div>Title</div>
      <input onChange={handleTextInput} value={state.title} data-type='title' type="text"/>
      <div>Description</div>
      <input onChange={handleTextInput} value={state.description} data-type='description' type="text"/>
      <div>Link</div>
      <input onChange={handleTextInput} value={state.link} data-type='link' type="text"/>
      <div className='upload-post'>
        <div
          className={ state.description.length && state.link.length && state.title.length? 
            'button bright' : 'button error' }
          onClick={handleUpload}>Upload Post</div>
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

  handleTextInput = e => this.setState({[e.target.dataset.type]: e.target.value})
  handleClose = () => this.setState({open: false})
  handleOpen = () => this.setState({open: true})
  handleUpload = () => {
    const {title, description, link} = this.state
    const {dispatch} = this.props
    if(title.length && description.length && link.length) {
      uploadPost(dispatch, title, description, link)
      this.handleClose()
    }
  }
  render() {
    return (
      <Fragment>
        <NewPostModal
          handleClose={this.handleClose}
          state={this.state}
          handleTextInput={this.handleTextInput}
          handleUpload={this.handleUpload}
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

export default connect()(NewPost)
