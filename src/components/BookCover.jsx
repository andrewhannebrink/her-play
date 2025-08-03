import React, { useRef } from 'react';
import './BookCover.css';

const BookCover = ({ image, alt }) => {
  const bookRef = useRef(null);
  const wrapperRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!wrapperRef.current || !bookRef.current) return;
    
    const rect = wrapperRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Simpler rotation calculation
    const angleX = (y - centerY) / centerY * -15;
    const angleY = (x - centerX) / centerX * 15;
    
    // Use transform3d for better performance
    bookRef.current.style.transform = `rotate3d(1, 0, 0, ${angleX}deg) rotate3d(0, 1, 0, ${angleY}deg)`;
  };

  const handleMouseLeave = () => {
    if (bookRef.current) {
      bookRef.current.style.transform = '';
    }
  };

  return (
    <div 
      className="book-cover-wrapper fade-in"
      ref={wrapperRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="book-cover" ref={bookRef}>
        <img src={image} alt={alt} />
      </div>
    </div>
  );
};

export default BookCover;