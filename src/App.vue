<script setup>
  import NavBar from '@/components/NavBar.vue';
  import MainPage from '@/components/MainPage.vue';

import { ref, onMounted } from 'vue'
const showMainPage = ref(true)

onMounted(() => {
  if (windows.lcoation.pathname === '/') {
    showMainPage.value = true
  } else {
    showMainPage.value = false
  }
})



</script>

<template>
  <NavBar />
  <MainPage v-if="showMainPage" />
  <div v-else>
    <h1>This is another "Page"</h1>
  </div>
</template>
