import * as firebase from "firebase";
const config = {
    apiKey: "AIzaSyCTkw0hajV7Wr__vgXAqqXnuS-U_Z-tBLc",
    authDomain: "bloodbamk.firebaseapp.com",
    databaseURL: "https://bloodbamk.firebaseio.com",
    storageBucket: "bloodbamk.appspot.com",
    messagingSenderId: "406426070701"
  };
const firebaseApp = firebase.initializeApp(config);
export const db = firebaseApp.database();
export const auth = firebaseApp.auth();
export const strg = firebaseApp.storage(); 