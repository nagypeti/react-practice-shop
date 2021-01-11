import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCAUZEhHtkyQ_4oWKPiKrLeR6ZWiqmwMgs",
    authDomain: "react-practice-shop.firebaseapp.com",
    projectId: "react-practice-shop",
    storageBucket: "react-practice-shop.appspot.com",
    messagingSenderId: "499024684704",
    appId: "1:499024684704:web:c5a50acfc2f33142308bc5",
    measurementId: "G-Y2NQSJG397"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestone = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;