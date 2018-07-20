import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import {DeleteModal} from './Modals'
import {deletePost} from 'store/modules/actions'

const ListItem = ({openDelete, item, openNotification}) =>
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
    <div className='create-notification'>
      <div className='button' onClick={openNotification}>Create</div>
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
    console.log('createNotification')
  }
  openNotification = () => {
    console.log('createNotification')
    this.setState({notificationOpen: true})
  }
  closeNotification = () => this.setState({notificationOpen: false})

  // delete functions
  handleDelete = (id) => () => {
    deletePost(this.props.dispatch, id)
  }
  openDelete = (item) => () => {
    this.setState({
      deleteOpen: true,
      focusedPost: item
    })
  }
  closeDelete = () => this.setState({deleteOpen: false})

  render() {
  const {posts} = this.props
  const {deleteOpen,focusedPost} = this.state
    return (
      <Fragment>
        <DeleteModal
          focusedPost={focusedPost}
          deleteOpen={deleteOpen}
          closeDelete={this.closeDelete}
          handleDelete={this.handleDelete}

        />
        <div className='Posts'>
          <ul>
            <li className='headings'>
              <h3 className='date'>Date</h3>
              <h3 className='posts'>Current Posts</h3>
              <h3 className='notifications'>Notifications</h3>
            </li>
            {
              posts.map(item =>
                <ListItem
                  key={item.title}
                  item={item}
                  openNotification={this.openNotification}
                  openDelete={this.openDelete}
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
