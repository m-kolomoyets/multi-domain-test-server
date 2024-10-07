"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import the functions you need from the SDKs you need
const app_1 = require("firebase/app");
const database_1 = require("firebase/database");
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
    databaseURL: "https://test-vendor-y-2ab7b-default-rtdb.europe-west1.firebasedatabase.app",
};
// Initialize Firebase
const vendorYApp = (0, app_1.initializeApp)(vendorYFirebaseConfig, "vendorY");
const vendorYDb = (0, database_1.getDatabase)(vendorYApp);
exports.default = {
    app: vendorYApp,
    db: vendorYDb,
};
