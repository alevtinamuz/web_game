<template>
  <div class="flex items-center justify-center min-h-screen">
    <div class="max-w-lg p-6 bg-white rounded shadow-lg shadow-emerald-100">
      <input type="text" placeholder="name" v-model="name" class="w-full border-2 border-emerald-100 focus:outline-none focus:ring-1 focus:ring-emerald-100 rounded p-2 m-3 mt-12">
      <input type="email" placeholder="email" v-model="email" class="w-full border-2 border-emerald-100 focus:outline-none focus:ring-1 focus:ring-emerald-100 rounded p-2 m-3">
      <input type="password" placeholder="password" v-model="password" class="w-full border-2 border-emerald-100 focus:outline-none focus:ring-1 focus:ring-emerald-100 rounded p-2 m-3">
      <button @click="registerNewUser" class="w-full bg-emerald-100 text-black font-medium py-2 m-3 rounded hover:bg-emerald-200 transition-colors">Sign up</button>
    </div>
    
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
