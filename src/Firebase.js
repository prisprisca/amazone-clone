import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCZIxvT358lNnlX5DcM0husRCECYdEA5gQ",
  authDomain: "e-clone-2aebb.firebaseapp.com",
  projectId: "e-clone-2aebb",
  storageBucket: "e-clone-2aebb.appspot.com",
  messagingSenderId: "315713989409",
  appId: "1:315713989409:web:7dc1537a2c6ab44b2d6c60",
  measurementId: "G-R86DM78YGG",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
