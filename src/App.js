import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom'
import Home from './pages/Home'
import Admin from './pages/Admin'
import config from './firebase-config.js'
import firebase from 'firebase'
import {connect} from 'react-redux'
import {receivePosts} from 'store/modules/actions'
import 'styles/global.css'

firebase.initializeApp(config);

const messaging = firebase.messaging();

// messaging.requestPermission()
//   .then(function() { return messaging.getToken() })
//   .then(function(token) {
//
//  console.log("Persission granted for messaging. Token: ",token)

 var database = firebase.database();

 // fetch(`https://serene-ocean-70888.herokuapp.com/registertopic`,
 // {
 //   method: "POST",
 //   mode: 'cors',
 //   headers: {
 //     'Content-Type': 'application/x-www-form-urlencoded'
 //   },
 //   body:"token=" + token + "&topic=innovation2" // the topic name is = 'innovation2'
 // })
 // .then(function(resp) {
 //   console.log("Successfully registered to the specified topic using token:  ",resp)
 // })
 // .catch(function(error) { console.log("Error with registration:  ",error) })
// })

class App extends Component {
  componentDidMount() {
    const db = firebase.database().ref('posts/');
    db.on('value', snapshot => {
      const posts =  snapshot.val()
      this.props.dispatch(receivePosts(posts))
    });
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/admin" component={Admin}/>
          <Route component={Home}/>
        </Switch>
      </div>
    )
  }
}


export default connect()(App)
