import React from 'react';

function Overview() {
  return (
    <div style={styles.container} className="overview-container">
      <h2 style={styles.heading}><strong>Company Overview</strong></h2>
      <div style={styles.missionVisionValues} className="mission-vision-values">
        <h3 style={styles.subHeading}>Mission:</h3>
        <p>Bridging the gap between people and technology.</p>
        <h3 style={styles.subHeading}>Vision:</h3>
        <p>To become the first choice of our clients in providing IT Services & Solutions. We aim to equip businesses with the latest technology and strive to provide cost-effective IT solutions to our clients and customers. We inspire to adapt, grow, and evolve as the trends demand.</p>
        <h3 style={styles.subHeading}>Core Values:</h3>
        <ul style={styles.valuesList}>
          <li>Evolve & Adapt: Stay connected and updated with ever-changing technology needs.</li>
          <li>Believe in Outcome: Establish a culture of exceptional executions.</li>
          <li>Continuous Improvement: Stay relevant in the market by constantly upgrading.</li>
          <li>People First: Provide an environment that fosters personal and professional growth.</li>
          <li>Transparency: Communicate internally and externally with unwavering candor, honesty, and respect.</li>
          <li>Exceed Expectations: Understand clients' needs and strive hard to exceed them.</li>
        </ul>
      </div>
      <div style={styles.contactInfo} className="contact-info">
        <h3 style={styles.subHeading}>Contact Information:</h3>
        <p>Email: info@mavetechnologies.com</p>
        <p>Phone: +1-123-456-7890</p>
        <p>Address: 123 Tech Street, Tech City, Techland</p>
      </div>
      <div style={styles.whyChoose} className="why-choose">
        <h3 style={styles.subHeading}>Why Choose Mave Technologies?</h3>
        <p>Mave Technologies is your ultimate IT partner. We pride ourselves on delivering high-quality service, value, and reliability. With our team of experienced individuals and a network of engineers spread around the world, we can provide optimal IT solutions to meet your business needs. Our customer-centric methodology ensures maximum satisfaction, and our core values of integrity, expertise, and global reach make us the preferred choice for IT services and solutions.</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f9f9f9', /* Light gray background */
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', /* Added subtle shadow */
  },
  heading: {
    background: '#36454F', /* Dark blue background */
    color: '#ffffff', /* White text */
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
    marginBottom: '40px', /* Reduced margin for better spacing */
    boxShadow: '0px 2px 5px rgba(1, 1, 1, 0.1)', /* Added subtle shadow */
  },
  subHeading: {
    background: '#ffffff', /* White background */
    color: '#36454F', /* Dark blue text */
    padding: '15px', /* Reduced padding for a sleeker look */
    borderRadius: '8px', /* Slightly reduced border radius */
    marginBottom: '20px', /* Adjusted margin for better spacing */
    boxShadow: '0px 2px 5px rgba(1, 1, 1, 0.1)', /* Added subtle shadow */
  },
  missionVisionValues: {
    marginBottom: '30px',
  },
  valuesList: {
    listStyleType: 'circle',
    marginLeft: '20px',
  },
  contactInfo: {
    marginBottom: '30px',
  },
  whyChoose: {
    marginBottom: '30px',
  },
};


export default Overview;
