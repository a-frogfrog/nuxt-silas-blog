<script setup lang="ts">
import type { LocaleObject } from '@nuxtjs/i18n'

const { locale, locales, setLocale } = useI18n()
const localePath = useLocalePath()

const languageItems = ref(
  locales.value.map((locale: LocaleObject) => ({
    label: locale.name,
    value: locale.code,
    icon: 'i-lucide-circle-help'
  }))
)

const currentLocale = ref(languageItems.value.find((item) => item.value === locale.value))

const navItems = ref([
  {
    name: 'home',
    path: '/'
  },
  {
    name: 'blog',
    path: '/blog'
  },
  {
    name: 'projects',
    path: '/projects'
  },
  {
    name: 'about',
    path: '/about'
  },
  {
    name: 'me',
    path: '/me'
  }
])

watchEffect(() => {
  setLocale(currentLocale.value!.value)
})

const colorMode = useColorMode()

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>
<template>
  <nav class="flex items-center gap-8 text-lg">
    <USelectMenu
      class="min-w-42"
      icon="i-lucide-circle-help"
      v-model="currentLocale"
      :items="languageItems"
    />
    <template v-for="item in navItems" :key="item.path">
      <NuxtLink :to="localePath(item.path)" class="cursor-pointer">{{
        $t(`nav.${item.name}`)
      }}</NuxtLink>
    </template>
    <Icon name="entypo:light-up" class="cursor-pointer" @click="toggleColorMode"></Icon>
  </nav>
</template>
