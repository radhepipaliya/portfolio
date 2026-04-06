import { useEffect, useRef, useState } from 'react'

function ScrollReveal({ children, className = '', delay = 0, y = 22, once = true }) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current

    if (!element) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)

          if (once) {
            observer.unobserve(entry.target)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      {
        root: null,
        threshold: 0.18,
        rootMargin: '0px 0px -40px 0px',
      },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [once])

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? 'reveal-in' : ''} ${className}`.trim()}
      style={{ '--reveal-delay': `${delay}ms`, '--reveal-y': `${y}px` }}
    >
      {children}
    </div>
  )
}

export default ScrollReveal
