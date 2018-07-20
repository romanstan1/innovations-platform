import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import {DeleteModal, NotificationModal} from './Modals'
import {deletePost, toggleDisplayPost} from 'store/modules/actions'
import Switch from '@material-ui/core/Switch';

const ListItem = ({openDelete, item, openNotification, toggleDisplayPost}) =>
  <li>
    <div className='date-content'>
      <h3>{item.date}</h3>
    </div>
    <div className='post-content'>
      <h3>{item.title}</h3>
      <p className='description'>{item.description}</p>
      <p className='link'>{item.link}</p>
      <div className='delete'>
        <div className='button' onClick={openDelete(item)}>Delete</div>
      </div>
    </div>
    <div className={item.display? 'switch active': 'switch'}>
      <Switch
        checked={item.display}
        onChange={toggleDisplayPost(item)}
        color='default'
      />
    </div>
    <div className='create-notification'>
      <div className='button' onClick={openNotification(item)}>Create</div>
    </div>
  </li>

class Posts extends Component {
  state = {
    deleteOpen: false,
    notificationOpen: false,
    focusedPost: {}
  }
  // notification functions
  sendNotification = () => {
    console.log('sendNotification')
  }
  openNotification = (item) => () => {
    console.log('open notification')
    this.setState({
    notificationOpen: true,
    focusedPost: item })
  }
  closeNotification = () => this.setState({notificationOpen: false})

  // delete functions
  handleDelete = (id) => () => {
    deletePost(this.props.dispatch, id)
    this.closeDelete()
  }
  openDelete = (item) => () => {
    this.setState({
      deleteOpen: true,
      focusedPost: item
    })
  }
  closeDelete = () => this.setState({deleteOpen: false})


  // display post function

  toggleDisplayPost = (item) => () => {
    toggleDisplayPost(item)
  }

  render() {
  const {posts} = this.props
  const {deleteOpen,notificationOpen,focusedPost} = this.state
    return (
      <Fragment>
        <DeleteModal
          focusedPost={focusedPost}
          deleteOpen={deleteOpen}
          closeDelete={this.closeDelete}
          handleDelete={this.handleDelete}
        />
        <NotificationModal
          focusedPost={focusedPost}
          notificationOpen={notificationOpen}
          closeNotification={this.closeNotification}
          sendNotification={this.sendNotification}
        />
        <div className='Posts'>
          <ul>
            <li className='headings'>
              <h3 className='date'>Date</h3>
              <h3 className='posts'>Current Posts</h3>
              <h3 className='display'>Display</h3>
              <h3 className='notifications'>Notifications</h3>
            </li>
            {
              posts.map(item =>
                <ListItem
                  key={item.title}
                  item={item}
                  openNotification={this.openNotification}
                  openDelete={this.openDelete}
                  toggleDisplayPost={this.toggleDisplayPost}
                />
              )
            }
          </ul>
        </div>
      </Fragment>
    )
  }
}

export default connect(state => ({
  posts: state.data.posts,
}))(Posts)
