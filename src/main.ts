import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/main.css';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDF_QnOP8yDf2yd5rrMhvWmO2kHSqK0Ro4",
  authDomain: "hamstersgame-1e306.firebaseapp.com",
  projectId: "hamstersgame-1e306",
  storageBucket: "hamstersgame-1e306.appspot.com",
  messagingSenderId: "1031162790036",
  appId: "1:1031162790036:web:8513918f9798b8532e7481",
  measurementId: "G-RHZ6482HB5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createApp(App).use(router).mount('#app');
