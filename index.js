import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { initializeApp } from "firebase/app";

// Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDnd0Urcfwt4XDGjXCiTt6UKvk8zgg7XjE",
  authDomain: "budgetbuy-f47cb.firebaseapp.com",
  projectId: "budgetbuy-f47cb",
  storageBucket: "budgetbuy-f47cb.appspot.com",
  messagingSenderId: "137645117929",
  appId: "1:137645117929:web:4d28c1c7c2877d2d177b78",
  measurementId: "G-M9YZ4ZZD5V"
};

// Initialize Firebase
initializeApp(firebaseConfig);

AppRegistry.registerComponent(appName, () => App);