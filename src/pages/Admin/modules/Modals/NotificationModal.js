import React, {Component} from 'react';
import Dialog from '@material-ui/core/Dialog';
import {postNotification} from 'store/modules/actions'

export default class NotificationModal extends Component {
  state ={
    title: '',
    body: '',
    link: ''
  }
  componentDidMount() {
    const {focusedPost} = this.props
    this.setState({
      title: focusedPost.title,
      body: focusedPost.description,
      link: focusedPost.link
    })
  }
  sendNotification = () => {
    const {title, body, link} = this.state
    postNotification(title, body, link)
    this.props.closeNotification()
  }
  handleTextInput = e => this.setState({[e.target.dataset.type]: e.target.value})
  render () {
    const {focusedPost, closeNotification, notificationOpen} = this.props
    const {link, body, title} = this.state
    return (
      <Dialog
        open={notificationOpen}
        onClose={closeNotification}
        >
        <div className='modal notification'>
          <h4>Send a notification to everyone</h4>
          <div className='display-post'>
            <div>  Title</div>
            <input onChange={this.handleTextInput} value={title} data-type='title' type="text"/>
            <div>Body</div>
            <input onChange={this.handleTextInput} value={body} data-type='body' type="text"/>
            <div>Link</div>
            <input onChange={this.handleTextInput} value={link} data-type='link' type="text"/>
          </div>
          <div className='upload-post'>
            <div className='button bright' onClick={this.sendNotification}>Send Notification</div>
          </div>
        </div>
      </Dialog>
    )
  }
}
