// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyCTJTnAMyGhcREeS2pPdv7o1fzIgVyAHbk",
    authDomain: "chouse-react.firebaseapp.com",
    projectId: "chouse-react",
    storageBucket: "chouse-react.appspot.com",
    messagingSenderId: "557105773651",
    appId: "1:557105773651:web:754d767b94d23d400b9aa6"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)