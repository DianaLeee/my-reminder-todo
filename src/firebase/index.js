import firebase from "firebase/app";
import "firebase/storage";

// Set firebase configuration
var config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "my-reminder-todo-server.firebaseapp.com",
  databaseURL: "https://my-reminder-todo-server.firebaseio.com",
  projectId: "my-reminder-todo-server",
  storageBucket: "my-reminder-todo-server.appspot.com",
  messagingSenderId: "748966436908",
  appId: "1:748966436908:web:cbd2d5ffe0f631eee7b189",
  measurementId: "G-6PHPKH23DW",
};

// Initialize firebase
firebase.initializeApp(config);

// Get firebase storage
const storage = firebase.storage();

export { storage, firebase as default };
