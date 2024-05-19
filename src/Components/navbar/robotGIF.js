import React from 'react';

function CenteredGIF() {
  return (
    <div style={styles.container}>
      <img src={require('../../assets/astronot.gif')} alt="Astronaut GIF" style={styles.gif} />
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Full height of the viewport
    overflow: 'hidden', // Hide any overflow
  },
  gif: {
    maxWidth: '100%', // Set maximum width to 100% of container
    maxHeight: '100%', // Set maximum height to 100% of container
    width: 'auto', // Maintain aspect ratio
    height: 'auto', // Allow the image to adjust its height
  },
};

export default CenteredGIF;
