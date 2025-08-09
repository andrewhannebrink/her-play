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
        <p ref={subtitleRef} className="hero-subtitle">
          A journey from Warsaw casino floors to Silicon Valley success
        </p>
        <div className="scroll-indicator">
          <span>Scroll to explore</span>
          <div className="scroll-arrow"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero