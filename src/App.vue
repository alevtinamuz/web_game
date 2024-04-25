<template>
  <div class="bg-gray-100 min-h-screen flex flex-col ">
      <nav class="bg-white">
          <div class="container px-4 mx-auto">
              <div class="flex justify-between items-center h-16 shadow-lg shadow-emerald-100">
                  <div>
                    <router-link v-if="!isAuthenticated" to="/" class="text-2xl ">Home</router-link>
                    <router-link v-if="isAuthenticated" to="/Profile" class="text-2xl">Profile</router-link>
                      <!-- <router-link :to="{'name': 'home'}" class="font-bold text-lg">Home</router-link> -->
                  </div>
                  <div class="flex">
                    <router-link v-if="isAuthenticated" to="/game" class="mr-12 text-2xl">Game</router-link>
                    <router-link v-if="isAuthenticated" to="/rating" class="mr-4 text-2xl">Rating</router-link>
                    <router-link v-if="!isAuthenticated" to="/sign-up" class="mr-12 text-2xl">Sign up</router-link>
                    <router-link v-if="!isAuthenticated" to="/sign-in" class="mx-4 text-2xl">Sign in</router-link>
                      <!-- <router-link :to="{name: 'feed', params:{'id': userStore.user.id}}" class="mr-4">My account</router-link> -->
                      <!-- <router-link :to="{'name': 'search_canvases'}" class="mr-4">My canvases</router-link> -->
                  </div>
                  <!-- <div class="flex">
                      <router-link :to="{'name': 'signup'}" class="mr-4">Sign up</router-link>
                      <router-link :to="{'name': 'login'}" class="mr-4">Log in</router-link>
                  </div> -->
              </div>
          </div>
          <RouterView/>
      </nav>
  </div>
  <!-- <nav class="shadow-emerald-100 shadow-lg flex justify-between items-center h-16">
    <router-link v-if="!isAuthenticated" to="/">Home</router-link>
    <router-link v-if="isAuthenticated" to="/Profile">Profile</router-link>
    
  </nav>
  <router-view/> -->
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
