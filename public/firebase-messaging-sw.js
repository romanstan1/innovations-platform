importScripts('https://www.gstatic.com/firebasejs/5.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.2.0/firebase-messaging.js');

firebase.initializeApp({
  'messagingSenderId': '336534212684'
});

const messaging = firebase.messaging();

console.log('messaging sw registered')
//
// messaging.requestPermission()
//   .then(() => messaging.getToken())
//   .then(token => {
//
//  console.log("Persission granted for messaging. Token: ",token)
//
//  // simply registers the instance of this app on FCM,
//  // passing the token via a server on heroku due to CORS
//  // that belongs to Roman Stankiewicz
//  // only viable for the ecomm demonstration
//
//    fetch(`https://serene-ocean-70888.herokuapp.com/registertopic`,
//    {
//      method: "POST",
//      mode: 'cors',
//      headers: {
//        'Content-Type': 'application/x-www-form-urlencoded'
//      },
//      body:"token=" + token + "&topic=ecomm" // the topic name is = 'ecom'
//    })
//    .then(function(resp) {
//      console.log("Successfully registered to the specified topic using token:  ",resp)
//    })
//    .catch(function(error) { console.log("Error with registration:  ",error) })
//   })
//
// })
