import React from 'react';
import './VerticalMediaScroll.css';

const VerticalMediaScroll = () => {
  const logos = [
    { name: 'TechCrunch', src: '/her-play/techcrunch.svg' },
    { name: 'ABC News', src: '/her-play/abc-news.svg' },
    { name: 'Yahoo News', src: '/her-play/yahoo-news.svg' },
    { name: 'SBC', src: '/her-play/sbc.svg' },
    { name: 'Next.io', src: '/her-play/next-io.svg' },
  ];

  // Duplicate logos for seamless scroll
  const allLogos = [...logos, ...logos];

  return (
    <div className="vertical-media-scroll">
      <div className="media-logos-container">
        <div className="media-logos-scroll">
          {allLogos.map((logo, index) => (
            <div key={`${logo.name}-${index}`} className="media-logo">
              <img src={logo.src} alt={logo.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerticalMediaScroll;