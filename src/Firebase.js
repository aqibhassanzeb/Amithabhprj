import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBmbCT9xp5Nwa7s8FBJj0gJKCHSjBzxppI",
  authDomain: "fire-base-authentication-f0e4b.firebaseapp.com",
  projectId: "fire-base-authentication-f0e4b",
  storageBucket: "fire-base-authentication-f0e4b.appspot.com",
  messagingSenderId: "33539561257",
  appId: "1:33539561257:web:1c0b5fa521e678218c8938",
  measurementId: "G-BYP6XC4NZQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
