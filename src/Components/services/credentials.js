import React from 'react';
import image from '../../assets/Illustration.jpeg';
import medical from '../../assets/Medical.jpg'

const CredentialingPage = () => {
  return (
    <div style={styles.credentialingPage}>
      <div style={styles.infoSection}>
        <h1 style={styles.h1}>Enrollment & Medical Credentialing Services</h1>
        <p style={styles.p}>
          Our experienced credentialing teams work closely with the insurance
          system and process each document with the accurate required
          information to deliver unambiguous provider enrollment and
          credentialing services.
        </p>
        <button style={styles.button}>Learn More</button>
      </div>
      <div style={styles.formSection}>
        <h2 style={styles.h2}>Get in Touch</h2>
        <form style={styles.form}>
          <input type="text" placeholder="Enter Name" style={styles.input} />
          <input type="email" placeholder="Enter Email" style={styles.input} />
          <input type="text" placeholder="Enter Number" style={styles.input} />
          <input type="text" placeholder="Enter Subject" style={styles.input} />
          <textarea placeholder="Message" style={styles.textarea}></textarea>
          <button type="submit" style={styles.button}>Submit</button>
        </form>
      </div>
      <div style={styles.statsSection}>
        <div style={styles.statItem}>
          <h3 style={styles.statNumber}>25 K</h3>
          <p style={styles.statLabel}>Over Apps</p>
        </div>
        <div style={styles.statItem}>
          <h3 style={styles.statNumber}>90 %</h3>
          <p style={styles.statLabel}>Acceptance Rate</p>
        </div>
        <div style={styles.statItem}>
          <h3 style={styles.statNumber}>120</h3>
          <p style={styles.statLabel}>Days</p>
        </div>
        <div style={styles.statItem}>
          <h3 style={styles.statNumber}>90 +</h3>
          <p style={styles.statLabel}>Specialties Served</p>
        </div>
        <div style={styles.statItem}>
          <h3 style={styles.statNumber}>Bi-Weekly</h3>
          <p style={styles.statLabel}>Follow Ups</p>
        </div>
      </div>
      <div style={styles.descriptionSection}>
        <h2 style={styles.descriptionTitle}>
          Provider Enrollment & Medical Credentialing Services
        </h2>
        <p style={styles.descriptionText}>
          There are many possible problems and results in the medical
          credentialing application process. Healthcare provider enrollment or
          credentialing is one of the most critical compliance issues in
          physician’s practices. Without proper supervision and details
          understanding, deletions or misconceptions in the medical
          credentialing strategy can be dangerous to your organization. MedsIT
          Nexus delivers innovative technical medical credentialing services
          with a faster turnaround time.
        </p>
      </div>
      <div style={styles.importantSection}>
        <h2 style={styles.importantTitle}>Why Is Credentialing Important?</h2>
        <p style={styles.importantText}>
          Our credentialing services guarantee that a healthcare provider or
          medical practice adheres to the letter of the state law defined by the
          insurance company.
        </p>
        <p style={styles.importantText}>
          Our entire credentialing process is based on the methodology that
          allows clinics, hospitals, physicians, and private practices to provide
          services to patients who have multiple insurance plans—this helps
          healthcare professionals streamline the practice’s financial health and
          boost patient visits. Our provider enrollment services also ensure that
          healthcare providers treat patients with the necessary qualifications and
          quality treatment and keep patients’ medical history.
        </p>
        <div style={styles.importantImage}>
          <img
            src={image}
            alt="Illustration about credentialing importance"
            style={styles.image}
          />
        </div>
      </div>
      <div style={styles.coreServices}>
        <div style={styles.textSection}>
          <h2 style={styles.subtitle}>Core Services</h2>
          <h1 style={styles.title}>Medical Billing And Coding Services</h1>
          <p style={styles.description}>
            MedsIT Nexus is a prominent Medical Billing company that offers a full
            spectrum of Medical Billing and coding solutions for all sizes of
            organizations.
          </p>
          <button style={styles.button}>Learn More</button>
        </div>
        <div style={styles.imageSection}>
          <img
            src={medical}
            alt="Medical Billing And Coding Services"
            style={styles.image}
          />
        </div>
      </div>
      <div style={styles.faqs}>
        <div style={styles.iconSection}>
          <i className="fa fa-question-circle" style={styles.icon}></i>
          <h2>FAQs</h2>
        </div>
        <div style={styles.faqList}>
          {[
            'What Is Needed For Credentialing?',
            'How Long Does The Credentialing Process Take?',
            'How Can I Speed Up My Credentialing Application?',
            'After How Long Commercial Payers Re-Credentialing Is Required?',
            'Why Does Credentialing Take So Long?',
          ].map((question, index) => (
            <div key={index} style={styles.faqItem}>
              <p style={styles.faqQuestion}>{question}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  credentialingPage: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.5',
  },
  infoSection: {
    textAlign: 'center',
    marginBottom: '20px',
    width: '100%',
  },
  h1: {
    fontSize: '2.5rem',
    color: '#2b2b2b',
    margin: '20px 0',
  },
  coreServices: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px',
    backgroundColor: '#f9f9f9',
  },
  textSection: {
    flex: 1,
    paddingRight: '20px',
  },
  title: {
    fontSize: '2rem',
    color: '#003366',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#2b2b2b',
    marginBottom: '10px',
  },
  description: {
    fontSize: '1rem',
    color: '#5a5a5a',
    marginBottom: '20px',
  },
  button: {
    backgroundColor: '#003366',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    fontSize: '1rem',
    cursor: 'pointer',
    borderRadius: '5px',
  },
  imageSection: {
    flex: 1,
    textAlign: 'center',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
  },

  p: {
    fontSize: '1.1rem',
    color: '#5a5a5a',
    margin: '10px 0',
  },
  button: {
    backgroundColor: '#003366',
    color: 'white',
    border: 'none',
    padding: '12px 24px',
    fontSize: '1.1rem',
    cursor: 'pointer',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
    ':hover': {
      backgroundColor: '#0055a5',
    },
  },
  formSection: {
    width: '100%',
    maxWidth: '500px',
    marginBottom: '20px',
    padding: '0 20px',
  },
  h2: {
    fontSize: '2rem',
    color: '#2b2b2b',
    textAlign: 'center',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    marginBottom: '15px',
    padding: '12px',
    fontSize: '1.1rem',
    border: '1px solid #ccc',
    borderRadius: '5px',
    ':focus': {
      borderColor: '#003366',
      outline: 'none',
    },
  },
  textarea: {
    marginBottom: '15px',
    padding: '12px',
    fontSize: '1.1rem',
    border: '1px solid #ccc',
    borderRadius: '5px',
    ':focus': {
      borderColor: '#003366',
      outline: 'none',
    },
  },
  statsSection: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    backgroundColor: '#003366',
    padding: '20px',
    borderRadius: '10px',
    margin: '20px 0',
    color: 'white',
    flexWrap: 'wrap',
  },
  statItem: {
    textAlign: 'center',
    margin: '10px',
  },
  statNumber: {
    fontSize: '2.5rem',
    margin: '0',
  },
  statLabel: {
    fontSize: '1.2rem',
    margin: '5px 0 0 0',
  },
  descriptionSection: {
    textAlign: 'center',
    padding: '20px',
    width: '100%',
  },
  descriptionTitle: {
    fontSize: '2rem',
    color: '#2b2b2b',
    marginBottom: '10px',
  },
  descriptionText: {
    fontSize: '1.1rem',
    color: '#5a5a5a',
    margin: '10px 0',
  },
  importantSection: {
    textAlign: 'left',
    backgroundColor: '#003366',
    color: 'white',
    padding: '20px',
    borderRadius: '10px',
    margin: '20px 0',
    width: '100%',
    maxWidth: '900px',
  },
  importantTitle: {
    fontSize: '2rem',
    marginBottom: '15px',
  },
  importantText: {
    fontSize: '1.1rem',
    marginBottom: '15px',
  },
  importantImage: {
    textAlign: 'center',
    marginTop: '20px',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '10px',
  },
  faqs: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f9f9f9',
  },
  iconSection: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  icon: {
    fontSize: '5rem',
    color: '#ff6666',
  },
  faqList: {
    width: '100%',
    maxWidth: '600px',
  },
  faqItem: {
    backgroundColor: '#e6f0fa',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    ':hover': {
      backgroundColor: '#d4e4f7',
    },
  },
  faqQuestion: {
    fontSize: '1rem',
    color: '#003366',
    margin: 0,
  },
  '@media (minWidth: 768px)': {
    credentialingPage: {
      flexDirection: 'column',
      padding: '40px',
    },
    infoSection: {
      width: '80%',
    },
    formSection: {
      width: '80%',
    },
    statsSection: {
      flexDirection: 'row',
    },

  },
};


export default CredentialingPage;
