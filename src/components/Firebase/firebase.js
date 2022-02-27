// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxL6JFfkQ5wxDi_WYzoPVOIReReS7ZOdw",
  authDomain: "coderhousereactjs.firebaseapp.com",
  projectId: "coderhousereactjs",
  storageBucket: "coderhousereactjs.appspot.com",
  messagingSenderId: "1032098714024",
  appId: "1:1032098714024:web:e635bd313d99bf53374d9d",
  measurementId: "G-RPYYG9HPG8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)