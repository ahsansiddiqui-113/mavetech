import React from 'react';
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';

function Methodology() {
  return (
    <div className="methodology-container" style={styles.container}>
      <h2 style={styles.heading}>Methodology</h2>
      <ol>
        <li style={styles.subHeading}>
          <div style={styles.imageContainer}>
            <img src={image1} alt="Design engagement" style={styles.image} />
          </div>
          <div style={styles.textContainer}>
            <h3>Design engagement and implementation road map</h3>
            <p>At Mave Technologies, we begin by designing a comprehensive engagement and implementation road map tailored to the specific needs of our clients. This roadmap serves as a blueprint for the entire project, outlining key milestones, deliverables, and timelines.</p>
          </div>
        </li>
        <li style={styles.subHeading}>
          <div style={styles.imageContainer}>
            <img src={image2} alt="Management and Maintenance" style={styles.image} />
          </div>
          <div style={styles.textContainer}>
            <h3>Management and Maintenance</h3>
            <p>Once the road map is in place, we focus on effective management and maintenance of the project. Our team works diligently to ensure smooth execution, monitor progress, and address any challenges that may arise along the way. Regular communication and collaboration with our clients are key aspects of this phase.</p>
          </div>
        </li>
        <li style={styles.subHeading}>
          <div style={styles.imageContainer}>
            <img src={image3} alt="Discovery processes" style={styles.image} />
          </div>
          <div style={styles.textContainer}>
            <h3>Discovery processes</h3>
            <p>Throughout the project lifecycle, we employ rigorous discovery processes to gather insights, identify opportunities, and refine our approach. This iterative process allows us to adapt to changing requirements, optimize performance, and deliver exceptional results that exceed our clients' expectations.</p>
          </div>
        </li>
      </ol>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', 
    borderRadius: '10px',
    backgroundColor: '#f5f5f5', // Changed background color
  },
  heading: {
    background: '#000000',
    color: '#fff',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
    marginBottom: '20px',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)', 
  },
  subHeading: {
    background: '#ffffff',
    padding: '20px',
    borderRadius: '10px',
    marginBottom: '20px',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)', 
    display: 'flex', // Added to align image and text side by side
  },
  imageContainer: {
    flex: '0 0 30%', // Adjusted width of image container
    marginRight: '20px', // Added margin between image and text
  },
  image: {
    width: '100%',
    borderRadius: '10px',
  },
  textContainer: {
    flex: '1', // Take remaining space
  }
};

export default Methodology;
