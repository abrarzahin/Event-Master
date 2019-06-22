    
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCCkyHMPWlNXQFM4kX1MFpyKDmEmmFWXaw",
    authDomain: "event-master-94196.firebaseapp.com",
    databaseURL: "https://event-master-94196.firebaseio.com",
    projectId: "event-master-94196",
    storageBucket: "",
    messagingSenderId: "741406336544",
    appId: "1:741406336544:web:cebf8d0e61b1bd38"
  };
firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;