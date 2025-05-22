<template>
  <header class="header">
    <h1>게임 카탈로그</h1>
    <nav>
      <router-link to="/">홈</router-link>
      <router-link to="/">카탈로그</router-link>
    </nav>
  </header>
  <main>
    <router-view />
  </main>
</template>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #f5f5f5;
}
</style>
