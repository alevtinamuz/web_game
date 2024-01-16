import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import * as firebase from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDd_XaHRbcESVjEgvUUjb5j29rWO7gC_Qk",
  authDomain: "game-web-fefu.firebaseapp.com",
  projectId: "game-web-fefu",
  storageBucket: "game-web-fefu.appspot.com",
  messagingSenderId: "540728304504",
  appId: "1:540728304504:web:c94cb68134859327335e8d",
  measurementId: "G-ZTJVV1XEBG"
};

firebase.initializeApp(firebaseConfig)

createApp(App).use(router).mount('#app')
