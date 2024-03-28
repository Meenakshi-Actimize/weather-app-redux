// Import Firebase modules
import { initializeApp } from "firebase-app";
import firebase from 'firebase/app'; // Import the base Firebase module
import 'firebase/database';
// Import other Firebase modules as needed

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuJh_UXoUmYFcFLtivOcC745ypRyzOtBI",
  authDomain: "weather-crud-f33a6.firebaseapp.com",
  databaseURL: "https://weather-crud-f33a6-default-rtdb.firebaseio.com",
  projectId: "weather-crud-f33a6",
  storageBucket: "weather-crud-f33a6.appspot.com",
  messagingSenderId: "15731316281",
  appId: "1:15731316281:web:9c0581ff68b54e742d1fe8",
  measurementId: "G-NZ4Q30D09K"
};


const app = initializeApp(firebaseConfig);

export default firebase;
