import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom'
import Home from './pages/Home'
import Admin from './pages/Admin'
import 'styles/global.css'
import {fetchPosts} from 'store/modules/actions'
import {messaging} from './store/firebase-init'

export default class App extends Component {
  componentDidMount() {
    fetchPosts(this.props.dispatch)

    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').then(registration => {
          console.log('ServiceWorker registration successful with scope');
        }, err => {
          console.log('ServiceWorker registration failed');
        }).catch(err => {
          console.log(err)
        })
      })
    } else {
      console.log('service worker is not supported');
    }

    messaging.requestPermission()
      .then(() => messaging.getToken())
      .then(token => {
       fetch(`https://us-central1-unipro-innovation-platform.cloudfunctions.net/notification/registerDevice`,
       {
         method: "POST",
         mode: 'cors',
         headers: {
           'Content-Type': 'application/x-www-form-urlencoded'
         },
         body:"token=" + token + "&topic=innovation5" // the topic name is = 'innovation3'
       })
       .then(res => res.json())
       .then(resp => console.log("Successfully registered for notifications"))
       .catch(error => console.log("Error with notification registration"))
    })

  }
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/admin" component={Admin}/>
          <Route exact path="/" component={Home}/>
          <Route component={Home}/>
        </Switch>
      </div>
    )
  }
}
