import { useEffect, useRef } from 'react'
import './App.css'
import Hero from './components/Hero'
import AboutBook from './components/AboutBook'
import AboutAuthor from './components/AboutAuthor'
import Waitlist from './components/Waitlist'
import FloatingOrb from './components/FloatingOrb'

function App() {
  const appRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const sections = document.querySelectorAll('.parallax-section')
      
      sections.forEach((section, index) => {
        const speed = section.dataset.speed || 0.5
        const yPos = -(scrolled * speed)
        section.style.transform = `translateY(${yPos}px)`
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app" ref={appRef}>
      <FloatingOrb />
      <Hero />
      <AboutBook />
      <AboutAuthor />
      <Waitlist />
    </div>
  )
}

export default App