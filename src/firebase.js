import firebase from "firebase/app";
import "firebase/auth"; // import authentication module for Firebase to allow user to sign up, login, etc.

// Main purposes of this file:
// 1. setup Firebase by initializing the app with Firebase config data.
// 2. Export initialized Firebase app as well as the auth variable, which provides an authentication instance.

// Initialize the app with Firebase's initlizeApp method and place Firebase config variables from .env file in the initialized app.
const app = firebase.initializeApp({
  // The .env file (.env.local in src folder) provisions (provides environment variables) Firebase config variables to this js file. This allows us to switch between production and development instances without having to change the code.
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY, // Auth / General Use
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN, // Auth with popup/redirect
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL, // Realtime database
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID, // General Use
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET, // Storage
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID, // Cloud Messaging
  appId: process.env.REACT_APP_FIREBASE_APP_ID, // General Use
});

// Initialize another app boilerplate:
// var otherApp = firebase.initializeApp({
//   apiKey: "AIza....",
//   appId: "1:27992087142:web:ce....",
//   projectId: "my-firebase-project",
//   databaseURL: "https://<OTHER_DATABASE_NAME>.firebaseio.com",
//   storageBucket: "<OTHER_STORAGE_BUCKET>.appspot.com"
// }, "nameOfOtherApp");

export const auth = app.auth(); //provides authentication instance
export default app;
