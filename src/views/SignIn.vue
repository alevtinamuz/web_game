<template>
  <div class="flex items-center justify-center min-h-screen">
    <div class="max-w-lg p-6 bg-white rounded shadow-lg shadow-emerald-100">
      <input type="email" placeholder="email" v-model="email" class="w-full border-2 border-emerald-100 focus:outline-none focus:ring-1 focus:ring-emerald-100 rounded p-2 m-3 mt-12">
      <input type="password" placeholder="password" v-model="password" class="w-full border-2 border-emerald-100 focus:outline-none focus:ring-1 focus:ring-emerald-100 rounded p-2 m-3">
      <button @click="loginUser" class="w-full bg-emerald-100 text-black font-medium py-2 m-3 rounded hover:bg-emerald-200 transition-colors">Sign in</button>
    </div>
    
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useRouter } from 'vue-router';

const auth = getAuth();
const router = useRouter();

const email = ref('');
const password = ref('');

const loginUser = () => {
  const userEmail = email.value;
  const userPassword = password.value;

  signInWithEmailAndPassword(auth, userEmail, userPassword)
    .then((userCredential) => {
      const user = userCredential.user;
      
      console.log('Successfully logged in!', user);

      email.value = '';
      password.value = '';

      let token = user.getIdToken();
      let userId = user.uid;

      localStorage.setItem('token', token);
      localStorage.setItem('userId', userId);

      router.push('/profile');
    })
    .catch((error) => {
      console.error(error);
      alert(error.message);
    });
}
</script>


<style>
.centered {
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Меняем align-items на flex-start */
  height: 100vh;
  flex-direction: column;
}

.title {
  font-size: 36px;
  margin-bottom: 20px;
}

.input-field {
  padding: 12px 20px;
  margin: 10px;
  width: 300px;
  font-size: 24px;
}

.btn {
  padding: 12px 24px;
  font-size: 26px;
  background-color: #f0f0f0;
  border: 1px solid #000;
  cursor: pointer;
}

.btn:hover {
  background-color: #e0e0e0;
}
</style>

