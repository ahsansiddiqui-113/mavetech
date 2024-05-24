import React, { useState } from 'react';
import image from '../../assets/Illustration.jpeg';
import medical from '../../assets/Medical.jpg';

const CredentialingPage = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const faqs = [
    {
      question: 'What Is Needed For Credentialing?',
      answer: 'Credentialing typically requires documentation such as a medical license, malpractice insurance, and work history.',
    },
    {
      question: 'How Long Does The Credentialing Process Take?',
      answer: 'The credentialing process can take anywhere from a few weeks to several months depending on the completeness of your application and the responsiveness of the verifying institutions.',
    },
    {
      question: 'How Can I Speed Up My Credentialing Application?',
      answer: 'Ensure all required documents are complete and accurate, and respond promptly to any additional requests for information.',
    },
    {
      question: 'After How Long Commercial Payers Re-Credentialing Is Required?',
      answer: 'Re-credentialing is typically required every two to three years depending on the payer.',
    },
    {
      question: 'Why Does Credentialing Take So Long?',
      answer: 'Credentialing can take a long time due to the detailed verification process which includes checking education, training, work history, and malpractice history.',
    },
  ];

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const handleLearnMoreClick = () => {
    setShowMoreInfo(!showMoreInfo);
  };

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
        <button style={styles.button} onClick={handleLearnMoreClick}>
          {showMoreInfo ? 'Show Less' : 'Learn More'}
        </button>
        {showMoreInfo && (
          <div style={styles.moreInfo}>
            <p style={styles.p}>
              We offer a comprehensive suite of credentialing services designed to
              meet the specific needs of healthcare providers and organizations.
              Our team handles everything from initial application submission to
              follow-up and re-credentialing, ensuring that you remain compliant
              with all regulatory requirements. With a high acceptance rate and
              a streamlined process, we minimize delays and get you credentialed
              as quickly as possible.
            </p>
            <p style={styles.p}>
              By choosing our credentialing services, you can focus on providing
              quality care to your patients while we take care of the administrative
              tasks. Our experts are well-versed in the latest regulations and
              payer requirements, giving you peace of mind that your credentialing
              needs are in capable hands.
            </p>
          </div>
        )}
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
          <button style={styles.button} onClick={handleLearnMoreClick}>
          {showMoreInfo ? 'Show Less' : 'Learn More'}
        </button>
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
          {faqs.map((faq, index) => (
            <div key={index} style={styles.faqItem} onClick={() => toggleFAQ(index)}>
              <p style={styles.faqQuestion}>{faq.question}</p>
              {expandedFAQ === index && <p style={styles.faqAnswer}>{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
      <div style={styles.formSection}>
        <h2 style={styles.h2}>Get in Touch</h2>
        <form
  style={styles.form}
  onSubmit={async (e) => {
    e.preventDefault();
    const formData = {
      name: e.target[0].value,
      email: e.target[1].value,
      number: e.target[2].value,
      subject: e.target[3].value,
      message: e.target[4].value
    };
    try {
      const response = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('Message sent successfully');
      } else {
        alert('Error sending message');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error sending message');
    }
  }}
>
  <input type="text" placeholder="Enter Name" style={styles.input} />
  <input type="email" placeholder="Enter Email" style={styles.input} />
  <input type="text" placeholder="Enter Number" style={styles.input} />
  <input type="text" placeholder="Enter Subject" style={styles.input} />
  <textarea placeholder="Message" style={styles.textarea}></textarea>
  <button type="submit" style={styles.button}>Submit</button>
</form>

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
  },
  moreInfo: {
    marginTop: '20px',
    backgroundColor: '#e6f0fa',
    padding: '15px',
    borderRadius: '5px',
    textAlign: 'left',
  },
  statsSection: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '20px',
    width: '100%',
  },
  statItem: {
    textAlign: 'center',
  },
  statNumber: {
    fontSize: '2rem',
    color: '#003366',
  },
  statLabel: {
    fontSize: '1rem',
    color: '#5a5a5a',
  },
  descriptionSection: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  descriptionTitle: {
    fontSize: '2rem',
    color: '#003366',
    marginBottom: '10px',
  },
  descriptionText: {
    fontSize: '1.1rem',
    color: '#5a5a5a',
    marginBottom: '20px',
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
  coreServices: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    width: '100%',
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
  imageSection: {
    flex: 1,
    textAlign: 'center',
  },
  faqs: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    margin: '20px 0',
    width: '100%',
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
  },
  faqQuestion: {
    fontSize: '1rem',
    color: '#003366',
    margin: 0,
  },
  faqAnswer: {
    fontSize: '1rem',
    color: '#333',
    marginTop: '10px',
  },
  formSection: {
    width: '100%',
    maxWidth: '500px',
    marginBottom: '20px',
    padding: '0 20px',
    textAlign: 'center',
  },
  h2: {
    fontSize: '2rem',
    color: '#2b2b2b',
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
  },
  textarea: {
    marginBottom: '15px',
    padding: '12px',
    fontSize: '1.1rem',
    border: '1px solid #ccc',
    borderRadius: '5px',
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
