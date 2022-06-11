// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"
const firebaseConfig = {
  apiKey: "AIzaSyBMQ6GcP0GDimWzw4VU_70V14qowzchtDo",
  authDomain: "facebook-clone-33c94.firebaseapp.com",
  projectId: "facebook-clone-33c94",
  storageBucket: "facebook-clone-33c94.appspot.com",
  messagingSenderId: "619745391974",
  appId: "1:619745391974:web:0b708698bfea2a3fa284a7",
  measurementId: "G-96JQXLCL5N"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider };
export default db;