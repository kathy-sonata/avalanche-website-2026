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
          <p>A Denver exterior cleaning company that shows up on time and does the job right.</p>
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
                We started Avalanche Power Clean because we kept hearing the same complaints from Denver homeowners: crews that cancel last minute, harsh chemicals that kill the landscaping, uneven results.
              </p>
              <p>
                So we built the company around fixing those problems. We train our technicians on surface-specific methods. We use biodegradable cleaning agents. We show up when we say we will.
              </p>
              <p>
                We now serve hundreds of residential and commercial clients across the Denver metro area. Soft washing, high-pressure concrete restoration, roof cleaning, windows, gutters. Same standards on a 2,000 sq ft house and a 20,000 sq ft commercial building.
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
            <h2>How We Work</h2>
            <p>The standards we hold ourselves to on each job.</p>
          </div>
          <div className="values-grid">
            {[
              {
                icon: (
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="24" cy="24" r="20"/><path d="M16 24l5 5 11-11"/></svg>
                ),
                title: 'Quality First',
                desc: 'We match the cleaning method to the surface. Soft wash where it matters, high pressure where it\'s safe. No shortcuts.'
              },
              {
                icon: (
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M24 4v40M4 24h40"/><circle cx="24" cy="24" r="8"/><circle cx="24" cy="24" r="20"/></svg>
                ),
                title: 'Customer Focus',
                desc: 'We answer calls, return messages the same day, and walk you through results before we leave.'
              },
              {
                icon: (
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4z"/><path d="M14 24l4 8 16-16"/></svg>
                ),
                title: 'Integrity',
                desc: 'If a service won\'t help your property, we\'ll tell you. The quote you see is the price you pay.'
              },
              {
                icon: (
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M8 40l6-16L30 8l10 10-16 16L8 40z"/><circle cx="30" cy="18" r="3"/></svg>
                ),
                title: 'Better Equipment',
                desc: 'We run commercial-grade hot water units, surface cleaners, and soft wash systems. Consumer-grade gear can\'t match the results.'
              },
              {
                icon: (
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M24 44s-16-9.6-16-22.4C8 12.88 15.16 6 24 6s16 6.88 16 15.6C40 34.4 24 44 24 44z"/><path d="M20 22l3 3 6-6"/></svg>
                ),
                title: 'Environmental Care',
                desc: 'Biodegradable cleaning agents. We pre-wet your plants before we start and rinse them when we finish.'
              },
              {
                icon: (
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="24" cy="14" r="8"/><path d="M8 42c0-8.84 7.16-16 16-16s16 7.16 16 16"/></svg>
                ),
                title: 'Community',
                desc: 'Locally owned in Colorado. We sponsor local events and donate services to neighbors who need help.'
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
            <p>The details that make the difference.</p>
          </div>
          <div className="apart-grid">
            <div className="apart-item">
              <span className="apart-item__number">01</span>
              <div>
                <h3>Professional Training</h3>
                <p>Each technician trains on equipment handling, pressure settings, and surface-specific methods before they touch a customer's property.</p>
              </div>
            </div>
            <div className="apart-item">
              <span className="apart-item__number">02</span>
              <div>
                <h3>Premium Equipment</h3>
                <p>Commercial-grade pressure washers, soft wash systems, and surface cleaners. Consumer equipment can't get the same results.</p>
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
                <p>Full liability insurance and proper licensing. If we damage something, we pay for it.</p>
              </div>
            </div>
            <div className="apart-item">
              <span className="apart-item__number">05</span>
              <div>
                <h3>Satisfaction Guarantee</h3>
                <p>Not happy with the results? We come back and redo it at no charge.</p>
              </div>
            </div>
            <div className="apart-item">
              <span className="apart-item__number">06</span>
              <div>
                <h3>Transparent Communication</h3>
                <p>You get a clear quote upfront, a heads-up before we arrive, and a walkthrough when we finish.</p>
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
            <p>We cover the greater Denver region and surrounding communities.</p>
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
          <h2>Get a Free Quote</h2>
          <p>Send us a few photos or give us a call. We'll have a quote to you within 24 hours.</p>
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
