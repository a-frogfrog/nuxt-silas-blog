<script setup lang="ts">
const { toggleLayout, layout } = useLayoutSwitcher()
<<<<<<< HEAD
const { t } = useI18n()
=======
>>>>>>> 501fdc5 (feat: add LayoutSwitcher component and useLayoutSwitcher composable)

function changeChooseLayout() {
  toggleLayout()
}
</script>

<template>
<<<<<<< HEAD
  <div class="p-4">
    <label class="my-2 block" for="">{{ t('page.settings.header.value') }}:</label>
    <div class="flex flex-wrap gap-2" @click="changeChooseLayout">
      <button
        :class="[layout === 'default' ? 'bg-primary text-inverted' : 'bg-muted']"
        class="rounded-2xl bg-[#77a670] px-5 py-2 shadow"
      >
        {{ t('page.settings.header.vertical') }}
      </button>
      <button
        :class="[layout === 'vertical-header' ? 'bg-primary text-inverted' : 'bg-muted']"
        class="rounded-2xl bg-[#77a670] px-5 py-2 shadow"
      >
        {{ t('page.settings.header.horizontal') }}
=======
  <div>
    <h3>Change Layout</h3>
    <label for="">Header:</label>
    <div class="flex flex-wrap gap-2" @click="changeChooseLayout">
      <button
        :class="[layout === 'default' ? 'bg-[#4895ef] text-white' : 'bg-[#d1d1d1]']"
        class="rounded-2xl bg-[#77a670] px-4 py-2 shadow"
      >
        Vertical
      </button>
      <button
        :class="[layout === 'vertical-header' ? 'bg-[#4895ef] text-white' : 'bg-[#d1d1d1]']"
        class="rounded-2xl bg-[#77a670] px-4 py-2 shadow"
      >
        Horizontal
>>>>>>> 501fdc5 (feat: add LayoutSwitcher component and useLayoutSwitcher composable)
      </button>
    </div>
  </div>
</template>
