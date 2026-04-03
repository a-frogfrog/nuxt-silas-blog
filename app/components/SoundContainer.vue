<script setup lang="ts">
import { useEventListener } from '@vueuse/core'
import { useSound } from '@vueuse/sound'

const containerRef = useTemplateRef<HTMLDivElement>('containerRef')
const { play } = useSound('/sounds/mouse-click.mp3')
useEventListener(containerRef, 'click', () => {
  play()
})
</script>

<template>
  <div ref="containerRef">
    <slot />
  </div>
</template>
