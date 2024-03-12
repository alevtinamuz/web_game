<script setup>
import { ref } from 'vue';
import { onMounted } from 'vue';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref as dbRef, onValue } from 'firebase/database';

const name = ref('');
const record = ref('');

const auth = getAuth();
const db = getDatabase();

onMounted(() => {
  // Получаем текущего пользователя
  const user = auth.currentUser;

  if (user) {
    const userId = user.uid;
    
    const userRef = dbRef(db, `users/${userId}`);
    
    // Следим за изменениями в базе данных и обновляем имя и рекорд пользователя
    onValue(userRef, (snapshot) => {
      const userData = snapshot.val();

     name.value = userData.name;
     record.value = userData.record;
    });
  }
});
</script>


<template>
  <div class="centered">
    <div class="content">
      <p class="greeting">Hello {{ name }}!</p>
      <p class="greeting">To start playing, click on the Game tab!</p>
      <p class="greeting">Your record: {{ record }}</p>
    </div>
  </div>
</template>


<style>
.centered {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
}

.content {
  text-align: center; 
}

.greeting {
  font-size: 28px;
  margin-bottom: 20px;
}
</style>
