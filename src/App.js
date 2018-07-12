import React, { Component } from 'react';
import {Footer, About, Heading, Works} from './components'
import config from './firebase-config.js'
import firebase from 'firebase'

firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.requestPermission()
  .then(function() { return messaging.getToken() })
  .then(function(token) {

 console.log("Persission granted for messaging. Token: ",token)

 fetch(`https://serene-ocean-70888.herokuapp.com/registertopic`,
 {
   method: "POST",
   mode: 'cors',
   headers: {
     'Content-Type': 'application/x-www-form-urlencoded'
   },
   body:"token=" + token + "&topic=innovation2" // the topic name is = 'innovation2'
 })
 .then(function(resp) {
   console.log("Successfully registered to the specified topic using token:  ",resp)
 })
 .catch(function(error) { console.log("Error with registration:  ",error) })
})

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading/>
        <About/>
        <Works/>
        <Footer/>
      </div>
    );
  }
}
