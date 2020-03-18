import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

var firebaseConfig = {
  apiKey: "AIzaSyCxNZnjT70jj71Mxm2xTxXhtbQSYUANEv8",
  authDomain: "messengerapp-6a1a5.firebaseapp.com",
  databaseURL: "https://messengerapp-6a1a5.firebaseio.com",
  projectId: "messengerapp-6a1a5",
  storageBucket: "messengerapp-6a1a5.appspot.com",
  messagingSenderId: "143132514076",
  appId: "1:143132514076:web:c7771d4ac9e381afd14cd9",
  measurementId: "G-WJJ2T8BPLW"

  };

export const Config = firebase.initializeApp(firebaseConfig);
  



  
