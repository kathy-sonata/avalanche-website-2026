import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

function About() {
  return (
    <div className="about">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container page-hero__content">
          <div className="accent-bar"></div>
          <h1>About Avalanche Power Clean</h1>
          <p>Denver's trusted exterior cleaning experts — committed to quality, professionalism, and your complete satisfaction.</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section">
        <div className="container">
          <div className="about-story">
            <div className="about-story__content">
              <div className="accent-bar" style={{ margin: '0 0 20px' }}></div>
              <h2>Our Story</h2>
              <p>
                Avalanche Power Clean was founded with a simple mission: to provide the highest quality exterior cleaning services in the Denver metro area. What started as a passion for restoring properties to their original beauty has grown into one of Colorado's most trusted pressure washing companies.
              </p>
              <p>
                We saw a gap in the market — too many companies cut corners, use harsh chemicals, or deliver inconsistent results. We set out to change that by investing in professional-grade equipment, eco-friendly cleaning solutions, and rigorous technician training.
              </p>
              <p>
                Today, we serve hundreds of residential and commercial clients across the Denver metro area. From soft washing delicate surfaces to high-pressure concrete restoration, we bring the same dedication to every job — big or small.
              </p>
            </div>
            <div className="about-story__visual">
              <img src="/images/team-photo.jpg" alt="Avalanche Power Clean team" className="about-story__image" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <div className="accent-bar"></div>
            <h2>Our Mission & Values</h2>
            <p>Everything we do is guided by our commitment to excellence and integrity.</p>
          </div>
          <div className="values-grid">
            {[
              {
                icon: (
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="24" cy="24" r="20"/><path d="M16 24l5 5 11-11"/></svg>
                ),
                title: 'Quality First',
                desc: 'We never cut corners. Every job gets our full attention and best effort because your property deserves nothing less.'
              },
              {
                icon: (
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M24 4v40M4 24h40"/><circle cx="24" cy="24" r="8"/><circle cx="24" cy="24" r="20"/></svg>
                ),
                title: 'Customer Focus',
                desc: 'Your satisfaction is our top priority. We listen to your needs, communicate clearly, and deliver on our promises.'
              },
              {
                icon: (
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4z"/><path d="M14 24l4 8 16-16"/></svg>
                ),
                title: 'Integrity',
                desc: 'We\'re transparent about pricing, honest about what your property needs, and we always do right by our customers.'
              },
              {
                icon: (
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M8 40l6-16L30 8l10 10-16 16L8 40z"/><circle cx="30" cy="18" r="3"/></svg>
                ),
                title: 'Innovation',
                desc: 'We stay current with the latest techniques and technology to deliver the best possible results for every surface type.'
              },
              {
                icon: (
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M24 44s-16-9.6-16-22.4C8 12.88 15.16 6 24 6s16 6.88 16 15.6C40 34.4 24 44 24 44z"/><path d="M20 22l3 3 6-6"/></svg>
                ),
                title: 'Environmental Care',
                desc: 'We use biodegradable, eco-friendly cleaning solutions and responsible water practices to protect the environment.'
              },
              {
                icon: (
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="24" cy="14" r="8"/><path d="M8 42c0-8.84 7.16-16 16-16s16 7.16 16 16"/></svg>
                ),
                title: 'Community',
                desc: 'We\'re a locally owned Colorado business, and we\'re committed to giving back to the communities we serve.'
              }
            ].map((value, i) => (
              <div key={i} className="value-card">
                <div className="value-card__icon">{value.icon}</div>
                <h3 className="value-card__title">{value.title}</h3>
                <p className="value-card__desc">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Avalanche */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="accent-bar"></div>
            <h2>What Sets Us Apart</h2>
            <p>We go above and beyond to deliver an exceptional experience.</p>
          </div>
          <div className="apart-grid">
            <div className="apart-item">
              <span className="apart-item__number">01</span>
              <div>
                <h3>Professional Training</h3>
                <p>Every technician undergoes extensive training on proper techniques, equipment handling, and surface-specific cleaning methods before working on your property.</p>
              </div>
            </div>
            <div className="apart-item">
              <span className="apart-item__number">02</span>
              <div>
                <h3>Premium Equipment</h3>
                <p>We invest in commercial-grade pressure washers, soft wash systems, and surface cleaners that deliver superior results compared to consumer equipment.</p>
              </div>
            </div>
            <div className="apart-item">
              <span className="apart-item__number">03</span>
              <div>
                <h3>Safe Cleaning Methods</h3>
                <p>We match our cleaning method to your surface. Soft wash for delicate areas, pressure wash for tough surfaces. This prevents damage and ensures the best clean.</p>
              </div>
            </div>
            <div className="apart-item">
              <span className="apart-item__number">04</span>
              <div>
                <h3>Fully Licensed & Insured</h3>
                <p>We carry comprehensive liability insurance and are fully licensed. You can have confidence knowing your property is protected throughout the cleaning process.</p>
              </div>
            </div>
            <div className="apart-item">
              <span className="apart-item__number">05</span>
              <div>
                <h3>Satisfaction Guarantee</h3>
                <p>If you're not happy with any aspect of our work, we'll come back and address it at no additional cost. Your satisfaction is non-negotiable.</p>
              </div>
            </div>
            <div className="apart-item">
              <span className="apart-item__number">06</span>
              <div>
                <h3>Transparent Communication</h3>
                <p>From your initial quote to the final walkthrough, we keep you informed every step of the way. No surprises, no hidden fees.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <div className="accent-bar"></div>
            <h2>Serving the Denver Metro Area</h2>
            <p>We proudly provide exterior cleaning services throughout the greater Denver region.</p>
          </div>
          <div className="areas-grid">
            {['Denver', 'Aurora', 'Lakewood', 'Arvada', 'Westminster', 'Thornton', 'Centennial', 'Boulder', 'Littleton', 'Broomfield', 'Parker', 'Castle Rock'].map((area, i) => (
              <div key={i} className="area-tag">
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container cta-section__content">
          <h2>Ready to Work With Us?</h2>
          <p>Get started with a free consultation. We'll assess your property and provide a detailed, no-obligation quote.</p>
          <div className="cta-section__buttons">
            <Link to="/contact" className="btn btn-primary btn-large">Get a Free Quote</Link>
            <a href="tel:7203362152" className="btn btn-outline btn-large">Call (720) 336-2152</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
