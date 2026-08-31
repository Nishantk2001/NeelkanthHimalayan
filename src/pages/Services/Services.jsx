import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader/PageHeader.jsx';
import Reveal from '../../components/Reveal/Reveal.jsx';
import './Services.scss';

const services = [
  { title: 'Guided Treks', copy: 'Multi-day treks led by a local certified guide with a fixed group size and set itinerary.' },
  { title: 'Day Hikes', copy: 'One to three-day hikes near hill stations — perfect for short trips or first-timers.' },
  { title: 'Custom Itineraries', copy: 'Tell us your dates and group size. We build the route, pace and stay plan around it.' },
  { title: 'Permits & Logistics', copy: 'Standalone permit filing for independent travellers who already have a guide sorted.' },
  { title: 'Travel Packages', copy: 'Non-trekking travel across Himachal — road trips, monastery circuits, valley stays.' },
  { title: 'Taxi & Transfers', copy: 'Sedans to Tempo Travellers with verified drivers, for hill roads specifically.' },
];

const tiers = [
  { name: 'Trailhead', price: '₹8,500', unit: 'per person, day hikes', features: ['Local guide', 'Transport from base town', 'Lunch included', 'Group size up to 12'] },
  { name: 'Basecamp', price: '₹22,000', unit: 'per person, 5–7 day trips', features: ['Certified lead + support guide', 'Stay & all meals', 'Permits included', 'Group size up to 10'], featured: true },
  { name: 'Custom', price: 'On request', unit: 'private departures', features: ['Fully custom route', 'Private vehicle', 'Flexible pacing', 'Any group size'] },
];

export default function Services() {
  return (
    <div className="services">
      <PageHeader
        title="Services"
        crumb="Services"
        image="/images/spiti-valley.jpg"
      />

      <section className="service-grid-section">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">What we offer</p>
            <h2>Six ways to get onto the road</h2>
          </Reveal>
          <div className="service-grid">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 4) * 90} className="service-card">
                <span className="service-card__icon" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <h3>{s.title}</h3>
                <p>{s.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Reveal as="section" className="cta-banner">
        <span className="cta-banner__ring" />
        <div className="container cta-banner__inner">
          <div>
            <p className="eyebrow" style={{ color: 'var(--night-slate, #16232F)' }}>Go &amp; discover</p>
            <h2>Get 15% off your next Himachal trip</h2>
            <p>Plan your getaway with NeelKanth Himalayan and save on select packages this season.</p>
            <Link to="/contact" className="btn-outline btn-outline--dark">Contact us</Link>
          </div>
          <div className="cta-banner__badge">15% OFF</div>
        </div>
      </Reveal>

      <section className="pricing">
        <div className="container">
          <Reveal className="section-head section-head--dark">
            <p className="eyebrow" style={{ color: 'var(--marigold, #E2A63D)' }}>Indicative pricing</p>
            <h2>Pick a tier, we'll fit the route to it</h2>
          </Reveal>
          <div className="pricing__grid">
            {tiers.map((t, i) => (
              <Reveal key={t.name} delay={i * 100} className={`price-card ${t.featured ? 'price-card--featured' : ''}`}>
                {t.featured && <span className="price-card__tag">Most booked</span>}
                <h3>{t.name}</h3>
                <p className="price-card__price">{t.price}</p>
                <p className="price-card__unit">{t.unit}</p>
                <ul>
                  {t.features.map((f) => <li key={f}>{f}</li>)}
                </ul>
                <Link to="/contact" className={t.featured ? 'btn-solid' : 'btn-outline btn-outline--dark'}>
                  Ask about this tier
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
