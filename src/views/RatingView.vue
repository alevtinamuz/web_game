<template>
  <div class="rating-table-container">
    <h2 class="heading">Rating</h2>
    <table class="rating-table">
      <thead>
        <tr>
          <th class="position-column">Position</th>
          <th>Name</th>
          <th>Record</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in sortedUsers" :key="index" :class="{ 'highlighted-row': user.userId === currentUserId }">
          <td class="centered-cell position-column">{{ index + 1 }}</td>
          <td class="centered-cell">{{ user.name }}</td>
          <td class="centered-cell">{{ user.record }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
.rating-table-container {
  margin: 0 auto;
  font-size: 18px;
}

.rating-table {
  width: 80%;
  border-collapse: collapse;
  margin: 0 auto;
}

.rating-table th, .rating-table td {
  padding: 10px;
  border: 1px solid black;
  text-align: center; /* Центрирование содержимого в ячейках */
}

.heading {
  text-align: center; /* Центрирование заголовка */
}

.highlighted-row {
  background-color: yellow;
}

.centered-cell {
  text-align: center;
}

.position-column {
  width: 70px; /* Уменьшаем ширину колонки "Position" */
}
</style>

<script setup>
import { ref, onMounted } from 'vue';
import { getDatabase, ref as dbRef, get } from 'firebase/database';

const db = getDatabase();
const users = ref([]);
const currentUserId = localStorage.getItem('userId');

const sortedUsers = ref([]);

onMounted(async () => {
  const usersRef = dbRef(db, 'users');
  const usersSnapshot = await get(usersRef);

  if (usersSnapshot.exists()) {
    const usersData = usersSnapshot.val();
    users.value = Object.keys(usersData).map(userId => ({
      userId,
      name: usersData[userId].name,
      record: usersData[userId].record
    }));
    sortUsersByRecord();
  }
});

const sortUsersByRecord = () => {
  sortedUsers.value = users.value.slice().sort((a, b) => b.record - a.record);
}
</script>
