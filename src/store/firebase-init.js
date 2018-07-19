import config from './firebase-config.js'
import firebase from 'firebase'
// import {receivePosts} from 'store/modules/actions'

firebase.initializeApp(config);

const messaging = firebase.messaging();
const database = firebase.database();

export {database}
export {messaging}

// const db = firebase.database().ref('posts/');
// db.on('value', snapshot => {
//   const posts =  snapshot.val()
//   this.props.dispatch(receivePosts(posts))
// });

// const messaging = firebase.messaging();
// messaging.requestPermission()
//   .then(function() { return messaging.getToken() })
//   .then(function(token) {
//
//  console.log("Persission granted for messaging. Token: ",token)
//  fetch(`https://serene-ocean-70888.herokuapp.com/registertopic`,
//  {
//    method: "POST",
//    mode: 'cors',
//    headers: {
//      'Content-Type': 'application/x-www-form-urlencoded'
//    },
//    body:"token=" + token + "&topic=innovation2" // the topic name is = 'innovation1'
//  })
//  .then(function(resp) {
//    console.log("Successfully registered to the specified topic using token:  ",resp)
//  })
//  .catch(function(error) { console.log("Error with registration:  ",error) })
// })
