importScripts('https://www.gstatic.com/firebasejs/5.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.2.0/firebase-messaging.js');

firebase.initializeApp({
  'messagingSenderId': '336534212684'
});

const messaging = firebase.messaging();

console.log('messaging sw registered')
