import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const services = [
  {
    id: 'house-washing',
    title: 'House Washing',
    tagline: 'Restore your home\'s curb appeal',
    description: 'Our professional soft wash system gently removes years of built-up dirt, algae, mold, mildew, and pollutants from your home\'s exterior without damaging siding, paint, or surfaces.',
    features: [
      'Safe for vinyl, wood, stucco, brick, and fiber cement',
      'Low-pressure soft wash technique prevents surface damage',
      'Biodegradable, eco-friendly cleaning solutions',
      'Kills mold and algae at the root to prevent quick regrowth',
      'Protects your landscaping throughout the process',
      'Results that last 2-3 years with proper maintenance'
    ],
    image: '/images/service-house.jpeg'
  },
  {
    id: 'roof-cleaning',
    title: 'Roof Cleaning',
    tagline: 'Protect your biggest investment',
    description: 'Those dark streaks on your roof aren\'t just unsightly — they\'re caused by algae (Gloeocapsa magma) that feeds on your shingles. Our soft wash treatment safely eliminates them and extends your roof\'s lifespan.',
    features: [
      'Removes black streaks, moss, lichen, and algae',
      'Low-pressure application — zero risk to your shingles',
      'Approved by shingle manufacturers (won\'t void warranty)',
      'Extends roof lifespan by years',
      'Improves energy efficiency by restoring reflectivity',
      'Prevents premature roof replacement'
    ],
    image: '/images/hero-bg.jpg'
  },
  {
    id: 'concrete-cleaning',
    title: 'Concrete & Driveway Cleaning',
    tagline: 'Make your hardscapes look brand new',
    description: 'Driveways, patios, sidewalks, and pool decks take a beating from weather, traffic, and organic growth. Our high-pressure surface cleaning system removes embedded grime, oil stains, and discoloration.',
    features: [
      'Uniform, streak-free cleaning with surface cleaners',
      'Removes oil stains, tire marks, and rust',
      'Eliminates slippery algae and mold growth',
      'Safe for concrete, pavers, flagstone, and stamped concrete',
      'Optional sealing available for long-lasting protection',
      'Restores original color and appearance'
    ],
    image: '/images/service-concrete.jpg'
  },
  {
    id: 'window-cleaning',
    title: 'Window Cleaning',
    tagline: 'Crystal-clear views, inside and out',
    description: 'Professional window cleaning makes a dramatic difference in how your home looks and feels. We clean your windows, frames, screens, and tracks for a comprehensive, streak-free finish.',
    features: [
      'Interior and exterior window cleaning',
      'Screen removal, cleaning, and reinstallation',
      'Window frame and track cleaning included',
      'Streak-free, spot-free finish guaranteed',
      'Safe techniques for all window types and heights',
      'Hard water stain removal available'
    ],
    image: '/images/service-windows.jpg'
  },
  {
    id: 'gutter-cleaning',
    title: 'Gutter Cleaning',
    tagline: 'Prevent costly water damage',
    description: 'Clogged gutters lead to water damage, foundation issues, ice dams, and pest infestations. Our thorough gutter cleaning service removes all debris and ensures proper drainage.',
    features: [
      'Complete debris removal from gutters and downspouts',
      'Downspout flush to ensure proper drainage',
      'Gutter exterior cleaning (brightening) available',
      'Minor gutter repair and reattachment',
      'Before and after photos provided',
      'Prevents ice dams, water damage, and foundation issues'
    ],
    image: '/images/service-gutter.jpeg'
  },
  {
    id: 'commercial-cleaning',
    title: 'Commercial Pressure Washing',
    tagline: 'Keep your business looking professional',
    description: 'First impressions matter. Our commercial pressure washing services keep your building, parking lot, sidewalks, and drive-throughs clean and inviting for customers and employees.',
    features: [
      'Storefronts, buildings, and facade cleaning',
      'Parking lot and garage cleaning',
      'Sidewalk and entrance cleaning',
      'Drive-through lane cleaning',
      'Dumpster pad cleaning and degreasing',
      'Flexible scheduling including nights and weekends'
    ],
    image: '/images/service-commercial.jpeg'
  },
  {
    id: 'deck-fence',
    title: 'Deck & Fence Cleaning',
    tagline: 'Revitalize your outdoor living spaces',
    description: 'Wood and composite decks, fences, and pergolas accumulate dirt, mildew, and gray weathering over time. We restore them to their natural beauty with appropriate cleaning methods.',
    features: [
      'Safe for wood, composite, and vinyl surfaces',
      'Removes gray weathering, mildew, and stains',
      'Adjustable pressure for different materials',
      'Deck staining and sealing services available',
      'Fence brightening and restoration',
      'Extends the life of your outdoor structures'
    ],
    image: '/images/before-after-fence.png'
  },
  {
    id: 'fleet-equipment',
    title: 'Fleet & Equipment Washing',
    tagline: 'Keep your fleet looking sharp',
    description: 'Clean vehicles and equipment project professionalism and protect your investment. We offer on-site fleet washing for trucks, trailers, heavy equipment, and more.',
    features: [
      'On-site service at your location',
      'Trucks, trailers, vans, and heavy equipment',
      'Degreasing for engines and undercarriages',
      'DOT-ready cleaning for inspections',
      'Scheduled recurring service plans available',
      'Environmentally compliant water reclamation'
    ],
    image: '/images/truck.webp'
  }
];

