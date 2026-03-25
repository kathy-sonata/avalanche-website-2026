import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__overlay"></div>
        <div className="container hero__content">
          <h1 className="hero__title">
            One Team. The Best Clean.<br />
            <span className="hero__title-accent">We Make It Simple.</span>
          </h1>
          <p className="hero__subtitle">
            Pressure washing and exterior cleaning for homes and businesses across Denver.
          </p>
          <div className="hero__buttons">
            <Link to="/contact" className="btn btn-primary btn-large">
              Get My Free Remote Consultation
            </Link>
            <a href="tel:7203362152" className="btn btn-outline btn-large">
              Call (720) 336-2152
            </a>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="trust-bar">
        <div className="container">
          <div className="trust-bar__grid">
            <div className="trust-bar__item">
              <span className="trust-bar__number">500+</span>
              <span className="trust-bar__label">Happy Customers</span>
            </div>
            <div className="trust-bar__item">
              <span className="trust-bar__number">5-Star</span>
              <span className="trust-bar__label">Google Rating</span>
            </div>
            <div className="trust-bar__item">
              <span className="trust-bar__number">100%</span>
              <span className="trust-bar__label">Satisfaction Guaranteed</span>
            </div>
            <div className="trust-bar__item">
              <span className="trust-bar__number">Licensed</span>
              <span className="trust-bar__label">& Fully Insured</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="accent-bar"></div>
            <h2>What We Do</h2>
            <p>Exterior cleaning for homes and commercial properties in the Denver metro area.</p>
          </div>
          <div className="services-grid">
            {[
              {
                image: '/images/service-house.jpeg',
                title: 'House Washing',
                desc: 'We soft wash siding, stucco, brick, and vinyl to strip away dirt, algae, mold, and mildew. No surface damage.'
              },
              {
                image: '/images/truck.webp',
                title: 'Roof Cleaning',
                desc: 'Low-pressure soft wash that removes black streaks, moss, and lichen without harming your shingles.'
              },
              {
                image: '/images/service-concrete.jpg',
                title: 'Concrete & Driveway',
                desc: 'High-pressure surface cleaning for driveways, patios, sidewalks, and pool decks. We bring them back to original condition.'
              },
              {
                image: '/images/service-windows.jpg',
                title: 'Window Cleaning',
                desc: 'Streak-free windows inside and out. We clean frames, screens, and tracks too.'
              },
              {
                image: '/images/service-gutter.jpeg',
                title: 'Gutter Cleaning',
                desc: 'Thorough gutter and downspout cleaning to prevent water damage, ice dams, and foundation issues.'
              },
              {
                image: '/images/service-commercial.jpeg',
                title: 'Commercial Cleaning',
                desc: 'Storefronts, parking lots, sidewalks, and building facades. We keep your business clean.'
              }
            ].map((service, i) => (
              <div key={i} className="service-card">
                <div className="service-card__image">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="service-card__content">
                  <h3 className="service-card__title">{service.title}</h3>
                  <p className="service-card__desc">{service.desc}</p>
                  <Link to="/services" className="service-card__link">
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Results */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <div className="accent-bar"></div>
            <h2>Before and After</h2>
            <p>Recent jobs from around Denver.</p>
          </div>
          <div className="results-grid">
            {[
              { src: '/images/before-after-storefront.jpg', alt: 'Storefront pressure washing before and after' },
              { src: '/images/before-after-wall.jpg', alt: 'Brick wall cleaning before and after' },
              { src: '/images/before-after-walkway.jpg', alt: 'Walkway pressure washing before and after' },
              { src: '/images/before-after-fence.png', alt: 'Fence cleaning before and after' },
              { src: '/images/before-after-deck.png', alt: 'Deck cleaning before and after' },
              { src: '/images/before-after-dumpster.jpg', alt: 'Dumpster area cleaning before and after' },
            ].map((item, i) => (
              <div key={i} className="result-card">
                <img src={item.src} alt={item.alt} className="result-card__image" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <div className="accent-bar"></div>
            <h2>How It Works</h2>
            <p>Four steps from first call to finished job.</p>
          </div>
          <div className="steps-grid">
            {[
              { step: '01', title: 'Free Consultation', desc: 'Call us or fill out the form. We assess your property and send a detailed quote.' },
              { step: '02', title: 'Custom Plan', desc: 'We build a cleaning plan matched to your surfaces and property.' },
              { step: '03', title: 'We Clean', desc: 'Our technicians show up on time with commercial-grade equipment and get to work.' },
              { step: '04', title: 'Final Walkthrough', desc: 'We walk through the results with you before we leave. If something\'s off, we fix it.' }
            ].map((item, i) => (
              <div key={i} className="step-card">
                <span className="step-card__number">{item.step}</span>
                <h3 className="step-card__title">{item.title}</h3>
                <p className="step-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="accent-bar"></div>
            <h2>Customer Reviews</h2>
            <p>From Denver homeowners who hired us.</p>
          </div>
          <div className="testimonials-grid">
            {[
              {
                text: 'The siding looks brand new. The crew was professional and finished in half a day. I\'ve already recommended them to two neighbors.',
                name: 'Sarah M.',
                location: 'Lakewood, CO'
              },
              {
                text: 'On time, thorough, fair price. My driveway hasn\'t looked this good in years. I\'ll be calling them back for the patio next spring.',
                name: 'James R.',
                location: 'Aurora, CO'
              },
              {
                text: 'I didn\'t realize how bad the black streaks on my roof were until they were gone. The whole house looks different now.',
                name: 'Linda K.',
                location: 'Arvada, CO'
              }
            ].map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="testimonial-card__stars">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} viewBox="0 0 24 24" fill="#f5a623" width="20" height="20"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  ))}
                </div>
                <p className="testimonial-card__text">"{t.text}"</p>
                <div className="testimonial-card__author">
                  <span className="testimonial-card__name">{t.name}</span>
                  <span className="testimonial-card__location">{t.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <div className="accent-bar"></div>
            <h2>Why Avalanche</h2>
            <p>What you get when you hire us.</p>
          </div>
          <div className="why-grid">
            {[
              { title: 'Licensed & Insured', desc: 'Full liability coverage. If something goes wrong, we cover it.', icon: <img src="/images/icon-licensed.png" alt="" /> },
              { title: 'Eco-Friendly Solutions', desc: 'Biodegradable cleaning agents that remove grime without killing your plants.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22c4-4 8-7.5 8-12a8 8 0 10-16 0c0 4.5 4 8 8 12z"/><path d="M12 12V6M9 9l3 3 3-3"/></svg> },
              { title: 'Satisfaction Guaranteed', desc: 'Not happy with the result? We come back and redo it. No charge.', icon: <img src="/images/icon-guarantee.png" alt="" /> },
              { title: 'Commercial-Grade Equipment', desc: 'Hot water units, surface cleaners, and soft wash rigs. The same gear the pros use.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg> },
              { title: 'Transparent Pricing', desc: 'You see the full price before we start. No add-ons, no surprises.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg> },
              { title: 'Denver-Based', desc: 'We live and work in the metro area. You\'re hiring your neighbors.', icon: <img src="/images/icon-family.png" alt="" /> }
            ].map((item, i) => (
              <div key={i} className="why-card">
                <div className="why-card__icon">
                  {item.icon}
                </div>
                <h3 className="why-card__title">{item.title}</h3>
                <p className="why-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container cta-section__content">
          <h2>Get a Free Quote</h2>
          <p>Tell us what you need cleaned. We'll send a quote within 24 hours.</p>
          <div className="cta-section__buttons">
            <Link to="/contact" className="btn btn-primary btn-large">
              Get My Free Consultation
            </Link>
            <a href="tel:7203362152" className="btn btn-outline btn-large">
              Call Now: (720) 336-2152
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
