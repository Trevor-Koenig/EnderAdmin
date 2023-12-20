import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


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
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
