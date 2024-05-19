import React, { useState, useEffect } from 'react';
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import backgroundImage from 'E:/Mave technologies/mave-tech/src/assets/background.jpg';

const Home = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const isAtBottom = scrollTop + windowHeight >= documentHeight;

      setShowFooter(isAtBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const styles = {
    container: {
      display:'flex',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '2rem',
      fontFamily: 'Arial, sans-serif',
      backgroundImage: `url(${backgroundImage})`, // Replace URL with your image
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    },
    main: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: '2rem',
    },
    section: {
      flexBasis: '45%',
      flex: '1 1 calc(50% - 1rem)',
      background: '#f8f9fa',
      padding: '2rem',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    sectionH2: {
      fontSize: '1.5rem',
      marginBottom: '1rem',
      color: '#343a40',
      textShadow: '0 2px 2px rgba(0, 0, 0, 0.1)',
    },
    sectionP: {
      color: '#6c757d',
      lineHeight: '1.6',
    },
    button: {
      backgroundColor: '#28a745',
      color: 'white',
      padding: '0.75rem 1.5rem',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '1rem',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#218838',
    },
    footer: {
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      backgroundColor: '#343a40',
      color: '#fff',
      padding: '20px',
      textAlign: 'center',
      transition: 'transform 0.3s ease',
      transform: showFooter ? 'translateY(0)' : 'translateY(100%)',
    },
    socialMedia: {
      marginBottom: '1rem',
    },
    socialLink: {
      color: '#343f4d',
      fontSize: '24px',
      margin: '0 10px',
      textDecoration: 'none',
    },
    copyRight: {
      fontSize: '14px',
      margin: '0',
    },
  };

  return (
    <div style={styles.container}>
      {showFooter && (
        <footer style={styles.footer}>
          <div style={styles.socialMedia}>
            <a href="https://twitter.com" style={styles.socialLink}><FaTwitter /></a>
            <a href="https://facebook.com" style={styles.socialLink}><FaFacebook /></a>
            <a href="https://linkedin.com" style={styles.socialLink}><FaLinkedin /></a>
          </div>
          <p style={styles.copyRight}>© 2024 Mave Technologies. All rights reserved.</p>
          <section>
            <h2 style={{ color: '#6c757d', fontSize: '1.2rem', marginBottom: '1rem' }}>Let's Connect</h2>
            <p style={{ color: '#6c757d', marginBottom: '0.5rem' }}>
              Call Us: <a href="tel:03345440774" style={{ color: '#fff', textDecoration: 'none' }}>03345440774</a>
            </p>
            <p style={{ color: '#6c757d', marginBottom: '0.5rem' }}>
              Email: <a href="mailto:example@gmail.com" style={{ color: '#fff', textDecoration: 'none' }}>example@gmail.com</a>
            </p>
          </section>
        </footer>
      )}
    </div>
  );
};

export default Home;
