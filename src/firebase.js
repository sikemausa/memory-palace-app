const firebase = require('firebase');
  var config = {
    apiKey: "AIzaSyDLMJIq-7KzETD3wLHAKLc7vbr_NyCTDZE",
    authDomain: "memory-palace-ba577.firebaseapp.com",
    databaseURL: "https://memory-palace-ba577.firebaseio.com",
    storageBucket: "memory-palace-ba577.appspot.com",
    messagingSenderId: "531134599689"
  };

  firebase.initializeApp(config);

export default firebase;
export const provider = new firebase.auth.FacebookAuthProvider();
export const currentUser = firebase.auth().currentUser;
