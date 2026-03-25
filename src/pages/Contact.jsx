import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, this would send to a backend or email service
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container page-hero__content">
          <div className="accent-bar"></div>
          <h1>Contact Us</h1>
          <p>Ready to get started? Reach out for a free consultation and we'll get back to you within 24 hours.</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-wrap">
              <h2>Get Your Free Quote</h2>
              <p className="contact-form-wrap__subtitle">
                Fill out the form below and we'll provide a custom quote for your property. You can also send us photos for a remote consultation.
              </p>

              {submitted ? (
                <div className="contact-success">
                  <div className="contact-success__icon">
                    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="3"><circle cx="32" cy="32" r="28"/><path d="M20 32l8 8 16-16"/></svg>
                  </div>
                  <h3>Thank You!</h3>
                  <p>Your message has been received. We'll get back to you within 24 hours with a custom quote.</p>
                  <button className="btn btn-primary" onClick={() => { setSubmitted(false); setFormData({ firstName: '', lastName: '', email: '', phone: '', service: '', message: '' }); }}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="contact-form__row">
                    <div className="contact-form__field">
                      <label htmlFor="firstName">First Name *</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        placeholder="Your first name"
                      />
                    </div>
                    <div className="contact-form__field">
                      <label htmlFor="lastName">Last Name *</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div className="contact-form__row">
                    <div className="contact-form__field">
                      <label htmlFor="email">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                      />
                    </div>
                    <div className="contact-form__field">
                      <label htmlFor="phone">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(720) 000-0000"
                      />
                    </div>
                  </div>

                  <div className="contact-form__field">
                    <label htmlFor="service">Service Interested In</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="">Select a service...</option>
                      <option value="house-washing">House Washing</option>
                      <option value="roof-cleaning">Roof Cleaning</option>
                      <option value="concrete-cleaning">Concrete & Driveway Cleaning</option>
                      <option value="window-cleaning">Window Cleaning</option>
                      <option value="gutter-cleaning">Gutter Cleaning</option>
                      <option value="commercial">Commercial Pressure Washing</option>
                      <option value="deck-fence">Deck & Fence Cleaning</option>
                      <option value="fleet">Fleet & Equipment Washing</option>
                      <option value="multiple">Multiple Services</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="contact-form__field">
                    <label htmlFor="message">Tell Us About Your Project</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      placeholder="Describe what you need cleaned, the approximate size of the area, and any other details that would help us provide an accurate quote."
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary btn-large contact-form__submit">
                    Submit Request
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info Sidebar */}
            <div className="contact-sidebar">
              <div className="contact-info-card">
                <h3>Get In Touch</h3>
                <div className="contact-info-card__items">
                  <div className="contact-info-item">
                    <div className="contact-info-item__icon">
                      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                    </div>
                    <div>
                      <span className="contact-info-item__label">Phone</span>
                      <a href="tel:7203362152" className="contact-info-item__value">(720) 336-2152</a>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="contact-info-item__icon">
                      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                    </div>
                    <div>
                      <span className="contact-info-item__label">Email</span>
                      <a href="mailto:info@avalanchepowerclean.com" className="contact-info-item__value">info@avalanchepowerclean.com</a>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="contact-info-item__icon">
                      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                    </div>
                    <div>
                      <span className="contact-info-item__label">Service Area</span>
                      <span className="contact-info-item__value">Denver Metro Area, Colorado</span>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="contact-info-item__icon">
                      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
                    </div>
                    <div>
                      <span className="contact-info-item__label">Hours</span>
                      <span className="contact-info-item__value">Mon-Sat: 7AM - 7PM</span>
                      <span className="contact-info-item__value contact-info-item__value--sub">Sun: By Appointment</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-info-card contact-info-card--dark">
                <h3>Follow Us</h3>
                <p>Stay connected for tips, before/after photos, and special offers.</p>
                <div className="contact-social">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  </a>
                  <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>
                  <a href="https://yelp.com" target="_blank" rel="noopener noreferrer" aria-label="Yelp">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308a1.072 1.072 0 011.596-.206 7.285 7.285 0 012.078 3.312c.204.738-.308 1.182-.408 1.399zm-7.842 2.907l1.467 4.985c.266.905-.725 1.567-1.478 1.032a7.154 7.154 0 01-2.639-2.928c-.285-.625.196-1.24.196-1.24l2.454-1.849zm-2.998-1.167l-4.657 2.267c-.923.449-1.78-.486-1.278-1.39a7.158 7.158 0 012.388-3.143c.575-.404 1.298.02 1.298.02l3.013 1.484c.8.394.478 1.397-.764.762zm1.368-3.498L8.39 6.107C7.876 5.32 8.674 4.373 9.573 4.68a7.2 7.2 0 013.39 2.108c.483.55.192 1.3.192 1.3L11.6 10.956c-.367.654-1.025.393-.912-.12zm1.88-1.293l3.572-3.668c.674-.692 1.724.03 1.564.97a7.2 7.2 0 01-1.393 3.632c-.382.543-1.124.404-1.124.404l-2.932-.602c-.727-.15-.665-.95.313-.736z"/></svg>
                  </a>
                </div>
              </div>

              <div className="contact-info-card">
                <h3>Free Remote Consultation</h3>
                <p>Can't meet in person? No problem! Simply send us photos of the areas you need cleaned and we'll provide a detailed quote remotely.</p>
                <div className="remote-steps">
                  <div className="remote-step">
                    <span className="remote-step__num">1</span>
                    <span>Submit the form with details</span>
                  </div>
                  <div className="remote-step">
                    <span className="remote-step__num">2</span>
                    <span>We review and assess your needs</span>
                  </div>
                  <div className="remote-step">
                    <span className="remote-step__num">3</span>
                    <span>Receive your custom quote in 24hrs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <div className="accent-bar"></div>
            <h2>Frequently Asked Questions</h2>
            <p>Common questions about our services and process.</p>
          </div>
          <div className="faq-grid">
            {[
              {
                q: 'How long does pressure washing take?',
                a: 'Most residential jobs are completed in 2-4 hours. Larger properties or multiple services may take a full day. We\'ll give you a time estimate with your quote.'
              },
              {
                q: 'Will pressure washing damage my surfaces?',
                a: 'No — we use the appropriate method for each surface. Soft washing for delicate surfaces like roofs and siding, and adjusted pressure for harder surfaces like concrete. Our technicians are trained to prevent any damage.'
              },
              {
                q: 'Do I need to be home during the service?',
                a: 'Not necessarily. As long as we have access to water and the areas to be cleaned, we can complete the work while you\'re away. We\'ll send before-and-after photos when we\'re done.'
              },
              {
                q: 'How often should I have my home pressure washed?',
                a: 'We recommend annually for most homes in the Denver area. Properties with heavy tree coverage or north-facing walls may benefit from more frequent cleaning.'
              },
              {
                q: 'Are your cleaning solutions safe for plants and pets?',
                a: 'Yes! We use biodegradable, eco-friendly cleaning solutions. We also take precautions to protect your landscaping by pre-wetting plants and rinsing them after the service.'
              },
              {
                q: 'Do you offer any guarantees?',
                a: 'Absolutely. We offer a 100% satisfaction guarantee. If you\'re not completely happy with our work, we\'ll come back and address any concerns at no additional cost.'
              }
            ].map((faq, i) => (
              <div key={i} className="faq-item">
                <h3 className="faq-item__question">{faq.q}</h3>
                <p className="faq-item__answer">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
