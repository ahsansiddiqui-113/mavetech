import React, { useState, useEffect } from 'react';
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import backgroundImage from '../../assets/background.jpg';

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
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '2rem',
      fontFamily: 'Arial, sans-serif',
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
      display: 'flex',
      justifyContent: 'center',
      gap: '10px',
    },
    socialLink: {
      color: '#fff',
      fontSize: '24px',
      textDecoration: 'none',
    },
    copyRight: {
      fontSize: '14px',
      margin: '0',
    },
    contactInfo: {
      marginTop: '1rem',
      color: '#6c757d',
    },
    contactLink: {
      color: '#fff',
      textDecoration: 'none',
    },
  };

  return (
    <div style={styles.container}>
      <main style={styles.main}>
        <section style={styles.section}>
          <h2 style={styles.sectionH2}>About Us</h2>
          <p style={styles.sectionP}>
            Welcome to Mave Technologies, where innovation meets excellence. We are committed to providing top-notch tech solutions that drive success for businesses of all sizes. Our mission is to empower our clients through cutting-edge technology and unparalleled support.
          </p>
          <p style={styles.sectionP}>
            Established in 2010, we have a decade of experience in delivering high-quality software development, IT consulting, and digital transformation services. Join us on our journey to make the world a more connected and efficient place.
          </p>
        </section>
        <section style={styles.section}>
          <h2 style={styles.sectionH2}>Our Services</h2>
          <p style={styles.sectionP}>
            At Mave Technologies, we offer a wide range of services to meet your business needs:
          </p>
          <ul style={styles.sectionP}>
            <li>Custom Software Development</li>
            <li>IT Consulting</li>
            <li>Cloud Solutions</li>
            <li>Cybersecurity Services</li>
            <li>Digital Transformation</li>
          </ul>
          <p style={styles.sectionP}>
            Our team of experts is dedicated to providing personalized solutions that help you achieve your business goals. We leverage the latest technologies to deliver innovative and reliable services.
          </p>
        </section>
      </main>
      {showFooter && (
        <footer style={styles.footer}>
          <div style={styles.socialMedia}>
            <a href="https://twitter.com" style={styles.socialLink}><FaTwitter /></a>
            <a href="https://facebook.com" style={styles.socialLink}><FaFacebook /></a>
            <a href="https://linkedin.com" style={styles.socialLink}><FaLinkedin /></a>
          </div>
          <p style={styles.copyRight}>© 2024 Mave Technologies. All rights reserved.</p>
          <div style={styles.contactInfo}>
            <p>
              Call Us: <a href="tel:03345440774" style={styles.contactLink}>03345440774</a>
            </p>
            <p>
              Email: <a href="mailto:example@gmail.com" style={styles.contactLink}>example@gmail.com</a>
            </p>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Home;
