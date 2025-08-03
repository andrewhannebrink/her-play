import React from 'react';
import './AboutSection.css';

const AboutSection = ({ content, sectionClass = 'section-light', id }) => {
  const formatParagraph = (text) => {
    // Handle quotes and special formatting
    if (text.includes('"')) {
      return text.replace(/"/g, '"').replace(/"/g, '"');
    }
    return text;
  };

  return (
    <section className={`section ${sectionClass} ${sectionClass.includes('light') ? 'parallax-section' : ''}`} id={id}>
      {sectionClass.includes('light') && (
        <div className="parallax-layer"></div>
      )}
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="about-content">
          <h2 className="fade-in">{content.heading}</h2>
          
          {content.paragraphs.map((paragraph, index) => (
            <p 
              key={index} 
              className="fade-in"
              dangerouslySetInnerHTML={{ __html: formatParagraph(paragraph) }}
            />
          ))}
          
          {content.cta && (
            <div className="glass-card fade-in glass-card-red">
              <h3>{content.cta.heading}</h3>
              <p>{content.cta.description}</p>
              <p>{content.cta.special}</p>
              <a href="#" className="btn-primary">{content.cta.buttonText}</a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;