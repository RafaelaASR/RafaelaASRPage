import { ref, onMounted, onBeforeUnmount } from 'vue'

export function useScrollAnimation(options = { threshold: 0.3 }) {
  const element = ref(null)
  const isVisible = ref(false)

  let observer = null

  onMounted(() => {
    observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
            if (!isVisible.value) {
                isVisible.value = true
            }
            } else {
            setTimeout(() => {
                isVisible.value = false
            }, 500)
            }
        })
    }, {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    })

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