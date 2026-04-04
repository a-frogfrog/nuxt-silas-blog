<script setup lang="ts">
import { Empty } from '~/components'
const { t } = useI18n()

useHead({
  title: t('projects.title')
})
</script>

<template>
  <Empty />
</template>
