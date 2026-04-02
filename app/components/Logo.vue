<script setup lang="ts">
const { t } = useI18n()
// 确保服务端/客户端路径一致
const avatarSrc = computed(() => {
  return `/avatar.png`
})
</script>

<template>
  <NuxtLink to="/">
    <div class="flex items-center">
      <img class="h-20 w-20 rounded-full" :src="avatarSrc" role="logo" alt="avatar" />
      <span class="font-bold first-letter:text-4xl first-letter:uppercase">{{
        t('app.title')
      }}</span>
    </div>
  </NuxtLink>
</template>
