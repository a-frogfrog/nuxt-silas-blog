<script setup lang="ts">
import { gsap } from 'gsap'

const nuxtApp = useNuxtApp()
const loaderRef = useTemplateRef('loaderRef')
const contentRef = useTemplateRef('contentRef')

// 进场动画：页面开始加载，遮罩层从下方滑入
const playIn = () => {
  if (!loaderRef.value) return

  gsap.to(loaderRef.value, {
    display: 'flex',
    yPercent: 0,
    duration: 0.5,
    ease: 'power3.out',
    onStart: () => {
      // 进场时恢复内容可见度
      gsap.set(contentRef.value, { opacity: 1, y: 0 })
    }
  })
}

// 退场动画：页面加载完成，遮罩层向止方滑出
const playOut = () => {
  if (!loaderRef.value) return

  const tl = gsap.timeline()
  tl.to(contentRef.value, {
    opacity: 0,
    y: -20,
    duration: 0.3
  }).to(loaderRef.value, {
    yPercent: -100,
    duration: 0.6,
    ease: 'expo.inOut',
    onComplete: () => {
      gsap.set(loaderRef.value, { display: 'none' })
    }
  })
}

// 绑定 Nuxt 钩子
if (import.meta.client) {
  nuxtApp.hook('page:start', () => {
    playIn()
  })

  nuxtApp.hook('page:finish', () => {
    // 稍微延迟确保 DOM 完全渲染，增加平滑度
    setTimeout(() => {
      playOut()
    }, 100)
  })
}

onMounted(() => {
  // 初次进入网站时的动画（直接执行退场）
  playOut()
})
</script>

<template>
  <div
    ref="loaderRef"
    class="bg-muted fixed inset-0 z-9999 flex flex-col items-center justify-center text-white dark:bg-slate-900"
    style="display: flex"
  >
    <div ref="contentRef" class="flex flex-col items-center">
      <div class="relative flex h-20 w-20 items-center justify-center">
        <div class="absolute h-full w-full animate-ping rounded-full bg-blue-500 opacity-20"></div>
        <div
          class="h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"
        ></div>
      </div>
      <h1 class="mt-6 text-sm font-light tracking-[0.3em] text-slate-400 uppercase">Loading</h1>
    </div>
  </div>
</template>
