import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader/PageHeader.jsx';
import Reveal from '../../components/Reveal/Reveal.jsx';
import { packages } from '../../data.js';
import './Tours.scss';

export default function Tours() {
  return (
    <div className="tours">
      <PageHeader
        title="Tour Packages"
        crumb="Tours"
        image="https://images.unsplash.com/photo-1533130061792-64b345e4a833?q=80&w=1600&auto=format&fit=crop"
      />

      <section className="tours-list">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Popular packages</p>
            <h2>Six ways to see Himachal</h2>
          </Reveal>
          <div className="tours-grid">
            {packages.map((p, i) => (
              <Reveal key={p.name} delay={(i % 3) * 100} className="tour-card">
                <div className="tour-card__img" style={{ backgroundImage: `url(${p.img})` }}>
                  <span className="tour-card__tag">{p.tag}</span>
                </div>
                <div className="tour-card__body">
                  <div className="tour-card__head">
                    <h3>{p.name}</h3>
                    <span>{p.days}</span>
                  </div>
                  <p>{p.copy}</p>
                  <Link to="/contact" className="btn-outline">Enquire about this trip</Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Reveal as="section" className="tours-cta">
        <div className="container tours-cta__inner">
          <div>
            <p className="eyebrow" style={{ color: 'var(--marigold, #E2A63D)' }}>Don't see your route?</p>
            <h2>We build fully custom itineraries too</h2>
          </div>
          <Link to="/contact" className="btn-solid">Ask for a custom plan</Link>
        </div>
      </Reveal>
    </div>
  );
}
