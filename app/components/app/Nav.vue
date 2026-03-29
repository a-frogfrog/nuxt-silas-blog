<script setup lang="ts">
import type { Locale } from '@nuxt/ui'
import type { LocaleObject } from '@nuxtjs/i18n'

const { locale, locales: localesList, setLocale } = useI18n()
const localePath = useLocalePath()
const { nav } = useNav()
const colorMode = useColorMode()

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

const locales = computed(() => {
  return localesList.value.map((locale) => ({
    code: locale.code,
    name: locale.name
  })) as Locale<any>[]
})
</script>
<template>
  <nav class="flex items-center gap-8 text-lg">
    <ULocaleSelect
      :model-value="locale"
      :locales="locales"
      @update:model-value="(value) => setLocale(value as LocaleObject['code'])"
      class="w-48"
    />
    <template v-for="item in nav" :key="item.path">
      <NuxtLink :to="localePath(item.path)" class="cursor-pointer">{{ item.label }}</NuxtLink>
    </template>
    <Icon name="entypo:light-up" class="cursor-pointer" @click="toggleColorMode"></Icon>
  </nav>
</template>
