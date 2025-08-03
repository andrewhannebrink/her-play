import React, { useState } from 'react';
import './WaitlistForm.css';

const WaitlistForm = ({ formContent }) => {
  const [email, setEmail] = useState('');
  const [privacy, setPrivacy] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, this would submit to your email service
    alert('Thank you for joining the waitlist! We\'ll be in touch soon.');
    setEmail('');
    setPrivacy(false);
  };

  return (
    <form className="waitlist-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="email"
          name="email"
          placeholder={formContent.emailPlaceholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <div className="checkbox-group">
          <input
            type="checkbox"
            id="privacy"
            name="privacy"
            checked={privacy}
            onChange={(e) => setPrivacy(e.target.checked)}
            required
          />
          <label htmlFor="privacy">{formContent.privacyText}</label>
        </div>
      </div>
      <button type="submit" className="btn-primary">
        {formContent.ctaButton}
      </button>
    </form>
  );
};

export default WaitlistForm;