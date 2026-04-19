<script setup lang="ts"></script>

<template>
  <UFooter>
    <template #left>
      <p class="text-muted text-sm">Copyright © {{ new Date().getFullYear() }} Silas</p>
    </template>

    <template #right>
      <UButton
        icon="i-simple-icons-github"
        color="neutral"
        variant="ghost"
        to="https://github.com/silas-moonwood"
        target="_blank"
        aria-label="GitHub"
      />
    </template>
  </UFooter>
</template>
