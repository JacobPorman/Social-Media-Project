// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFTxCNx47DnYh5ScvGTOMa3Qz7hKfLZ-o",
  authDomain: "insta-clone-bc89c.firebaseapp.com",
  projectId: "insta-clone-bc89c",
  storageBucket: "insta-clone-bc89c.appspot.com",
  messagingSenderId: "1004154848304",
  appId: "1:1004154848304:web:ab83ebdfd8713ba98819f5",
  measurementId: "G-QVCTJS0XK9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
// const analytics = getAnalytics(app);

export { app, auth, firestore, storage };
