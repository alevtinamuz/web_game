<template>
  <div class="centered">
    <h1 class="title">Sign up</h1>
    <input type="text" placeholder="name" v-model="name" class="input-field">
    <input type="email" placeholder="email" v-model="email" class="input-field">
    <input type="password" placeholder="password" v-model="password" class="input-field">
    <button @click="registerNewUser" class="btn">Sign up</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref as dbRef, set } from 'firebase/database';
import { useRouter } from 'vue-router';

const auth = getAuth();
const db = getDatabase();
const router = useRouter();

const name = ref('');
const email = ref('');
const password = ref('');

const registerNewUser = () => {
  const userEmail = email.value;
  const userPassword = password.value;
  const userName = name.value;
  
  createUserWithEmailAndPassword(auth, userEmail, userPassword)
    .then((userCredential) => {
      const user = userCredential.user;

      let userId = user.uid;
      const userRecord = 0; // Начальное значение рекорда

      const userRef = dbRef(db, `users/${userId}`); // Обратите внимание на использование обратных кавычек
      set(userRef, {
        name: userName, // Имя пользователя
        record: userRecord // Рекорд пользователя
      });

      localStorage.setItem('userId', userId);
      
      name.value = '';
      
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
  align-items: center;
  height: 100vh;
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
