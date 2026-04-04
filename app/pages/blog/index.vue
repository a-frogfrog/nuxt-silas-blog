<script setup lang="ts">
import { Empty } from '~/components'

const { t } = useI18n()

useHead({
  title: t('blog.title')
})
</script>

<template>
  <Empty />
</template>
