import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import CatalogView from './views/CatalogView.vue';
import GameLanding from './views/GameLanding.vue';

const routes = [
  { path: '/', component: CatalogView },
  { path: '/games/:id', component: GameLanding }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

createApp(App).use(router).mount('#app');
