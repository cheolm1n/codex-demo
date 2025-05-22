<template>
  <section class="catalog">
    <GameCard v-for="game in games" :key="game.id" :game="game" />
  </section>
</template>

<script setup>
import games from '../../data/games.json';
import GameCard from '../components/GameCard.vue';
</script>

<style>
.catalog {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
}
</style>
