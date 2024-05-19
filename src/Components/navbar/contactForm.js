import React from 'react';

const ContactForm = () => {

  return (
    <div className="container">
        <div className="contact-form">
          <h2>Contact Form</h2>
          <form action="#">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Email Address *</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="phone">Phone Number *</label>
            <input type="tel" id="phone" name="phone" required />
            <label htmlFor="state">US State (optional)</label>
            <select name="state" id="state">
              <option value="">Select State</option>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
            </select>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" maxlength="200"></textarea>
            <span className="char-count">0/200</span>
            <button type="submit">Submit</button>
          </form>
        </div>
    </div>
  );
};

export default ContactForm;
