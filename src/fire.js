import firebase from 'firebase'
var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: "AIzaSyCw1Q_i06h0MJ6sIXaZjYHdxoaB-AH3MeU",
  authDomain: "final-2c23f.firebaseapp.com",
  databaseURL: "https://final-2c23f.firebaseio.com",
  storageBucket: "final-2c23f.appspot.com",
  messagingSenderId: "461525556440",
};
var fire = firebase.initializeApp(config);
export default fire;