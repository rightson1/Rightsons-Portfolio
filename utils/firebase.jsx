import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCYcaAPxjEvF1v-D7-iiphJWt4elzHzLoM",
    authDomain: "adrian-e7a84.firebaseapp.com",
    projectId: "adrian-e7a84",
    storageBucket: "adrian-e7a84.appspot.com",
    messagingSenderId: "1062218926111",
    appId: "1:1062218926111:web:b359a3a96d2ad8aa7bed2a"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);