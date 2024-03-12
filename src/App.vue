<template>
  <nav>
    <router-link v-if="!isAuthenticated" to="/">Home</router-link>
    <router-link v-if="isAuthenticated" to="/Profile">Profile</router-link>
    <router-link v-if="isAuthenticated" to="/game">Game</router-link>
    <router-link v-if="isAuthenticated" to="/rating">Rating</router-link>
    <router-link v-if="!isAuthenticated" to="/sign-up">Sign up</router-link>
    <router-link v-if="!isAuthenticated" to="/sign-in">Sign in</router-link>
    <router-link v-if="isAuthenticated" to="/sign-out">Sign out</router-link>
  </nav>
  <router-view/>
</template>

<script>
import { ref, onMounted } from 'vue';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export default {
  setup() {
    const isAuthenticated = ref(false);

    onMounted(() => {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        isAuthenticated.value = !!user;
      });
    });

    return {
      isAuthenticated
    };
  }
}
</script>

<style>
nav {
  display: flex;
  justify-content: space-around;
  padding: 30px;
}

a {
  font-size: 30px;
  text-decoration: none;
  color: #000;
}

a.router-link-exact-active {
  color: #000; /* Цвет для активной ссылки */
}
</style>
