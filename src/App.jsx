import React from 'react';
import Hero from './components/Hero';
import MediaSection from './components/MediaSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import useScrollEffects from './hooks/useScrollEffects';
import bookContent from './content/bookContent.json';

function App() {
  useScrollEffects();

  return (
    <>
      <Hero 
        content={bookContent.hero} 
        formContent={bookContent.form}
        images={bookContent.images}
      />
      
      <div style={{ height: '100vh' }} />
      
      <MediaSection content={bookContent.media} />
      
      <AboutSection 
        content={bookContent.aboutBook} 
        sectionClass="section-light" 
        id="about-book"
      />
      
      <AboutSection 
        content={bookContent.aboutKarolina} 
        sectionClass="section-red parallax-section" 
        id="about-karolina"
      />
      
      <AboutSection 
        content={bookContent.aboutHerPlay} 
        sectionClass="section-light" 
        id="about-herplay"
      />
      
      <Footer content={bookContent.footer} />
    </>
  );
}

export default App;