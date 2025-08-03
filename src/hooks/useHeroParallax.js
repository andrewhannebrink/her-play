import { useEffect, useState, useRef } from 'react';

const useHeroParallax = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const progressRef = useRef(0);
  const animationRef = useRef(null);
  
  useEffect(() => {
    let wheelAccumulator = 0;
    const sensitivity = 0.0008; // How much progress per pixel of scroll
    
    const handleWheel = (e) => {
      e.preventDefault();
      
      // Add to accumulator
      wheelAccumulator += e.deltaY;
      
      // Update progress based on wheel delta
      // Extend range to 4 to allow for multiple page turns
      const deltaProgress = e.deltaY * sensitivity;
      progressRef.current = Math.max(0, Math.min(4, progressRef.current + deltaProgress));
      
      // Cancel any ongoing animation
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      
      // Animate to new progress
      animateProgress();
    };
    
    const animateProgress = () => {
      const animate = () => {
        const current = scrollProgress;
        const target = progressRef.current;
        const diff = target - current;
        
        // Smooth interpolation
        if (Math.abs(diff) > 0.001) {
          const newProgress = current + diff * 0.2; // Smooth factor
          setScrollProgress(newProgress);
          animationRef.current = requestAnimationFrame(animate);
        } else {
          setScrollProgress(target);
          animationRef.current = null;
        }
      };
      
      animate();
    };
    
    // Add event listeners
    window.addEventListener('wheel', handleWheel, { passive: false });
    
    // Prevent touch scrolling on mobile
    const handleTouchMove = (e) => {
      e.preventDefault();
    };
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchmove', handleTouchMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [scrollProgress]);
  
  return { scrollProgress };
};

export default useHeroParallax;