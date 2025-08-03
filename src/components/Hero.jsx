import React from 'react';
import BookCover from './BookCover';
import WaitlistForm from './WaitlistForm';
import ShootingStars from './ShootingStars';
import useHeroParallax from '../hooks/useHeroParallax';
import './Hero.css';

const Hero = ({ content, formContent, images }) => {
  const { scrollProgress } = useHeroParallax();

  return (
    <section className="hero">
      <div className="parallax-bg"></div>
      <ShootingStars />
      <div className="hero-content">
        <div 
          className="hero-left"
          style={{
            transform: `translateX(${Math.min(scrollProgress, 1) * 75}%) scale(${1 + Math.min(scrollProgress, 1) * 0.3})`,
            transition: 'transform 0.15s ease-out'
          }}
        >
          <BookCover image={images.bookCover} alt={images.bookCoverAlt} />
        </div>
        
        <div 
          className="hero-right"
          style={{
            transform: `translateX(${scrollProgress * 150}%)`,
            opacity: 1 - scrollProgress * 0.5
          }}
        >
          <div className="glass-card fade-in">
            <h2>{content.heading}</h2>
            <p>{content.description}</p>
            <WaitlistForm formContent={formContent} />
          </div>
          
          <p className="fade-in author-info">
            <strong>{content.authorName}</strong><br />
            {content.authorTagline}
          </p>
          
          <p className="fade-in author-ps">{content.authorPS}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;