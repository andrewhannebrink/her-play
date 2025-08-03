import React, { useState, useEffect } from 'react';
import './BookAnimation.css';

const BookAnimation = ({ scrollProgress, bookContent }) => {
  const [currentPage, setCurrentPage] = useState(-1);
  const [pageStates, setPageStates] = useState({});
  
  // Parse content from content.md
  const pages = [
    {
      id: 'cover',
      front: { type: 'image', content: bookContent.images.bookCover },
      back: { type: 'toc', content: 'Table of Contents' }
    },
    {
      id: 'page1',
      front: { 
        type: 'content', 
        title: 'About the Book',
        content: bookContent.aboutBook.paragraphs.slice(0, 3).join('\n\n')
      },
      back: { 
        type: 'content',
        content: bookContent.aboutBook.paragraphs.slice(3, 6).join('\n\n')
      }
    },
    {
      id: 'page2',
      front: {
        type: 'content',
        content: bookContent.aboutBook.paragraphs.slice(6, 9).join('\n\n')
      },
      back: {
        type: 'content',
        title: 'About Karolina',
        content: bookContent.aboutKarolina.paragraphs.slice(0, 2).join('\n\n')
      }
    },
    {
      id: 'page3',
      front: {
        type: 'content',
        content: bookContent.aboutKarolina.paragraphs.slice(2, 4).join('\n\n')
      },
      back: {
        type: 'content',
        title: 'About HerPlay',
        content: bookContent.aboutHerPlay.paragraphs.slice(0, 2).join('\n\n')
      }
    }
  ];

  // Calculate which page should be flipped based on scroll
  useEffect(() => {
    if (scrollProgress <= 1) {
      setCurrentPage(-1);
      setPageStates({});
    } else {
      // Each page has a flip phase (0.5) and a pause phase (0.5)
      const pageProgress = (scrollProgress - 1);
      const pageIndex = Math.floor(pageProgress);
      const pagePhase = pageProgress - pageIndex;
      
      // Don't flip beyond the last page
      const currentPageIndex = Math.min(pageIndex, pages.length - 1);
      
      // Update page states
      const newPageStates = {};
      pages.forEach((page, index) => {
        if (index < currentPageIndex) {
          newPageStates[page.id] = 'flipped';
        } else if (index === currentPageIndex && pagePhase < 0.5) {
          // First half of scroll: page is flipping
          newPageStates[page.id] = 'flipping';
        } else if (index === currentPageIndex && pagePhase >= 0.5) {
          // Second half of scroll: page is fully flipped, paused
          newPageStates[page.id] = 'flipped';
        } else {
          newPageStates[page.id] = 'unflipped';
        }
      });
      
      setCurrentPage(currentPageIndex);
      setPageStates(newPageStates);
    }
  }, [scrollProgress, pages.length]);

  const renderPageContent = (page, side) => {
    const content = page[side];
    
    if (content.type === 'image') {
      return (
        <img src={content.content} alt="Book Cover" className="page-cover-image" />
      );
    }
    
    if (content.type === 'toc') {
      return (
        <div className="page-toc">
          <h2>{content.content}</h2>
          <ul>
            <li>About the Book</li>
            <li>About Karolina</li>
            <li>About HerPlay</li>
          </ul>
        </div>
      );
    }
    
    return (
      <div className="page-text">
        {content.title && <h2>{content.title}</h2>}
        <div className="page-content">
          {content.content.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    );
  };

  // Determine what to show on the left page
  const getLeftPageContent = () => {
    if (currentPage === -1) {
      // Book is closed, don't show left content
      return null;
    } else if (currentPage === 0) {
      // First page is flipped, show back of cover (TOC)
      return renderPageContent(pages[0], 'back');
    } else if (currentPage < pages.length) {
      // Show the back of the page that was just flipped
      return renderPageContent(pages[currentPage], 'back');
    }
    return null;
  };

  // Check if book should be shown as closed
  const isBookClosed = scrollProgress <= 1;

  return (
    <div className="book-animation-container">
      <div className={`book ${isBookClosed ? 'closed' : 'open'}`}>
        {/* Pages */}
        <div className="book-pages">
          {/* Base page underneath all flippable pages */}
          <div className="book-base-page">
            <div className="final-page-content">
              <h3>Thank you for reading!</h3>
              <p>Join the waitlist to be notified when HER PLAY launches.</p>
            </div>
          </div>
          
          {pages.map((page, index) => {
            // Dynamic z-index based on flip state
            let zIndex;
            if (pageStates[page.id] === 'flipped') {
              // Flipped pages go to the back
              zIndex = index;
            } else if (pageStates[page.id] === 'flipping') {
              // Currently flipping page on top
              zIndex = pages.length + 10;
            } else {
              // Unflipped pages maintain their stack order
              zIndex = pages.length - index;
            }
            
            return (
              <div 
                key={page.id}
                className={`book-page ${pageStates[page.id] || ''}`}
                style={{ zIndex }}
              >
              <div className="page-inner">
                <div className="page-front">
                  {renderPageContent(page, 'front')}
                </div>
                <div className="page-back">
                  {renderPageContent(page, 'back')}
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BookAnimation;