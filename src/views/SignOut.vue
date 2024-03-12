<template>
  <div class="centered">
    <button @click="signOutUser">Sign Out</button>
  </div>
</template>

<script setup>
import { getAuth } from 'firebase/auth';
import { useRouter } from 'vue-router';

const router = useRouter();
const auth = getAuth();

const signOutUser = () => {
  if (auth.currentUser) {
    auth.signOut().then(() => {
      router.push('/sign-in');
    }).catch(error => {
      console.error("Ошибка при выходе из аккаунта:", error);
    });
  } else {
    console.warn("Пользователь не аутентифицирован");
  }
}
</script>

<style>
.centered {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Делаем блок по размеру всего экрана */
}

button {
  font-size: 50px; /* Увеличиваем размер шрифта кнопки */
  padding: 15px 40px; /* Задаем отступы кнопки */
  text-decoration: none;
  color: #000;
  background-color: #fff;
  border: 1px solid #000;
}

button:hover {
  background-color: #f0f0f0;
  color: #333;
}
</style>
