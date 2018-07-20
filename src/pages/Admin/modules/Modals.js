import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import {deletePost} from 'store/modules/actions'

export const DeleteModal = ({focusedPost, closeDelete, handleDelete, deleteOpen}) =>
  <Dialog
    open={deleteOpen}
    onClose={closeDelete}
    >
    <div className='modal delete'>
      <h4>Are you sure you want to delete this post permanently?</h4>

      <div className='display-post'>
        <h3 className='date' >{focusedPost.date}</h3>
        <h3>{focusedPost.title}</h3>
        <div>{focusedPost.description}</div>
        <div>{focusedPost.link}</div>
      </div>

      <div className='upload-post'>
        <div className='button bright' onClick={handleDelete(focusedPost.id)}>Confirm Delete</div>
      </div>
    </div>
  </Dialog>

export const NotificationModal = ({focusedPost, closeNotification, sendNotification, notificationOpen}) =>
  <Dialog
    open={notificationOpen}
    onClose={closeNotification}
    >
    <div className='modal delete'>
      <h4>Send a notification to everyone</h4>
      <div className='display-post'>
        {/* <h3 className='date' >{focusedPost.date}</h3>
        <h3>{focusedPost.title}</h3>
        <div>{focusedPost.description}</div>
        <div>{focusedPost.link}</div> */}
        Lorem ipsum dolor. accusantium consequuntur, dolores quibusdam recusandae itaque labore sit ipsam eaque!
      </div>
      <div className='upload-post'>
        <div className='button bright' onClick={sendNotification}>Send Notification</div>
      </div>
    </div>
  </Dialog>

export const UserModal = ({handleClose, open}) =>
  <Dialog
    open={open}
    onClose={handleClose}
    >
    <div className='user-modal'>
      User Modal
    </div>
  </Dialog>
