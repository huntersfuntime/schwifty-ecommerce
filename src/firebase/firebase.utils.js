import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAjqAzI9Ak6Yb9E7-0tyeRtQKTO2SNx1Tk",
  authDomain: "schwifty-db.firebaseapp.com",
  databaseURL: "https://schwifty-db.firebaseio.com",
  projectId: "schwifty-db",
  storageBucket: "",
  messagingSenderId: "158821928729",
  appId: "1:158821928729:web:688dca9143e53120"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
