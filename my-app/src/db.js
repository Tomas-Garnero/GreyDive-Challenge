// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore"
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "greydive-challenge-c4939.firebaseapp.com",
  projectId: "greydive-challenge-c4939",
  storageBucket: "greydive-challenge-c4939.appspot.com",
  messagingSenderId: "977580606584",
  appId: "1:977580606584:web:d283c9f45860cb8cbcd98d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);