<script setup>
import { ref } from 'vue';
import { onMounted } from 'vue';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref as dbRef, onValue } from 'firebase/database';
import { useRouter } from 'vue-router';

const router = useRouter();

const name = ref('');
const record = ref('');

const auth = getAuth();
const db = getDatabase();

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

onMounted(() => {
  const user = auth.currentUser;

  if (user) {
    const userId = user.uid;
    
    const userRef = dbRef(db, `users/${userId}`);
    
    onValue(userRef, (snapshot) => {
      const userData = snapshot.val();

     name.value = userData.name;
     record.value = userData.record;
    });
  }
});
</script>


<template>
  <div class="flex items-center justify-center min-h-screen">
    <div class="max-w-lg p-6 bg-white rounded shadow-lg shadow-emerald-100">
      <p class="text-xl my-3 text-center">Hello {{ name }}!</p>
      <p class="text-xl my-3 text-center">To start playing, click on the Game tab!</p>
      <p class="text-xl my-3 text-center">Your record: {{ record }}</p>
      <button @click="signOutUser" class="w-full bg-emerald-100 text-black font-medium py-2 m-3 rounded hover:bg-emerald-200 transition-colors">Sign Out</button>
    </div>
  </div>
</template>
