import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {getDatabase} from 'firebase/database'

import { initializeApp } from "firebase/app";
import SignupScreen from "./Screens/SignupScreen/SignupScreen";

export const firebaseConfig = {
  apiKey: "AIzaSyCmkg93wSBpuw48ffDlXbNX0GDFXy48rjw",
  authDomain: "wissride.firebaseapp.com",
  projectId: "wissride",
  storageBucket: "wissride.appspot.com",
  messagingSenderId: "936904666945",
  appId: "1:936904666945:web:fe739e6ea8c659824f3bc0"
};

// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}
export const db = getDatabase();