import React, { useEffect, useRef } from 'react'
import './Hero.css'

const Hero = () => {
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      
      if (titleRef.current) {
        const scale = 1 + scrolled * 0.001
        const opacity = 1 - scrolled * 0.002
        titleRef.current.style.transform = `scale(${scale}) translateY(${scrolled * 0.3}px)`
        titleRef.current.style.opacity = opacity
      }
      
      if (subtitleRef.current) {
        subtitleRef.current.style.transform = `translateY(${scrolled * 0.5}px)`
        subtitleRef.current.style.opacity = 1 - scrolled * 0.003
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="hero-section parallax-section" data-speed="0.5">
      <div className="hero-content">
        <h1 ref={titleRef} className="hero-title">
          HER <span className="text-red">PLAY</span>
        </h1>
        <div ref={subtitleRef} className="hero-subtitle">
          <p className="subtitle-line">
            A journey from <span className="highlight">Warsaw casino floors</span>
          </p>
          <p className="subtitle-line">
            to <span className="highlight">Silicon Valley success</span>
          </p>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>Scroll to explore</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  )
}

export default Hero