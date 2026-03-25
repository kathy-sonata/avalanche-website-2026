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
            Denver's premier pressure washing and exterior cleaning company.
            Professional results, every time.
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
            <h2>Our Service Offerings</h2>
            <p>We deliver professional exterior cleaning solutions for residential and commercial properties across the Denver metro area.</p>
          </div>
          <div className="services-grid">
            {[
              {
                image: '/images/service-house.jpeg',
                title: 'House Washing',
                desc: 'Soft wash your home\'s siding, stucco, brick, or vinyl to remove dirt, algae, mold, and mildew without damaging surfaces.'
              },
              {
                image: '/images/truck.webp',
                title: 'Roof Cleaning',
                desc: 'Gentle soft wash treatment that safely removes black streaks, moss, and lichen while preserving your shingles\' integrity.'
              },
              {
                image: '/images/service-concrete.jpg',
                title: 'Concrete & Driveway',
                desc: 'High-pressure surface cleaning for driveways, patios, sidewalks, and pool decks to restore them to like-new condition.'
              },
              {
                image: '/images/service-windows.jpg',
                title: 'Window Cleaning',
                desc: 'Crystal-clear streak-free windows inside and out. We clean frames, screens, and tracks for a complete finish.'
              },
              {
                image: '/images/service-gutter.jpeg',
                title: 'Gutter Cleaning',
                desc: 'Thorough gutter and downspout cleaning to prevent water damage, ice dams, and foundation issues.'
              },
              {
                image: '/images/service-commercial.jpeg',
                title: 'Commercial Cleaning',
                desc: 'Keep your business looking professional with our commercial pressure washing for storefronts, parking lots, and more.'
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
            <h2>Our Results Speak for Themselves</h2>
            <p>See the difference professional cleaning makes — real jobs, real results.</p>
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
            <p>Getting your property cleaned is simple. Here's our straightforward process.</p>
          </div>
          <div className="steps-grid">
            {[
              { step: '01', title: 'Free Consultation', desc: 'Reach out for a free remote or on-site consultation. We\'ll assess your property and provide a detailed quote.' },
              { step: '02', title: 'Custom Plan', desc: 'We create a customized cleaning plan tailored to your property\'s specific needs and surfaces.' },
              { step: '03', title: 'Expert Cleaning', desc: 'Our trained technicians arrive on schedule with professional-grade equipment to deliver exceptional results.' },
              { step: '04', title: 'Final Walkthrough', desc: 'We do a final walkthrough with you to ensure everything meets our high standards and your complete satisfaction.' }
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
            <h2>What Our Customers Say</h2>
            <p>Don't just take our word for it. See what Denver homeowners are saying.</p>
          </div>
          <div className="testimonials-grid">
            {[
              {
                text: 'Avalanche Power Clean transformed my home! The siding looks brand new and the team was incredibly professional. I couldn\'t be happier with the results.',
                name: 'Sarah M.',
                location: 'Lakewood, CO'
              },
              {
                text: 'I\'ve tried other pressure washing companies before, but none compare. They were on time, thorough, and the price was very fair. My driveway hasn\'t looked this good in years.',
                name: 'James R.',
                location: 'Aurora, CO'
              },
              {
                text: 'The roof cleaning was amazing. I didn\'t realize how much those black streaks were affecting my home\'s curb appeal until they were gone. Highly recommend!',
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
            <h2>Why Choose Avalanche Power Clean?</h2>
            <p>We're not just another pressure washing company. Here's what sets us apart.</p>
          </div>
          <div className="why-grid">
            {[
              { title: 'Licensed & Insured', desc: 'Fully licensed and insured for your peace of mind. We protect your property like it\'s our own.', icon: <img src="/images/icon-licensed.png" alt="" /> },
              { title: 'Eco-Friendly Solutions', desc: 'We use biodegradable, environmentally safe cleaning solutions that are tough on grime but gentle on your landscape.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22c4-4 8-7.5 8-12a8 8 0 10-16 0c0 4.5 4 8 8 12z"/><path d="M12 12V6M9 9l3 3 3-3"/></svg> },
              { title: 'Satisfaction Guaranteed', desc: 'If you\'re not 100% satisfied with our work, we\'ll come back and make it right — no questions asked.', icon: <img src="/images/icon-guarantee.png" alt="" /> },
              { title: 'Professional Equipment', desc: 'We invest in commercial-grade equipment and stay up-to-date with the latest cleaning technology.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg> },
              { title: 'Transparent Pricing', desc: 'No hidden fees or surprise charges. You\'ll know exactly what to expect before we start any work.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg> },
              { title: 'Local & Trusted', desc: 'Proudly serving the Denver metro area. We\'re your neighbors and we care about our community.', icon: <img src="/images/icon-family.png" alt="" /> }
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
          <h2>Ready to Transform Your Property?</h2>
          <p>Get a free, no-obligation consultation today. We'll assess your property and provide a custom quote.</p>
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
