"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import the functions you need from the SDKs you need
const app_1 = require("firebase/app");
const database_1 = require("firebase/database");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const vendorXFirebaseConfig = {
    apiKey: "AIzaSyD8g4dAmM5Wf6RysIiG6tZ0-VO_KCxrQeU",
    authDomain: "text-vendor-x.firebaseapp.com",
    projectId: "text-vendor-x",
    storageBucket: "text-vendor-x.appspot.com",
    messagingSenderId: "670937677239",
    appId: "1:670937677239:web:38e03dd703bab9c976fc32",
};
// Initialize Firebase
const vendorXApp = (0, app_1.initializeApp)(vendorXFirebaseConfig, "vendorX");
const vendorXDb = (0, database_1.getDatabase)(vendorXApp);
exports.default = {
    app: vendorXApp,
    db: vendorXDb,
};
