import React, { useEffect, useRef } from 'react'
import './AboutBook.css'
import { getAssetPath } from '../utils/assetPath'

const AboutBook = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const contentRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current.querySelectorAll('.fade-in')
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      
      const rect = sectionRef.current.getBoundingClientRect()
      const scrolled = -rect.top
      
      if (scrolled > 0 && scrolled < window.innerHeight * 2) {
        if (titleRef.current) {
          titleRef.current.style.transform = `translateY(${scrolled * 0.2}px)`
        }
        if (contentRef.current) {
          contentRef.current.style.transform = `translateY(${scrolled * -0.1}px)`
        }
        if (imageRef.current) {
          imageRef.current.style.transform = `translateY(${scrolled * 0.3}px) rotate(${scrolled * 0.02}deg)`
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section ref={sectionRef} className="about-book-section parallax-section" data-speed="0.3">
      <div className="container">
        <div className="about-book-content">
          <div className="text-column">
            <h2 ref={titleRef} className="section-title fade-in">
              READY TO PLAY <span className="text-red">DIFFERENTLY?</span>
            </h2>
            <div ref={contentRef} className="text-content">
              <p className="lead fade-in">
                How did I go from the gritty casino floors of Warsaw to the sun-soaked luxury of Sir Richard Branson's private retreat?
              </p>
              <p className="fade-in">
                People love asking for a formula for success, as if there's some neatly packaged blueprint—ten steps, a morning routine, a life hack that guarantees a one-way ticket to the top.
              </p>
              <p className="fade-in">
                For years, I dismissed the question. I wasn't following a formula. I was following momentum—switching industries, taking jobs I wasn't qualified for (yet), moving countries on instinct, launching a startup with a newborn in one arm and a pitch deck in the other.
              </p>
              <blockquote className="quote fade-in">
                "You don't learn to walk by following rules. You learn by doing, and by falling over."
                <cite>— Richard Branson</cite>
              </blockquote>
            </div>
          </div>
          <div className="image-column">
            <div ref={imageRef} className="book-image-wrapper fade-in">
              <img src={getAssetPath('cover_image.png')} alt="HER PLAY Book Cover" />
              <div className="book-shadow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutBook