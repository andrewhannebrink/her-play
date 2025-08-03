import React from 'react';
import './MediaSection.css';

const MediaSection = ({ content }) => {
  return (
    <section className="section section-dark">
      <div className="container">
        <h3 className="fade-in media-heading">{content.heading}</h3>
        <div className="media-logos fade-in">
          {content.logos.map((logo, index) => (
            <span key={index} className="media-logo">{logo}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaSection;