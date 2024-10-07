// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const vendorYFirebaseConfig = {
  apiKey: "AIzaSyCNtzNouvmVKQhLpc6I-EWNuaOHajT-Fpo",
  authDomain: "test-vendor-y-2ab7b.firebaseapp.com",
  projectId: "test-vendor-y-2ab7b",
  storageBucket: "test-vendor-y-2ab7b.appspot.com",
  messagingSenderId: "669038212028",
  appId: "1:669038212028:web:43d31c93f82c3d2fe4b1b9",
  databaseURL:
    "https://test-vendor-y-2ab7b-default-rtdb.europe-west1.firebasedatabase.app",
};

// Initialize Firebase
const vendorYApp = initializeApp(vendorYFirebaseConfig, "vendorY");
const vendorYDb = getDatabase(vendorYApp);

export default {
  app: vendorYApp,
  db: vendorYDb,
};
