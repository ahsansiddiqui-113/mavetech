import React from 'react';

function Methodology() {
  return (
    <div className="methodology-container" style={styles.container}>
      <h2 style={styles.heading}>Methodology</h2>
      <ol>
        <li style={styles.subHeading}>
          <h3>Design engagement and implementation road map</h3>
          <p>At Mave Technologies, we begin by designing a comprehensive engagement and implementation road map tailored to the specific needs of our clients. This roadmap serves as a blueprint for the entire project, outlining key milestones, deliverables, and timelines.</p>
        </li>
        <li style={styles.subHeading}>
          <h3>Management and Maintenance</h3>
          <p>Once the road map is in place, we focus on effective management and maintenance of the project. Our team works diligently to ensure smooth execution, monitor progress, and address any challenges that may arise along the way. Regular communication and collaboration with our clients are key aspects of this phase.</p>
        </li>
        <li style={styles.subHeading}>
          <h3>Discovery processes</h3>
          <p>Throughout the project lifecycle, we employ rigorous discovery processes to gather insights, identify opportunities, and refine our approach. This iterative process allows us to adapt to changing requirements, optimize performance, and deliver exceptional results that exceed our clients' expectations.</p>
        </li>
      </ol>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', /* Added box shadow for depth */
    borderRadius: '10px',
    backgroundColor: '#ffffff', /* Changed background to white */
  },
  heading: {
    background: '#36454F',
    color: '#fff',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
    marginBottom: '20px',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)', /* Added subtle shadow */
  },
  subHeading: {
    background: '#f0f0f0',
    padding: '20px',
    borderRadius: '10px',
    marginBottom: '20px',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)', /* Added subtle shadow */
  },
};


export default Methodology;
