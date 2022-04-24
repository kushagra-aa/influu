import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAGihAFyju3Ao1FIVzhZTKmLUbDq4YSjeM",
  authDomain: "influu-k.firebaseapp.com",
  projectId: "influu-k",
  storageBucket: "influu-k.appspot.com",
  messagingSenderId: "325290107938",
  appId: "1:325290107938:web:31e66519f70c5e1290567b",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
