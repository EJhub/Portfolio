import React, { useState, useEffect } from 'react';
import styles from "../styles/NavBar.module.css";

function NavBar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showContactButton, setShowContactButton] = useState(false);

  // Handle smooth scrolling to sections
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Track which section is currently in view and handle navbar visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Handle navbar visibility based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past 100px
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);

      // Track active section
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = currentScrollY + 100; // Offset for navbar height

      let currentSection = 'home'; // Default to home
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentSection = section;
            break;
          }
        }
      }
      
      setActiveSection(currentSection);
      
      // Show Contact Me button when NOT on home section
      setShowContactButton(currentSection !== 'home');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`${styles.container} ${isVisible ? styles.visible : styles.hidden}`}>
      <div className={styles.logo}>
        EJ
      </div>
      <div className={styles.navContainer}>
        <button 
          onClick={() => scrollToSection('home')}
          className={`${styles.navLink} ${activeSection === 'home' ? styles.active : ''}`}
        >
          Home
        </button>
        <button 
          onClick={() => scrollToSection('about')}
          className={`${styles.navLink} ${activeSection === 'about' ? styles.active : ''}`}
        >
          About me
        </button>
        <button 
          onClick={() => scrollToSection('projects')}
          className={`${styles.navLink} ${activeSection === 'projects' ? styles.active : ''}`}
        >
          Projects
        </button>
        <button 
          onClick={() => scrollToSection('contact')}
          className={`${styles.contactButton} ${showContactButton ? styles.contactVisible : styles.contactHidden}`}
        >
          Contact Me
        </button>
      </div>
    </nav>
  );
}

export default NavBar;