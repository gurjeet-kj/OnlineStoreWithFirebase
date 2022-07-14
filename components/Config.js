import firebase from 'firebase/compat/app';
import { getFirestore } from 'firebase/firestore';
import 'firebase/compat/auth';

import Constants from 'expo-constants';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyBhRZICMwQ5ZxottKfhmFRwZznfyT2GQUw",

  authDomain: "shop2-71a2b.firebaseapp.com",

  projectId: "shop2-71a2b",

  storageBucket: "shop2-71a2b.appspot.com",

  messagingSenderId: "686417285353",

  appId: "1:686417285353:web:2b33878a9481b2da2ea078"

};



let Firebase;
Firebase = firebase.initializeApp(firebaseConfig);
export default Firebase;

// MARK: Firestore Reference
export const db = getFirestore(Firebase);



