// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbo6NnkP9xSmtk7tsoo8ar85EppLgO9tw",
  authDomain: "hyt-global-institute-inc.firebaseapp.com",
  projectId: "hyt-global-institute-inc",
  storageBucket: "hyt-global-institute-inc.firebasestorage.app",
  messagingSenderId: "1067371061553",
  appId: "1:1067371061553:web:36304ffcfc20c7e1851010",
  measurementId: "G-T01QFC9DK5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, analytics, auth, db, storage };