function Services() {
  return (
    <div className="services-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container page-hero__content">
          <div className="accent-bar"></div>
          <h1>Our Service Offerings</h1>
          <p>Professional exterior cleaning solutions for every surface. We use the right methods and equipment for every job.</p>
        </div>
      </section>

      {/* Services List */}
      <section className="section">
        <div className="container">
          <div className="services-list">
            {services.map((service, i) => (
              <div key={service.id} id={service.id} className={`service-detail ${i % 2 !== 0 ? 'service-detail--reversed' : ''}`}>
                <div className="service-detail__image-wrap">
                  <img src={service.image} alt={service.title} className="service-detail__image" />
                </div>
                <div className="service-detail__content">
                  <span className="service-detail__tagline">{service.tagline}</span>
                  <h2 className="service-detail__title">{service.title}</h2>
                  <p className="service-detail__desc">{service.description}</p>
                  <ul className="service-detail__features">
                    {service.features.map((feature, j) => (
                      <li key={j}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="18" height="18"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="btn btn-primary">Get a Free Quote</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Info */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <div className="accent-bar"></div>
            <h2>Transparent Pricing</h2>
            <p>Every property is unique, so we provide custom quotes based on your specific needs. Here's what influences pricing.</p>
          </div>
          <div className="pricing-factors">
            {[
              { title: 'Property Size', desc: 'Square footage of the area to be cleaned' },
              { title: 'Surface Type', desc: 'Different surfaces require different methods' },
              { title: 'Level of Buildup', desc: 'Heavy staining may require additional treatment' },
              { title: 'Accessibility', desc: 'Height, obstacles, and terrain considerations' },
              { title: 'Service Combination', desc: 'Bundle multiple services and save' },
              { title: 'Frequency', desc: 'Recurring service plans get preferred pricing' }
            ].map((factor, i) => (
              <div key={i} className="pricing-factor">
                <h3>{factor.title}</h3>
                <p>{factor.desc}</p>
              </div>
            ))}
          </div>
          <div className="pricing-cta">
            <p>Want an exact price? We offer <strong>free remote consultations</strong> — just send us a few photos and we'll get you a quote within 24 hours.</p>
            <Link to="/contact" className="btn btn-primary btn-large">Get Your Free Quote</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container cta-section__content">
          <h2>Let's Get Your Property Looking Its Best</h2>
          <p>Contact us today for a free, no-obligation consultation and custom quote.</p>
          <div className="cta-section__buttons">
            <Link to="/contact" className="btn btn-primary btn-large">Schedule a Consultation</Link>
            <a href="tel:7203362152" className="btn btn-outline btn-large">Call (720) 336-2152</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
