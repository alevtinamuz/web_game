<script lang="ts" setup>
  import { ref } from 'vue';
  import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
  import { useRouter } from 'vue-router';
  const email = ref('');
  const password = ref('');
  const router = useRouter();
  const registerNewUser = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((data) => {
        console.log('Succsesfuly registred!');
        console.log(data);

        let token = data.user.ma;
        let userId = data.user.uid;

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
    <h1>Create an Account</h1>
    <input type="email" placeholder="email" v-model="email">
    <input type="password" placeholder="password" v-model="password">
    <button @click="registerNewUser">Register</button>
  </div>
</template>
