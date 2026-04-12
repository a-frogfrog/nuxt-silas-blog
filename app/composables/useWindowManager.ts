export const useWindowManager = () => {
  const isOpen = ref(false)

  const openWindow = () => {
    isOpen.value = true
  }

  const closeWindow = () => {
    isOpen.value = false
  }

  return {
    isOpen,
    openWindow,
    closeWindow
  }
}
