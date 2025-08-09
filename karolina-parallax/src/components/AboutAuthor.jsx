import React, { useEffect, useRef } from 'react'
import './AboutAuthor.css'

const AboutAuthor = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const floatingTextRefs = useRef([])

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
        floatingTextRefs.current.forEach((ref, index) => {
          if (ref) {
            const speed = 0.1 + index * 0.05
            ref.style.transform = `translateY(${scrolled * speed}px)`
          }
        })
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const achievements = [
    "AGENCY OF THE YEAR",
    "FOUNDER & CEO",
    "€7M+ RAISED",
    "TECHCRUNCH BATTLEFIELD",
    "NASDAQ BOARD",
    "TOP 40 UNDER 40"
  ]

  return (
    <section ref={sectionRef} className="about-author-section parallax-section" data-speed="0.4">
      <div className="container">
        <h2 ref={titleRef} className="section-title fade-in">
          The journey that's as <span className="text-red">unique</span> as you are
        </h2>
        
        <div className="author-content">
          <div className="author-bio fade-in">
            <p className="lead">
              Karolina Pelc is a widely recognized entrepreneur, investor, storyteller, and thought leader in the gaming and tech industries.
            </p>
            <p>
              Named a Top Startup Development Voice in 2023 by LinkedIn, she is the Founder and former CEO of BeyondPlay, a B2B gaming software company that secured €7M+ in funding before its landmark acquisition by FanDuel in 2024—one of the fastest exits in the industry.
            </p>
            <p>
              With over 20 years in the real-money gaming industry, Karolina has held pivotal leadership roles at LeoVegas Group (MGM) and Betsson Group and consulted for major brands like SG Digital, William Hill, and Hard Rock Online.
            </p>
          </div>
          
          <div className="floating-achievements">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                ref={(el) => (floatingTextRefs.current[index] = el)}
                className={`floating-text floating-text-${index + 1}`}
              >
                {achievement}
              </div>
            ))}
          </div>
        </div>
        
        <div className="author-ps fade-in">
          <p className="ps-text">P.S. What if you fly?</p>
        </div>
      </div>
    </section>
  )
}

export default AboutAuthor