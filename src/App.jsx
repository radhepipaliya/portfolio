import './App.css'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import HomeSection from './components/HomeSection'
import StackSection from './components/StackSection'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'

function scrollToSection(id) {
  const target = document.getElementById(id)

  if (!target) {
    return
  }

  const start = window.scrollY
  const navHeight = window.innerWidth < 640 ? 64 : 60
  const end = target.getBoundingClientRect().top + window.scrollY - navHeight
  const distance = end - start
  const duration = 900

  const easeInOutCubic = (value) =>
    value < 0.5 ? 4 * value * value * value : 1 - Math.pow(-2 * value + 2, 3) / 2

  let startTime = null

  const step = (time) => {
    if (startTime === null) {
      startTime = time
    }

    const progress = Math.min((time - startTime) / duration, 1)
    window.scrollTo(0, start + distance * easeInOutCubic(progress))

    if (progress < 1) {
      window.requestAnimationFrame(step)
    }
  }

  window.requestAnimationFrame(step)
}

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem('theme')
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme
    }

    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <>
      <Navbar
        theme={theme}
        onToggleTheme={() => setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))}
      />
      <HomeSection onViewStack={() => scrollToSection('stack')} theme={theme} />
      <StackSection />
      <AboutSection theme={theme} />
      <ProjectsSection theme={theme} />
      <ContactSection theme={theme} />
    </>
  )
}

export default App
