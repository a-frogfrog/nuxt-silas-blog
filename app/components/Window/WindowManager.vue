<script setup lang="ts">
import 'vue3-draggable-resizable/dist/Vue3DraggableResizable.css'
const { windows } = useWindowManager()
</script>

<template>
  <WindowItem v-for="win in windows" :key="win.id" :win="win" />
</template>
