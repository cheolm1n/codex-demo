<template>
  <div class="card" @click="goToGame">
    <img :src="game.image" alt="" />
    <h2>{{ game.title }}</h2>
    <p>{{ game.desc }}</p>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const props = defineProps({ game: Object });
const router = useRouter();
function goToGame() {
  router.push(game.url);
}
</script>

<style>
.card {
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  padding: 1rem;
  cursor: pointer;
  transition: transform 0.2s;
}
.card:hover {
  transform: translateY(-4px);
}
</style>
