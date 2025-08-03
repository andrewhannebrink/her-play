import React from 'react';
import BookCover from './BookCover';
import WaitlistForm from './WaitlistForm';
import './Hero.css';

const Hero = ({ content, formContent, images }) => {
  return (
    <section className="hero">
      <div className="parallax-bg"></div>
      <div className="container hero-content">
        <h1 className="fade-in">{content.title}</h1>
        <p className="fade-in hero-subtitle">{content.subtitle}</p>
        
        <BookCover image={images.bookCover} alt={images.bookCoverAlt} />
        
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
    </section>
  );
};

export default Hero;