<script setup lang="ts">
const { t } = useI18n()
useSeoMeta({
  title: t(`${$t('app.title')} - ${t('page.home.title')}`),
  ogTitle: t(`${$t('app.title')} - ${t('page.home.title')}`),
  twitterTitle: t(`${$t('app.title')} - ${t('page.home.title')}`),
  description: t('app.description'),
  ogDescription: t('app.description'),
  twitterDescription: t('app.description')
})
</script>

<template>
  <div class="my-12 flex flex-col items-center justify-center px-12">
    <UPageHero title="Silas or Froggy" :description="$t('page.home.hi')" />
  </div>
</template>
