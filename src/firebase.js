import firebase from "firebase";

  // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNQwsVAr-9GFGdfWUMCQOTU4SALHoKHyE",
  authDomain: "user-auth-57b6f.firebaseapp.com",
  databaseURL: "https://user-auth-57b6f.firebaseio.com",
  projectId: "user-auth-57b6f",
  storageBucket: "user-auth-57b6f.appspot.com",
  messagingSenderId: "154260720330",
  appId: "1:154260720330:web:7e6e7eb7c95ab47ab78233"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const providers = {
  google: new firebase.auth.GoogleAuthProvider()
};

export const firestore = firebase.firestore();

export default firebase;