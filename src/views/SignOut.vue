<script lang='ts' setup>
  import { getAuth } from 'firebase/auth';
  import { useRouter } from 'vue-router';
  const router = useRouter();
  const signOutUser = () => {
    const auth = getAuth();
    auth.signOut().then(() => {
      router.push('/sign-in')
    })
  }
</script>

<template>
    <button @click="signOutUser">Sign Out</button>
</template>