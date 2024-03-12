<template>
  <div class="centered">
    <h1 class="title">Sign in</h1>
    <input type="email" placeholder="email" v-model="email" class="input-field">
    <input type="password" placeholder="password" v-model="password" class="input-field">
    <button @click="loginUser" class="btn">Sign in</button>
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
      alert('Successfully logged in!');

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

