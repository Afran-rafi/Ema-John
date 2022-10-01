import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDREbVb49xtMBa2ACsdiMxUTQIgD58TJ7c",
  authDomain: "lite-ema-john.firebaseapp.com",
  projectId: "lite-ema-john",
  storageBucket: "lite-ema-john.appspot.com",
  messagingSenderId: "772005801491",
  appId: "1:772005801491:web:74c03b0c211d00009319e6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;