import React from 'react';
import technicianImage from '../../assets/technicalImage.jpg';
import supportImage from '../../assets/support.jpg';
import servicesImage from '../../assets/servicesImage.jpg';

function Offerings() {
  return (
    <div className="offerings-container" style={styles.offeringsContainer}>
      <h1 className="heading" style={styles.heading}>Our Offerings</h1>
      <section className="core-areas" style={styles.section}>
        <h2 className="sub-heading" style={styles.subHeading}>Core Areas of Solutions</h2>
        <ul className="list" style={styles.list}>
          <li>Mave Break Fix Support</li>
          <li>Mave Engineering Resource</li>
          <li>Mave Professional Services</li>
        </ul>
      </section>
      <section className="promises" style={styles.section}>
        <h2 className="sub-heading" style={styles.subHeading}>Our Promises</h2>
        <p>Our promise is to deliver Servicing Certainty around the globe. An unrivaled knowledge of multi-vendor delivery capabilities throughout the globe enables us to cover 100+ countries via our approved partner program.</p>
        <img src={supportImage} alt="Support" className="image" style={styles.image} />
      </section>
      <section className="key-features" style={styles.section}>
        <h2 className="sub-heading" style={styles.subHeading}>Key Features and Services</h2>
        <ul className="list" style={styles.list}>
          <li>24x7x365 Support & Help-desk</li>
          <li>More than 5000+ trained & certified technicians globally</li>
          <li>Managed IT Services</li>
          <li>IMAC Roll out, Relocation</li>
          <li>OEM repair and maintenance contracts</li>
          <li>A/V installation and setup</li>
        </ul>
        <div style={styles.imagesContainer}>
          <img src={technicianImage} alt="Technician" className="image" style={styles.image} />
          <img src={servicesImage} alt="Services" className="image" style={styles.image} />
        </div>
      </section>
    </div>
  );
}

const styles = {
  offeringsContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    position: 'relative',
  },
  logoContainer: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    borderRadius: '50%',
    overflow: 'hidden',
    width: '50px',
    height: '50px',
    backgroundColor: '#fff',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
  },
  logo: {
    width: '100%',
    height: 'auto',
    display: 'block',
  },
  heading: {
    borderRadius:'20px',
    color:'#fff',
    backgroundColor:'#000000',
    textAlign: 'center',
    marginTop: '70px', // Adjust as needed
  },
  section: {
    background: '#f0f0f0',
    padding: '20px',
    borderRadius: '10px',
    marginBottom: '40px',
  },
  subHeading: {
    marginBottom: '10px',
  },
  list: {
    listStyleType: 'disc',
    marginLeft: '20px',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
    display: 'block',
    margin: '0 auto',
    marginBottom: '20px',
    borderRadius: '5px',
  },
  imagesContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
};

export default Offerings;
