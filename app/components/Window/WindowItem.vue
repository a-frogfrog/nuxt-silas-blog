<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'
import Vue3DraggableResizable from 'vue3-draggable-resizable'

interface Props {
  win: Omit<WindowInstance, 'component'>
}

const { width: initWidth, height: initHeight } = useWindowSize()
const props = defineProps<Props>()

const { focusWindow, closeWindow } = useWindowManager()

const active = ref(false)

const focus = () => {
  focusWindow(props.win.id)
}

const close = () => {
  closeWindow(props.win.id)
}
</script>

<template>
  <ClientOnly>
    <Vue3DraggableResizable
      :initW="initWidth / 1.5"
      :min-w="initWidth / 1.5"
      :initH="initHeight / 1.5"
      :min-h="initHeight / 1.5"
      v-model:x="win.x"
      v-model:y="win.y"
      v-model:w="win.w"
      v-model:h="win.h"
      v-model:active="active"
      :style="{ zIndex: win.z }"
      :draggable="true"
      :resizable="true"
      classNameActive="bg-primary"
      classNameHandle="border-red-300"
      classNameResizable="border border-default"
      classNameDragging="border border-default"
      @activated="focus"
    >
      <div class="bg-default h-full w-full rounded-2xl border border-gray-300">
        <div
          class="border-default flex cursor-move items-center justify-between border-b px-4 py-2"
        >
          <div class="">{{ win.title }}</div>
          <Icon class="cursor-pointer" role="button" @click="close" name="ic:twotone-cancel" />
        </div>
        <div>
          <slot body />
        </div>
      </div>
    </Vue3DraggableResizable>
  </ClientOnly>
</template>
