import { useEffect } from 'react';

const useScrollEffects = () => {
  useEffect(() => {
    // Parallax effect
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxBg = document.querySelector('.parallax-bg');
      const parallaxLayers = document.querySelectorAll('.parallax-layer');
      
      if (parallaxBg) {
        parallaxBg.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
      
      parallaxLayers.forEach(layer => {
        layer.style.transform = `translateY(${scrolled * 0.3}px)`;
      });
    };

    // Fade in animation on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Set up scroll listener
    window.addEventListener('scroll', handleScroll);
    
    // Observe all fade-in elements
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      fadeElements.forEach(el => observer.unobserve(el));
    };
  }, []);
};

export default useScrollEffects;