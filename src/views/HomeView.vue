<template>
  <div class="flex items-center justify-center min-h-screen">
    <p class="text-2xl">Hello! To start playing, you need to register or log in</p>
  </div>
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

    if (isAuthenticated.value) {
      this.$router.push('/profile')
    }
  }
}
</script>
