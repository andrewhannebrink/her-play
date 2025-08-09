import React, { useState, useRef, useEffect } from 'react'
import './Waitlist.css'

const Waitlist = () => {
  const [email, setEmail] = useState('')
  const [agreed, setAgreed] = useState(false)
  const sectionRef = useRef(null)

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

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email && agreed) {
      window.location.href = 'https://herplay.com/book-waitlist'
    }
  }

  return (
    <section ref={sectionRef} className="waitlist-section parallax-section" data-speed="0.2">
      <div className="container">
        <div className="waitlist-content fade-in">
          <h2 className="section-title">
            Book Launch Coming <span className="text-red">Soon!</span>
          </h2>
          <p className="waitlist-description">
            Sign up to register your interest and get notified as soon as it's available! 
            By joining the waitlist, you'll get exclusive updates and behind-the-scenes insights!
          </p>
          
          <form className="waitlist-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="email-input"
              />
            </div>
            
            <div className="checkbox-group">
              <input
                type="checkbox"
                id="privacy"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                required
              />
              <label htmlFor="privacy">
                Yes, I have read the Privacy Policy and Terms & Conditions and agree 
                to the processing and storage of my data for the purpose of responding 
                to my request.
              </label>
            </div>
            
            <button type="submit" className="cta-button">
              Join the Waitlist
            </button>
          </form>
          
          <div className="social-links fade-in">
            <a href="https://www.linkedin.com/in/karolinapelc/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <span className="separator">•</span>
            <a href="https://www.instagram.com/storiesbypelc" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </div>
        </div>
      </div>
      
      <footer className="footer fade-in">
        <div className="container">
          <p>© 2025 HerPlay</p>
        </div>
      </footer>
    </section>
  )
}

export default Waitlist