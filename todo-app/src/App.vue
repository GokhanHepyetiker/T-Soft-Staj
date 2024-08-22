<script setup>
import TodoList from './components/TodoList.vue';
import TodoGroup from './components/TodoGroup.vue';
</script>

<template>
  <div class="app-container">
    <header>
      <img
        alt="Vue logo"
        class="logo"
        src="./assets/logo.png"
        width="125"
        height="125"
      />
      <h1>My Todo App</h1>
    </header>
    <main>
      <TodoList />
      <TodoGroup />
    </main>
  </div>
</template>

<style scoped>


.app-container {
  text-align: center;
  font-family: 'Arial', sans-serif;

  padding: 20px;
}

header {
  margin-bottom: 20px;
}

.logo {
  display: block;
  margin: 0 auto 10px;
}

h1 {
  font-size: 2.5rem;
  color: #333;
}

main {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>