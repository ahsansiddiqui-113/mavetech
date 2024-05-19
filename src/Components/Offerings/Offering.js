import React from 'react';

function Offerings() {
  return (
    <div className="offerings-container" style={styles.container}>
      <h2 style={styles.heading}>Our Offerings</h2>
      <div className="core-areas" style={styles.section}>
        <h3 style={styles.subHeading}>Core Areas of Solutions</h3>
        <ul style={styles.list}>
          <li>Mave Break Fix Support</li>
          <li>Mave Engineering Resource</li>
          <li>Mave Professional Services</li>
        </ul>
      </div>
      <div className="promises" style={styles.section}>
        <h3 style={styles.subHeading}>Our Promises</h3>
        <p>Our promise is to deliver Servicing Certainty around the globe. An unrivalled knowledge of multi-vendor delivery capabilities throughout the globe enables us to cover 100+ countries via our approved partner program.</p>
      </div>
      <div className="key-features" style={styles.section}>
        <h3 style={styles.subHeading}>Key Features and Services</h3>
        <ul style={styles.list}>
          <li>24x7x365 Support & Help-desk</li>
          <li>More than 5000+ trained & certified technicians globally</li>
          <li>Managed IT Services</li>
          <li>IMAC Roll out, Relocation</li>
          <li>OEM repair and maintenance contracts</li>
          <li>A/V installation and setup</li>
        </ul>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
  },
  heading: {
    background: '#36454F',
    color: '#fff',
    padding: '10px',
    borderRadius: '10px',
    textAlign: 'center',
    marginBottom: '20px',
  },
  section: {
    background: '#f0f0f0',
    padding: '20px',
    borderRadius: '10px',
    marginBottom: '20px',
  },
  subHeading: {
    marginBottom: '10px',
  },
  list: {
    listStyleType: 'disc',
    marginLeft: '20px',
  },
};

export default Offerings;
