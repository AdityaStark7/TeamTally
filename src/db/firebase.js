import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyDAQOgXxnc70YKq2QBvKiqKJmZJl3l1VgE",
    authDomain: "tally-script.firebaseapp.com",
    projectId: "tally-script",
    storageBucket: "tally-script.appspot.com",
    messagingSenderId: "29575669710",
    appId: "1:29575669710:web:1b3a324d787ee6be432d9f",
};

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const storage = firebase.storage()