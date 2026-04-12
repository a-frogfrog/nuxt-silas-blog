<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'
import Vue3DraggableResizable from 'vue3-draggable-resizable'

const { isOpen } = useWindowManager()
const { width, height } = useWindowSize()
function print(val: string) {
  console.log(val)
}

const { x, y, h, w } = reactive({
  x: 100,
  y: 100,
  h: 100,
  w: 100
})
</script>

<template>
  <ClientOnly>
    <Vue3DraggableResizable
      :initW="width / 1.5"
      :min-w="width / 1.5"
      :initH="height / 1.5"
      :min-h="height / 1.5"
      v-model:x="x"
      v-model:y="y"
      v-model:w="w"
      v-model:h="h"
      v-model:active="isOpen"
      :draggable="true"
      :resizable="true"
      classNameActive="bg-primary"
      classNameHandle="border-red-300"
      classNameResizable="border border-default"
      classNameDragging="border border-default"
      @activated="print('activated')"
      @deactivated="print('deactivated')"
      @drag-start="print('drag-start')"
      @resize-start="print('resize-start')"
      @dragging="print('dragging')"
      @resizing="print('resizing')"
      @drag-end="print('drag-end')"
      @resize-end="print('resize-end')"
    >
      <div class="bg-default h-full w-full">
        <div class="border-default flex items-center justify-between border-b px-4 py-2">
          <div class="">This is a test example</div>
          <Icon class="cursor-pointer" name="ic:twotone-cancel" />
        </div>
        <div>
          <slot body />
        </div>
      </div>
    </Vue3DraggableResizable>
  </ClientOnly>
</template>
