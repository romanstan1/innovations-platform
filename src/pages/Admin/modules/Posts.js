import React, {Component} from 'react';
import {connect} from 'react-redux'

class ListItem extends Component {
  createNotification = () => {
    console.log('createNotification')
  }
  render() {
    const {item} = this.props
    return (
      <li>

        <h3>{item.date}</h3>

        <div className='post-content'>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
        <div className='create-notification'>
          <div className='button' onClick={this.createNotification}>Create</div>
        </div>
      </li>
    )
  }
}

const Posts = ({posts}) =>
<div className='Posts'>
  <ul>
    <li className='headings'>
      <h3 className='date'>Date</h3>
      <h3 className='posts'>Current Posts</h3>
      <h3 className='notifications'>Notifications</h3>
    </li>
    {
      posts.map(item => <ListItem key={item.title} item={item}/>)
    }
  </ul>
</div>


export default connect(state => ({
  posts: state.data.posts,
}))(Posts)
