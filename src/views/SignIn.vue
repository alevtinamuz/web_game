<script lang="ts" setup>
  import { ref } from 'vue';
  import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
  import { useRouter } from 'vue-router';
  const email = ref('');
  const password = ref('');
  const router = useRouter();
  const loginUser = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((data) => {
        console.log('Succsesfuly login!');
        console.log(data);

        let token = data.user.getIdToken();
        let userId = data.user.uid;
        console.log(token)

        localStorage.setItem('token', token);
        localStorage.setItem('userId', userId);

        router.push('/profile');
      })
      .catch((error) => {
        console.log(error.code)
        alert(error.message);
      });
  }
</script>

<template>
  <div>
    <h1>Sign in</h1>
    <input type="email" placeholder="email" v-model="email">
    <input type="password" placeholder="password" v-model="password">
    <button @click="loginUser">Register</button>
  </div>
</template>
