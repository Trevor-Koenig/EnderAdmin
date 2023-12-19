// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyDiRJ-3_uFC1SqwHRTJXnMULleCq5NxKGY",

    authDomain: "portfolio-site-f4cd0.firebaseapp.com",

    projectId: "portfolio-site-f4cd0",

    storageBucket: "portfolio-site-f4cd0.appspot.com",

    messagingSenderId: "647816770643",

    appId: "1:647816770643:web:56e35a8b1452f52ad6c2a6"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

function signUp(email, password) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
};

function signIn(email, password) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}

export { signIn, signUp };