// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMeasABRCBkc2VUXcTZN_god9xLq_TRbU",
  authDomain: "crwn-db-4.firebaseapp.com",
  databaseURL: "https://crwn-db-4.firebaseio.com",
  projectId: "crwn-db-4",
  storageBucket: "crwn-db-4.appspot.com",
  messagingSenderId: "1098933605239",
  appId: "1:1098933605239:web:f0bf554e858d08f1600772",
  measurementId: "G-KKNG9ST6V7"
};

export const createUserProfileDocument = async (userAuth, addtionalData) => {
  if (!userAuth) return;
  console.log(userAuth.uid);
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...addtionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;