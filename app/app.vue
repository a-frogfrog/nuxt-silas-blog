<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: t('app.title'),
  ogTitle: t('app.title'),
  description: t('app.description'),
  ogDescription: t('app.description'),
  ogSiteName: t('app.title'),
  ogImage: '/avatar.png',
  ogType: 'website',
  ogUrl: process.env.WEBSITE_URL,
  ogLocale: 'en',
  twitterCard: 'summary_large_image',
  robots: 'index, follow'
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
