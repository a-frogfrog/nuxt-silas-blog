type Layout = 'default' | 'vertical-header'

export function useLayoutSwitcher() {
  const layout = useCookie<Layout>('layout_preference', {
    default: () => 'default',
    watch: true
  })

  const toggleLayout = () => {
    layout.value = layout.value === 'default' ? 'vertical-header' : 'default'
    setPageLayout(layout.value)
  }

  return {
    layout,
    toggleLayout
  }
}
