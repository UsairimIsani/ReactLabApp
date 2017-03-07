import * as Firebase from "firebase";
var config = {
    apiKey: "AIzaSyDiF_1Y36zUW0fbU4P1OE4XqjKnIw1g3f0",
    authDomain: "newerux.firebaseapp.com",
    databaseURL: "https://newerux.firebaseio.com",
    storageBucket: "newerux.appspot.com",
    messagingSenderId: "610399289529"
  };
  Firebase.initializeApp(config);
const db = Firebase.database();
export default db;