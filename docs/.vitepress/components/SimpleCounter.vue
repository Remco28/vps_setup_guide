<template>
  <div class="counter-container">
    <p>This is an interactive component embedded in a Markdown file.</p>
    <button @click="count++">You clicked me {{ count }} times.</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<style scoped>
.counter-container {
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
}
button {
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: 1px solid transparent;
  background-color: #3eaf7c;
  color: white;
  cursor: pointer;
}
</style>
