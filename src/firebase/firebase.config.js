// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFUG8TwnRegQAT9gLdm6HWFfm9pmBYQDo",
  authDomain: "b9-realested-assingment.firebaseapp.com",
  projectId: "b9-realested-assingment",
  storageBucket: "b9-realested-assingment.appspot.com",
  messagingSenderId: "927061156486",
  appId: "1:927061156486:web:48c628ed7170480fe3e707"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth ;