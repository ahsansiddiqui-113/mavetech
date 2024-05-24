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
    height: '100vh', 
    overflow: 'hidden', 
  },
  gif: {
    maxWidth: '100%', 
    maxHeight: '100%', 
    width: 'auto',
    height: 'auto', 
  },
};

export default CenteredGIF;
