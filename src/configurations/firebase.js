import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC9-6mkxXGQU9_k5cd1FClOud1NUWygjao",
    authDomain: "linkedin-clone-8f84a.firebaseapp.com",
    projectId: "linkedin-clone-8f84a",
    storageBucket: "linkedin-clone-8f84a.appspot.com",
    messagingSenderId: "590792385357",
    appId: "1:590792385357:web:4f6229aa4c29d5d2c90d04",
    measurementId: "G-82J1D78MXG"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db , auth};