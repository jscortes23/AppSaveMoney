// Import the functions you need from the SDKs you need
import { initializeApp, getApp } from "firebase/app";
import { initializeAuth, getAuth, getReactNativePersistence } from "firebase/auth";
import { getDatabase } from "firebase/database";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLr-zEtIustg_716jGt__76NJvWZ6Yl6M",
  authDomain: "appsavemoney-e77d3.firebaseapp.com",
  projectId: "appsavemoney-e77d3",
  storageBucket: "appsavemoney-e77d3.appspot.com",
  messagingSenderId: "912591350169",
  appId: "1:912591350169:web:e0f846d330dab8e4f4cb08"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

const auth = initializeAuth(appFirebase, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
})

// Initialize Realtime Database
const dbFirebase = getDatabase(appFirebase)

export { appFirebase, dbFirebase, auth, getApp, getAuth }