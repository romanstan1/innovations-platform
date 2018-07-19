import React, {Component} from 'react';
import {connect} from 'react-redux'

const ListItem = ({handleDelete, item, createNotification}) =>
  <li>
    <div className='date-content'>
      <h3>{item.date}</h3>
    </div>
    <div className='post-content' onClick={handleDelete(item.id)}>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <p>{item.link}</p>
    </div>
    <div className='create-notification'>
      <div className='button' onClick={createNotification}>Create</div>
    </div>
  </li>

class Posts extends Component {
  createNotification = () => {
    console.log('createNotification')
  }
  handleDelete = (id) => () => {
    console.log('Delete', id)
  }
  render() {
  const {posts} = this.props
    return (
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
                createNotification={this.createNotification}
                handleDelete={this.handleDelete}
              />
            )
          }
        </ul>
      </div>
    )
  }
}

export default connect(state => ({
  posts: state.data.posts,
}))(Posts)
