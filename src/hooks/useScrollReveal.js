import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal-on-scroll')

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-revealed')
              observer.unobserve(entry.target)
            }
          })
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -30px 0px',
        }
      )

      revealElements.forEach((el) => {
        const parent = el.parentElement
        const siblings = parent ? Array.from(parent.querySelectorAll('.reveal-on-scroll')) : []
        if (siblings.length > 1) {
          const siblingIndex = siblings.indexOf(el)
          el.style.transitionDelay = `${siblingIndex * 60}ms`
        }
        observer.observe(el)
      })

      return () => {
        observer.disconnect()
      }
    } else {
      revealElements.forEach((el) => el.classList.add('is-revealed'))
    }
  }, [])
}
