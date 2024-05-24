import React from 'react';
import missionImage from '../../assets/missionImage.jpg'; 
import visionImage from '../../assets/visionImage.jpg' 
import valuesImage from '../../assets/valuesImage.jpg'; 
import chooseImage from '../../assets/chooseImage.png'; 

function Overview() {
  return (
    <div style={styles.container} className="overview-container">
      <h2 style={styles.heading}><strong>Company Overview</strong></h2>
      <div style={styles.section}>
        <img src={missionImage} alt="Mission" style={styles.image} />
        <div style={styles.content}>
          <h3 style={styles.subHeading}>Mission:</h3>
          <p>Bridging the gap between people and technology.</p>
        </div>
      </div>
      <div style={styles.section}>
        <img src={visionImage} alt="Vision" style={styles.image} />
        <div style={styles.content}>
          <h3 style={styles.subHeading}>Vision:</h3>
          <p>To become the first choice of our clients in providing IT Services & Solutions. We aim to equip businesses with the latest technology and strive to provide cost-effective IT solutions to our clients and customers. We inspire to adapt, grow, and evolve as the trends demand.</p>
        </div>
      </div>
      <div style={styles.section}>
        <img src={valuesImage} alt="Core Values" style={styles.image} />
        <div style={styles.content}>
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
      </div>
      <div style={styles.section}>
        <img src={chooseImage} alt="Why Choose Us" style={styles.image} />
        <div style={styles.content}>
          <h3 style={styles.subHeading}>Why Choose Mave Technologies?</h3>
          <p>Mave Technologies is your ultimate IT partner. We pride ourselves on delivering high-quality service, value, and reliability. With our team of experienced individuals and a network of engineers spread around the world, we can provide optimal IT solutions to meet your business needs. Our customer-centric methodology ensures maximum satisfaction, and our core values of integrity, expertise, and global reach make us the preferred choice for IT services and solutions.</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f9f9f7', 
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', 
  },
  heading: {
    background: '#000000', 
    color: '#ffffff', 
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
    marginBottom: '40px', 
    boxShadow: '0px 2px 5px rgba(1, 1, 1, 0.1)', 
  },
  section: {
    display: 'flex',
    marginBottom: '40px',
  },
  image: {
    width: '200px',
    marginRight: '20px',
    borderRadius: '8px', /* Rounded corners for images */
    boxShadow: '0px 2px 5px rgba(1, 1, 1, 0.1)', /* Added subtle shadow */
  },
  content: {
    flex: 1,
  },
  subHeading: {
    background: '#ffffff', /* White background */
    color: '#36454F', /* Dark blue text */
    padding: '15px',
    borderRadius: '8px', /* Slightly reduced border radius */
    marginBottom: '20px', /* Adjusted margin for better spacing */
    boxShadow: '0px 2px 5px rgba(1, 1, 1, 0.1)', /* Added subtle shadow */
  },
  valuesList: {
    listStyleType: 'circle',
    marginLeft: '20px',
  },
};

export default Overview;
