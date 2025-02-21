import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyByxTFUXGN3v9rX6xNN-5T7U9Mj9618AEs",
  authDomain: "healthp-6ea74.firebaseapp.com",
  projectId: "healthp-6ea74",
  storageBucket: "healthp-6ea74.appspot.com",
  messagingSenderId: "350842633345",
  appId: "1:350842633345:web:312685f020ab59de6e6180",
  measurementId: "G-M2FDEVZPW5"
};



firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storageRef = firebase.storage().ref();