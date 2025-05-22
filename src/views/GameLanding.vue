<template>
  <div class="landing">
    <h1>{{ game.title }}</h1>
    <img :src="game.image" alt="" />
    <p>{{ game.desc }}</p>
    <a :href="game.playUrl" target="_blank">게임 플레이하기</a>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import games from '../../data/games.json';
const route = useRoute();
const game = games.find(g => g.id === Number(route.params.id));
</script>

<style>
.landing img {
  max-width: 100%;
  border-radius: 8px;
}
</style>
