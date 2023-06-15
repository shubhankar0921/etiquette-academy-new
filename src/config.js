import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'

let firebaseConfig = {
    apiKey: "AIzaSyCImf6DCTuT_Wy3Ur4fGNloIvDa57dyGN8",
    authDomain: "newideas-5cd88.firebaseapp.com",
    projectId: "newideas-5cd88",
    storageBucket: "newideas-5cd88.appspot.com",
    messagingSenderId: "884046818559",
    appId: "1:884046818559:web:e9a1fcdb3f3cec9ce3b0ca"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)

export { firebaseConfig };