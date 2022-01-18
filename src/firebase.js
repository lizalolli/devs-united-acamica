import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDaqWqXDR3JPHh86O0vjCTL4TPi01MYEZw",
    authDomain: "devs-united-def-final.firebaseapp.com",
    projectId: "devs-united-def-final",
    storageBucket: "devs-united-def-final.appspot.com",
    messagingSenderId: "487220695632",
    appId: "1:487220695632:web:c58884f7fdba6707bab755"
  };
  
  // Initialize Firebase
  //const app = initializeApp(firebaseConfig);
  firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export const storage = firebase.storage();
//módulo de autenticación
export const auth = firebase.auth();
//el proveedor de autenticación
export const provider = new firebase.auth.GoogleAuthProvider();
//la utilidad para hacer login con el pop up
export const loginConGoogle = () => auth.signInWithPopup(provider);
//la utilidad para hacer logout
export const logout = () => auth.signOut();

export default firebase;
