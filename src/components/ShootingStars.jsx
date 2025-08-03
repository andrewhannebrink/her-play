import React from 'react';
import './ShootingStars.css';

const ShootingStars = () => {
  // Generate multiple shooting stars with random delays and positions
  const stars = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    delay: Math.random() * 10,
    duration: 1 + Math.random() * 2,
    top: Math.random() * 50,
    startX: Math.random() * 100
  }));

  return (
    <div className="shooting-stars-container">
      {stars.map(star => (
        <div
          key={star.id}
          className="shooting-star"
          style={{
            top: `${star.top}%`,
            left: `${star.startX}%`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`
          }}
        />
      ))}
    </div>
  );
};

export default ShootingStars;