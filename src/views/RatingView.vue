<template>
  <div class="flex items-center min-h-screen flex-col mt-12">
    <h2 class="text-2xl mb-4">Rating</h2>
    <table class="border-collapse border-2 border-emerald-100 w-4/5 rounded shadow-lg shadow-emerald-100">
      <thead>
        <tr>
          <th class="bg-emerald-100 font-normal p-2">Position</th>
          <th class="bg-emerald-100 font-normal p-2">Name</th>
          <th class="bg-emerald-100 font-normal p-2">Record</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in sortedUsers" :key="index" :class="{ 'bg-emerald-100': user.userId === currentUserId }">
          <td class="text-center p-2">{{ index + 1 }}</td>
          <td class="text-center p-2">{{ user.name }}</td>
          <td class="text-center p-2">{{ user.record }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

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
