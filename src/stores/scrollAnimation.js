import { ref, onMounted, onBeforeUnmount } from 'vue'

export function useScrollAnimation(options = { threshold: 0.3 }) {
  const element = ref(null)
  const isVisible = ref(false)

  let observer = null

  onMounted(() => {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true
        } else {
          isVisible.value = false
        }
      })
    }, options)

    if (element.value) {
      observer.observe(element.value)
    }
  })

  onBeforeUnmount(() => {
    if (observer && element.value) {
      observer.unobserve(element.value)
    }
  })

  return {
    element,
    isVisible
  }
}