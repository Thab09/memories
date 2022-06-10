// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9FGsXd6RErywPSXg3xbKzrn_xFjkYstE",
  authDomain: "memories-83850.firebaseapp.com",
  projectId: "memories-83850",
  storageBucket: "memories-83850.appspot.com",
  messagingSenderId: "996490072787",
  appId: "1:996490072787:web:91d802c92cd923b9ca3a26",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);
const firestore = getFirestore(app);

export { storage, firestore };
