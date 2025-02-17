import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./database";

export async function CreateAccount(email, password) {
    await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            return "";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            return errorCode;
        });
}

export async function SignIn(email, password) {
    await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            return "";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            return errorMessage;
        });
}

export async function SignOut() {
    await signOut(auth).then(() => {
        // Sign-out successful.
        return null;
    }).catch((error) => {
        // An error happened.
        return error.message;
    });
}